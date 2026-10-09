// Page-scoped scroll motion from the original's Webflow IX3 chunks and inline GSAP scripts.
import { gsap, SplitText, prefersReducedMotion } from "./env.js";

// webflow.33d7b28c chunk (homepage only, i-142fc780 / t-c776f62f): each .cta-wrap scrubs its .cta-img
// from y:"10%" (ease index 2 = power1.out, default 0.5s) with scrollTrigger { start "top bottom",
// end "bottom bottom", scrub 0.8 }. conditionalPlayback: not under reduced motion, not on medium/small/tiny
// (<992). Live / measured: trigger .cta-wrap, target .cta-img, runBackwards y 10%, power1.out, scrub 0.8.
export function ixCta(env) {
  if (!env.flags.has("ix3-33d7b28c")) return;
  const mm = gsap.matchMedia();
  mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
    document.querySelectorAll(".cta-wrap").forEach((wrap) => {
      const imgs = wrap.querySelectorAll(".cta-img");
      if (!imgs.length) return;
      gsap.from(imgs, { y: "10%", ease: "power1.out", duration: 0.5, force3D: true, scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom bottom", scrub: 0.8 } });
    });
  });
  env.add(() => mm.revert());
}

// webflow.5b189065 chunk (/our-story, i-7b3163a1 / t-008bb912): each .about-vision_item scrubs the
// .about-vision_item-dot-progress inside it scaleY 0 -> 1 (ease index 12 = power4.inOut, 0.5s),
// start "top bottom", end "bottom center", scrub 0.8, all breakpoints. Live /our-story measured: identical.
export function ixVision(env) {
  if (!env.flags.has("ix3-5b189065")) return;
  document.querySelectorAll(".about-vision_item").forEach((item) => {
    const dots = item.querySelectorAll(".about-vision_item-dot-progress");
    if (!dots.length) return;
    gsap.fromTo(dots, { scaleY: 0 }, { scaleY: 1, ease: "power4.inOut", duration: 0.5, force3D: true, scrollTrigger: { trigger: item, start: "top bottom", end: "bottom center", scrub: 0.8 } });
  });
}

// Inline initHighlightText() (/our-story, /d): SplitText words,chars (autoSplit) then a scrubbed
// tl.from(chars, { autoAlpha: data-highlight-fade (0.2), stagger: data-highlight-stagger (0.1), ease linear })
// between data-highlight-scroll-start ("top 90%") and data-highlight-scroll-end ("center 40%").
// Live /our-story measured: 2 triggers, from autoAlpha 0.2, stagger 0.1, linear, scrub true, top 90% / center 40%.
export function highlightText(env) {
  if (!env.flags.has("highlight-text")) return;
  const splits = [];
  document.querySelectorAll("[data-highlight-text]").forEach((heading) => {
    const start = heading.getAttribute("data-highlight-scroll-start") || "top 90%";
    const end = heading.getAttribute("data-highlight-scroll-end") || "center 40%";
    const fade = parseFloat(heading.getAttribute("data-highlight-fade") || 0.2);
    const stagger = parseFloat(heading.getAttribute("data-highlight-stagger") || 0.1);
    splits.push(new SplitText(heading, {
      type: "words, chars",
      autoSplit: true,
      onSplit(self) {
        return gsap.context(() => {
          gsap.timeline({ scrollTrigger: { scrub: true, trigger: heading, start, end } })
            .from(self.chars, { autoAlpha: fade, stagger, ease: "linear" });
        });
      },
    }));
  });
  env.add(() => splits.forEach((s) => s.revert()));
}

// index-new.js `Ve` (modals): [data-modal-target] opens the matching [data-modal-name], sets the group
// active and locks scroll; [data-modal-close] / Escape close. Visuals are in the site CSS (inline-05.css).
import { lockBody, unlockBody } from "./bodyLock.js";
export function modal(env) {
  const group = document.querySelector("[data-modal-group-status]");
  const names = document.querySelectorAll("[data-modal-name]");
  const targets = document.querySelectorAll("[data-modal-target]");
  if (!targets.length) return;
  targets.forEach((t) => env.on(t, "click", function () {
    const id = this.getAttribute("data-modal-target");
    targets.forEach((x) => x.setAttribute("data-modal-status", "not-active"));
    names.forEach((x) => x.setAttribute("data-modal-status", "not-active"));
    document.querySelector(`[data-modal-target="${id}"]`)?.setAttribute("data-modal-status", "active");
    document.querySelector(`[data-modal-name="${id}"]`)?.setAttribute("data-modal-status", "active");
    group && group.setAttribute("data-modal-group-status", "active");
    lockBody();
  }));
  const close = () => {
    targets.forEach((x) => x.setAttribute("data-modal-status", "not-active"));
    group && group.setAttribute("data-modal-group-status", "not-active");
    unlockBody();
  };
  document.querySelectorAll("[data-modal-close]").forEach((c) => env.on(c, "click", close));
  env.on(document, "keydown", (e) => { if (e.key === "Escape") close(); });
}

// index-new.js `je`: mark every element whose computed overflow is auto/scroll with [no-scrollbar]
// (site CSS hides the native scrollbar for it), re-scanned on DOM changes.
export function noScrollbar(env) {
  let pending = 0;
  const scan = () => {
    pending = 0;
    document.querySelectorAll("body *").forEach((el) => {
      if (el.hasAttribute("no-scrollbar")) return;
      const cs = window.getComputedStyle(el), v = ["auto", "scroll"];
      if (v.includes(cs.overflow) || v.includes(cs.overflowX) || v.includes(cs.overflowY)) el.setAttribute("no-scrollbar", "");
    });
  };
  scan();
  const mo = new MutationObserver(() => { if (!pending) pending = requestAnimationFrame(scan); });
  mo.observe(document.body, { childList: true, subtree: true });
  env.add(() => { mo.disconnect(); cancelAnimationFrame(pending); });
}

// homepage.js grader field: without a Google Places selection (Places is a network service and is not loaded in
// the clone) Enter in #grader-name or a click on [data-button-instance="grader"] shows the field error
// (closest .form-field gets .error, its .field-validation is shown). Also index-new.js: forms with
// data-submit="prevent" never submit; Enter clicks their [data-submit] control.
export function homepageForms(env) {
  document.querySelectorAll("form[data-submit=prevent]").forEach((f) => {
    env.on(f, "submit", (e) => { e.preventDefault(); e.stopPropagation(); });
    env.on(f, "keydown", (e) => { if (e.key === "Enter") f.querySelector("[data-submit]")?.click(); });
  });
  if (!env.flags.has("homepage")) return;
  const input = document.getElementById("grader-name");
  if (!input) return;
  const showError = () => {
    const wrap = input.closest(".form-field-wrapper, [field-wrapper]");
    const msg = wrap && wrap.querySelector(".field-validation, [field-validation]");
    input.closest(".form-field, [form-field]")?.classList.add("error");
    if (msg) msg.style.display = "block";
  };
  env.on(input, "keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); showError(); } });
  document.querySelectorAll('[data-button-instance="grader"]').forEach((b) => env.on(b, "click", showError));
}

export const reducedMotion = prefersReducedMotion;
