import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import NavWrapper from "../sections/NavWrapper.jsx";
import TheAIPlatformRestaurants from "../sections/TheAIPlatformRestaurants.jsx";
import GrowSalesLikeThese from "../sections/GrowSalesLikeThese.jsx";
import WithOwnerYouGet from "../sections/WithOwnerYouGet.jsx";
import SeeWhyWeRe from "../sections/SeeWhyWeRe.jsx";
import GiveYourRestaurantThe from "../sections/GiveYourRestaurantThe.jsx";
import TrustedByOwners from "../sections/TrustedByOwners.jsx";
import S3BeliefsThatGuide from "../sections/S3BeliefsThatGuide.jsx";
import SeeOurFreeGuides from "../sections/SeeOurFreeGuides.jsx";
import TheEasiestWayTo from "../sections/TheEasiestWayTo.jsx";
import Section from "../sections/Section.jsx";
import css0 from "../styles/01-owner-redesign-2026.webflow.shared.a9749.css?inline"; // only this page loads it
import css1 from "../styles/inline-01.css?inline"; // only this page loads it
import css2 from "../styles/inline-02.css?inline"; // only this page loads it
import css3 from "../styles/inline-03.css?inline"; // only this page loads it
import css4 from "../styles/inline-04.css?inline"; // only this page loads it
import css5 from "../styles/inline-05.css?inline"; // only this page loads it
import css6 from "../styles/inline-06.css?inline"; // only this page loads it
import css7 from "../styles/inline-07.css?inline"; // only this page loads it
import css8 from "../styles/inline-08.css?inline"; // only this page loads it
import css9 from "../styles/inline-09.css?inline"; // only this page loads it
import css10 from "../styles/inline-10.css?inline"; // only this page loads it
import css11 from "../styles/inline-11.css?inline"; // only this page loads it
import css12 from "../styles/inline-12.css?inline"; // only this page loads it
import css13 from "../styles/inline-13.css?inline"; // only this page loads it
import css14 from "../styles/inline-14.css?inline"; // only this page loads it

// Route / — 11 section(s), in page order.
export default function HomePage() {
  usePageChrome({ title: "Online Ordering and Restaurant Marketing System | Owner.com", html: { "data-wf-domain": "www.owner.com", "data-wf-page": "69b9330c8b70142e4e5f7d13", "data-wf-site": "69b9330c8b70142e4e5f7d3c", "lang": "en", "class": "w-mod-js w-mod-ix w-mod-ix3" }, body: { "data-intercom": "off" } });
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
      <style>{css13}</style>
      <style>{css14}</style>
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
      <NavWrapper />
      <main className="main-wrapper">
        <TheAIPlatformRestaurants />
        <GrowSalesLikeThese />
        <WithOwnerYouGet />
        <SeeWhyWeRe />
        <GiveYourRestaurantThe />
        <TrustedByOwners />
        <S3BeliefsThatGuide />
        <SeeOurFreeGuides />
        <TheEasiestWayTo />
      </main>
      <Section />
    </div>
    </>
  );
}
