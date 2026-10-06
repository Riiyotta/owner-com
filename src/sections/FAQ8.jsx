// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// FAQ — the section's real markup, read from the rendered page (route /delivery, section 4).
export default function FAQ8() {
  return (
    <section data-section-overlap="" className="section-base" data-clone-section="FAQ8">
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
                    <h3 itemProp="name" className="h5">Why would customers order from my app instead of the third parties?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">
                          First, it’s cheaper for them. Some restaurants mark up their prices on the delivery apps. There are also sometimes platform fees and delivery fees that can inflate their order total.
                          <br />
                          <br />
                          Second, you can incentivize them with a rewards program. With Owner, you can reward them with a points-based loyalty program, giving away low food cost items like mozzarella sticks and fries every few orders to reward people for ordering directly.
                          <br />
                          <br />
                          {"Finally, supporting local. When customers have a way to support you while still getting delivery, they're happy to do it."}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">Who pays for delivery, the guest or the restaurant?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">
                          For orders under $30, you can let the guest pay for delivery. You may consider covering some of the cost to get more orders.
                          <br />
                          <br />
                          For orders over $30, you should cover about $3 in delivery fees. Our research shows that you get the most orders when customers pay a maximum of $3.99 in delivery.
                          <br />
                          <br />
                          Doing this can encourage your customers to increase their order size.
                          <br />
                          <br />
                          Cheaper delivery for them, more sales for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">Why would the third-party apps go for this?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">
                          We negotiated in bulk with our thousands of restaurants to get the best possible deal. Even though the third parties make less revenue on these orders, they make more profit on each order because they don’t have to spend money to get people to use their apps.
                          <br />
                          <br />
                          They charge us about $7 to help you offer delivery, which we charge directly to you at no markup from us. But to the third parties, this is almost pure profit for them. It helps keep their drivers more busy and active on their platform.
                        </p>
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
