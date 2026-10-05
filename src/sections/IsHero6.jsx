import A from "../lib/A.jsx";

// is-hero — the section's real markup, read from the rendered page (route /blog-category/restaurant-websites, section 1).
export default function IsHero6() {
  return (
    <section className="section-base is-hero" data-clone-section="IsHero6">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head">
            <div className="u-mb-24">
              <A data-button-instance="" href="/blog" className="btn w-inline-block is-link is-green">
                <div data-button-text="" className="btn-text">Back to blog</div>
              </A>
            </div>
            <div className="u-mb-24">
              <h1>Restaurant Websites</h1>
            </div>
            <div className="max-width-580">
              <p className="h5">Learn how to build a restaurant website that drives direct orders.</p>
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
