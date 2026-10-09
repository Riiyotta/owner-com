import { useEffect } from "react";
import { initInteractions } from "./interactions/index.js";

// Per-route <title>, <html> and <body> attributes as they were on the original page after its scripts ran.
export default function usePageChrome({ title, html = {}, body = {} }) {
  useEffect(() => {
    document.title = title;
    const apply = (el, attrs) => { for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v); };
    apply(document.documentElement, html);
    apply(document.body, body);
    // Builder fallback for elements the capture found hidden/offset: one fade-up observer (see CLONE.md).
    const els = document.querySelectorAll("[data-reveal]");
    document.documentElement.classList.add("reveal-ready");
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      els.forEach((e) => io.observe(e));
    } else {
      els.forEach((e) => e.classList.add("is-in"));
    }
    // Original site behaviour (nav, accordions, rotator, sliders, GSAP motion): set up per route, torn down on leave.
    const teardown = initInteractions(window.location.pathname);
    return () => { io?.disconnect(); teardown(); };
  }, [title]);
}
