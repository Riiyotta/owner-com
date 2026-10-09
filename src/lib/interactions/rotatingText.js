// Port of the homepage inline script initRotatingText() (build "word-first-2026-06").
//  - phrases: the span's hardcoded text first, then data-rotating-words (comma separated)
//  - every phrase sits in the same inline-grid cell, clip-path:inset(0) masks the travel
//  - out: all words of the old phrase  yPercent 0 -> -150, autoAlpha 0, 0.6s power4.inOut (no stagger)
//  - in:  new phrase words            yPercent 150 -> 0,  autoAlpha 1, 0.75s power4.inOut, stagger data-word-stagger (0.08)
//  - cadence: data-step-duration (1.75s); the first swap fires at half a step (0.875s)
// The clone's markup already contains the built .rotating-text__inner (captured after the script ran), so it is
// reused as-is; otherwise the structure is built exactly as the original does.
import { gsap } from "./env.js";

export default function rotatingText(env) {
  const calls = [];
  document.querySelectorAll("[data-rotating-title]").forEach((heading) => {
    const span = heading.querySelector("[data-rotating-words]");
    if (!span || span.__rotatingInit) return;
    span.__rotatingInit = true;
    env.add(() => { span.__rotatingInit = false; });

    const stepDuration = parseFloat(heading.getAttribute("data-step-duration") || "1.75");
    const wordStagger = parseFloat(heading.getAttribute("data-word-stagger") || "0.08");
    const inDuration = 0.75;
    const outDuration = 0.6;

    let phraseEls;
    const built = span.querySelector(".rotating-text__inner");
    if (built) {
      phraseEls = Array.from(built.querySelectorAll(".rotating-text__phrase")).map((p) => {
        p.words = Array.from(p.querySelectorAll(".rotating-text__word"));
        p.words.forEach((w) => {
          w.removeAttribute("data-reveal"); // the builder's generic reveal must not fight the rotator
          w.style.willChange = "transform";
        });
        return p;
      });
    } else {
      const hardcoded = span.textContent.trim();
      const attr = (span.getAttribute("data-rotating-words") || "").split(",").map((p) => p.trim()).filter(Boolean);
      const phrases = [hardcoded, ...attr.filter((p) => p !== hardcoded)].filter(Boolean);
      if (!phrases.length) return;
      const wrapper = document.createElement("span");
      wrapper.className = "rotating-text__inner";
      wrapper.style.cssText = "position:relative;display:inline-grid;vertical-align:baseline;-webkit-clip-path:inset(0);clip-path:inset(0);padding-bottom: 0.1em";
      phraseEls = phrases.map((phrase) => {
        const el = document.createElement("span");
        el.className = "rotating-text__phrase";
        el.style.cssText = "grid-area:1 / 1;white-space:nowrap;text-align:center;";
        const parts = phrase.split(/\s+/).filter(Boolean);
        el.words = parts.map((word, i) => {
          const w = document.createElement("span");
          w.className = "rotating-text__word";
          w.style.cssText = "display:inline-block;will-change:transform;";
          w.textContent = i < parts.length - 1 ? word + " " : word;
          el.appendChild(w);
          return w;
        });
        wrapper.appendChild(el);
        return el;
      });
      const original = Array.from(span.childNodes);
      span.textContent = "";
      span.appendChild(wrapper);
      env.add(() => { wrapper.remove(); original.forEach((n) => span.appendChild(n)); });
    }
    if (!phraseEls.length) return;

    const allWords = phraseEls.flatMap((p) => p.words);
    phraseEls.forEach((p) => gsap.set(p.words, { yPercent: 150, autoAlpha: 0 }));
    gsap.set(phraseEls[0].words, { yPercent: 0, autoAlpha: 1 });

    let active = 0;
    let pending = null;
    function showNext() {
      const next = (active + 1) % phraseEls.length;
      gsap.to(phraseEls[active].words, { yPercent: -150, autoAlpha: 0, duration: outDuration, ease: "power4.inOut" });
      gsap.fromTo(phraseEls[next].words, { yPercent: 150, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: inDuration, ease: "power4.inOut", stagger: wordStagger });
      active = next;
      pending = gsap.delayedCall(stepDuration, showNext);
    }
    if (phraseEls.length > 1) pending = gsap.delayedCall(stepDuration / 2, showNext);

    calls.push(() => {
      pending && pending.kill();
      gsap.killTweensOf(allWords);
      // Leave the first phrase showing (the no-JS state of the original).
      gsap.set(allWords, { clearProps: "transform,opacity,visibility" });
    });
  });
  env.add(() => calls.forEach((f) => f()));
}
