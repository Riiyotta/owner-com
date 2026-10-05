import A from "../lib/A.jsx";

// demo-control-layout — the section's real markup, read from the rendered page (route /pos-demo, section 1).
export default function DemoControlLayout() {
  return (
    <div className="demo-control-layout" data-clone-section="DemoControlLayout">
      <section className="demo-control-left-column">
        <div className="demo-control-intro-content">
          <div data-testid="demo-hero-standard">
            <h1>Your POS should be growing your sales</h1>
            <p className="demo-control-intro">Owner POS turns first‑time guests into regulars. It connects your online ordering, loyalty, and marketing so your whole system grows sales together.</p>
          </div>
          <div className="demo-control-rating" data-testid="demo-rating">
            <span className="demo-control-rating-score">4.8</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 15 14">
              <path d="M14.6562 7.14875L11.8375 9.60875L12.6819 13.2712C12.7266 13.4627 12.7138 13.6631 12.6452 13.8474C12.5766 14.0316 12.4552 14.1916 12.2962 14.3072C12.1372 14.4229 11.9477 14.4891 11.7513 14.4976C11.5548 14.5061 11.3603 14.4565 11.1919 14.355L7.9975 12.4175L4.81 14.355C4.6416 14.4565 4.44703 14.5061 4.2506 14.4976C4.05418 14.4891 3.86462 14.4229 3.70562 14.3072C3.54662 14.1916 3.42524 14.0316 3.35665 13.8474C3.28806 13.6631 3.27531 13.4627 3.32 13.2712L4.16312 9.6125L1.34375 7.14875C1.19463 7.02014 1.0868 6.85036 1.03378 6.66071C0.980764 6.47107 0.98492 6.26999 1.04573 6.08269C1.10654 5.89539 1.22129 5.73022 1.37559 5.60788C1.5299 5.48554 1.71689 5.41149 1.91312 5.395L5.62937 5.07312L7.08 1.61312C7.15575 1.43157 7.28353 1.27649 7.44724 1.16741C7.61095 1.05833 7.80327 1.00012 8 1.00012C8.19672 1.00012 8.38904 1.05833 8.55275 1.16741C8.71647 1.27649 8.84424 1.43157 8.92 1.61312L10.375 5.07312L14.09 5.395C14.2862 5.41149 14.4732 5.48554 14.6275 5.60788C14.7818 5.73022 14.8966 5.89539 14.9574 6.08269C15.0182 6.26999 15.0224 6.47107 14.9693 6.66071C14.9163 6.85036 14.8085 7.02014 14.6594 7.14875H14.6562Z" fill="#2c2c2c" />
            </svg>
            <svg aria-hidden="true" fill="none" viewBox="0 0 15 14">
              <path d="M14.6562 7.14875L11.8375 9.60875L12.6819 13.2712C12.7266 13.4627 12.7138 13.6631 12.6452 13.8474C12.5766 14.0316 12.4552 14.1916 12.2962 14.3072C12.1372 14.4229 11.9477 14.4891 11.7513 14.4976C11.5548 14.5061 11.3603 14.4565 11.1919 14.355L7.9975 12.4175L4.81 14.355C4.6416 14.4565 4.44703 14.5061 4.2506 14.4976C4.05418 14.4891 3.86462 14.4229 3.70562 14.3072C3.54662 14.1916 3.42524 14.0316 3.35665 13.8474C3.28806 13.6631 3.27531 13.4627 3.32 13.2712L4.16312 9.6125L1.34375 7.14875C1.19463 7.02014 1.0868 6.85036 1.03378 6.66071C0.980764 6.47107 0.98492 6.26999 1.04573 6.08269C1.10654 5.89539 1.22129 5.73022 1.37559 5.60788C1.5299 5.48554 1.71689 5.41149 1.91312 5.395L5.62937 5.07312L7.08 1.61312C7.15575 1.43157 7.28353 1.27649 7.44724 1.16741C7.61095 1.05833 7.80327 1.00012 8 1.00012C8.19672 1.00012 8.38904 1.05833 8.55275 1.16741C8.71647 1.27649 8.84424 1.43157 8.92 1.61312L10.375 5.07312L14.09 5.395C14.2862 5.41149 14.4732 5.48554 14.6275 5.60788C14.7818 5.73022 14.8966 5.89539 14.9574 6.08269C15.0182 6.26999 15.0224 6.47107 14.9693 6.66071C14.9163 6.85036 14.8085 7.02014 14.6594 7.14875H14.6562Z" fill="#2c2c2c" />
            </svg>
            <svg aria-hidden="true" fill="none" viewBox="0 0 15 14">
              <path d="M14.6562 7.14875L11.8375 9.60875L12.6819 13.2712C12.7266 13.4627 12.7138 13.6631 12.6452 13.8474C12.5766 14.0316 12.4552 14.1916 12.2962 14.3072C12.1372 14.4229 11.9477 14.4891 11.7513 14.4976C11.5548 14.5061 11.3603 14.4565 11.1919 14.355L7.9975 12.4175L4.81 14.355C4.6416 14.4565 4.44703 14.5061 4.2506 14.4976C4.05418 14.4891 3.86462 14.4229 3.70562 14.3072C3.54662 14.1916 3.42524 14.0316 3.35665 13.8474C3.28806 13.6631 3.27531 13.4627 3.32 13.2712L4.16312 9.6125L1.34375 7.14875C1.19463 7.02014 1.0868 6.85036 1.03378 6.66071C0.980764 6.47107 0.98492 6.26999 1.04573 6.08269C1.10654 5.89539 1.22129 5.73022 1.37559 5.60788C1.5299 5.48554 1.71689 5.41149 1.91312 5.395L5.62937 5.07312L7.08 1.61312C7.15575 1.43157 7.28353 1.27649 7.44724 1.16741C7.61095 1.05833 7.80327 1.00012 8 1.00012C8.19672 1.00012 8.38904 1.05833 8.55275 1.16741C8.71647 1.27649 8.84424 1.43157 8.92 1.61312L10.375 5.07312L14.09 5.395C14.2862 5.41149 14.4732 5.48554 14.6275 5.60788C14.7818 5.73022 14.8966 5.89539 14.9574 6.08269C15.0182 6.26999 15.0224 6.47107 14.9693 6.66071C14.9163 6.85036 14.8085 7.02014 14.6594 7.14875H14.6562Z" fill="#2c2c2c" />
            </svg>
            <svg aria-hidden="true" fill="none" viewBox="0 0 15 14">
              <path d="M14.6562 7.14875L11.8375 9.60875L12.6819 13.2712C12.7266 13.4627 12.7138 13.6631 12.6452 13.8474C12.5766 14.0316 12.4552 14.1916 12.2962 14.3072C12.1372 14.4229 11.9477 14.4891 11.7513 14.4976C11.5548 14.5061 11.3603 14.4565 11.1919 14.355L7.9975 12.4175L4.81 14.355C4.6416 14.4565 4.44703 14.5061 4.2506 14.4976C4.05418 14.4891 3.86462 14.4229 3.70562 14.3072C3.54662 14.1916 3.42524 14.0316 3.35665 13.8474C3.28806 13.6631 3.27531 13.4627 3.32 13.2712L4.16312 9.6125L1.34375 7.14875C1.19463 7.02014 1.0868 6.85036 1.03378 6.66071C0.980764 6.47107 0.98492 6.26999 1.04573 6.08269C1.10654 5.89539 1.22129 5.73022 1.37559 5.60788C1.5299 5.48554 1.71689 5.41149 1.91312 5.395L5.62937 5.07312L7.08 1.61312C7.15575 1.43157 7.28353 1.27649 7.44724 1.16741C7.61095 1.05833 7.80327 1.00012 8 1.00012C8.19672 1.00012 8.38904 1.05833 8.55275 1.16741C8.71647 1.27649 8.84424 1.43157 8.92 1.61312L10.375 5.07312L14.09 5.395C14.2862 5.41149 14.4732 5.48554 14.6275 5.60788C14.7818 5.73022 14.8966 5.89539 14.9574 6.08269C15.0182 6.26999 15.0224 6.47107 14.9693 6.66071C14.9163 6.85036 14.8085 7.02014 14.6594 7.14875H14.6562Z" fill="#2c2c2c" />
            </svg>
            <svg aria-hidden="true" fill="none" viewBox="0 0 15 14">
              <path d="M14.6562 7.14875L11.8375 9.60875L12.6819 13.2712C12.7266 13.4627 12.7138 13.6631 12.6452 13.8474C12.5766 14.0316 12.4552 14.1916 12.2962 14.3072C12.1372 14.4229 11.9477 14.4891 11.7513 14.4976C11.5548 14.5061 11.3603 14.4565 11.1919 14.355L7.9975 12.4175L4.81 14.355C4.6416 14.4565 4.44703 14.5061 4.2506 14.4976C4.05418 14.4891 3.86462 14.4229 3.70562 14.3072C3.54662 14.1916 3.42524 14.0316 3.35665 13.8474C3.28806 13.6631 3.27531 13.4627 3.32 13.2712L4.16312 9.6125L1.34375 7.14875C1.19463 7.02014 1.0868 6.85036 1.03378 6.66071C0.980764 6.47107 0.98492 6.26999 1.04573 6.08269C1.10654 5.89539 1.22129 5.73022 1.37559 5.60788C1.5299 5.48554 1.71689 5.41149 1.91312 5.395L5.62937 5.07312L7.08 1.61312C7.15575 1.43157 7.28353 1.27649 7.44724 1.16741C7.61095 1.05833 7.80327 1.00012 8 1.00012C8.19672 1.00012 8.38904 1.05833 8.55275 1.16741C8.71647 1.27649 8.84424 1.43157 8.92 1.61312L10.375 5.07312L14.09 5.395C14.2862 5.41149 14.4732 5.48554 14.6275 5.60788C14.7818 5.73022 14.8966 5.89539 14.9574 6.08269C15.0182 6.26999 15.0224 6.47107 14.9693 6.66071C14.9163 6.85036 14.8085 7.02014 14.6594 7.14875H14.6562Z" fill="#2c2c2c" />
            </svg>
            <a data-testid="demo-control-reviews-link" rel="noopener noreferrer" target="_blank">across 1,000+ reviews</a>
          </div>
        </div>
        <section className="demo-control-after-form-content">
          <section className="demo-control-coverage" data-testid="demo-feature-grid">
            <h2>On your 20 minute demo, we’ll cover</h2>
            <div className="demo-control-card-grid">
              <div className="demo-control-card">
                <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
                <h3>POS that grows sales</h3>
                <p>Turn every in-store customer into a regular who keeps coming back.</p>
              </div>
              <div className="demo-control-card">
                <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
                <h3>AI websites + SEO</h3>
                <p>Get found on Google and take orders directly from your site.</p>
              </div>
              <div className="demo-control-card">
                <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
                <h3>Mobile app + loyalty</h3>
                <p>Your own branded app with a rewards program like the big chains, built into your POS.</p>
              </div>
              <div className="demo-control-card">
                <img alt="" src="/_apps/grader/assets/demo/lightning.svg" />
                <h3>Automated marketing</h3>
                <p>Emails, texts, and app offers that bring guests back, without you lifting a finger.</p>
              </div>
              <div className="demo-control-card demo-control-proof-card">
                <img alt="G2 icon" src="/_apps/grader/assets/demo/g2_icon.svg" />
                <h3>Leader Position Spring 2026</h3>
              </div>
              <div className="demo-control-card demo-control-proof-card">
                <img alt="Rating arrow" src="/_apps/grader/assets/demo/rating_arrow.svg" />
                <h3 className="demo-control-card-heading-balanced">Rated #1 Restaurant Marketing Software</h3>
              </div>
            </div>
          </section>
          <section className="demo-control-testimonial" data-testid="demo-testimonial">
            <img alt="Ashley Lee" src="/_apps/grader/assets/demo/ashley-lee.avif" />
            <p className="demo-control-testimonial-quote">{"\"Any other POS, I don't think they really care about the repeat customers. With Owner POS, my sales went up $30K a month.\""}</p>
            <p className="demo-control-testimonial-attribution">{"Ashley Lee — Owner at Ashley's Cafe"}</p>
          </section>
        </section>
      </section>
      <section className="demo-control-right-column">
        <astro-island uid="1t5Beg" prefix="r5" component-url="/_apps/grader/assets/_astro/DemoPage.B5PBNnuD.js" component-export="DemoBookingForm" renderer-url="/_apps/grader/assets/_astro/client.BLUu-456.js" props={"{\"control\":[0,true],\"lastPdfDownload\":[0,\"/pos-demo\"],\"locale\":[0],\"partnerPageKey\":[0],\"postFormSubmissionPage\":[0,\"/demo-thank-you\"]}"} client="load" opts={"{\"name\":\"DemoBookingForm\",\"value\":true}"} await-children="">
          <form className="demo-form demo-control-form" data-testid="demo-form" data-step="1" noValidate onSubmit={(e) => e.preventDefault()}>
            <input data-testid="cro1-hidden-field" type="hidden" name="cro1" defaultValue="" />
            <input data-testid="cro2-hidden-field" type="hidden" name="cro2" defaultValue="" />
            <div className="demo-embed-form-heading">
              <p>Step 1 of 2</p>
              <h2>Tell us a little about your restaurant to unlock growth today</h2>
            </div>
            <div className="demo-form-step-fields demo-step-one-fields" data-testid="demo-step-one-fields">
              <div className="demo-form-row">
                <div className="demo-restaurant-field " data-testid="demo-restaurant-field">
                  <label className="demo-floating-label" htmlFor="demo-restaurant-name">Restaurant name / location</label>
                  <div className="demo-restaurant-input-wrap">
                    <input aria-autocomplete="list" aria-busy="false" aria-controls="demo-restaurant-listbox" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" autocorrect="off" data-testid="demo-restaurant-input" id="demo-restaurant-name" placeholder="Search your restaurant name..." role="combobox" tabIndex="1" type="text" name="restaurant-name" defaultValue="" />
                  </div>
                  <p className="demo-restaurant-hint">Start typing, then select your restaurant from the list</p>
                </div>
                <div className="demo-field-wrap" data-testid="demo-role-field">
                  <div className="demo-field demo-select-field   ">
                    <button aria-expanded="false" aria-haspopup="listbox" className="demo-select-button" data-testid="demo-role-select" id="role" tabIndex="2" type="button">
                      <span className="demo-select-value is-placeholder">Select one...</span>
                    </button>
                    <span aria-hidden="true" className="demo-floating-label">Role</span>
                  </div>
                </div>
              </div>
              <button className="demo-submit-button" data-testid="demo-continue-button" tabIndex="4" type="submit">
                <span className="demo-submit-text">Continue</span>
              </button>
            </div>
            <div className="demo-form-step-fields demo-step-two-fields" data-testid="demo-step-two-fields" hidden>
              <button aria-label="Back to step 1" className="demo-back-button" data-testid="demo-back-button" tabIndex="-1" type="button">
                <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
                  <path d="M8.75 2.625 4.375 7l4.375 4.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                Back
              </button>
              <div className="demo-embed-field-block">
                <div className="demo-field-wrap">
                  <div className="demo-field   ">
                    <input aria-describedby="email-suggestion" autoComplete="email" data-testid="demo-email-input" id="email" placeholder="Email" tabIndex="2" type="email" name="email" defaultValue="" />
                    <label className="demo-floating-label" htmlFor="email">Email</label>
                  </div>
                  <p aria-live="polite" className="email-suggestion" id="email-suggestion"></p>
                </div>
              </div>
              <div className="demo-form-row demo-embed-name-row">
                <div className="demo-field-wrap">
                  <div className="demo-field   ">
                    <input autoComplete="given-name" data-testid="demo-firstName-input" id="firstName" placeholder="First name" tabIndex="3" type="text" name="firstName" defaultValue="" />
                    <label className="demo-floating-label" htmlFor="firstName">First name</label>
                  </div>
                </div>
                <div className="demo-field-wrap">
                  <div className="demo-field   ">
                    <input autoComplete="family-name" data-testid="demo-lastName-input" id="lastName" placeholder="Last name" tabIndex="4" type="text" name="lastName" defaultValue="" />
                    <label className="demo-floating-label" htmlFor="lastName">Last name</label>
                  </div>
                </div>
              </div>
              <div className="demo-field-wrap demo-phone-wrap">
                <div className="demo-field demo-phone-field   ">
                  <span aria-hidden="true" className="demo-phone-prefix">
                    <img alt="US Flag" src="/_apps/grader/assets/demo/us-flag.svg" />
                  </span>
                  <input autoComplete="tel" data-testid="demo-cellphone-input" id="cellphone" inputMode="tel" placeholder="Cellphone" tabIndex="5" type="tel" name="cellphone" defaultValue="" />
                  <label className="demo-floating-label" htmlFor="cellphone">Phone</label>
                </div>
              </div>
              <div className="demo-embed-field-block">
                <div className="demo-field-wrap" data-testid="demo-hear-about-us-field">
                  <div className="demo-field demo-select-field   ">
                    <button aria-expanded="false" aria-haspopup="listbox" className="demo-select-button" data-testid="demo-hear-about-us-select" id="hear-about-us" tabIndex="6" type="button">
                      <span className="demo-select-value is-placeholder">How did you hear about us?</span>
                    </button>
                    <span aria-hidden="true" className="demo-floating-label">How did you hear about us?</span>
                  </div>
                </div>
              </div>
              <div className="demo-sms-consent">
                <div className="demo-sms-heading">Get scheduled fast:</div>
                <label>
                  <input data-testid="demo-sms-opt-in-checkbox" tabIndex="7" type="checkbox" />
                  <span>I agree to receive automated text messages from Owner.com at the number provided to schedule my demo and to hear about Owner.com products, updates, and offers. Consent is not required to get a demo. About 4 messages/month.</span>
                </label>
                <p>{"Message & data rates may apply. Reply STOP to unsubscribe, HELP for help."}</p>
              </div>
              <button className="demo-submit-button" data-testid="demo-submit-button" tabIndex="8" type="submit">
                <span className="demo-submit-text">Get a free demo</span>
              </button>
            </div>
            <p className="demo-legal">
              By providing us with your information you are consenting to the collection and use of your information in accordance with our
              {" "}
              <A data-testid="demo-terms-link" href="/website-terms" rel="noreferrer" target="_blank">Terms of Service</A>
              {" "}
              and
              {" "}
              <A data-testid="demo-privacy-link" href="/privacy-policy" rel="noreferrer" target="_blank">Privacy Policy</A>
              .
            </p>
          </form>
        </astro-island>
      </section>
    </div>
  );
}
