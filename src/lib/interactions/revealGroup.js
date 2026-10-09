// Port of the /builders-wanted inline script initContentRevealScroll() (recon/mirror/src/builders-wanted/index.html).
// [data-reveal-group]: each direct child (header slots [data-reveal-header-group] first, then regular slots; children of
// a [data-reveal-group-nested] are revealed one by one) starts at autoAlpha 0 offset by data-distance (2em) from
// data-reveal-direction (bottom; left/right/top use 25vw) and animates to place: 0.8s power4.inOut, slots
// data-stagger (100ms) apart, regular slots overlap the header by data-header-overlap (200ms); ScrollTrigger
// start data-start ("top 80%"), once. Reduced motion: shown immediately.
// No-JS: nothing is hidden (the hidden state is only ever set here).
import { gsap, ScrollTrigger, prefersReducedMotion } from "./env.js";

function fromValues(direction, distance) {
  switch (direction) {
    case "left": return { x: "-25vw", y: 0 };
    case "right": return { x: "25vw", y: 0 };
    case "top": return { x: 0, y: "-25vw" };
    default: return { x: 0, y: distance };
  }
}

export default function revealGroup(env) {
  if (!env.flags.has("reveal-group")) return;
  const reduced = prefersReducedMotion();
  const D = 0.8, EASE = "power4.inOut";
  const show = (el) => ({ x: 0, y: 0, autoAlpha: 1, duration: D, ease: EASE, onComplete: () => gsap.set(el, { clearProps: "all" }) });

  document.querySelectorAll("[data-reveal-group]").forEach((g) => {
    const stagger = (parseFloat(g.getAttribute("data-stagger")) || 100) / 1000;
    const distance = g.getAttribute("data-distance") || "2em";
    const start = g.getAttribute("data-start") || "top 80%";
    const overlap = (parseFloat(g.getAttribute("data-header-overlap")) || 200) / 1000;
    if (reduced) { gsap.set(g, { clearProps: "all", x: 0, y: 0, autoAlpha: 1 }); return; }

    const kids = Array.from(g.children);
    if (!kids.length) {
      gsap.set(g, { ...fromValues(g.getAttribute("data-reveal-direction") || "bottom", distance), autoAlpha: 0 });
      ScrollTrigger.create({ trigger: g, start, once: true, onEnter: () => gsap.to(g, show(g)) });
      return;
    }
    const header = [], regular = [];
    kids.forEach((child) => {
      const nested = child.matches("[data-reveal-group-nested]") ? child : child.querySelector(":scope [data-reveal-group-nested]");
      const slot = nested
        ? { type: "nested", parentEl: child, nestedEl: nested, includeParent: child.getAttribute("data-ignore") === "false" || nested.getAttribute("data-ignore") === "false" }
        : { type: "item", el: child };
      (child.matches("[data-reveal-header-group]") ? header : regular).push(slot);
    });
    const all = [...header, ...regular];
    all.forEach((s) => {
      if (s.type === "item") {
        const d = s.el.matches("[data-reveal-group-nested]") ? distance : s.el.getAttribute("data-distance") || distance;
        gsap.set(s.el, { ...fromValues(s.el.getAttribute("data-reveal-direction") || "bottom", d), autoAlpha: 0 });
      } else {
        if (s.includeParent) gsap.set(s.parentEl, { ...fromValues(s.parentEl.getAttribute("data-reveal-direction") || "bottom", distance), autoAlpha: 0 });
        const nd = s.nestedEl.getAttribute("data-distance") || distance;
        Array.from(s.nestedEl.children).forEach((t) => gsap.set(t, { ...fromValues(t.getAttribute("data-reveal-direction") || "bottom", nd), autoAlpha: 0 }));
      }
    });

    ScrollTrigger.create({
      trigger: g, start, once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        let t = 0, headerEnd = 0;
        const run = (slots, isHeader) => slots.forEach((s) => {
          if (s.type === "item") {
            tl.to(s.el, show(s.el), t);
            if (isHeader) headerEnd = t + D;
            t += stagger;
          } else {
            if (s.includeParent) tl.to(s.parentEl, show(s.parentEl), t);
            const ms = parseFloat(s.nestedEl.getAttribute("data-stagger"));
            const ns = isNaN(ms) ? stagger : ms / 1000;
            const nk = Array.from(s.nestedEl.children);
            nk.forEach((c, i) => tl.to(c, show(c), t + i * ns));
            if (isHeader) headerEnd = t + (nk.length - 1) * ns + D;
            t += (nk.length - 1) * ns + stagger;
          }
        });
        run(header, true);
        if (header.length) t = headerEnd - overlap;
        run(regular, false);
      },
    });
  });
}
