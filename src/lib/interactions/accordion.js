// Port of index-new.js `We` (CSS accordions). The motion itself lives in the site's own CSS (inline-05.css):
//   [data-accordion-content] { transition: grid-template-rows .6s cubic-bezier(.625,.05,0,1) }  -> 1fr when active
//   [data-accordion-icon]    { transition: transform .6s cubic-bezier(.625,.05,0,1) }           -> rotate(180deg)
// The script only flips data-accordion-status on the clicked item (and closes siblings when the container has
// data-accordion-close-siblings="true").
// Clone additions for keyboard access: non-focusable toggles get tabindex/role=button, Enter/Space activate,
// aria-expanded mirrors the status.
const DESKTOP = 992;

export default function accordion(env) {
  const containers = document.querySelectorAll("[data-accordion-css-init]");
  if (!containers.length) return;

  const syncAria = (item) => {
    const tog = item.querySelector("[data-accordion-toggle]");
    if (!tog) return;
    // Desktop nav triggers are dropdowns, not accordions: nav.js owns their aria-expanded there.
    if (item.hasAttribute("data-dropdown-trigger") && window.innerWidth >= DESKTOP) return;
    tog.setAttribute("aria-expanded", item.getAttribute("data-accordion-status") === "active" ? "true" : "false");
  };

  containers.forEach((n) => {
    const closeSiblings = n.getAttribute("data-accordion-close-siblings") === "true";
    env.on(n, "click", (r) => {
      const t = r.target.closest("[data-accordion-toggle]");
      if (!t) return;
      const o = t.closest("[data-accordion-status]");
      if (!o) return;
      const active = o.getAttribute("data-accordion-status") === "active";
      o.setAttribute("data-accordion-status", active ? "not-active" : "active");
      if (closeSiblings && !active) {
        n.querySelectorAll('[data-accordion-status="active"]').forEach((c) => { if (c !== o) { c.setAttribute("data-accordion-status", "not-active"); syncAria(c); } });
      }
      syncAria(o);
    });
    env.on(n, "keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const t = e.target.closest("[data-accordion-toggle]");
      if (!t || t.matches("a, button")) return;
      e.preventDefault();
      t.click();
    });
    n.querySelectorAll("[data-accordion-toggle]").forEach((t) => {
      if (!t.matches("a, button, [tabindex]")) { t.setAttribute("tabindex", "0"); t.setAttribute("role", "button"); }
      const item = t.closest("[data-accordion-status]");
      item && syncAria(item);
    });
  });
}
