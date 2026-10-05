import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import EngSectionEngHero from "../sections/EngSectionEngHero.jsx";
import WeWantYouIf from "../sections/WeWantYouIf.jsx";
import Section26 from "../sections/Section26.jsx";
import MeetYulianaVasquez from "../sections/MeetYulianaVasquez.jsx";
import Section27 from "../sections/Section27.jsx";
import EngMaxwdith from "../sections/EngMaxwdith.jsx";
import EngStepsFaq from "../sections/EngStepsFaq.jsx";
import MaxWidthFull from "../sections/MaxWidthFull.jsx";
import EngLpFigureWall from "../sections/EngLpFigureWall.jsx";
import Section28 from "../sections/Section28.jsx";
import OurVisionStretchesFar from "../sections/OurVisionStretchesFar.jsx";
import EngLpFooter from "../sections/EngLpFooter.jsx";
import css0 from "../styles/01-owner-redesign-2026.webflow.shared.a9749.css?inline"; // only this page loads it
import css1 from "../styles/inline-01.css?inline"; // only this page loads it
import css2 from "../styles/inline-03.css?inline"; // only this page loads it
import css3 from "../styles/inline-22.css?inline"; // only this page loads it
import css4 from "../styles/inline-23.css?inline"; // only this page loads it
import css5 from "../styles/inline-24.css?inline"; // only this page loads it
import css6 from "../styles/inline-25.css?inline"; // only this page loads it
import css7 from "../styles/inline-26.css?inline"; // only this page loads it

// Route /builders-wanted — 12 section(s), in page order.
export default function BuildersWanted() {
  usePageChrome({ title: "Builders Wanted | Owner.com", html: { "data-wf-domain": "www.owner.com", "data-wf-page": "69b9330c8b70142e4e5f8083", "data-wf-site": "69b9330c8b70142e4e5f7d3c", "lang": "en", "class": " w-mod-js w-mod-ix" }, body: { "data-mode": "light", "data-intercom": "off", "class": "eng-lp" } });
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
    <div className="hide w-embed"></div>
    <div className="eng-page-wrapper">
      <div className="hide">
        <div className="hide w-embed"></div>
        <div className="hide w-embed"></div>
      </div>
      <main className="eng-main-wrapper">
        <EngSectionEngHero />
        <WeWantYouIf />
        <Section26 />
        <MeetYulianaVasquez />
        <Section27 />
        <section section-full="" className="section_eng-levers">
          <div className="w-embed"></div>
          <div className="eng-padding-global">
            <div className="eng-container-large">
              <div className="eng-steps_levers">
                <EngMaxwdith />
                <EngStepsFaq />
                <MaxWidthFull />
              </div>
            </div>
          </div>
        </section>
        <EngLpFigureWall />
        <Section28 />
        <OurVisionStretchesFar />
        <EngLpFooter />
      </main>
    </div>
    <div className="series_b-list_3"></div>
    </>
  );
}
