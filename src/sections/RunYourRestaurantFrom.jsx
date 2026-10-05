import A from "../lib/A.jsx";

// Run your restaurant from anywh — the section's real markup, read from the rendered page (route /mobile, section 1).
export default function RunYourRestaurantFrom() {
  return (
    <section className="section-product_hero" data-clone-section="RunYourRestaurantFrom">
      <div className="container-large cc-product-hero">
        <div className="product-hero_wrap">
          <div className="product-hero_head">
            <div className="product-hero_head-inner">
              <h1 className="h1">
                <span>Run your restaurant</span>
                <span className="text-color-muted">{" from anywhere."}</span>
              </h1>
              <div className="max-width-400">
                <p className="body-l">Manage sales, orders, menus and alerts — right from your phone.</p>
              </div>
            </div>
            <div className="button-group">
              <a data-button-instance="" className="btn w-inline-block">
                <div data-button-text="" className="btn-text">Get a free demo</div>
              </a>
              <A data-button-instance="" href="/pricing" className="btn w-inline-block is-secondary">
                <div data-button-text="" className="btn-text">View pricing</div>
              </A>
            </div>
          </div>
          <div className="product-hero_box">
            <div className="product-hero_box-inner">
              <img src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69ca7798bea455253a0e5668_qr-code.jpg" loading="lazy" alt="Black and white QR code on a rounded white square background with text below that says 'Scan the QR code with your phone.'" className="img-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
