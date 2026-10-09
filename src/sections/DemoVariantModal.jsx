import { useState } from "react";
import A from "../lib/A.jsx";
import { DemoCoverage } from "./DemoHiddenControl.jsx";

const CDN = "/_ext/res.cloudinary.com/spiralyze/image/upload";

const Q1 = [
  { cls: "spz_1004_v1_step_1_answer_item_1", icon: `${CDN}/f_svg/v1787723819/owner/1004/hugeiconsfrench-fries-02.svg`, alt: "Quick service icon", label: "Quick service" },
  { cls: "spz_1004_v1_step_1_answer_item_2", icon: `${CDN}/f_svg/v1786090987/owner/1004/icons__dish.svg`, alt: "Full service icon", label: "Full service" },
  { cls: "spz_1004_v1_step_1_answer_item_3", icon: `${CDN}/f_svg/v1786090988/owner/1004/help-circle.svg`, alt: "Other icon", label: "Other" },
];
const Q2 = [
  { cls: "spz_1004_v1_step_2_answer_item_1", icon: `${CDN}/f_svg/v1786090988/owner/1004/hugeiconscafe.svg`, alt: "Restaurant owner or manager icon", label: "I’m a restaurant owner or manager" },
  { cls: "spz_1004_v1_step_2_answer_item_2", icon: `${CDN}/f_svg/v1786090988/owner/1004/hugeiconspackage-moving.svg`, alt: "Service provider icon", label: "I provide services to restaurants" },
  { cls: "spz_1004_v1_step_2_answer_item_3", icon: `${CDN}/f_svg/v1786090988/owner/1004/help-circle.svg`, alt: "Other icon", label: "Other" },
];

function Answers({ items, selected, onPick, indexAttr }) {
  return (
    <div className="spz-qualifying-question-answer-row">
      {items.map((it, i) => (
        <div key={it.cls} className={`spz-qualifying-question-answer-item ${it.cls}${selected === i ? " checked" : ""}`} data-step2-item-index={indexAttr ? String(i) : undefined} onClick={() => onPick(i)}>
          <div className="radio-toggle"></div>
          <img src={it.icon} alt={it.alt} />
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// /demo — the visible UI: the live A/B variant (spz_1004_v1) full-screen overlay — blurred dashboard background and a
// white card with the step dots, "Get a demo" and the two qualifying questions in front of the demo form. Markup from
// the rendered snapshot recon/mirror/src/demo/index.html. Step behaviour as observed on the live page (no network):
//   step 1: picking an answer advances; Continue with nothing picked also advances.
//   step 2: picking an answer advances; Continue with nothing picked shows "Please select an option".
//   after step 2 the questions hide and the form's first field step (restaurant / role) shows; dots go to step 3.
// The form never submits anywhere.
export default function DemoVariantModal() {
  const [q, setQ] = useState(1); // 1 | 2 | 3 (questions done)
  const [a1, setA1] = useState(null);
  const [a2, setA2] = useState(null);
  const [err2, setErr2] = useState(false);

  const pick1 = (i) => { setA1(i); setQ(2); };
  const pick2 = (i) => { setA2(i); setErr2(false); setQ(3); };
  const continue2 = () => { if (a2 === null) setErr2(true); else setQ(3); };

  return (
    <section className="spz-1004-section spz-1004-v1-root" data-clone-section="DemoVariantModal">
      <picture className="spz-1004-v1-bg">
        <source media="(max-width: 767.98px)" srcSet={`${CDN}/f_auto/owner/1002/v2-bg-mobile.webp`} />
        <img src={`${CDN}/f_auto/owner/1002/v2-bg-desktop_3.webp`} alt="Owner Background Dashboard" />
      </picture>
      <div className="spz-1004-v1-scroll">
        <div className="spz-1004-v1-scroll-inner">
          <div className="spz-1004-v1-card">
            <div className="spz-1004-v1-content">
              <div className="spz-1004-v1-steps" data-step={String(q)}>
                <span className="spz-1004-v1-step spz-1004-v1-step-1"></span>
                <span className="spz-1004-v1-step spz-1004-v1-step-2"></span>
                <span className="spz-1004-v1-step spz-1004-v1-step-3"></span>
              </div>
              <h2 className="spz-1004-v1-heading">Get a demo</h2>
              <div className="spz-1004-v1-form-wrap">
                <section className="demo-control-right-column">
                  <form className="demo-form demo-control-form spz-1004-v1-form" data-testid="demo-form" data-step="1" noValidate onSubmit={(e) => e.preventDefault()}>
                    <div className={`spz-qualifying-questions${q === 3 ? " spz-1004-hidden" : ""}`}>
                      <div className={`spz-qualifying-question step-1${q !== 1 ? " spz-1004-hidden" : ""}`}>
                        <p className="spz-qualifying-question-text">What kind of restaurant are you?</p>
                        <Answers items={Q1} selected={a1} onPick={pick1} />
                        <div className="spz-qualifying-question-cta">
                          <button type="button" className="spz-qualifying-question-cta-btn spz_1004_v1_step_1_continue_cta" onClick={() => setQ(2)}>
                            <span>Continue</span>
                          </button>
                        </div>
                      </div>
                      <div className={`spz-qualifying-question step-2${q !== 2 ? " spz-1004-hidden" : ""}${err2 ? " spz-error" : ""}`}>
                        <p className="spz-qualifying-question-text">What is your role?</p>
                        <Answers items={Q2} selected={a2} onPick={pick2} indexAttr />
                        <div className="spz-qualifying-question-error">Please select an option</div>
                        <div className="spz-qualifying-question-cta">
                          <button type="button" className="spz-qualifying-question-cta-btn spz_1004_v1_step_2_continue_cta" onClick={continue2}>
                            <span>Continue</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <input data-testid="cro1-hidden-field" type="hidden" name="cro1" defaultValue="SPZ_#1004_variant1" />
                    <input data-testid="cro2-hidden-field" type="hidden" name="cro2" defaultValue="" />
                    <div className="demo-embed-form-heading">
                      <p>Step 1 of 2</p>
                      <h2>Tell us a little about your restaurant to unlock growth today</h2>
                    </div>
                    <div className="demo-form-step-fields demo-step-one-fields" data-testid="demo-step-one-fields">
                      <div className="demo-form-row spz-row-1">
                        <div className="demo-restaurant-field spz-1004-v1-field" data-testid="demo-restaurant-field">
                          <label className="demo-floating-label" htmlFor="demo-restaurant-name">Restaurant name / location</label>
                          <div className="demo-restaurant-input-wrap">
                            <input aria-autocomplete="list" aria-busy="false" aria-controls="demo-restaurant-listbox" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" autoCorrect="off" data-testid="demo-restaurant-input" id="demo-restaurant-name" placeholder="Search your restaurant name..." role="combobox" tabIndex={1} type="text" defaultValue="" name="restaurant-name" />
                          </div>
                          <p className="demo-restaurant-hint">Start typing, then select your restaurant from the list</p>
                          <span className="spz-1004-v1-flabel">Restaurant name</span>
                        </div>
                        <div className="demo-field-wrap spz-1004-v1-field" data-testid="demo-role-field">
                          <div className="demo-field demo-select-field   ">
                            <button aria-expanded="false" aria-haspopup="listbox" className="demo-select-button" data-testid="demo-role-select" id="role" tabIndex={2} type="button">
                              <span className="demo-select-value is-placeholder">Select one...</span>
                            </button>
                            <span aria-hidden="true" className="demo-floating-label">Role</span>
                          </div>
                          <span className="spz-1004-v1-flabel">Role</span>
                        </div>
                      </div>
                      <button className="demo-submit-button" data-testid="demo-continue-button" tabIndex={4} type="submit">
                        <span className="demo-submit-text">Continue</span>
                      </button>
                    </div>
                    <div className="demo-form-step-fields demo-step-two-fields" data-testid="demo-step-two-fields" hidden>
                      <button aria-label="Back to step 1" className="demo-back-button" data-testid="demo-back-button" tabIndex={-1} type="button">
                        <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
                          <path d="M8.75 2.625 4.375 7l4.375 4.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>Back</button>
                      <div className="demo-embed-field-block"></div>
                      <div className="demo-form-row demo-embed-name-row">
                        <div className="demo-field-wrap spz-1004-v1-field">
                          <div className="demo-field   ">
                            <input autoComplete="given-name" data-testid="demo-firstName-input" id="firstName" placeholder="First name" tabIndex={3} type="text" defaultValue="" name="firstName" />
                            <label className="demo-floating-label" htmlFor="firstName">First name</label>
                          </div>
                          <span className="spz-1004-v1-flabel">First name</span>
                        </div>
                        <div className="demo-field-wrap spz-1004-v1-field">
                          <div className="demo-field   ">
                            <input autoComplete="family-name" data-testid="demo-lastName-input" id="lastName" placeholder="Last name" tabIndex={4} type="text" defaultValue="" name="lastName" />
                            <label className="demo-floating-label" htmlFor="lastName">Last name</label>
                          </div>
                          <span className="spz-1004-v1-flabel">Last name</span>
                        </div>
                      </div>
                      <div className="spz-row-2">
                        <div className="demo-field-wrap spz-1004-v1-field">
                          <div className="demo-field   ">
                            <input aria-describedby="email-suggestion" autoComplete="email" data-testid="demo-email-input" id="email" placeholder="Email" tabIndex={5} type="email" defaultValue="" name="email" />
                            <label className="demo-floating-label" htmlFor="email">Email</label>
                          </div>
                          <p aria-live="polite" className="email-suggestion" id="email-suggestion"></p>
                          <span className="spz-1004-v1-flabel">Email</span>
                        </div>
                        <div className="demo-field-wrap spz-1004-v1-field" data-testid="demo-hear-about-us-field">
                          <div className="demo-field demo-select-field   ">
                            <button aria-expanded="false" aria-haspopup="listbox" className="demo-select-button" data-testid="demo-hear-about-us-select" id="hear-about-us" tabIndex={6} type="button">
                              <span className="demo-select-value is-placeholder">How did you hear about us?</span>
                            </button>
                            <span aria-hidden="true" className="demo-floating-label">How did you hear about us?</span>
                          </div>
                          <span className="spz-1004-v1-flabel">How did you hear about us?</span>
                        </div>
                      </div>
                      <div className="demo-field-wrap demo-phone-wrap spz-1004-v1-field">
                        <div className="demo-field demo-phone-field   ">
                          <span aria-hidden="true" className="demo-phone-prefix">
                            <img alt="US Flag" src="/_apps/grader/assets/demo/us-flag.svg" />
                          </span>
                          <input autoComplete="tel" data-testid="demo-cellphone-input" id="cellphone" inputMode="tel" placeholder="Phone" tabIndex={7} type="tel" defaultValue="" name="cellphone" />
                          <label className="demo-floating-label" htmlFor="cellphone">Phone</label>
                        </div>
                        <span className="spz-1004-v1-flabel">Phone</span>
                      </div>
                      <div className="demo-embed-field-block"></div>
                      <div className="demo-sms-consent">
                        <div className="demo-sms-heading">Get scheduled fast:</div>
                        <label>
                          <input data-testid="demo-sms-opt-in-checkbox" tabIndex={7} type="checkbox" />
                          <span>I agree to receive automated text messages from Owner.com at the number provided to schedule my demo and to hear about Owner.com products, updates, and offers. Consent is not required to get a demo. About 4 messages/month.</span>
                        </label>
                        <p>Message &amp; data rates may apply. Reply STOP to unsubscribe, HELP for help.</p>
                      </div>
                      <button className="demo-submit-button" data-testid="demo-submit-button" tabIndex={8} type="submit">
                        <span className="demo-submit-text">Get a free demo</span>
                      </button>
                    </div>
                    <p className="demo-legal">By providing us with your information you are consenting to the collection and use of your information in accordance with our <A data-testid="demo-terms-link" href="/website-terms" rel="noreferrer" target="_blank">Terms of Service</A> and <A data-testid="demo-privacy-link" href="/privacy-policy" rel="noreferrer" target="_blank">Privacy Policy</A>.</p>
                  </form>
                  <div className="demo-control-mobile-cards">
                    <DemoCoverage />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
