// Port of index-new.js Bunny player (`Ke` -> `Te`, plus helpers fe/ie/Pe/Z/ee/ke), webflow-assets.owner.com/3.2.63.
// The clone's sources are local progressive MP4s (/_videos/<id>.mp4), so the native branch is used: the original's
// HLS branches (Safari native .m3u8 / hls.js) and its manifest probe bt() are replaced by plain `video.src = …`.
// Behaviour kept from the script:
//  - data-player-lazy="true"|"meta": preload none, src assigned on first play (meta's manifest probe is not ported:
//    on live it leaves the player idle/00:00 anyway); otherwise src assigned immediately.
//  - status attribute machine the CSS (inline-12.css) keys off: idle -> ready (metadata known, not yet played)
//    -> loading (play requested / waiting) -> playing -> paused; ended -> paused + activated=false.
//  - data-player-activated true on play; data-player-muted mirrors video.muted; data-player-fullscreen;
//    data-player-hover active for 3s after pointer activity inside, idle on leave.
//  - controls: [data-player-control="play|pause|playpause|mute|fullscreen"]; starting one player pauses and
//    rewinds every other one; timeline scrubbing on [data-player-timeline] (180ms seek throttle) with progress /
//    buffered bars and time labels.
//  - data-player-autoplay="true": muted + loop, played/paused by an IntersectionObserver (threshold 0.1).
//  - data-player-update-size="true" pads [data-player-before] to the video's aspect ratio (the clone's players all
//    use "cover", which the script leaves to CSS).
// A missing file (videos still downloading) only produces a media error event: the player stays idle with its poster.

const pad = (n) => (n < 10 ? "0" : "") + n;
function fmt(s) { // Z()
  if (!isFinite(s) || s < 0) return "00:00";
  const t = Math.floor(s), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), x = t % 60;
  return h > 0 ? h + ":" + pad(m) + ":" + pad(x) : pad(m) + ":" + pad(x);
}
const setText = (els, v) => els.forEach((e) => { e.textContent = v; }); // ee()
const safePlay = (v) => { const p = v.play(); p && typeof p.then === "function" && p.catch(() => {}); }; // ke()
function markReady(el, pending) { // fe()
  if (!pending && el.getAttribute("data-player-activated") !== "true" && el.getAttribute("data-player-status") === "idle") el.setAttribute("data-player-status", "ready");
}
function sizeBefore(el, mode, w, h) { // ie()
  if (mode !== "true" || !w || !h) return;
  const b = el.querySelector("[data-player-before]");
  if (b) b.style.paddingTop = (h / w) * 100 + "%";
}
function sizeBeforeOnce(el, mode, v) { // Pe()
  if (mode !== "true") return;
  const b = el.querySelector("[data-player-before]");
  if (b && !(b.style.paddingTop && b.style.paddingTop !== "0%") && v.videoWidth && v.videoHeight) sizeBefore(el, mode, v.videoWidth, v.videoHeight);
}

export default function video(env) {
  const players = document.querySelectorAll("[data-bunny-player-init]");
  if (!players.length) return;
  const initial = new Map();
  const on = env.on;

  players.forEach((el) => {
    const src = el.getAttribute("data-player-src");
    if (!src) return;
    const v = el.querySelector("video");
    if (!v) return;
    initial.set(el, ["data-player-status", "data-player-activated", "data-player-muted", "data-player-fullscreen", "data-player-hover"].map((a) => [a, el.getAttribute(a)]));
    try { v.pause(); } catch (e) { /* noop */ }
    try { v.removeAttribute("src"); v.load(); } catch (e) { /* noop */ }

    const status = (s) => { if (el.getAttribute("data-player-status") !== s) el.setAttribute("data-player-status", s); };
    const setMuted = (m) => { v.muted = !!m; el.setAttribute("data-player-muted", v.muted ? "true" : "false"); };
    const setFs = (f) => el.setAttribute("data-player-fullscreen", f ? "true" : "false");
    const setActivated = (a) => el.setAttribute("data-player-activated", a ? "true" : "false");
    if (!el.hasAttribute("data-player-activated")) setActivated(false);

    const timeline = el.querySelector("[data-player-timeline]");
    const progress = el.querySelector("[data-player-progress]");
    const buffered = el.querySelector("[data-player-buffered]");
    const handle = el.querySelector("[data-player-timeline-handle]");
    const durEls = el.querySelectorAll("[data-player-time-duration]");
    const curEls = el.querySelectorAll("[data-player-time-progress]");
    const updateSize = el.getAttribute("data-player-update-size");
    const lazyAttr = el.getAttribute("data-player-lazy");
    const lazy = lazyAttr === "true", meta = lazyAttr === "meta";
    const autoplay = el.getAttribute("data-player-autoplay") === "true";
    const startMuted = el.getAttribute("data-player-muted") === "true";
    let pending = false; // a
    let failed = false; // clone: source missing / not yet downloaded

    if (autoplay) { setMuted(true); v.loop = true; } else setMuted(startMuted);
    v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.setAttribute("webkit-playsinline", "");
    v.playsInline = true;
    if (typeof v.disableRemotePlayback !== "undefined") v.disableRemotePlayback = true;
    if (autoplay) v.autoplay = false;

    let attached = false; // O
    function attach() { // z() — native branch
      if (attached) return;
      attached = true;
      if (lazy || meta) v.preload = "auto";
      v.src = src;
      v.addEventListener("loadedmetadata", () => {
        markReady(el, pending);
        if (updateSize === "true") sizeBefore(el, updateSize, v.videoWidth, v.videoHeight);
        durEls.length && setText(durEls, fmt(v.duration));
      }, { once: true, signal: env.signal });
    }

    // C() (lazy="meta") read the HLS manifest for size/duration and then marked the player "ready". Measured on live
    // owner.com/case-studies/salud: meta players stay status=idle, duration 00:00 until clicked, so no probe here.

    if (updateSize === "true" && !meta && !lazy) {
      const prev = v.preload;
      v.preload = "metadata";
      v.addEventListener("loadedmetadata", () => { sizeBefore(el, updateSize, v.videoWidth, v.videoHeight); v.preload = prev || ""; }, { once: true, signal: env.signal });
      v.src = src;
    }

    if (meta) v.preload = "none";
    else if (lazy) v.preload = "none";
    else attach();

    function playPause() { // N()
      document.querySelectorAll("[data-bunny-player-init]").forEach((other) => {
        if (other === el) return;
        const ov = other.querySelector("video");
        if (ov && !ov.paused) {
          ov.pause(); ov.currentTime = 0;
          setTimeout(() => { other.setAttribute("data-player-activated", "false"); other.setAttribute("data-player-status", "idle"); }, 0);
        }
      });
      if (v.paused || v.ended) {
        if ((lazy || meta) && !attached) attach();
        if (failed) { failed = false; attached = false; attach(); } // retry: the file may have finished downloading
        pending = true; status("loading"); safePlay(v);
      } else v.pause();
    }
    const toggleMute = () => { v.muted = !v.muted; el.setAttribute("data-player-muted", v.muted ? "true" : "false"); };
    const isFs = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
    const enterFs = () => {
      if (el.requestFullscreen) return el.requestFullscreen().catch(() => {});
      if (v.requestFullscreen) return v.requestFullscreen().catch(() => {});
      if (v.webkitSupportsFullscreen && typeof v.webkitEnterFullscreen === "function") return v.webkitEnterFullscreen();
    };
    const exitFs = () => {
      if (document.exitFullscreen) return document.exitFullscreen().catch(() => {});
      if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
      if (v.webkitDisplayingFullscreen && typeof v.webkitExitFullscreen === "function") return v.webkitExitFullscreen();
    };
    const toggleFs = () => (isFs() || v.webkitDisplayingFullscreen ? exitFs() : enterFs());

    on(document, "fullscreenchange", () => setFs(isFs()));
    on(document, "webkitfullscreenchange", () => setFs(isFs()));
    on(v, "webkitbeginfullscreen", () => setFs(true));
    on(v, "webkitendfullscreen", () => setFs(false));
    on(el, "click", (e) => {
      const c = e.target.closest("[data-player-control]");
      if (!c || !el.contains(c)) return;
      const k = c.getAttribute("data-player-control");
      if (k === "play" || k === "pause" || k === "playpause") playPause();
      else if (k === "mute") toggleMute();
      else if (k === "fullscreen") toggleFs();
    });

    const times = () => { durEls.length && setText(durEls, fmt(v.duration)); curEls.length && setText(curEls, fmt(v.currentTime)); }; // l()
    on(v, "timeupdate", times);
    on(v, "loadedmetadata", () => { times(); sizeBeforeOnce(el, updateSize, v); });
    on(v, "loadeddata", () => sizeBeforeOnce(el, updateSize, v));
    on(v, "playing", () => sizeBeforeOnce(el, updateSize, v));
    on(v, "durationchange", times);

    let raf = 0;
    const paint = () => { // T()
      if (!v.duration) return;
      const pct = (v.currentTime / v.duration) * 100;
      if (progress) progress.style.transform = "translateX(" + (-100 + pct) + "%)";
      if (handle) handle.style.left = pct + "%";
    };
    const loop = () => { paint(); if (!v.paused && !v.ended) raf = requestAnimationFrame(loop); }; // _()
    const paintBuffered = () => { // H()
      if (!buffered || !v.duration || !v.buffered.length) return;
      buffered.style.transform = "translateX(" + (-100 + (v.buffered.end(v.buffered.length - 1) / v.duration) * 100) + "%)";
    };
    on(v, "progress", paintBuffered);
    on(v, "loadedmetadata", paintBuffered);
    on(v, "durationchange", paintBuffered);
    on(v, "play", () => { setActivated(true); cancelAnimationFrame(raf); loop(); status("playing"); });
    on(v, "playing", () => { pending = false; status("playing"); });
    on(v, "pause", () => { pending = false; cancelAnimationFrame(raf); paint(); status(failed ? "idle" : "paused"); });
    on(v, "waiting", () => status("loading"));
    on(v, "canplay", () => markReady(el, pending));
    on(v, "ended", () => { pending = false; cancelAnimationFrame(raf); paint(); status("paused"); setActivated(false); });
    // Clone addition: a source that is missing (still downloading) must not leave the spinner up.
    on(v, "error", () => { failed = true; pending = false; cancelAnimationFrame(raf); setActivated(false); status("idle"); });
    on(v, "loadedmetadata", () => { failed = false; });
    env.add(() => cancelAnimationFrame(raf));

    if (timeline) {
      let dragging = false, wasPlaying = false, target = 0, lastSeek = 0, rect = null;
      const ratio = (x) => { rect || (rect = timeline.getBoundingClientRect()); return Math.min(1, Math.max(0, (x - rect.left) / rect.width)); };
      const preview = (r) => {
        if (!v.duration) return;
        const pct = r * 100;
        if (progress) progress.style.transform = "translateX(" + (-100 + pct) + "%)";
        if (handle) handle.style.left = pct + "%";
        curEls.length && setText(curEls, fmt(r * v.duration));
      };
      const seek = (now) => { if (v.duration && now - lastSeek >= 180) { lastSeek = now; v.currentTime = target; } };
      const move = (e) => { if (!dragging) return; const r = ratio(e.clientX); target = r * v.duration; preview(r); seek(performance.now()); e.preventDefault(); };
      const up = () => {
        if (!dragging) return;
        dragging = false; el.setAttribute("data-timeline-drag", "false"); rect = null;
        v.currentTime = target;
        wasPlaying ? safePlay(v) : (paint(), times());
        window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up);
      };
      const down = (e) => {
        if (!v.duration) return;
        dragging = true; wasPlaying = !v.paused && !v.ended; if (wasPlaying) v.pause();
        el.setAttribute("data-timeline-drag", "true"); rect = timeline.getBoundingClientRect();
        const r = ratio(e.clientX); target = r * v.duration; preview(r); seek(performance.now());
        timeline.setPointerCapture && timeline.setPointerCapture(e.pointerId);
        window.addEventListener("pointermove", move, { passive: false }); window.addEventListener("pointerup", up, { passive: true });
        e.preventDefault();
      };
      on(window, "resize", () => { if (!dragging) rect = null; });
      on(timeline, "pointerdown", down, { passive: false });
      handle && on(handle, "pointerdown", down, { passive: false });
      env.add(() => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); });
    }

    let hoverTimer = 0, tracking = false;
    const hover = (s) => { if (el.getAttribute("data-player-hover") !== s) el.setAttribute("data-player-hover", s); };
    const poke = () => { hover("active"); clearTimeout(hoverTimer); hoverTimer = setTimeout(() => hover("idle"), 3000); };
    const track = (e) => { const r = el.getBoundingClientRect(); if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) poke(); };
    on(el, "pointerdown", poke);
    on(document, "fullscreenchange", poke);
    on(document, "webkitfullscreenchange", poke);
    on(el, "pointerenter", () => { poke(); if (!tracking) { tracking = true; window.addEventListener("pointermove", track, { passive: true }); } });
    on(el, "pointerleave", () => { hover("idle"); clearTimeout(hoverTimer); if (tracking) { tracking = false; window.removeEventListener("pointermove", track); } });
    env.add(() => { clearTimeout(hoverTimer); window.removeEventListener("pointermove", track); });

    if (autoplay) {
      env.observer(new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting && en.intersectionRatio > 0) {
          if ((lazy || meta) && !attached) attach();
          if (v.paused) { pending = true; status("loading"); safePlay(v); } else status("playing");
        } else if (!v.paused && !v.ended) { v.pause(); status("paused"); }
      }), { threshold: 0.1 })).observe(el);
    }
  });

  env.add(() => {
    initial.forEach((attrs, el) => {
      const v = el.querySelector("video");
      if (v) { try { v.pause(); v.removeAttribute("src"); v.load(); } catch (e) { /* noop */ } }
      attrs.forEach(([a, val]) => (val === null ? el.removeAttribute(a) : el.setAttribute(a, val)));
      el.removeAttribute("data-timeline-drag");
    });
  });
}
