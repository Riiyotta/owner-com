import A from "../lib/A.jsx";

// is-hero — the section's real markup, read from the rendered page (route /blog-category/increase-sales, section 1).
export default function IsHero3() {
  return (
    <section className="section-base is-hero" data-clone-section="IsHero3">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head">
            <div className="u-mb-24">
              <A data-button-instance="" href="/blog" className="btn w-inline-block is-link is-green">
                <div data-button-text="" className="btn-text">Back to blog</div>
              </A>
            </div>
            <div className="u-mb-24">
              <h1>Increase Online Sales</h1>
            </div>
            <div className="max-width-580">
              <p className="h5">{"Grow your restaurant's online sales with these ideas."}</p>
            </div>
          </div>
          <div className="max-width-full">
            <div className="u-mb-40">
              <div className="h3">Trending</div>
            </div>
            <div className="max-width-full w-dyn-list">
              <div role="list" className="blog_list w-dyn-items">
                <div role="listitem" className="max-width-full w-dyn-item">
                  <div data-wf--blog-trending-card--variant="small" className="blog-trending_card w-variant-1c6f8e05-b412-f598-7373-6087412bb48e">
                    <img loading="lazy" src="/_ext/cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d5c0bff26f387d10a7_65fa226bbd12be91483ed554_local-seo-for-restaurants-thumbnail.jpeg" alt="" className="img-cover" />
                    <div className="blog-trending_card-bottom w-variant-1c6f8e05-b412-f598-7373-6087412bb48e">
                      <div className="text-style-allcaps">
                        <div className="h6">Increase Online Sales</div>
                      </div>
                      <div className="h5">Local SEO for Restaurants: 8 Tips To Get Your Restaurant Found by Local Customers</div>
                      <div id="w-node-a02c442a-c1a7-3cae-f068-ae8452c41c7a-52c41c72" className="blog-card_content-box is-trending">
                        <div className="opacity-80">
                          <div className="text-weight-semibold">
                            <div className="h6">
                              <span className="blog-card_content-item">13 min read</span>
                              <span className="blog-card_content-item">August 12, 2026</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-trending_card-overlay w-variant-1c6f8e05-b412-f598-7373-6087412bb48e"></div>
                    <A href="/blog/local-seo-for-restaurants" className="cover-link w-inline-block"></A>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
