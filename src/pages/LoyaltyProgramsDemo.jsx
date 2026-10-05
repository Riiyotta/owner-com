import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import DemoControlHeader from "../sections/DemoControlHeader.jsx";
import DemoControlLayout2 from "../sections/DemoControlLayout2.jsx";
import css0 from "../styles/inline-38.css?inline"; // only this page loads it
import css1 from "../styles/inline-39.css?inline"; // only this page loads it

// Route /loyalty-programs-demo — 2 section(s), in page order.
export default function LoyaltyProgramsDemo() {
  usePageChrome({ title: "Loyalty Programs", html: { "lang": "en" }, body: {  } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
    <main className="demo-control-page demo-configured-split-page demo-configured-split-page-with-highlight" data-testid="demo-split-page">
      <DemoControlHeader />
      <DemoControlLayout2 />
    </main>
    <astro-island uid="yeBha" prefix="r4" component-url="/_apps/grader/assets/_astro/DemoPageTracker.VPpIb6lH.js" component-export="DemoPageTracker" renderer-url="/_apps/grader/assets/_astro/client.BLUu-456.js" props={"{\"pageKey\":[0,\"loyalty-programs-demo\"],\"route\":[0,\"/loyalty-programs-demo\"]}"} client="load" opts={"{\"name\":\"DemoPageTracker\",\"value\":true}"}></astro-island>
    </>
  );
}
