// Port of webflow-assets.owner.com/3.2.63/owner-animations.js (loaded on /, /our-story, /d and 10 other routes).
// Pieces with no element in the clone (#hero-phone, #ratings-row1..3, .rcard) are ported anyway; they no-op.
// The script's own data-reveal block is NOT run: the live page has no [data-reveal] elements — the clone's
// data-reveal attributes were added by the builder and are handled by usePageChrome.
import { gsap, ScrollTrigger, injectStyle } from "./env.js";
import STAR_PATHS from "./starPaths.js";

const P = { heroParallax: 0.1, featPanelDur: 380, featExitPct: 0.45, featTextSlide: 80, featVisualSlide: 44, featEasing: "cubic-bezier(0.16,1,0.3,1)", ratingsSpeed1: 0.15, ratingsSpeed2: 0.15, ratingsSpeed3: 0.15, rcardShineOpacity: 0, ratingsScrollMultiplier: 0.05, ratingsScrollMax: 4, ratingsScrollDecay: 0.92 };
const HERO = { trailLength: 320, duration: 7700, stagger: 320, glowAlpha: 0.428, trailOpacity: 0.31, repeats: 2 };
const RATINGS = { trailLength: 260, duration: 14100, stagger: 560, glowAlpha: 0.32, trailOpacity: 0.22, repeats: 3 };
const SAMPLES = 200;
const DESKTOP = 992;


const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const envelope = (x) => smooth(0, 0.1, x) * (1 - smooth(0.55, 1, x));
const easeInOutQuad = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function at(s, t) {
  const b = clamp(t, 0, 1) * SAMPLES, i = Math.min(Math.floor(b), SAMPLES - 1), f = b - i;
  return { x: s[i * 2] * (1 - f) + s[(i + 1) * 2] * f, y: s[i * 2 + 1] * (1 - f) + s[(i + 1) * 2 + 1] * f };
}

// m(canvas, observed, params): sample every path (one per frame), then draw two comet trails per path per repeat,
// eased in/out (quad) from the bottom point to the top point on both sides; paused while off screen.
function trails(canvas, box, h, paths) {
  let dead = false, ro = null, io = null, raf = 0;
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;width:0;height:0";
  document.body.appendChild(svg);
  const sampled = [];
  let idx = 0;
  function sampleNext() {
    if (dead) { svg.remove(); return; }
    if (idx >= paths.length) { svg.remove(); start(); return; }
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", paths[idx++]);
    svg.appendChild(p);
    const len = p.getTotalLength();
    let minY = Infinity, topLen = 0;
    for (let x = 0; x <= 100; x++) { const l = (x / 100) * len, { y } = p.getPointAtLength(l); if (y < minY) { minY = y; topLen = l; } }
    const s = new Float32Array((SAMPLES + 1) * 2);
    for (let x = 0; x <= SAMPLES; x++) { const pt = p.getPointAtLength((x / SAMPLES) * len); s[x * 2] = pt.x; s[x * 2 + 1] = pt.y; }
    p.remove();
    sampled.push({ len, topLen, samples: s });
    raf = requestAnimationFrame(sampleNext);
  }
  raf = requestAnimationFrame(sampleNext);

  function start() {
    if (dead) return;
    const g = canvas.getContext("2d");
    let sx = 1, sy = 1, ox = 0;
    function size() {
      const r = box.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(r.width * dpr); canvas.height = Math.round(r.height * dpr);
      canvas.style.width = r.width + "px"; canvas.style.height = r.height + "px";
      const k = Math.max(canvas.width / 1400, canvas.height / 760);
      sx = k; sy = k; ox = (canvas.width - 1400 * k) / 2;
    }
    size();
    ro = new ResizeObserver(size); ro.observe(box);
    function stroke(s, len, topLen, head, up) {
      const span = up ? topLen : len - topLen, fade = smooth(0, span * 0.4, Math.abs(head - topLen));
      const seg = (alpha) => {
        for (let k = 0; k < 50; k++) {
          const a = k / 50, b = (k + 1) / 50;
          const la = clamp(up ? head - a * h.trailLength : head + a * h.trailLength, 0, len);
          const lb = clamp(up ? head - b * h.trailLength : head + b * h.trailLength, 0, len);
          const A = at(s, la / len), B = at(s, lb / len);
          g.globalAlpha = envelope(a) * fade * alpha;
          g.beginPath(); g.moveTo(A.x * sx + ox, A.y * sy); g.lineTo(B.x * sx + ox, B.y * sy); g.stroke();
        }
      };
      g.lineWidth = 2.5 * sx; g.shadowBlur = 0; g.shadowColor = "white"; g.strokeStyle = "white";
      seg(h.glowAlpha);
      g.lineWidth = 1.5 * sx;
      seg(h.trailOpacity);
      g.globalAlpha = 1;
    }
    let t0 = null, pausedAt = null, visible = true;
    io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; }, { threshold: 0 });
    io.observe(box);
    function frame(now) {
      if (dead) return;
      if (!visible) { pausedAt = now; raf = requestAnimationFrame(frame); return; }
      if (pausedAt !== null) { t0 += now - pausedAt; pausedAt = null; }
      if (!t0) t0 = now;
      g.clearRect(0, 0, canvas.width, canvas.height);
      const reps = Math.max(1, Math.round(h.repeats || 1));
      sampled.forEach(({ samples, len, topLen }, q) => {
        const off = ((paths.length - 1 - q) * h.stagger) / h.duration;
        for (let z = 0; z < reps; z++) {
          const e = easeInOutQuad(((now - t0) / h.duration + off + z / reps) % 1);
          stroke(samples, len, topLen, e * topLen, true);
          stroke(samples, len, topLen, len - e * (len - topLen), false);
        }
      });
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
  }
  return {
    destroy() {
      dead = true; cancelAnimationFrame(raf); svg.remove();
      ro && ro.disconnect(); io && io.disconnect();
      const g = canvas.getContext("2d"); g && g.clearRect(0, 0, canvas.width, canvas.height);
    },
  };
}

function heroTrails(env) {
  const scene = document.getElementById("hero-scene");
  let ratingsCanvas = document.getElementById("ratings-canvas");
  const ratingsSection = ratingsCanvas ? ratingsCanvas.closest("section") : null;
  // The builder replaced this empty <canvas> with a same-sized <div data-still-empty>. Mount a real canvas in its
  // place (same classes) and let the placeholder drop out of layout.
  if (ratingsCanvas && !(ratingsCanvas instanceof HTMLCanvasElement)) {
    const holder = ratingsCanvas, prevStyle = holder.getAttribute("style");
    const cv = document.createElement("canvas");
    cv.className = holder.className;
    holder.style.display = "contents";
    holder.appendChild(cv);
    env.add(() => { cv.remove(); prevStyle === null ? holder.removeAttribute("style") : holder.setAttribute("style", prevStyle); });
    ratingsCanvas = cv;
  }
  const paths = STAR_PATHS;
  if (!scene && !ratingsCanvas) return;
  let hero = null, ratings = null, heroCanvas = null;
  const create = () => {
    if (scene && !hero) {
      if (!heroCanvas) { heroCanvas = document.createElement("canvas"); heroCanvas.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:2"; scene.appendChild(heroCanvas); }
      hero = trails(heroCanvas, scene, HERO, paths);
    }
    if (ratingsCanvas && ratingsSection && !ratings) ratings = trails(ratingsCanvas, ratingsSection, RATINGS, paths);
  };
  const destroy = () => { hero && (hero.destroy(), (hero = null)); ratings && (ratings.destroy(), (ratings = null)); };
  // Original: on window "load", desktop only, after 2s. In the SPA the document has usually loaded already.
  if (window.innerWidth >= DESKTOP) {
    const go = () => env.timeout(create, 2000);
    document.readyState === "complete" ? go() : env.on(window, "load", go, { once: true });
  }
  let lastW = window.innerWidth;
  env.on(window, "resize", () => {
    const w = window.innerWidth;
    if (w === lastW) return;
    lastW = w;
    if (w >= DESKTOP && !hero) create(); else if (w < DESKTOP) destroy();
  });
  env.add(() => { destroy(); heroCanvas && heroCanvas.remove(); });
}

function heroPhone(env) {
  const el = document.getElementById("hero-phone");
  if (!el) return;
  el.style.opacity = "0"; el.style.transform = "translateY(80px)";
  const t0 = performance.now(), dur = 900;
  env.raf((t) => {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3), par = window.scrollY * P.heroParallax;
    el.style.opacity = e; el.style.transform = `translateY(${80 * (1 - e) + par}px)`;
    if (p >= 1) { el.dataset.entryDone = "1"; return false; }
  });
  env.on(window, "scroll", () => { if (el.dataset.entryDone) el.style.transform = `translateY(${window.scrollY * P.heroParallax}px)`; }, { passive: true });
  env.add(() => { el.style.opacity = ""; el.style.transform = ""; delete el.dataset.entryDone; });
}

// [data-stars-reveal]: width 0 -> 86.4px over 1200ms, easeOutCubic; on load, or when its section is 30% in view
// if data-stars-scroll is set.
function starsReveal(env) {
  document.querySelectorAll("[data-stars-reveal]").forEach((el) => {
    const full = 86.39999999999999, dur = 1200;
    el.style.width = "0px";
    const run = () => {
      const t0 = performance.now();
      env.raf((t) => {
        const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.style.width = full * e + "px";
        if (p >= 1) { el.style.width = full + "px"; return false; }
      });
    };
    if (el.hasAttribute("data-stars-scroll")) {
      let done = false;
      const io = env.observer(new IntersectionObserver((e) => { if (e[0].isIntersecting && !done) { done = true; io.disconnect(); run(); } }, { threshold: 0.3 }));
      io.observe(el.closest("section") || el);
    } else run();
    env.add(() => { el.style.width = ""; });
  });
}

// #grow-cards: duplicate the cards (aria-hidden), CSS marquee 60s linear infinite to -50%, paused on hover and
// off screen; first touch converts to native scroll; desktop: each card's .stories-item_bg-img parallaxes on
// gsap.ticker by (cardCenter/vw - 0.5) * -(imgWidth - cardWidth).
function growCards(env) {
  const list = document.getElementById("grow-cards");
  if (!list) return;
  const originals = Array.from(list.children);
  const added = [document.createComment(" Duplicates for seamless loop ")];
  list.appendChild(added[0]);
  originals.forEach((c) => { const d = c.cloneNode(true); d.setAttribute("aria-hidden", "true"); list.appendChild(d); added.push(d); });
  injectStyle(env, "@keyframes grow-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } #grow-cards { animation: grow-marquee 60s linear infinite; }", "grow-cards");
  let hover = false, vis = true;
  const apply = () => { list.style.animationPlayState = vis && !hover ? "running" : "paused"; };
  env.on(list, "mouseenter", () => { hover = true; apply(); });
  env.on(list, "mouseleave", () => { hover = false; apply(); });
  env.observer(new IntersectionObserver((e) => { vis = e[0].isIntersecting; apply(); }, { threshold: 0 })).observe(list);
  const parent = list.parentElement;
  env.on(list, "touchstart", () => {
    const tr = window.getComputedStyle(list).transform;
    let x = 0;
    if (tr && tr !== "none") { const m = tr.match(/matrix.*\((.+)\)/); if (m) x = Math.abs(parseFloat(m[1].split(",")[4])); }
    const cont = document.querySelector(".container-large"), pad = cont ? window.getComputedStyle(cont).paddingLeft : "0px";
    if (parent) { parent.style.width = "100vw"; parent.style.marginLeft = "-" + pad; parent.style.paddingLeft = pad; parent.style.overflowX = "auto"; }
    list.style.animation = "none"; list.style.transform = "none";
    list.querySelectorAll('[aria-hidden="true"]').forEach((c) => c.remove());
    if (parent) parent.scrollLeft = Math.min(x, list.scrollWidth - parent.clientWidth);
  }, { once: true, passive: true });
  if (window.innerWidth >= DESKTOP) {
    let inView = true;
    env.observer(new IntersectionObserver((e) => { inView = e[0].isIntersecting; }, { threshold: 0 })).observe(list);
    list.querySelectorAll(".stories-list_card").forEach((card) => {
      const img = card.querySelector(".stories-item_bg-img");
      if (!img) return;
      const setX = gsap.quickSetter(img, "x", "px");
      env.ticker(() => {
        if (!inView) return;
        const r = card.getBoundingClientRect(), cx = r.left + r.width / 2, k = img.offsetWidth - r.width;
        setX((cx / window.innerWidth - 0.5) * -k);
      });
    });
  }
  env.add(() => {
    added.forEach((n) => n.remove());
    list.style.animation = ""; list.style.animationPlayState = ""; list.style.transform = "";
    if (parent) { parent.style.width = ""; parent.style.marginLeft = ""; parent.style.paddingLeft = ""; parent.style.overflowX = ""; }
  });
}

// Feature tabs (.owner-stack-menu_item / .owner-stack-tabs_item): autoplay 5s per tab (or lottie duration +700ms),
// --tab-progress 0..1 on the active menu item, starts when [data-tabs-autoplay] is 30% in view; switching:
// exit 380*0.45=171ms (content x ±80px, visual x ±44px, opacity 0) then enter 209ms back to 0, both
// cubic-bezier(0.16,1,0.3,1). <=991px: menu becomes a translateX(-i*100%) strip + prev/next arrows, dots and
// 50px swipe.
function stackTabs(env) {
  const menu = document.querySelectorAll(".owner-stack-menu_item");
  const tabs = document.querySelectorAll(".owner-stack-tabs_item");
  if (!menu.length || !tabs.length) return;
  let s = 0, dur = 5000, t0 = null, raf = 0, started = false, busy = false, mobile = false, inView = false;
  const timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const lottieDur = (tab) => { const l = tab.querySelector('[data-animation-type="lottie"]'); if (l) { const f = parseFloat(l.dataset.duration); if (!isNaN(f) && f > 0) return Math.round(f * 1000) + 700; } return 5000; };
  const pokeLottie = (tab) => { const l = tab.querySelector('[data-animation-type="lottie"]'); l && l.click(); };
  const parts = (tab) => [[tab.querySelector(".owner-stack-tabs_content"), P.featTextSlide], [tab.querySelector(".owner-stack-tabs_visual"), P.featVisualSlide]];
  const exit = (tab, dir, ms, ease) => parts(tab).forEach(([el, d]) => { if (!el) return; el.style.transition = `opacity ${ms}ms ${ease}, transform ${ms}ms ${ease}`; el.style.opacity = "0"; el.style.transform = `translateX(${dir * d}px)`; });
  const enter = (tab, dir, ms, ease) => parts(tab).forEach(([el, d]) => {
    if (!el) return;
    el.style.transition = "none"; el.style.opacity = "0"; el.style.transform = `translateX(${-dir * d}px)`;
    void el.offsetWidth;
    el.style.transition = `opacity ${ms}ms ${ease}, transform ${ms}ms ${ease}`; el.style.opacity = "1"; el.style.transform = "translateX(0)";
  });
  function go(n, reset) {
    if (busy) return;
    busy = true;
    const prev = s, dir = (n === 0 && prev === menu.length - 1) || n > prev ? 1 : -1;
    const out = P.featPanelDur * P.featExitPct, inn = P.featPanelDur * (1 - P.featExitPct), ease = P.featEasing;
    menu.forEach((m, j) => { m.dataset.state = j === n ? "active" : ""; m.style.removeProperty("--tab-progress"); });
    const leaving = tabs[prev];
    pokeLottie(leaving);
    leaving.dataset.tabState = "leaving";
    exit(leaving, dir, out, ease);
    later(() => {
      leaving.dataset.tabState = "";
      tabs[n].dataset.tabState = "active";
      enter(tabs[n], dir, inn, ease);
      later(() => { busy = false; pokeLottie(tabs[n]); }, inn);
    }, out);
    s = n; dur = lottieDur(tabs[n]);
    if (reset) t0 = performance.now();
    if (mobile) { strip(); syncDots(); }
  }
  function tick(t) {
    if (!inView) { raf = requestAnimationFrame(tick); return; }
    t0 || (t0 = t);
    const p = Math.min((t - t0) / dur, 1);
    menu[s].style.setProperty("--tab-progress", p);
    if (p >= 1) go((s + 1) % menu.length, true);
    raf = requestAnimationFrame(tick);
  }
  const jump = (n) => { cancelAnimationFrame(raf); go(n, true); raf = requestAnimationFrame(tick); };
  function begin() { if (started) return; started = true; dur = lottieDur(tabs[0]); t0 = performance.now(); raf = requestAnimationFrame(tick); pokeLottie(tabs[0]); }
  menu.forEach((m, j) => env.on(m, "click", () => jump(j)));
  menu[0].dataset.state = "active";
  tabs[0].dataset.tabState = "active";
  env.add(() => { cancelAnimationFrame(raf); timers.forEach(clearTimeout); });
  const root = menu[0].closest("[data-tabs-autoplay]");
  if (!root) return;
  env.observer(new IntersectionObserver((e) => {
    const was = inView;
    inView = e[0].isIntersecting;
    if (inView && !was) {
      const had = started;
      begin();
      if (had) { t0 = performance.now(); dur = lottieDur(tabs[s]); menu[s].style.setProperty("--tab-progress", 0); pokeLottie(tabs[s]); }
    } else if (!inView && was) pokeLottie(tabs[s]);
  }, { threshold: 0.3 })).observe(root);

  const tabsParent = tabs[0]?.parentElement;
  let dotsWrap = null; const dots = [];
  function makeDots() {
    if (dotsWrap) return;
    dotsWrap = document.createElement("div"); dotsWrap.className = "owner-stack-dots"; dotsWrap.style.display = "none";
    for (let k = 0; k < tabs.length; k++) {
      const b = document.createElement("button");
      b.className = "owner-stack-dot"; b.setAttribute("aria-label", `Show tab ${k + 1}`);
      b.setAttribute("data-active", k === s ? "true" : "false");
      b.addEventListener("click", () => jump(k));
      dotsWrap.appendChild(b); dots.push(b);
    }
    tabsParent && tabsParent.after(dotsWrap);
    env.add(() => dotsWrap.remove());
  }
  const syncDots = () => dots.forEach((d, k) => d.setAttribute("data-active", k === s ? "true" : "false"));
  const menuEl = document.querySelector(".owner-stack-menu");
  const prevBtn = root.querySelector('[data-arrow="prev"]'), nextBtn = root.querySelector('[data-arrow="next"]');
  const strip = () => { if (menuEl) menuEl.style.transform = `translateX(-${s * 100}%)`; };
  const unstrip = () => { if (menuEl) menuEl.style.transform = ""; };
  const prev = () => jump(s > 0 ? s - 1 : menu.length - 1);
  const next = () => jump((s + 1) % menu.length);
  let sx = 0;
  const ts = (e) => { sx = e.touches[0].clientX; };
  const te = (e) => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) >= 50) (d < 0 ? next() : prev()); };
  function toMobile() {
    if (mobile) return; mobile = true;
    prevBtn && prevBtn.addEventListener("click", prev); nextBtn && nextBtn.addEventListener("click", next);
    makeDots(); dotsWrap && (dotsWrap.style.display = ""); syncDots();
    root.addEventListener("touchstart", ts, { passive: true }); root.addEventListener("touchend", te, { passive: true });
    strip();
  }
  function toDesktop() {
    if (!mobile) return; mobile = false;
    prevBtn && prevBtn.removeEventListener("click", prev); nextBtn && nextBtn.removeEventListener("click", next);
    dotsWrap && (dotsWrap.style.display = "none");
    root.removeEventListener("touchstart", ts); root.removeEventListener("touchend", te);
    unstrip();
  }
  let lastW = window.innerWidth;
  env.on(window, "resize", () => { const w = window.innerWidth; if (w !== lastW) { lastW = w; w <= 991 ? toMobile() : toDesktop(); } });
  if (window.innerWidth <= 991) toMobile();
  env.add(() => {
    toDesktop();
    menu.forEach((m, j) => { m.style.removeProperty("--tab-progress"); if (j) delete m.dataset.state; });
    tabs.forEach((t, j) => {
      t.dataset.tabState = j === 0 ? "active" : "not-active";
      parts(t).forEach(([el]) => { if (el) { el.style.transition = ""; el.style.opacity = ""; el.style.transform = ""; } });
    });
  });
}

function ratingsRows(env) {
  const ids = [["ratings-row1", 1, "ratingsSpeed1"], ["ratings-row2", -1, "ratingsSpeed2"], ["ratings-row3", 1, "ratingsSpeed3"]];
  if (!ids.some(([id]) => document.getElementById(id))) return;
  let boost = 0, lastY = window.scrollY;
  env.on(window, "scroll", () => {
    const d = window.scrollY - lastY; lastY = window.scrollY;
    boost = clamp(boost + d * P.ratingsScrollMultiplier, -P.ratingsScrollMax, P.ratingsScrollMax);
  }, { passive: true });
  ids.forEach(([id, dir, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    let third = 0, x = 0, ready = false;
    env.raf(() => {
      if (!ready) {
        if (!el.scrollWidth) return;
        third = el.scrollWidth / 3; x = dir > 0 ? 0 : third; el.style.opacity = "1"; ready = true;
      }
      x += (P[key] || 0.4) * dir + boost * dir;
      if (x >= third) x -= third; if (x < 0) x += third;
      el.style.transform = "translateX(" + -x + "px)";
    });
  });
  env.raf(() => { boost *= P.ratingsScrollDecay; if (Math.abs(boost) < 0.01) boost = 0; });
}

function rcardShine(env) {
  document.querySelectorAll(".rcard").forEach((card) => {
    const shine = card.querySelector(".rcard-shine");
    if (!shine) return;
    env.on(card, "mousemove", (e) => {
      const r = card.getBoundingClientRect(), x = (((e.clientX - r.left) / r.width) * 100).toFixed(1), y = (((e.clientY - r.top) / r.height) * 100).toFixed(1);
      const rad = getComputedStyle(document.documentElement).getPropertyValue("--rcard-shine-radius").trim() || "60%";
      shine.style.background = `radial-gradient(circle ${rad} at ${x}% ${y}%, rgba(255,255,255,${P.rcardShineOpacity}) 0%, transparent 100%)`;
    });
    env.on(card, "mouseleave", () => { shine.style.background = "transparent"; });
  });
}

// [glow-border]: conic-gradient(from <angle>, #56AEDD, #7bec9a, #0CB230, #7bec9a, #56AEDD), one turn per 6s,
// only while visible; the ::after background comes from --glow-bg.
function glowBorder(env) {
  const els = document.querySelectorAll("[glow-border]");
  if (!els.length) return;
  const colors = "#56AEDD, #7bec9a, #0CB230, #7bec9a, #56AEDD";
  let t0 = null, raf = null, count = 0;
  const frame = (t) => {
    if (t0 === null) t0 = t;
    const a = (((t - t0) / 6000) * 360) % 360;
    els.forEach((el) => el.style.setProperty("--glow-bg", `conic-gradient(from ${a}deg, ${colors})`));
    raf = requestAnimationFrame(frame);
  };
  const io = env.observer(new IntersectionObserver((entries) => {
    entries.forEach((e) => { count += e.isIntersecting ? 1 : -1; });
    if (count > 0 && raf === null) { t0 = null; raf = requestAnimationFrame(frame); }
    else if (count <= 0 && raf !== null) { cancelAnimationFrame(raf); raf = null; }
  }, { threshold: 0 }));
  els.forEach((el) => io.observe(el));
  injectStyle(env, "[glow-border]::after { background: var(--glow-bg); }", "glow-border");
  env.add(() => { raf !== null && cancelAnimationFrame(raf); els.forEach((el) => el.style.removeProperty("--glow-bg")); });
}

// [data-signature-path]: stroke draw-on, 1.5s power3.out, ScrollTrigger start "top 75%" (live: same).
function signature() {
  document.querySelectorAll("[data-signature-path]").forEach((wrap) => {
    const path = wrap.querySelector("path");
    if (!path) return;
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(path, { strokeDashoffset: 0, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: wrap, start: "top 75%", end: "top 25%" } });
  });
}

export default function ownerAnimations(env) {
  [heroTrails, heroPhone, starsReveal, growCards, stackTabs, ratingsRows, rcardShine, glowBorder, signature].forEach((f) => {
    try { f(env); } catch (e) { console.error("[interactions] owner-animations", f.name, e); }
  });
  ScrollTrigger.refresh();
}
