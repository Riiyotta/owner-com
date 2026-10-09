// Port of index-new.js createSmooothy()/`ye` wrapper around smooothy@0.0.35 (the version unpkg served the original),
// as called inline on the page: createSmooothy('.section-testimonials', { infinite: true }).
// Wrapper defaults (index-new.js it()): snap, dragSensitivity .005, lerpFactor .3, scrollSensitivity 1,
// snapStrength .1, speedDecay .85, bounceLimit 1, scrollInput false, virtualScroll {mouse .5, touch 2, firefox 30},
// driven from gsap.ticker; [data-arrow="prev|next"] buttons in the section; the active slide gets
// data-<name>="true" (here data-testimonials) and the previous one "false"; resize (100ms debounce, width only) re-inits.
import Core from "smooothy";
import { gsap } from "./env.js";

export default function slider(env) {
  if (!env.flags.has("smooothy")) return; // only pages whose original called createSmooothy
  const section = document.querySelector(".section-testimonials");
  if (!section) return;
  const el = section.querySelector("[data-smooothy]");
  const name = el && el.getAttribute("data-smooothy");
  if (!name) return;
  const slides = Array.from(el.querySelectorAll("[data-slide]"));
  if (!slides.length) return;

  const state = { currentIndex: 0, previousIndex: 0, windowWidth: window.innerWidth };
  const updateActive = (cur, prev) => {
    if (slides[prev]) {
      slides[prev].setAttribute(`data-${name}`, "false");
      slides[prev].querySelectorAll("[data-bunny-player-init]").forEach((pl) => {
        const v = pl.querySelector("video");
        if (v && !v.paused) { v.pause(); v.currentTime = 0; }
        setTimeout(() => { pl.setAttribute("data-player-activated", "false"); pl.setAttribute("data-player-status", "idle"); }, 0);
      });
    }
    slides[cur] && slides[cur].setAttribute(`data-${name}`, "true");
  };
  const setState = (cur, prev) => { state.currentIndex = cur; state.previousIndex = prev; updateActive(cur, prev); };

  const core = new Core(el, {
    infinite: true,
    snap: true,
    variableWidth: false,
    vertical: false,
    dragSensitivity: 0.005,
    lerpFactor: 0.3,
    scrollSensitivity: 1,
    snapStrength: 0.1,
    speedDecay: 0.85,
    bounceLimit: 1,
    scrollInput: false,
    virtualScroll: { mouseMultiplier: 0.5, touchMultiplier: 2, firefoxMultiplier: 30, useKeyboard: false, passive: true },
    onSlideChange: (c, p) => setState(c, p),
  });

  section.querySelectorAll("[data-arrow]").forEach((a) => {
    const dir = a.getAttribute("data-arrow");
    env.on(a, "click", (e) => { e.preventDefault(); e.stopPropagation(); dir === "prev" ? core.goToPrev() : core.goToNext(); });
  });

  env.ticker(() => {
    core.update();
    const i = core.currentSlide ?? 0;
    if (i !== state.currentIndex) setState(i, state.currentIndex);
  });

  let t;
  env.on(window, "resize", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const w = window.innerWidth;
      if (w !== state.windowWidth) { state.windowWidth = w; core.init(); }
    }, 100);
  }, { passive: true });

  setState(0, 0);

  env.add(() => {
    clearTimeout(t);
    try { core.destroy(); } catch (e) { /* already gone */ }
    el.removeAttribute("style");
    slides.forEach((s) => { s.style.transform = ""; s.removeAttribute(`data-${name}`); });
    gsap.killTweensOf(slides);
  });
}
