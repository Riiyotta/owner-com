import A from "../lib/A.jsx";
// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
// Contact Support — the section's real markup, read from the rendered page (route /support, section 2).
export default function ContactSupport() {
  return (
    <section data-section-overlap="" className="section-base" data-clone-section="ContactSupport">
      <div className="container-large">
        <div className="support_cards-wrap">
          <ul role="list" className="support_card-list">
            <li className="support_card-item">
              <div className="support_card-item-top">
                <div className="support_card-item-top_inner">
                  <div className="u-mb-8">
                    <div className="text-color-brand">
                      <p className="h5">24/7 Support for Customers</p>
                    </div>
                  </div>
                  <h2 className="h4">Contact Support</h2>
                </div>
              </div>
              <div className="support_card-item-bottom">
                <div className="support_card-item-bottom-inner">
                  <div className="text-color-muted">
                    <p className="body-m">Call support</p>
                  </div>
                  <div className="body-m">1-844-24-OWNER</div>
                </div>
                <div className="support_card-item-bottom-inner is-last">
                  <div className="text-color-muted">
                    <p className="body-m">Let us help</p>
                  </div>
                  <div className="body-m">support@owner.com</div>
                </div>
              </div>
            </li>
            <li className="support_card-item">
              <div className="support_card-item-top">
                <div className="support_card-item-top_inner">
                  <div className="text-color-supermuted">
                    <div className="u-mb-8">
                      <p className="h5">Talk to our Sales team</p>
                    </div>
                  </div>
                  <h2 className="h4">Contact Sales</h2>
                </div>
              </div>
              <div className="support_card-item-bottom">
                <div className="support_card-item-bottom-inner">
                  <div className="text-color-content-tertiary">
                    <p className="body-m">Get a demo</p>
                  </div>
                  <div className="body-m">
                    <A href="/demo">{"See Owner in action ->"}</A>
                  </div>
                </div>
                <div className="support_card-item-bottom-inner is-last">
                  <div className="text-color-content-tertiary">
                    <p className="body-m">Talk to us</p>
                  </div>
                  <div className="body-m">sales@owner.com</div>
                </div>
              </div>
            </li>
          </ul>
          <div className="support_cards-bottom">
            <div className="u-mb-12">
              <div className="icon-24 w-embed">
                <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8346 9.33355C12.8346 6.75622 10.7453 4.66688 8.16798 4.66688C6.61254 4.66688 5.0571 4.66698 3.50166 4.66694C2.21286 4.66691 1.16798 5.71162 1.16797 7.00041C1.16794 11.667 1.16802 16.3337 1.16799 21.0003C1.16798 22.2889 2.21256 23.3336 3.50117 23.3336C5.72683 23.3336 7.95249 23.3335 10.1781 23.3335C10.7856 23.3335 11.3452 23.4797 11.812 23.7682C12.2305 24.0268 12.5806 24.3805 12.8346 24.799V9.33355Z" fill="#ACADAF" />
                  <path d="M15.168 24.799C15.4221 24.3805 15.7721 24.0268 16.1906 23.7682C16.6574 23.4797 17.217 23.3335 17.8245 23.3335C20.0501 23.3335 22.2757 23.3335 24.5013 23.3335C25.79 23.3335 26.8346 22.2889 26.8346 21.0002C26.8346 16.3336 26.8346 11.6669 26.8346 7.00032C26.8346 5.71159 25.7899 4.66689 24.5011 4.66691C22.9456 4.66693 21.3901 4.66688 19.8346 4.66688C17.2573 4.66688 15.168 6.75622 15.168 9.33355V24.799Z" fill="#ACADAF" />
                </svg>
              </div>
            </div>
            <div className="u-mb-24">
              <div className="max-width-460">
                <div className="text-align-center">
                  <div className="text-color-content-secondary">
                    <p className="body-l">If you prefer to do things yourself, we’ve also got articles teaching you how to use your new system.</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://help.owner.com/" rel="noopener noreferrer" data-button-instance="" target="_blank" className="btn w-inline-block">
              <div data-button-text="" className="btn-text">Explore Knowledge Base</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
