import { useEffect } from "react";
import { initInteractions } from "./interactions/index.js";

// Per-route <title>, <html> and <body> attributes as they were on the original page after its scripts ran.
export default function usePageChrome({ title, html = {}, body = {} }) {
  useEffect(() => {
    document.title = title;
    const apply = (el, attrs) => { for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v); };
    apply(document.documentElement, html);
    apply(document.body, body);
    // Original site behaviour (nav, accordions, rotator, sliders, GSAP motion): set up per route, torn down on leave.
    const teardown = initInteractions(window.location.pathname);
    return teardown;
  }, [title]);
}
