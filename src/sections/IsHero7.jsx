// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// is-hero — the section's real markup, read from the rendered page (route /blog-category/industry-trends-data, section 1).
export default function IsHero7() {
  return (
    <section className="section-base is-hero" data-clone-section="IsHero7">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head">
            <div className="u-mb-24">
              <A data-button-instance="" href="/blog" className="btn w-inline-block is-link is-green">
                <div data-button-text="" className="btn-text">Back to blog</div>
              </A>
            </div>
            <div className="u-mb-24">
              <h1>{"Industry Trends & Data"}</h1>
            </div>
            <div className="max-width-580">
              <p className="h5">{"Get up to speed on the what's happening in the restaurant industry."}</p>
            </div>
          </div>
          <div className="max-width-full">
            <div className="u-mb-40">
              <div className="h3">Trending</div>
            </div>
            <div className="max-width-full w-dyn-list">
              <div className="hide w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
