import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import DemoControlHeader from "../sections/DemoControlHeader.jsx";
import DemoControlLayout from "../sections/DemoControlLayout.jsx";
import css0 from "../styles/inline-40.css?inline"; // only this page loads it
import css1 from "../styles/inline-41.css?inline"; // only this page loads it

// Route /pos-demo — 2 section(s), in page order.
export default function PosDemo() {
  usePageChrome({ title: "Get a demo of Owner POS | Owner.com", html: { "lang": "en" }, body: {  } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
    <main className="demo-control-page demo-configured-split-page" data-testid="demo-split-page">
      <DemoControlHeader />
      <DemoControlLayout />
    </main>
    <astro-island uid="1zxMih" prefix="r4" component-url="/_apps/grader/assets/_astro/DemoPageTracker.C9MZRYgZ.js" component-export="DemoPageTracker" renderer-url="/_apps/grader/assets/_astro/client.BLUu-456.js" props={"{\"pageKey\":[0,\"pos-demo\"],\"route\":[0,\"/pos-demo\"]}"} client="load" opts={"{\"name\":\"DemoPageTracker\",\"value\":true}"}></astro-island>
    </>
  );
}
