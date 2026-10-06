import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import NavWrapper15 from "../sections/NavWrapper15.jsx";
import ThePOSBuiltTo from "../sections/ThePOSBuiltTo.jsx";
import HowOwnerPOSTurns from "../sections/HowOwnerPOSTurns.jsx";
import WhatRestaurantOwnersSay from "../sections/WhatRestaurantOwnersSay.jsx";
import Top3ReasonsTo2 from "../sections/Top3ReasonsTo2.jsx";
import FAQ11 from "../sections/FAQ11.jsx";
import TheEasiestWayTo4 from "../sections/TheEasiestWayTo4.jsx";
import Section14 from "../sections/Section14.jsx";
import css0 from "../styles/01-owner-redesign-2026.webflow.shared.a9749.css?inline"; // only this page loads it
import css1 from "../styles/inline-01.css?inline"; // only this page loads it
import css2 from "../styles/inline-03.css?inline"; // only this page loads it
import css3 from "../styles/inline-19.css?inline"; // only this page loads it
import css4 from "../styles/inline-04.css?inline"; // only this page loads it
import css5 from "../styles/inline-05.css?inline"; // only this page loads it
import css6 from "../styles/inline-06.css?inline"; // only this page loads it
import css7 from "../styles/inline-07.css?inline"; // only this page loads it
import css8 from "../styles/inline-08.css?inline"; // only this page loads it
import css9 from "../styles/inline-09.css?inline"; // only this page loads it
import css10 from "../styles/inline-10.css?inline"; // only this page loads it
import css11 from "../styles/inline-11.css?inline"; // only this page loads it
import css12 from "../styles/inline-12.css?inline"; // only this page loads it

// Route /pos — 8 section(s), in page order.
export default function Pos() {
  usePageChrome({ title: "Restaurant Point of Sale System | Owner.com", html: { "data-wf-domain": "www.owner.com", "data-wf-page": "69c4478fd9150aa339334ce3", "data-wf-site": "69b9330c8b70142e4e5f7d3c", "lang": "en", "class": " w-mod-js w-mod-ix" }, body: {  } });
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
      <style>{css12}</style>
    <div className="page-wrapper">
      <div className="hide w-embed"></div>
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
      <NavWrapper15 />
      <main className="main-wrapper">
        <ThePOSBuiltTo />
        <HowOwnerPOSTurns />
        <WhatRestaurantOwnersSay />
        <Top3ReasonsTo2 />
        <FAQ11 />
        <TheEasiestWayTo4 />
        <Section14 />
      </main>
    </div>
    </>
  );
}
