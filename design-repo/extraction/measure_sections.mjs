// measure_sections.mjs: (re-)measures extraction/measured-values.json `sectionHeights` on a RUNNING build of the clone.
//
// Build + serve the clone first (project root, any scratch folder outside the repo):
//   npm ci && npx vite build --outDir <scratch>/dist && npx vite preview --outDir <scratch>/dist --port <port>
// Then:
//   NODE_PATH="$(npm root -g)" node design-repo/extraction/measure_sections.mjs http://localhost:<port> [--write]
//
// Every ledger section entry carries a `locator`: `selector` (the component root, [data-clone-section="<Component>"]),
// optional `child` (a CSS selector inside it, `nth` match), optional `boundary` + `part` + `parts` (heading-bounded part
// of a rich-text body: the element's children are split before each child that is, or starts with, the boundary heading;
// the same rule the JSX citations use). Viewport is pinned to 1440 x 900. Playwright is resolved from NODE_PATH (or
// PLAYWRIGHT_MODULE); no absolute path lives in this repo. Without --write it only prints differences (> 2px) against the
// recorded heights; with --write it rewrites sectionHeights.
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MV = path.join(HERE, 'measured-values.json');
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.argv[2];
const write = process.argv.includes('--write');
if (!base) { console.error('usage: node extraction/measure_sections.mjs <baseUrl> [--write]'); process.exit(2); }

const VIEWPORT = { width: 1440, height: 900 };
const mv = JSON.parse(fs.readFileSync(MV, 'utf8'));
const old = mv.sectionHeights || { routes: {} };
const out = { viewport: VIEWPORT, measuredOn: 'the built clone (vite build + vite preview), 1440 x 900, networkidle + 1.5s settle', tool: 'extraction/measure_sections.mjs', measuredAt: new Date().toISOString().slice(0, 10), routes: {}, templates: {} };
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: VIEWPORT });
let drift = 0, missing = 0;
for (const r of mv.routes) {
  await page.goto(base + r.route, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(1500);
  const res = await page.evaluate((secs) => {
    const box = (el) => { const b = el.getBoundingClientRect(); return { top: b.top + scrollY, bottom: b.bottom + scrollY }; };
    const isB = (c, tag) => tag && (c.tagName.toLowerCase() === tag || (c.firstElementChild && c.firstElementChild.tagName.toLowerCase() === tag));
    return { docH: document.documentElement.scrollHeight, nodes: secs.map((s) => {
      const L = s.locator || {};
      const root = document.querySelector(L.selector);
      if (!root) return null;
      let el = root;
      if (L.child) { el = root.querySelectorAll(L.child)[L.nth || 0]; if (!el) return null; }
      const cs = getComputedStyle(el);
      const flow = !(cs.position === 'fixed' || cs.position === 'absolute' || cs.display === 'none');
      const a = box(el);
      if (L.part !== undefined) {
        const kids = [...el.children];
        const starts = [];
        kids.forEach((c, i) => { if (i === 0 || isB(c, L.boundary)) starts.push(i); });
        if (starts.length !== L.parts) return { error: `dom has ${starts.length} parts, ledger ${L.parts}` };
        const top = L.part === 0 ? a.top : box(kids[starts[L.part]]).top;
        const bottom = L.part + 1 < starts.length ? box(kids[starts[L.part + 1]]).top : a.bottom;
        return { top: Math.round(top), h: Math.round(bottom - top), flow };
      }
      return { top: Math.round(a.top), h: Math.round(a.bottom - a.top), flow };
    }) };
  }, r.sections);
  const prev = old.routes && old.routes[r.route];
  const rec = { template: r.template, documentHeightPx: res.docH, nodes: [] };
  r.sections.forEach((s, i) => {
    const m = res.nodes[i];
    if (!m || m.error) { missing++; console.log(`MISSING ${r.route} #${i} ${s.id}${m && m.error ? ': ' + m.error : ''}`); rec.nodes.push({ idx: i, section: s.id, heightPx: null }); return; }
    const inFlow = s.inFlow === false ? false : m.flow;
    rec.nodes.push({ idx: i, section: s.id, heightPx: m.h, topPx: m.top, inFlow });
    const p = prev && prev.nodes && prev.nodes[i];
    if (p && p.heightPx != null && Math.abs(p.heightPx - m.h) > 2) { drift++; console.log(`DRIFT ${r.route} #${i} ${s.id} ${p.heightPx} -> ${m.h}`); }
  });
  out.routes[r.route] = rec;
  if (!out.templates[r.template]) out.templates[r.template] = { representativeRoute: r.route };
}
await browser.close();
if (write) { mv.sectionHeights = out; fs.writeFileSync(MV, JSON.stringify(mv, null, 1) + '\n'); console.log('measured-values.json sectionHeights written'); }
console.log(`${Object.keys(out.routes).length} routes measured; ${missing} missing node(s); ${drift} difference(s) vs the recorded heights`);
process.exit(missing ? 1 : 0);
