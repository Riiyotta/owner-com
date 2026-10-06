// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// bg-color-taupe — the section's real markup, read from the rendered page (route /branded-apps, section 3).
export default function BgColorTaupe11() {
  return (
    <section data-section-overlap="" className="section-base bg-color-taupe" data-clone-section="BgColorTaupe11">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head cc-center">
            <div className="max-width-540">
              <h2 className="h3">
                {"Increase sales with your "}
                <span className="text-color-muted">own mobile app</span>
              </h2>
            </div>
          </div>
          <ul role="list" className="product-traffict_list">
            <li className="product-traffict_item is-mobile-app-large">
              <div className="product-traffict_top-content cc-left is-catering is-mobileapp"></div>
              <div className="product-traffict_top-content cc-right is-catering">
                <div className="u-mb-4">
                  <div className="body-s text-weight-semibold">
                    <strong>
                      Fast ordering
                      <br />
                    </strong>
                  </div>
                </div>
                <div className="h3 text-weight-normal">Regulars can reorder in seconds.</div>
              </div>
            </li>
            <li className="product-traffict_item is-reorders is-mobileapp">
              <div className="product-traffict_item-top is-mobileapps">
                <div className="body-m">Drive more reorders</div>
                <div className="max-width-390">
                  <div className="h4">Drive 2x reorders with your own mobile app.</div>
                </div>
              </div>
            </li>
            <li className="product-traffict_item is-pos is-2">
              <div className="product-traffict_item-top">
                <div className="body-m">Bring customers back</div>
                <div className="max-width-389">
                  <div className="h4">Auto campaigns get first-time customers to return.</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
