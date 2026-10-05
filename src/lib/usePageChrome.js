import { useEffect } from "react";

// Per-route <title>, <html> and <body> attributes as they were on the original page after its scripts ran.
export default function usePageChrome({ title, html = {}, body = {} }) {
  useEffect(() => {
    document.title = title;
    const apply = (el, attrs) => { for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v); };
    apply(document.documentElement, html);
    apply(document.body, body);
    const els = document.querySelectorAll("[data-reveal]");
    document.documentElement.classList.add("reveal-ready");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [title]);
}
