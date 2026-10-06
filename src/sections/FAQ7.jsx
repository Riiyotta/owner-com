// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// FAQ — the section's real markup, read from the rendered page (route /smart-upsells, section 4).
export default function FAQ7() {
  return (
    <section data-section-overlap="" className="section-base" data-clone-section="FAQ7">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head cc-center">
            <h2 className="h4">FAQ</h2>
          </div>
          <div className="faq-box">
            <div data-accordion-close-siblings="true" data-accordion-css-init="" className="accordion-css">
              <ul itemType="https://schema.org/FAQPage" itemScope="itemscope" className="accordion-css__list">
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">How do Smart Upsells work?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">When a guest is checking out, Owner suggests relevant add-ons based on what they ordered. The suggestions are built on data from thousands of restaurants, so they are not guesses. You do not set them up or manage them. They just run.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">Can I control what gets suggested?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">Yes. You can review and adjust your upsell settings from the Owner dashboard. That said, the default suggestions are already optimized for conversion, so most restaurant owners leave them as-is and watch the average order value go up.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">How does this actually increase revenue?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">It varies, but most customers see a meaningful lift in average order value. The effect compounds over time as our system learns what works best for your specific menu and customer base.</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
