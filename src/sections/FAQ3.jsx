// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// FAQ — the section's real markup, read from the rendered page (route /online-menu, section 4).
export default function FAQ3() {
  return (
    <section data-section-overlap="" className="section-base" data-clone-section="FAQ3">
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
                    <h3 itemProp="name" className="h5">{"How is Owner's online menu different from a regular menu?"}</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">{"Most online menus are built to display your food, not to sell it. Owner's menu is engineered for conversion: the layout, photos, descriptions, and structure are all designed to drive orders. And unlike a typical menu that gets set up and forgotten, ours is continuously tested and improved by a team of experts."}</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">Can I customize my online menu?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">
                          {"Yes, you can update your items, prices, photos, and descriptions anytime. "}
                          <br />
                          <br />
                          Our team also helps optimize the structure and presentation of your menu so it performs as well as possible. We handle the strategy; you handle the menu details.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">What if I already have an online menu through my POS?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">{"Many restaurants switch to Owner's menu because it converts significantly better than what comes with a typical POS. Owner's menu is built specifically for online ordering conversion, not just to display your items. It also integrates with your existing POS so orders still flow through your system."}</p>
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
