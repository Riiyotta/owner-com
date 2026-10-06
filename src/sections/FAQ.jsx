// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// FAQ — the section's real markup, read from the rendered page (route /restaurant-website-ai, section 4).
export default function FAQ() {
  return (
    <section data-section-overlap="" className="section-base" data-clone-section="FAQ">
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
                    <h3 itemProp="name" className="h5">What happens to my current website?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">Owner replaces your current website. We redirect your domain to your new website with Owner. You always keep ownership of your domain name.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">How much can I customize my design?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">
                          We believe sales is the most important thing. So we give you a proven design that you can personalize with your branding.
                          <br />
                          <br />
                          {"It's why restaurant websites with Owner look a certain way. We've studied the best online brands. We've driven nearly $1 billion in sales for restaurants. We've helped thousands of restaurant owners grow their customer base with our websites."}
                          <br />
                          <br />
                          {"If you're looking for a lot of design freedom, Owner is not the right fit for your business."}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li data-accordion-status="not-active" itemScope="itemscope" itemProp="mainEntity" itemType="https://schema.org/Question" className="accordion-css__item">
                  <div data-hover="" data-accordion-toggle="" className="accordion-css__item-top">
                    <h3 itemProp="name" className="h5">How long will this take?</h3>
                    <div className="accordion-css__item-icon">
                      <div className="faqs_line"></div>
                      <div className="faqs_line is-2"></div>
                    </div>
                  </div>
                  <div itemType="https://schema.org/Answer" data-accordion-content="" itemScope="itemscope" itemProp="acceptedAnswer" className="accordion-css__item-bottom">
                    <div className="accordion-css__item-bottom-wrap">
                      <div className="accordion-css__item-bottom-content">
                        <p itemProp="text" className="body-m">
                          Many customers get their new online presence set up within about a week or two.
                          <br />
                          <br />
                          {"We'll need some information about your business when you sign up."}
                          <br />
                          <br />
                          This includes your website domain information, along with Google Business and Yelp details. The more of those you have on hand, the faster we can launch.
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
