// Port of index-new.js `ze` (odometer). Off under prefers-reduced-motion (as in the original).
// Defaults: duration 1 (per element data-odometer-duration overrides; the clone's stats use 2), ease power3.out,
// element stagger 0.1, digit stagger 0.04 (right-most digit first), reveal 0.5s power2.out for hidden prefix/suffix
// parts, ScrollTrigger start "top 80%" once on the [data-odometer-group], 2 digit cycles per roller.
// Live /our-story measured: trigger .about-stats_list, start "top 80%", once, 28 child tweens, reveal width tweens
// 0.5s power2.out — same values.
import { gsap, ScrollTrigger, prefersReducedMotion } from "./env.js";

const D = { duration: 1, ease: "power3.out", elementStagger: 0.1, digitStagger: 0.04, revealDuration: 0.5, revealEase: "power2.out", triggerStart: "top 80%", staggerOrder: "left", digitCycles: 2 };
const INIT = "data-odometer-initialized";

const lineHeightOf = (el) => { const cs = getComputedStyle(el); return cs.lineHeight === "normal" ? 1.2 : parseFloat(cs.lineHeight) / parseFloat(cs.fontSize); };
const parts = (s) => [...s].map((ch) => ({ type: /\d/.test(ch) ? "digit" : "static", char: ch }));
function withStart(arr, start) {
  const digits = arr.filter((x) => x.type === "digit");
  const s = String(Math.floor(Math.abs(start))).padStart(digits.length, "0").slice(-digits.length);
  let i = 0;
  return arr.map((x) => (x.type === "digit" ? { ...x, startDigit: parseInt(s[i++], 10) } : x));
}
function hideLeading(arr, start) {
  const n = arr.filter((x) => x.type === "digit").length, a = Math.floor(Math.abs(start)), len = a === 0 ? 1 : String(a).length, extra = Math.max(0, n - len);
  if (extra === 0) return arr;
  let k = 0, seen = false, lastHidden = false;
  return arr.map((x) => {
    if (x.type === "digit") { seen = true; const h = k < extra; lastHidden = h; k++; return { ...x, hidden: h }; }
    return { ...x, hidden: seen && lastHidden };
  });
}
function shouldGrow(el, hasStart, start, arr) {
  if (el.hasAttribute("data-odometer-grow")) return el.getAttribute("data-odometer-grow") !== "false";
  if (!hasStart) return false;
  const a = Math.floor(Math.abs(start)), len = a === 0 ? 1 : String(a).length;
  return len < arr.filter((x) => x.type === "digit").length;
}
function build(el, arr, lh, grow) {
  el.innerHTML = ""; el.style.height = "";
  const rollers = [], reveal = [], cells = 10 * D.digitCycles;
  arr.forEach((x) => {
    if (x.type === "static") {
      const s = document.createElement("span");
      s.setAttribute("data-odometer-part", "static"); s.style.height = lh + "em"; s.style.lineHeight = lh; s.textContent = x.char;
      el.appendChild(s);
      if (grow && x.hidden) { gsap.set(s, { opacity: 0 }); reveal.push(s); }
      return;
    }
    const mask = document.createElement("span");
    mask.setAttribute("data-odometer-part", "mask"); mask.style.height = lh + "em"; mask.style.lineHeight = lh;
    const roller = document.createElement("span");
    roller.setAttribute("data-odometer-part", "roller"); roller.style.lineHeight = lh;
    const seq = []; for (let i = 0; i < cells; i++) seq.push(i % 10);
    roller.textContent = seq.join("\n");
    mask.appendChild(roller); el.appendChild(mask);
    const sd = x.startDigit || 0, hide = grow && x.hidden;
    gsap.set(roller, { y: hide ? lh + "em" : -sd * lh + "em" });
    const target = parseInt(x.char, 10), pos = target > sd ? target : 10 + target;
    rollers.push({ roller, targetPos: pos });
    if (hide) reveal.push(mask);
  });
  return { rollers, reveal };
}
function finish(el, text) {
  el.style.overflow = ""; el.style.height = "";
  const digits = [...text].filter((c) => /\d/.test(c));
  let i = 0;
  el.querySelectorAll('[data-odometer-part="mask"]').forEach((m) => {
    const r = m.querySelector('[data-odometer-part="roller"]'); r && r.remove();
    m.textContent = digits[i++] || ""; m.style.opacity = ""; m.style.overflow = "";
  });
  el.querySelectorAll('[data-odometer-part="static"]').forEach((s) => { s.style.opacity = ""; });
}

export default function odometer(env) {
  const groups = document.querySelectorAll("[data-odometer-group]");
  if (!groups.length) return;
  const restore = [];
  const timelines = [];
  const reduced = prefersReducedMotion();

  groups.forEach((g) => {
    if (g.hasAttribute(INIT)) return;
    g.setAttribute(INIT, "");
    restore.push(() => g.removeAttribute(INIT));
    const els = Array.from(g.querySelectorAll("[data-odometer-element]"));
    if (!els.length || reduced) return;
    const order = g.getAttribute("data-odometer-stagger-order") || D.staggerOrder;
    const start = g.getAttribute("data-odometer-trigger-start") || D.triggerStart;
    const stagger = parseFloat(g.getAttribute("data-odometer-stagger")) || D.elementStagger;

    const data = els.map((el) => {
      const originalChildren = Array.from(el.childNodes);
      restore.push(() => { el.innerHTML = ""; originalChildren.forEach((n) => el.appendChild(n)); el.removeAttribute("style"); });
      const text = el.textContent.trim();
      const hasStart = el.hasAttribute("data-odometer-start");
      const startStr = hasStart ? el.getAttribute("data-odometer-start").trim() : "";
      const startNum = parseFloat(startStr) || 0;
      const endStr = el.hasAttribute("data-odometer-end") ? el.getAttribute("data-odometer-end").trim() : "";
      const dur = parseFloat(el.getAttribute("data-odometer-duration")) || D.duration;
      const lh = lineHeightOf(el);
      const full = startStr + text + endStr;
      let arr = parts(full);
      arr = withStart(arr, startNum);
      arr = hideLeading(arr, startNum);
      if (startStr) { const n = [...startStr].length; arr = arr.map((x, i) => (i < n ? { ...x, hidden: true } : x)); }
      if (endStr) { const n = [...endStr].length, L = arr.length; arr = arr.map((x, i) => (i >= L - n ? { ...x, hidden: true } : x)); }
      const grow = startStr || endStr || shouldGrow(el, hasStart, startNum, arr);
      const { rollers, reveal } = build(el, arr, lh, grow);
      const fs = parseFloat(getComputedStyle(el).fontSize);
      const revealData = reveal.map((r) => { const w = r.offsetWidth / fs; gsap.set(r, { width: 0, overflow: "hidden" }); return { el: r, widthEm: w }; });
      return { el, rollers, duration: dur, step: lh, revealData, originalText: full };
    });

    let ordered = [...data];
    if (order === "right") ordered.reverse();
    else if (order === "random") for (let i = ordered.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [ordered[i], ordered[j]] = [ordered[j], ordered[i]]; }

    const tl = gsap.timeline({
      scrollTrigger: { trigger: g, start, once: true },
      onComplete() { data.forEach(({ el, originalText }) => finish(el, originalText)); },
    });
    timelines.push(tl);
    ordered.forEach((d, idx) => {
      const at = idx * stagger;
      d.revealData.forEach(({ el, widthEm }) => tl.to(el, { width: widthEm + "em", opacity: 1, duration: D.revealDuration, ease: D.revealEase }, at));
      d.rollers.forEach(({ roller, targetPos }, k) => {
        const fromRight = d.rollers.length - 1 - k;
        tl.to(roller, { y: -targetPos * d.step + "em", duration: d.duration, ease: D.ease, force3D: true }, at + fromRight * D.digitStagger);
      });
    });
  });

  // k(): on width change, jump running timelines to the end and re-measure.
  let rt, lastW = window.innerWidth;
  env.on(window, "resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      document.querySelectorAll("[data-odometer-element]").forEach((el) => {
        if (el.querySelector('[data-odometer-part="roller"]')) {
          const lh = lineHeightOf(el);
          el.querySelectorAll('[data-odometer-part="mask"]').forEach((m) => { m.style.height = lh + "em"; m.style.lineHeight = lh; });
          el.querySelectorAll('[data-odometer-part="roller"], [data-odometer-part="static"]').forEach((m) => { m.style.lineHeight = lh; });
        }
      });
      ScrollTrigger.refresh();
    }, 250);
  });

  env.add(() => {
    clearTimeout(rt);
    timelines.forEach((tl) => { tl.scrollTrigger && tl.scrollTrigger.kill(); tl.kill(); });
    restore.reverse().forEach((f) => f());
  });
}
