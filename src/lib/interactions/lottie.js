// Webflow Lottie elements ([data-animation-type="lottie"]).
// Player: port of Webflow's lottie module (webflow.schunk.f7a7e858 module 5897, class `d`) on lottie-web 5.13.0 —
// the version string embedded in webflow.schunk.f2efb3c5 — and its .lottie loader (module 7933: fetch, detect the
// "PK\x03\x04" zip magic, fflate unzip, manifest.json -> animations/<id>.json, inline images/ as data URIs).
//   loop = data-loop == 1; direction = data-direction == -1 ? -1 : 1; autoplay = data-autoplay == 1 unless the
//   element is an interaction target (data-wf-target present, or data-is-ix2-target == 1); when not an interaction
//   target, data-duration > 0 sets speed = nativeDuration / data-duration; rendererSettings
//   { preserveAspectRatio: data-preserve-aspect-ratio || "xMidYMid meet", progressiveLoad, hideOnTransparent };
//   playback pauses while the element is off screen and resumes when it comes back (IntersectionObserver).
//   data-loading != "lazy" loads at once (every element in the clone is "eager").
// Interaction targets are driven the way the original's interactions drive them (IX2 events in webflow.dfc4c0ba,
// IX3 timelines in webflow.33d7b28c), with values measured on live owner.com — see DRIVERS below.
// The captured still frame (<svg> rendered by lottie at capture time) stays until the live animation's DOM is ready,
// so it remains the no-JS / load-failure fallback; cleanup puts it back.
import { gsap, ScrollTrigger } from "./env.js";

const num = (v) => { if (typeof v !== "string") return NaN; const n = parseFloat(v); return Number.isNaN(n) ? NaN : n; };

async function fetchLottie(src) { // module 7933 f()
  const buf = await fetch(new URL(src, window.location.href).href).then((r) => r.arrayBuffer());
  const head = new Uint8Array(buf, 0, 4);
  if (!(head[0] === 80 && head[1] === 75 && head[2] === 3 && head[3] === 4)) return JSON.parse(new TextDecoder().decode(buf));
  const { unzip, strFromU8 } = await import("fflate");
  const files = await new Promise((res, rej) => unzip(new Uint8Array(buf), (e, f) => (e ? rej(e) : res(f))));
  const read = (p) => (files[p] ? strFromU8(files[p]) : null);
  const b64 = (u8) => new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(String(fr.result).split(",", 2)[1]); fr.readAsDataURL(new Blob([u8])); });
  const manifest = JSON.parse(read("manifest.json"));
  if (!manifest.animations || !manifest.animations.length) throw new Error("No animations listed in the manifest");
  const data = JSON.parse(read(`animations/${manifest.animations[0].id}.json`));
  if (data.assets) {
    await Promise.all(data.assets.map(async (a) => {
      if (a.p == null || !files[`images/${a.p}`]) return;
      const ext = a.p.split(".").pop(), d = await b64(files[`images/${a.p}`]);
      a.p = ["svg", "svg+xml"].includes(ext) ? `data:image/svg+xml;base64,${d}` : ["png", "jpg", "jpeg", "gif", "webp"].includes(ext) ? `data:image/${ext};base64,${d}` : `data:;base64,${d}`;
      a.e = 1;
    }));
  }
  return data;
}

// Interaction drivers, keyed by data-w-id (or by a class for selector-targeted ones).
//  clickLoop   IX2 MOUSE_CLICK + PLUGIN_LOTTIE_EFFECT "pluginLottieLoop" with an auto-stop on the next click:
//              click plays from frame 0 looping at the file's native rate, next click stops at frame 0.
//              (owner-stack tab visuals — clicked by owner-animations.js when a tab enters/leaves — and the demo
//              form loader.) Live /: tab lottie advanced 48 frames / 0.8s (= 60fps native) from 0, reset to 0 after.
//  viewLoop    IX2 SCROLL_INTO_VIEW (offset 10%) + pluginLottieLoop, auto-stop on scroll out: loops at native rate
//              while in view, pauses out of view, resumes on return. Breakpoints from the event's mediaQueries.
//              Live /builders-wanted: LM funnel 541f @29.97fps (= data-duration 18.05s) looping, frozen when out.
//  viewTo90    IX2 SCROLL_INTO_VIEW (offset 25%) + a-62 "hp lottie -> in view": jump to 0, then linear to 90%
//              over 3500ms. Live /how-owner-works: frame 0 -> 75.6 of 84 linearly over 3.5s, then holds.
//  scrollScrub IX2 SCROLLING_IN_VIEW + a-61 on .eng-lp_figure-wall (smoothing 90): progress 0..100% of the child
//              .eng-lp_figure-lottie. Live: frame 0 until the wall's top reaches 50% of the viewport, then linear to
//              the last frame when its bottom reaches the viewport top.
//  ix3Scroll   IX3 (homepage chunk) wf:scroll { start "center bottom", end "bottom top", enter play, leave pause,
//              enterBack resume, leaveBack pause } on a wf:lottie 0->1 timeline. Live /: linear at 60fps native,
//              anim 3 = 6.33s repeat -1, anim 4 = 8.12s once.
const DRIVERS = {
  "676131ee-e348-72bc-8ec3-bd8aac64b7e6": { type: "clickLoop" },
  "bd42e93e-a94e-d274-7c67-1f59724feaec": { type: "clickLoop" },
  "9ec7974e-2283-4a26-be89-ae3e43c0bd3b": { type: "clickLoop" },
  "d79de28b-3f29-45b7-56c9-fcffde5a1923": { type: "clickLoop" },
  "af7dbd56-934b-61e8-03a8-10a7f17b0f87": { type: "viewLoop", offset: 0.1, media: "(min-width: 768px)" },
  "98b3fa77-a952-12dc-ecc2-77edd8551361": { type: "viewLoop", offset: 0.1, media: "(max-width: 767px)" },
  "29291d81-c5f9-86b1-a19c-984b7c4c4cef": { type: "viewTo90", offset: 0.25, to: 0.9, ms: 3500 },
  "1803559c-9199-332e-bd63-6b382fdaaffa": { type: "ix3Scroll", duration: 6.33, repeat: -1 },
  "5d31406a-0a52-a845-6316-b2893676902c": { type: "ix3Scroll", duration: 8.12, repeat: 0 },
};

class Player { // Webflow class `d`
  constructor(el, lottie, env) {
    this.el = el; this.lottie = lottie; this.env = env; this.item = null;
    this.offscreen = false; this.wasPlaying = false; this.pendingAutoplay = false; this.skipped = null;
    this.ready = new Promise((r) => { this._ready = r; });
  }
  async load() {
    const d = this.el.dataset, src = d.src || "";
    const renderer = d.renderer || "svg";
    const loop = num(d.loop) === 1, direction = num(d.direction) === -1 ? -1 : 1;
    const wfTarget = !!d.wfTarget, autoplay = !wfTarget && num(d.autoplay) === 1;
    const dur = Number.isNaN(num(d.duration)) ? 0 : num(d.duration);
    const hasIx = wfTarget || num(d.isIx2Target) === 1;
    this.config = { loop, direction, autoplay, dur, hasIx };
    let animationData;
    if (src.endsWith(".lottie")) {
      try { animationData = await fetchLottie(src); } catch (e) { return; } // keep the still
      if (this.dead) return;
    }
    const still = Array.from(this.el.children).filter((c) => c.tagName.toLowerCase() === "svg" || c.tagName.toLowerCase() === "canvas");
    try {
      this.item = this.lottie.loadAnimation({
        container: this.el, loop, autoplay: false, renderer,
        rendererSettings: { preserveAspectRatio: d.preserveAspectRatio || "xMidYMid meet", progressiveLoad: true, hideOnTransparent: true },
        ...(animationData ? { animationData } : { path: src }),
      });
    } catch (e) { return; }
    const item = this.item;
    // Keep the captured frame until the live one exists; lottie-web appends its own <svg>.
    item.addEventListener("DOMLoaded", () => {
      this.removedStill = still.map((s) => [s, s.parentNode, s.nextSibling]);
      still.forEach((s) => s.remove());
      if (!hasIx) {
        item.setDirection(direction);
        const native = item.getDuration();
        if (dur > 0 && dur !== native) item.setSpeed(native / dur);
        if (autoplay) (this.offscreen ? (this.pendingAutoplay = true) : this.play());
      } else item.goToAndStop(0, true);
      this._ready(this);
    });
    item.addEventListener("data_failed", () => { /* still frame stays */ });
  }
  play() { if (!this.item) return; this.item.goToAndPlay(this.item.playDirection === 1 ? 0 : this.frames, true); this.playing = true; }
  stop() { if (!this.item) return; this.item.goToAndStop(this.item.playDirection === 1 ? 0 : this.frames, true); this.playing = false; }
  get frames() { return this.item ? this.item.totalFrames : 0; }
  get isPlaying() { return !!this.item && !this.item.isPaused; }
  frame(f) { if (!this.item) return; if (this.offscreen) { this.skipped = f; return; } this.item.goToAndStop(f, true); }
  pauseByVisibility() { this.offscreen = true; if (this.item) { this.wasPlaying = this.isPlaying; if (this.isPlaying) this.item.pause(); } }
  resumeByVisibility() {
    this.offscreen = false;
    if (!this.item) return;
    if (this.skipped != null) { this.item.goToAndStop(this.skipped, true); this.skipped = null; }
    if (this.wasPlaying) { this.wasPlaying = false; this.item.play(); return; }
    if (this.pendingAutoplay) { this.pendingAutoplay = false; this.play(); }
  }
  destroy() {
    this.dead = true;
    if (this.item) { try { this.item.destroy(); } catch (e) { /* noop */ } this.item = null; }
    (this.removedStill || []).forEach(([s, parent, next]) => parent.insertBefore(s, next && next.parentNode === parent ? next : null));
  }
}

function drive(env, p, cfg) {
  const el = p.el;
  if (cfg.type === "clickLoop") {
    env.on(el, "click", () => p.ready.then(() => {
      if (p.isPlaying) p.stop();
      else { p.item.loop = true; p.item.goToAndPlay(0, true); }
    }));
  } else if (cfg.type === "viewLoop") {
    const mq = window.matchMedia(cfg.media);
    let started = false;
    const io = env.observer(new IntersectionObserver((es) => es.forEach((e) => p.ready.then(() => {
      if (!mq.matches) return;
      if (e.isIntersecting) { p.item.loop = true; started ? p.item.play() : p.item.goToAndPlay(0, true); started = true; }
      else if (p.isPlaying) p.item.pause();
    })), { rootMargin: `0px 0px -${cfg.offset * 100}% 0px` }));
    io.observe(el);
  } else if (cfg.type === "viewTo90") {
    let tw = null;
    const io = env.observer(new IntersectionObserver((es) => es.forEach((e) => p.ready.then(() => {
      tw && tw.kill();
      if (!e.isIntersecting) return;
      const st = { f: 0 }, end = p.frames * cfg.to;
      p.frame(0);
      tw = gsap.to(st, { f: end, duration: cfg.ms / 1000, ease: "none", onUpdate: () => p.item && p.item.goToAndStop(st.f, true) });
    })), { rootMargin: `0px 0px -${cfg.offset * 100}% 0px` }));
    io.observe(el);
    env.add(() => tw && tw.kill());
  } else if (cfg.type === "ix3Scroll") {
    p.ready.then(() => {
      if (p.dead) return;
      const st = { p: 0 };
      const tl = gsap.to(st, {
        p: 1, duration: cfg.duration, repeat: cfg.repeat, ease: "none", paused: true,
        onUpdate: () => p.item && p.item.goToAndStop(st.p * p.frames, true),
      });
      const trig = ScrollTrigger.create({ trigger: el, start: "center bottom", end: "bottom top", animation: tl, toggleActions: "play pause resume pause" });
      env.add(() => { trig.kill(); tl.kill(); });
    });
  }
}

function scrubWall(env, wall, players) {
  if (!players.length) return;
  Promise.all(players.map((p) => p.ready)).then(() => {
    if (players.some((p) => p.dead)) return;
    const st = { p: 0 };
    const tw = gsap.to(st, {
      p: 1, ease: "none",
      onUpdate: () => players.forEach((p) => p.item && p.item.goToAndStop(st.p * p.frames, true)),
      scrollTrigger: { trigger: wall, start: "top 50%", end: "bottom top", scrub: 0.5 }, // IX2 smoothing 90
    });
    env.add(() => { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); });
  });
}

export default function lottieModule(env) {
  const els = Array.from(document.querySelectorAll('[data-animation-type="lottie"]'));
  if (!els.length) return;
  let cancelled = false;
  const players = [];
  env.add(() => { cancelled = true; players.forEach((p) => p.destroy()); });
  import("lottie-web/build/player/lottie_svg").then(({ default: lottie }) => {
    if (cancelled) return;
    const vis = env.observer(new IntersectionObserver((es) => es.forEach((e) => {
      const p = players.find((x) => x.el === e.target);
      p && (e.isIntersecting ? p.resumeByVisibility() : p.pauseByVisibility());
    })));
    els.forEach((el) => {
      const p = new Player(el, lottie, env);
      players.push(p);
      p.load();
      vis.observe(el);
      const cfg = DRIVERS[el.getAttribute("data-w-id")];
      if (cfg) drive(env, p, cfg);
    });
    document.querySelectorAll(".eng-lp_figure-wall").forEach((wall) => {
      scrubWall(env, wall, players.filter((p) => wall.contains(p.el) && p.el.classList.contains("eng-lp_figure-lottie")));
    });
  });
}
