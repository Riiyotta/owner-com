// Shared plumbing for the interaction runtime: one gsap import (bundled from npm, never a CDN),
// a per-page AbortController for listeners, and a cleanup stack.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText };

export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function createEnv(flags) {
  const ac = new AbortController();
  const cleanups = [];
  const env = {
    flags,
    signal: ac.signal,
    // addEventListener bound to the page's lifetime.
    on(target, type, fn, opts = {}) {
      if (!target) return;
      target.addEventListener(type, fn, { ...opts, signal: ac.signal });
    },
    // Register a teardown function.
    add(fn) { cleanups.push(fn); },
    // Timers that die with the page.
    timeout(fn, ms) { const id = setTimeout(fn, ms); cleanups.push(() => clearTimeout(id)); return id; },
    // rAF loops that die with the page: fn(t) returns false to stop.
    raf(fn) {
      let id = 0, alive = true;
      const loop = (t) => { if (!alive) return; if (fn(t) === false) return; id = requestAnimationFrame(loop); };
      id = requestAnimationFrame(loop);
      const stop = () => { alive = false; cancelAnimationFrame(id); };
      cleanups.push(stop);
      return stop;
    },
    observer(io) { cleanups.push(() => io.disconnect()); return io; },
    ticker(fn) { gsap.ticker.add(fn); cleanups.push(() => gsap.ticker.remove(fn)); },
    destroy() {
      ac.abort();
      for (let i = cleanups.length - 1; i >= 0; i--) {
        try { cleanups[i](); } catch (e) { console.error("[interactions] cleanup failed", e); }
      }
      cleanups.length = 0;
    },
  };
  return env;
}

// Adds a <style> element owned by the page (removed on cleanup).
export function injectStyle(env, css, id) {
  const el = document.createElement("style");
  if (id) el.setAttribute("data-interactions", id);
  el.textContent = css;
  document.head.appendChild(el);
  env.add(() => el.remove());
  return el;
}
