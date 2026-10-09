import { useEffect } from "react";
import usePageChrome from "../lib/usePageChrome.js";
import DemoHiddenControl from "../sections/DemoHiddenControl.jsx";
import DemoVariantModal from "../sections/DemoVariantModal.jsx";
import cssPage from "../styles/demo-page.css?inline"; // only this page loads it
import cssSpz from "../styles/demo-spz.css?inline"; // only this page loads it

// Route /demo — the live page renders the A/B variant spz_1004_v1: the control <main> is hidden and a full-screen
// overlay with the qualifying questions + demo form is shown. Trackers / astro-island scripts from the original are dropped.
export default function Demo() {
  usePageChrome({ title: "Get a free demo", html: { "lang": "en" }, body: {} });
  // Original: body.spz_1004_v1{overflow:hidden!important}. Applied while this page is mounted, restored on leave.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.setProperty("overflow", "hidden", "important");
    return () => { document.body.style.overflow = prev; };
  }, []);
  return (
    <>
      <style>{cssPage}</style>
      <style>{cssSpz}</style>
      <div className="spz_1004_v1" style={{ display: "contents" }}>
        <DemoHiddenControl />
        <DemoVariantModal />
      </div>
    </>
  );
}
