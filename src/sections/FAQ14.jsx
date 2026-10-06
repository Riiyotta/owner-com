// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// FAQ — the section's real markup, read from the rendered page (route /push-notifications, section 4).
export default function FAQ14() {
  return (
    <section data-section-overlap="" className="section-base" data-clone-section="FAQ14">
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
                    <h3 itemProp="name" className="h5">How are push notifications different from SMS?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">{"Push notifications go through your restaurant's branded app and show up on a customer's phone screen without needing their phone number. SMS goes to their messages. Both are effective, but push notifications are a direct communication channel from your restaurant specifically."}</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">Do customers have to opt in to receive push notifications?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">Yes. When a customer downloads your app, they can choose to allow push notifications. Customers who opt in are typically your most engaged ones, which is why push notifications tend to have strong conversion rates.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">What kinds of push notifications does Owner send?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">Owner sends push notifications around promotions, high-order moments like lunch and dinner, and specific campaigns you want to run. You can also send them manually from the Owner dashboard whenever you have something to promote.</p>
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
