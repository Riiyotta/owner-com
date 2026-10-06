// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// is-product-page — the section's real markup, read from the rendered page (route /privacy-policy, section 2; shared by 134 routes).
export default function IsProductPage() {
  return (
    <section className="section-base is-product-page" data-clone-section="IsProductPage">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head cc-center">
            <div className="u-mb-20">
              <h2 className="h3">The easiest way to grow your restaurant online</h2>
            </div>
            <a data-button-instance="" className="btn w-inline-block">
              <div data-button-text="" className="btn-text">Get a free demo</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
