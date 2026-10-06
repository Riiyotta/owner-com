// IA section(s): hero.section-s-d-hero (ia/ia.json, design-repo/sections/)
// An inside look at our $240M Se — the section's real markup, read from the rendered page (route /d, section 1).
export default function AnInsideLookAt() {
  return (
    <section className="section-s-d_hero" data-clone-section="AnInsideLookAt">
      <div className="container-large z-index-2">
        <div className="s-d_hero-wrap">
          <div className="max-width-710">
            <div className="u-mb-32">
              <h1 className="h1">
                <span className="opacity-50">An inside look at</span>
                {" our $240M Series D."}
              </h1>
            </div>
          </div>
          <div className="max-width-658">
            <div className="u-mb-48">
              <p className="h5 lineheight-1-3">{"This is an inside look at what led to Owner's $240M Series D, led by Goldman Sachs Alternatives, bringing us to a $2.3B valuation. Our other major investors joined this round, including Meritech, Redpoint, Headline, and Jack Altman. Owner has been life-changing for local business owners and we're excited to serve millions more."}</p>
            </div>
          </div>
          <ul role="list" className="s-d_hero-grid">
            <li className="s-d_hero-grid-item">
              <div className="u-mb-4">
                <div className="text-color-green-dark">
                  <p className="h4">100M+</p>
                </div>
              </div>
              <div className="opacity-80">
                <p className="body-s">consumers have used Owner</p>
              </div>
            </li>
            <li className="s-d_hero-grid-item">
              <div className="u-mb-4">
                <div className="text-color-green-dark">
                  <p className="h4">Top 10%</p>
                </div>
              </div>
              <div className="opacity-80">
                <p className="body-s">of startups in both growth and efficiency</p>
              </div>
            </li>
            <li className="s-d_hero-grid-item">
              <div className="u-mb-4">
                <div className="text-color-green-dark">
                  <p className="h4">Top 0.5%</p>
                </div>
              </div>
              <div className="opacity-80">
                <p className="body-s">of startups by revenue</p>
              </div>
            </li>
            <li className="s-d_hero-grid-item">
              <div className="u-mb-4">
                <div className="text-color-green-dark">
                  <p className="h4">35+</p>
                </div>
              </div>
              <div className="opacity-80">
                <p className="body-s">former founders on a lean team stacked with top talent</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="s-d-hero_lines">
        <div className="img-cover w-embed w-script">
          <div className="owner-star" data-star="" data-star-count="24" data-star-inner="0.08" data-star-step="0.215" data-star-duration="44" data-star-fade-in="1" data-star-fade-out="0.54" data-star-direction="1" data-star-ready="1">
            <img src="/stills/d1378eda.png" alt="" data-star-canvas="" aria-hidden="true" width={1191} height={1131} />
          </div>
        </div>
      </div>
    </section>
  );
}
