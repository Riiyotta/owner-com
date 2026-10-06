// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// bg-color-taupe — the section's real markup, read from the rendered page (route /kitchen-tablet, section 3).
export default function BgColorTaupe16() {
  return (
    <section data-section-overlap="" className="section-base bg-color-taupe" data-clone-section="BgColorTaupe16">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head cc-center">
            <div className="max-width-582">
              <h2 className="h3">
                {"What you can do with your "}
                <span className="text-color-muted">Owner kitchen tablet</span>
                <br />
              </h2>
            </div>
          </div>
          <ul role="list" className="product-traffict_list">
            <li className="product-traffict_item is-large is-kitchen-large">
              <div className="product-traffict_top-content cc-left">
                <div className="product-traffict_visual is-kitchen-large-visual">
                  <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69d3a0b1b5825b5dd5a5f8b2_kitchen-visual-large.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 704px) 94vw, 662px" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69d3a0b1b5825b5dd5a5f8b2_kitchen-visual-large-p-500.png 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69d3a0b1b5825b5dd5a5f8b2_kitchen-visual-large.png 662w" alt="Order summary showing 2 quesadillas, 2 blue lemonades, and 1 churro for in-store dine-in, marked complete." className="img-cover" />
                </div>
              </div>
              <div className="product-traffict_top-content cc-right">
                <div className="u-mb-4">
                  <div className="body-s text-weight-semibold">Order management</div>
                </div>
                <div className="h3 text-weight-normal">View, adjust, and complete orders from one screen.</div>
              </div>
            </li>
            <li className="product-traffict_item is-reorders is-kitchent">
              <div className="product-traffict_item-top is-kitchent">
                <div className="body-m">Full menu control</div>
                <div className="max-width-390">
                  <div className="h4">Edit your full online menu directly from the tablet.</div>
                </div>
              </div>
            </li>
            <li className="product-traffict_item is-pos is-2 is-kitchent">
              <div className="product-traffict_item-top">
                <div className="body-m">Tablet checkout</div>
                <div className="max-width-389">
                  <div className="h4">Take phone, in-store, and gift card orders from one screen.</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
