// Port of index-new.js `Ue` (CSS marquee). The keyframes live in the site CSS (inline-05.css:
// [data-css-marquee-list] { animation: translateX 60s linear infinite } / translateXRev for ="reverse").
// The script: duplicates every list once, sets animation-duration = list.offsetWidth / 20 seconds
// (i.e. 20 px/s; live homepage reviews row 3312px -> 165.6s), keeps it paused until the marquee intersects the
// viewport (IO threshold 0), pauses on hover, and on the first touch below 992px turns it into a native
// horizontal scroller at the current offset (data-css-marquee-status="scrollable").
export default function marquee(env) {
  const groups = document.querySelectorAll("[data-css-marquee]");
  if (!groups.length) return;
  const added = [];

  groups.forEach((m) => {
    m.querySelectorAll("[data-css-marquee-list]").forEach((list) => {
      const dup = list.cloneNode(true);
      dup.setAttribute("aria-hidden", "true");
      m.appendChild(dup);
      added.push(dup);
    });
  });

  const lists = (m) => m.querySelectorAll("[data-css-marquee-list]");
  const io = env.observer(new IntersectionObserver((entries) => {
    entries.forEach((en) => lists(en.target).forEach((l) => { l.style.animationPlayState = en.isIntersecting ? "running" : "paused"; }));
  }, { threshold: 0 }));

  groups.forEach((m) => {
    lists(m).forEach((l) => { l.style.animationDuration = l.offsetWidth / 20 + "s"; l.style.animationPlayState = "paused"; });
    io.observe(m);
    const set = (s) => lists(m).forEach((l) => { l.style.animationPlayState = s; });
    env.on(m, "mouseenter", () => set("paused"));
    env.on(m, "mouseleave", () => set("running"));
    env.on(m, "touchstart", () => {
      if (window.innerWidth > 991) return;
      const ls = lists(m);
      if (!ls.length) return;
      const tr = window.getComputedStyle(ls[0]).transform;
      let x = 0;
      if (tr && tr !== "none") { const mm = tr.match(/matrix.*\((.+)\)/); if (mm) x = Math.abs(parseFloat(mm[1].split(",")[4])); }
      m.setAttribute("data-css-marquee-status", "scrollable");
      ls.forEach((l, i) => { if (i === 0) { l.style.animation = "none"; l.style.transform = "none"; } else l.remove(); });
      m.scrollLeft = Math.min(x, m.scrollWidth - m.clientWidth);
    }, { once: true, passive: true });
  });

  env.add(() => {
    added.forEach((d) => d.remove());
    groups.forEach((m) => {
      m.removeAttribute("data-css-marquee-status");
      lists(m).forEach((l) => { l.style.animation = ""; l.style.animationDuration = ""; l.style.animationPlayState = ""; l.style.transform = ""; });
    });
  });
}
