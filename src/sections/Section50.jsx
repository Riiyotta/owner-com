// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// section — the section's real markup, read from the rendered page (route /case-studies/san-diego-kabob-shack, section 4).
export default function Section50() {
  return (
    <section data-section-overlap="" className="section-base" data-clone-section="Section50">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="testimonials-card">
            <div className="testimonials-card_content">
              <div className="testimonials-card_content-inner">
                <div className="h4">{"\"Owner.com does a really great job just breaking down insights on where sales are coming from. Ever since signing up, we saw bigger returns. This product is so damn good, man. It just pays for itself.\""}</div>
                <div className="text-color-muted">
                  <span className="body-l">Said</span>
                  <span className="body-l"></span>
                  <span className="body-l">Hofiani</span>
                  <span className="body-l">{" — "}</span>
                  <span className="body-l">San Diego Kabob Shack</span>
                </div>
              </div>
              <ul role="list" className="testimonials-card_list">
                <li>
                  <div className="stats-text is-testimonial w-richtext">
                    <p>
                      <strong>+$9,000</strong>
                      {" first month sales"}
                    </p>
                  </div>
                  <div className="stats-text is-testimonial w-richtext">
                    <p>
                      <strong>{"60% "}</strong>
                      Growth Y/Y
                    </p>
                  </div>
                </li>
                <li>
                  <div className="stats-text is-testimonial w-richtext">
                    <p>
                      <strong>2X</strong>
                      {" online ordering"}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="testimonials-card_visual">
              <img loading="lazy" src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3d/69f4f3e010945e66967e5754_69f4f31d77f9fbc5109f04ba_69c9bcf213ffd797920cb6d8_sdkabobshack.jpg.avif" alt="" className="img-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
