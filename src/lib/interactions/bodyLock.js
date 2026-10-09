// index-new.js ce()/oe()/Ne(): scroll lock used by the mobile menu and modals.
// ce(): body { overflow:hidden; position:relative; height:100% }   oe(): clears them.
// Ne(): crossing any of the 991/767/479 breakpoints while locked releases the lock.
let locked = false;

export function lockBody() {
  if (locked) return;
  Object.assign(document.body.style, { overflow: "hidden", position: "relative", height: "100%" });
  locked = true;
}

export function unlockBody() {
  if (!locked) return;
  Object.assign(document.body.style, { overflow: "", position: "", height: "" });
  locked = false;
}

export default function bodyLock(env) {
  const bps = [991, 767, 479];
  let last = window.innerWidth;
  env.on(window, "resize", () => {
    const w = window.innerWidth;
    bps.forEach((b) => { if ((last <= b && w > b) || (last >= b && w < b)) unlockBody(); });
    last = w;
  });
  // A full page load reset the lock on the original; in the SPA the next route must start unlocked.
  env.add(unlockBody);
}
