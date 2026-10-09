import A from "../lib/A.jsx";

// /demo — the control version of the page (<main class="demo-control-page spz-1004-hidden">), real markup from the
// rendered snapshot recon/mirror/src/demo/index.html. On the live page the A/B variant (spz_1004_v1) is active, so this
// block is display:none (`.spz_1004_v1 .spz-1004-hidden`) and the visible UI is DemoVariantModal. Kept for DOM parity.
const STAR = "M14.6562 7.14875L11.8375 9.60875L12.6819 13.2712C12.7266 13.4627 12.7138 13.6631 12.6452 13.8474C12.5766 14.0316 12.4552 14.1916 12.2962 14.3072C12.1372 14.4229 11.9477 14.4891 11.7513 14.4976C11.5548 14.5061 11.3603 14.4565 11.1919 14.355L7.9975 12.4175L4.81 14.355C4.6416 14.4565 4.44703 14.5061 4.2506 14.4976C4.05418 14.4891 3.86462 14.4229 3.70562 14.3072C3.54662 14.1916 3.42524 14.0316 3.35665 13.8474C3.28806 13.6631 3.27531 13.4627 3.32 13.2712L4.16312 9.6125L1.34375 7.14875C1.19463 7.02014 1.0868 6.85036 1.03378 6.66071C0.980764 6.47107 0.98492 6.26999 1.04573 6.08269C1.10654 5.89539 1.22129 5.73022 1.37559 5.60788C1.5299 5.48554 1.71689 5.41149 1.91312 5.395L5.62937 5.07312L7.08 1.61312C7.15575 1.43157 7.28353 1.27649 7.44724 1.16741C7.61095 1.05833 7.80327 1.00012 8 1.00012C8.19672 1.00012 8.38904 1.05833 8.55275 1.16741C8.71647 1.27649 8.84424 1.43157 8.92 1.61312L10.375 5.07312L14.09 5.395C14.2862 5.41149 14.4732 5.48554 14.6275 5.60788C14.7818 5.73022 14.8966 5.89539 14.9574 6.08269C15.0182 6.26999 15.0224 6.47107 14.9693 6.66071C14.9163 6.85036 14.8085 7.02014 14.6594 7.14875H14.6562Z";

export default function DemoHiddenControl() {
  return (
    <main className="demo-control-page spz-1004-hidden" data-testid="demo-control-page" data-clone-section="DemoHiddenControl">
      <header className="demo-control-header">
        <A data-testid="demo-control-owner-logo-link" href="/" tabIndex={-1}>
          <img alt="Owner" src="/_apps/grader/assets/new-branding/owner-lockup-black.svg" />
        </A>
      </header>
      <div className="demo-control-layout">
        <section className="demo-control-left-column">
          <div>
            <h1>See the #1 rated restaurant marketing platform in action</h1>
            <p className="demo-control-intro">No contracts. No long-term commitment.<br className="demo-control-desktop-break" /> Nothing to lose. There's a reason why thousands<br className="demo-control-desktop-break" /> of restaurants trust Owner.</p>
          </div>
          <div className="demo-control-rating">
            <span className="demo-control-rating-score">4.8</span>
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} aria-hidden="true" fill="none" viewBox="0 0 15 14">
                <path d={STAR} fill="#2c2c2c" />
              </svg>
            ))}
            <a data-testid="demo-control-reviews-link" href="https://www.g2.com/products/owner-com/reviews" rel="noopener noreferrer" tabIndex={-1} target="_blank">across 1,000+ reviews</a>
          </div>
          <div className="demo-control-desktop-cards">
            <DemoCoverage />
          </div>
        </section>
      </div>
    </main>
  );
}

// "On your 20 minute demo, we'll cover" — appears twice in the snapshot (desktop cards here, mobile cards inside the form column).
export function DemoCoverage() {
  return (
    <div className="demo-control-coverage">
      <h2>On your 20 minute demo, we'll cover</h2>
      <div className="demo-control-card-grid">
        <div className="demo-control-card">
          <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
          <h3>AI websites + SEO</h3>
          <p>To drive more customers from Google.</p>
        </div>
        <div className="demo-control-card">
          <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
          <h3>Marketing automations</h3>
          <p>To maximize sales from existing customers.</p>
        </div>
        <div className="demo-control-card">
          <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
          <h3>Mobile app</h3>
          <p className="demo-control-card-description-balanced">To deliver the best ordering experience to regulars.</p>
        </div>
        <div className="demo-control-card">
          <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
          <h3>And more...</h3>
          <p>Integrations, commission-free delivery, and real examples with before/after numbers.</p>
        </div>
        <div className="demo-control-card demo-control-proof-card">
          <img alt="G2 icon" src="/_apps/grader/assets/demo/g2_icon.svg" />
          <h3>Leader Position Spring 2026</h3>
        </div>
        <div className="demo-control-card demo-control-proof-card">
          <img alt="Rating arrow" src="/_apps/grader/assets/demo/rating_arrow.svg" />
          <h3 className="demo-control-card-heading-balanced">Rated #1 Restaurant Marketing Software</h3>
        </div>
        <div className="demo-control-testimonial">
          <img alt="Yuliana Vasquez" src="/_apps/grader/assets/demo/yuliana.avif" />
          <p className="demo-control-testimonial-quote">"Owner.com makes online marketing so easy. They're the secret to our online success."</p>
          <p className="demo-control-testimonial-attribution">Yuliana Vasquez — Owner at Samos Oaxaca</p>
        </div>
      </div>
    </div>
  );
}
