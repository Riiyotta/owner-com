// Port of index-new.js `Ye` (nav module), webflow-assets.owner.com/3.2.63.
//  Desktop (>=992): hover a [data-dropdown-trigger] -> the shared [data-nav="dropdowns"] panel fades in
//    (autoAlpha 0->1, y -8->0, 0.3s power2.out) sized/positioned to that trigger's [data-dropdown-target];
//    moving to another trigger morphs left/width/height (0.3s power2.out) and cross-fades the panels
//    (out 0.1s linear, in 0.15s linear +0.05s delay). 150ms hover-intent delay once open. Leaving the nav,
//    hovering a plain item, clicking the blurred backdrop or pressing Escape closes (0.3s power2.in).
//  Mobile (<992): each target is moved into its trigger's [data-nav="respo"] accordion slot; the hamburger
//    toggles data-nav-status="open" and plays the open timeline (menu autoAlpha 0.25s, children y10 0.3s
//    stagger .06 at -=0.1, list items y8 0.25s stagger .05 at <0.08), close = autoAlpha 0 0.2s power2.in.
//  Scroll: data-scroll="scrolled" on the nav once scrollY > 100.
// Additions for keyboard access (requested for the clone, not in the original): Enter/Space on a trigger
// opens/closes its dropdown on desktop, focus leaving the nav closes it, Escape closes the mobile menu,
// aria-expanded on the hamburger and on desktop triggers.
import { gsap } from "./env.js";
import { lockBody, unlockBody } from "./bodyLock.js";

const T = { morph: 0.3, panelIn: 0.15, panelOut: 0.1, show: 0.3 };
const E = { morph: "power2.out", show: "power2.out", hide: "power2.in" };
const INTENT = 150;
const DESKTOP = 992;

export default function nav(env) {
  const c = document.querySelector('[data-nav="component"]');
  const p = document.querySelector('[data-nav="dropdowns"]');
  if (!c || !p) return;

  const triggers = {}; // i
  const targets = {}; // R
  document.querySelectorAll("[data-dropdown-trigger]").forEach((l) => { triggers[l.dataset.dropdownTrigger] = l; });
  document.querySelectorAll("[data-dropdown-target]").forEach((l) => { targets[l.dataset.dropdownTarget] = l; });
  // Remember where each target lived so cleanup can hand the DOM back to React as it rendered it.
  const home = Object.values(targets).map((t) => [t, t.parentNode, t.nextSibling]);

  let backdrop = null; // h
  let styleEl = null; // A
  let current = null; // w
  let timer = null; // y
  let isOpen = false; // k
  let desktopReady = false; // P
  let desktopAC = null; // D
  let menuTl = null; // S
  const touched = new Set(); // elements the menu timeline wrote inline styles on

  // --- scroll state -------------------------------------------------------------------------
  let scrolled = false;
  const onScroll = () => {
    const s = window.scrollY > 100;
    if (s !== scrolled) { scrolled = s; s ? c.setAttribute("data-scroll", "scrolled") : c.removeAttribute("data-scroll"); }
  };
  env.on(window, "scroll", onScroll, { passive: true });
  onScroll();

  if (!Object.keys(triggers).length) return;

  // --- mobile menu (hamburger) --------------------------------------------------------------
  const hams = document.querySelectorAll('[data-nav-menu="trigger"]');
  const setHamAria = () => hams.forEach((h) => h.setAttribute("aria-expanded", c.hasAttribute("data-nav-status") ? "true" : "false"));
  hams.forEach((h) => {
    if (!h.hasAttribute("aria-label")) h.setAttribute("aria-label", "Menu");
    env.on(h, "click", () => {
      if (c.hasAttribute("data-nav-status")) { unlockBody(); c.removeAttribute("data-nav-status"); closeMenu(); }
      else { c.setAttribute("data-nav-status", "open"); openMenu(); }
      setHamAria();
    });
  });
  setHamAria();

  function openMenu() { // x()
    const u = c.querySelector('[data-nav="menu"]');
    if (!u) return;
    menuTl && menuTl.kill();
    menuTl = gsap.timeline();
    const kids = Array.from(u.children);
    touched.add(u); kids.forEach((k) => touched.add(k));
    gsap.set(u, { display: "flex" });
    menuTl.fromTo(u, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, ease: "power2.out" });
    lockBody();
    menuTl.fromTo(kids, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out", stagger: 0.06 }, "-=0.1");
    kids.forEach((k) => {
      if (k.tagName === "UL") {
        const lis = Array.from(k.querySelectorAll(":scope > li"));
        if (!lis.length) return;
        lis.forEach((li) => touched.add(li));
        menuTl.fromTo(lis, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out", stagger: 0.05 }, "<0.08");
      }
    });
  }

  function closeMenu() { // b()
    const u = c.querySelector('[data-nav="menu"]');
    if (!u) return;
    menuTl && menuTl.kill();
    menuTl = gsap.timeline({ onComplete: () => gsap.set(u, { display: "none", clearProps: "opacity,visibility" }) });
    menuTl.to(u, { autoAlpha: 0, duration: 0.2, ease: "power2.in" });
  }

  env.on(document, "keydown", (e) => {
    if (e.key === "Escape" && c.hasAttribute("data-nav-status") && window.innerWidth < DESKTOP) {
      unlockBody(); c.removeAttribute("data-nav-status"); closeMenu(); setHamAria();
      hams[0] && hams[0].focus();
    }
  });

  // --- desktop dropdowns --------------------------------------------------------------------
  function toRespo() { // a()
    Object.entries(triggers).forEach(([name, trig]) => {
      const slot = trig.querySelector('[data-nav="respo"]');
      const t = targets[name];
      if (slot && t) slot.appendChild(t);
    });
  }
  function toDropdowns() { // v()
    Object.values(targets).forEach((t) => { if (!p.contains(t)) p.appendChild(t); });
  }

  function setupDesktop() { // g()
    if (desktopReady) return;
    const u = c.querySelector('[data-nav="menu"]');
    if (u) gsap.set(u, { clearProps: "all" });
    toDropdowns();
    injectNavStyle();
    prepare();
    bind();
    desktopReady = true;
  }

  function teardownDesktop() { // s()
    if (!desktopReady) return;
    clearTimeout(timer);
    desktopAC && desktopAC.abort();
    desktopAC = null;
    gsap.killTweensOf(p);
    gsap.set(p, { clearProps: "all" });
    Object.values(targets).forEach((t) => {
      gsap.killTweensOf(t);
      gsap.set(t, { clearProps: "all" });
      t.style.position = ""; t.style.top = "";
    });
    if (backdrop) {
      const b = backdrop;
      gsap.to(b, { autoAlpha: 0, duration: T.show, delay: 0.15, ease: E.hide, onComplete: () => b.remove() });
      backdrop = null;
    }
    styleEl && styleEl.remove();
    styleEl = null;
    if (current && triggers[current]) triggers[current].removeAttribute("data-state");
    toRespo();
    current = null; isOpen = false; desktopReady = false;
    c.removeAttribute("data-dropdown");
    setTriggerAria();
  }

  function prepare() { // O()
    Object.values(targets).forEach((t) => {
      if (t.style.display === "none") t.style.display = "";
      t.style.position = "absolute"; t.style.top = "0";
      gsap.set(t, { autoAlpha: 0 });
    });
    const op = p.offsetParent;
    if (op && window.getComputedStyle(op).position === "static") op.style.position = "relative";
    gsap.set(p, { autoAlpha: 0, y: -8 });
    backdrop = document.createElement("div");
    backdrop.setAttribute("data-nav-backdrop", "");
    document.body.appendChild(backdrop);
    gsap.set(backdrop, { autoAlpha: 0 });
  }

  function leftFor(trig, width) { // z()
    const base = (p.offsetParent ?? document.documentElement).getBoundingClientRect();
    const r = trig.getBoundingClientRect();
    let left = r.left + r.width / 2 - width / 2 - base.left;
    left = Math.max(32 - base.left, Math.min(left, window.innerWidth - width - 32 - base.left));
    return left;
  }

  function open(name) { // q()
    if (name === current) return;
    const trig = triggers[name], panel = targets[name];
    if (!trig || !panel) return;
    const prev = current;
    const w = panel.offsetWidth, h = panel.offsetHeight, left = leftFor(trig, w);
    if (isOpen) {
      gsap.to(p, { left, width: w, height: h, duration: T.morph, ease: E.morph });
      if (prev && targets[prev]) {
        gsap.to(targets[prev], { autoAlpha: 0, duration: T.panelOut, ease: "none", onComplete: () => { triggers[prev]?.removeAttribute("data-state"); setTriggerAria(); } });
      }
      gsap.set(panel, { autoAlpha: 0 });
      gsap.to(panel, { autoAlpha: 1, duration: T.panelIn, delay: 0.05, ease: "none" });
    } else {
      gsap.set(p, { left, width: w, height: h });
      gsap.to(p, { autoAlpha: 1, y: 0, duration: T.show, ease: E.show });
      gsap.to(backdrop, { autoAlpha: 1, duration: T.show });
      gsap.to(panel, { autoAlpha: 1, duration: T.panelIn, ease: "none" });
    }
    trig.setAttribute("data-state", "open");
    isOpen = true; current = name;
    c.setAttribute("data-dropdown", "open");
    setTriggerAria();
  }

  function close() { // B()
    if (current) {
      gsap.to(targets[current], { autoAlpha: 0, duration: T.panelOut, ease: E.hide });
      triggers[current]?.removeAttribute("data-state");
    }
    gsap.to(p, { autoAlpha: 0, y: -8, duration: T.show, ease: E.hide });
    backdrop && gsap.to(backdrop, { autoAlpha: 0, duration: T.show });
    current = null; isOpen = false;
    c.removeAttribute("data-dropdown");
    setTriggerAria();
  }

  function enter(name) { // N()
    clearTimeout(timer);
    if (!isOpen) return open(name);
    timer = setTimeout(() => open(name), INTENT);
  }
  function leave() { clearTimeout(timer); timer = setTimeout(close, INTENT); } // I()
  function hold() { clearTimeout(timer); timer = null; } // V()

  function setTriggerAria() {
    if (window.innerWidth < DESKTOP) return; // mobile: accordion.js mirrors data-accordion-status
    Object.values(triggers).forEach((t) => {
      const tog = t.querySelector("[data-accordion-toggle]");
      tog && tog.setAttribute("aria-expanded", t.getAttribute("data-state") === "open" ? "true" : "false");
    });
  }

  function bind() { // X()
    desktopAC = new AbortController();
    const signal = desktopAC.signal;
    const o = { signal };
    Object.entries(triggers).forEach(([name, trig]) => {
      trig.addEventListener("mouseenter", () => enter(name), o);
      // keyboard (clone addition)
      const tog = trig.querySelector("[data-accordion-toggle]");
      tog && tog.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        clearTimeout(timer);
        current === name ? close() : open(name);
      }, o);
    });
    document.querySelectorAll('[data-nav="item"]:not([data-dropdown-trigger])').forEach((l) => l.addEventListener("mouseenter", leave, o));
    c.addEventListener("mouseenter", hold, o);
    c.addEventListener("mouseout", (e) => { if (!c.contains(e.relatedTarget)) leave(); }, o);
    c.addEventListener("focusout", (e) => { if (isOpen && e.relatedTarget && !c.contains(e.relatedTarget)) close(); }, o); // clone addition
    backdrop.addEventListener("click", close, o);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen) close(); }, o);
    p.addEventListener("mouseover", (e) => {
      const link = e.target.closest('[data-nav="product-link"]');
      if (!link) return;
      const ul = link.closest("ul");
      ul && ul.querySelectorAll('[data-nav="product-link"]').forEach((x) => { if (x !== link) x.setAttribute("data-inactive", "true"); });
    }, o);
    p.addEventListener("mouseout", (e) => {
      const link = e.target.closest('[data-nav="product-link"]');
      if (!link || e.relatedTarget?.closest?.('[data-nav="product-link"]') === link) return;
      const ul = link.closest("ul");
      ul && ul.querySelectorAll('[data-nav="product-link"]').forEach((x) => x.removeAttribute("data-inactive"));
    }, o);
  }

  function injectNavStyle() { // F()
    styleEl = document.createElement("style");
    styleEl.textContent = `
      [data-nav="dropdowns"] { will-change: left, width, height, opacity; margin-top: 4px; overflow: hidden; }
      [data-dropdown-target] { pointer-events: auto; }
      [data-nav-backdrop] { position: fixed; inset: 0; background-color: rgba(0,0,0,0.15); backdrop-filter: blur(8px); z-index: 99; pointer-events: auto; transition: opacity 250ms ease; }
    `;
    document.head.appendChild(styleEl);
  }

  // C(): breakpoint switch on width change.
  let lastW = window.innerWidth;
  env.on(window, "resize", () => {
    const w = window.innerWidth;
    if (w === lastW) return;
    lastW = w;
    w < DESKTOP ? teardownDesktop() : setupDesktop();
  });

  if (window.innerWidth < DESKTOP) toRespo();
  else setupDesktop();

  // Following a nav link is a route change in the SPA (a fresh page load on the original): close the menu.
  env.add(() => {
    clearTimeout(timer);
    desktopAC && desktopAC.abort();
    menuTl && menuTl.kill();
    gsap.killTweensOf([p, backdrop, ...Object.values(targets)].filter(Boolean));
    backdrop && backdrop.remove();
    styleEl && styleEl.remove();
    home.forEach(([t, parent, next]) => {
      if (!parent.isConnected && !c.isConnected) return;
      parent.insertBefore(t, next && next.parentNode === parent ? next : null);
      t.removeAttribute("style");
    });
    p.removeAttribute("style");
    touched.forEach((el) => el.removeAttribute("style"));
    Object.values(triggers).forEach((t) => t.removeAttribute("data-state"));
    ["data-nav-status", "data-dropdown", "data-scroll"].forEach((a) => c.removeAttribute(a));
  });
}
