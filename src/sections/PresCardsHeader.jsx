// pres_cards-header — the section's real markup, read from the rendered page (route /press, section 2).
export default function PresCardsHeader() {
  return (
    <div className="pres_cards-header" data-clone-section="PresCardsHeader">
      <div className="press_cards-heading">
        <h1 className="h3">Recently featured on</h1>
      </div>
      <div className="press_cards-collection-wrap w-dyn-list">
        <div role="list" className="press_cards-collection-list w-dyn-items">
          <div role="listitem" className="press_cards-collection-item w-dyn-item">
            <a target="_blank" className="press_collection-link is-big w-inline-block">
              <div className="press_visual is-big">
                <img loading="lazy" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89ae_ig-forbes.png" alt="" sizes="100vw" srcSet="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89ae_ig-forbes-p-500.png 500w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89ae_ig-forbes-p-800.png 800w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89ae_ig-forbes-p-1080.png 1080w, /_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f89ae_ig-forbes.png 1400w" className="img-cover" />
                <div className="press_img-overlay">
                  <img loading="lazy" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69b9330c8b70142e4e5f8668_forbes%20svg.svg" alt="" className="press-logo-visual" />
                </div>
              </div>
              <div className="press_collection-text-wrap">
                <div className="press_collection_bottom-wrap is-big">
                  <div className="text-color-supermuted">
                    <p className="eyebrow">Forbes</p>
                  </div>
                  <h3 className="h3">Owner, Valued at $1B, Is Using AI To Help Local Restaurants</h3>
                </div>
                <div className="press_collection_action is-big">
                  <div className="text-color-supermuted">
                    <p className="body-s">May 13, 2025</p>
                  </div>
                  <div className="btn is-link">
                    <div>See the article</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
