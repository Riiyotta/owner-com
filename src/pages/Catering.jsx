import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import NavWrapper12 from "../sections/NavWrapper12.jsx";
import TakeCateringOrdersDirectly from "../sections/TakeCateringOrdersDirectly.jsx";
import CateringBuiltToWin from "../sections/CateringBuiltToWin.jsx";
import BgColorTaupe9 from "../sections/BgColorTaupe9.jsx";
import FAQ9 from "../sections/FAQ9.jsx";
import TrustedByOwners from "../sections/TrustedByOwners.jsx";
import IsProductPage from "../sections/IsProductPage.jsx";
import Section11 from "../sections/Section11.jsx";
import css0 from "../styles/01-owner-redesign-2026.webflow.shared.a9749.css?inline"; // only this page loads it
import css1 from "../styles/inline-01.css?inline"; // only this page loads it
import css2 from "../styles/inline-03.css?inline"; // only this page loads it
import css3 from "../styles/inline-04.css?inline"; // only this page loads it
import css4 from "../styles/inline-05.css?inline"; // only this page loads it
import css5 from "../styles/inline-06.css?inline"; // only this page loads it
import css6 from "../styles/inline-07.css?inline"; // only this page loads it
import css7 from "../styles/inline-08.css?inline"; // only this page loads it
import css8 from "../styles/inline-09.css?inline"; // only this page loads it
import css9 from "../styles/inline-10.css?inline"; // only this page loads it
import css10 from "../styles/inline-11.css?inline"; // only this page loads it
import css11 from "../styles/inline-12.css?inline"; // only this page loads it

// Route /catering — 8 section(s), in page order.
export default function Catering() {
  usePageChrome({ title: "Online Catering System | Commission-Free Catering Software", html: { "data-wf-domain": "www.owner.com", "data-wf-page": "69c443ef12353701e60a117b", "data-wf-site": "69b9330c8b70142e4e5f7d3c", "lang": "en", "class": " w-mod-js w-mod-ix" }, body: {  } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
      <style>{css4}</style>
      <style>{css5}</style>
      <style>{css6}</style>
      <style>{css7}</style>
      <style>{css8}</style>
      <style>{css9}</style>
      <style>{css10}</style>
      <style>{css11}</style>
    <div className="page-wrapper">
      <div className="hide">
        <div className="hide w-embed"></div>
        <div className="hide w-embed"></div>
        <div className="hide w-embed"></div>
        <div className="hide w-embed"></div>
        <div className="hide w-embed"></div>
        <div className="hide w-embed"></div>
        <div className="w-embed"></div>
        <div className="w-embed w-iframe w-script"></div>
        <div className="hide w-embed"></div>
      </div>
      <div>
        <div className="hide w-embed"></div>
        <div className="hide w-embed w-script"></div>
      </div>
      <NavWrapper12 />
      <main className="main-wrapper">
        <TakeCateringOrdersDirectly />
        <CateringBuiltToWin />
        <BgColorTaupe9 />
        <FAQ9 />
        <TrustedByOwners />
        <IsProductPage />
        <Section11 />
      </main>
    </div>
    </>
  );
}
