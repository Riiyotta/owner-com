import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import NavWrapper31 from "../sections/NavWrapper31.jsx";
import CsIndexHead from "../sections/CsIndexHead.jsx";
import CsIndexList from "../sections/CsIndexList.jsx";
import IsProductPage from "../sections/IsProductPage.jsx";
import Section31 from "../sections/Section31.jsx";
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

// Route /case-studies — 5 section(s), in page order.
export default function CaseStudies() {
  usePageChrome({ title: "Restaurant Case Studies and Success Stories | Owner.com", html: { "data-wf-domain": "www.owner.com", "data-wf-page": "69c55341e2887b66fb082759", "data-wf-site": "69b9330c8b70142e4e5f7d3c", "lang": "en", "class": " w-mod-js w-mod-ix" }, body: {  } });
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
      <NavWrapper31 />
      <main className="main-wrapper">
        <section className="section-cs_index">
          <div className="container-large">
            <div className="cs-index_wrap">
              <CsIndexHead />
              <div className="max-width-1000 w-dyn-list">
                <CsIndexList />
              </div>
            </div>
          </div>
        </section>
        <IsProductPage />
      </main>
      <Section31 />
    </div>
    </>
  );
}
