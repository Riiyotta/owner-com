// Delegated behaviour runtime for the static snapshot. Re-runs on every route mount (from usePageChrome) and
// tears everything down on unmount: listeners (AbortController), observers, timers, gsap tweens/ScrollTriggers.
// Which page scripts a route gets mirrors what the original page loaded (pageScripts.json, generated from
// recon/mirror/src/<route>/index.html): index-new.js runs everywhere; owner-animations.js, homepage.js, the
// smooothy call, the rotating-text / highlight-text inline scripts and the IX3 chunks only where they were loaded.
import { gsap, ScrollTrigger, createEnv } from "./env.js";
import pageScripts from "./pageScripts.json";
import bodyLock from "./bodyLock.js";
import nav from "./nav.js";
import accordion from "./accordion.js";
import rotatingText from "./rotatingText.js";
import slider from "./slider.js";
import video from "./video.js";
import lottie from "./lottie.js";
import marquee from "./marquee.js";
import odometer from "./odometer.js";
import ownerAnimations from "./ownerAnimations.js";
import { ixCta, ixVision, highlightText, modal, noScrollbar, homepageForms, graderPhone } from "./pageMotion.js";
import revealGroup from "./revealGroup.js";

const modules = [
  ["bodyLock", bodyLock],
  ["nav", nav],
  ["accordion", accordion],
  ["rotatingText", rotatingText, "rotating-text"],
  ["video", video],
  ["lottie", lottie],
  ["slider", slider],
  ["marquee", marquee],
  ["odometer", odometer],
  ["modal", modal],
  ["noScrollbar", noScrollbar],
  ["homepageForms", homepageForms],
  ["ownerAnimations", ownerAnimations, "owner-animations"],
  ["ixCta", ixCta],
  ["ixVision", ixVision],
  ["highlightText", highlightText],
  ["revealGroup", revealGroup],
  ["graderPhone", graderPhone],
];

export function initInteractions(pathname = window.location.pathname) {
  const key = pathname.replace(/\/+$/, "") || "/";
  const flags = new Set(pageScripts[key] || []);
  const env = createEnv(flags);
  const ctx = gsap.context(() => {});
  modules.forEach(([name, fn, flag]) => {
    if (flag && !flags.has(flag)) return;
    try { ctx.add(() => fn(env)); } catch (e) { console.error(`[interactions] ${name} failed`, e); }
  });
  const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());
  return () => {
    cancelAnimationFrame(refresh);
    env.destroy();
    ctx.revert();
  };
}
