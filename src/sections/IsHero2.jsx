// IA section(s): content.section-base (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// is-hero — the section's real markup, read from the rendered page (route /ca/pricing, section 1).
export default function IsHero2() {
  return (
    <section className="section-base is-hero" data-clone-section="IsHero2">
      <div className="container-large">
        <div className="section-base-wrap">
          <div className="section-base_head cc-center">
            <div className="max-width-710">
              <h1 className="h1">
                {"Simple pricing that "}
                <span className="text-color-muted">fits your restaurant.</span>
              </h1>
            </div>
            <div className="u-mt-24">
              <p className="body-l">
                Get the complete Owner platform.
                <br />
                Pay month-to-month with no long-term contracts.
              </p>
            </div>
          </div>
          <div className="pricing-hero_wrap">
            <div className="pricing-hero_wrap-toggle">
              <div className="pricing-hero_toggle">
                <A href="/pricing?r=0" className="prcing-hero_toggle-item w-inline-block">
                  <p>USD</p>
                </A>
                <A href="/ca/pricing?r=0" className="prcing-hero_toggle-item w-inline-block is-active">
                  <p>CAD</p>
                </A>
              </div>
            </div>
            <ul role="list" className="pricing-hero_card-list">
              <li className="pricing-hero_item-card">
                <div className="pricing-top_text">
                  <div className="text-align-center">
                    <div className="opacity-50">
                      <div className="text-color-grey"></div>
                    </div>
                  </div>
                </div>
                <div className="pricing-hero_card">
                  <div>
                    <div className="u-mb-12">
                      <div className="h4">Flexible</div>
                    </div>
                    <p className="body-l">Lower subscription with a small per-order fee. Your costs scale with your sales.</p>
                  </div>
                  <div>
                    <div>
                      <span className="h2">$349 CAD</span>
                      <span className="body-l">{" /month"}</span>
                    </div>
                    <div className="u-mt-4">
                      <div className="opacity-50">
                        <div className="text-color-grey">
                          <p className="body-l">+ 5% restaurant fee per order</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pricing-hero_item-card">
                <div className="pricing-top_text">
                  <div className="text-align-center">
                    <div className="opacity-50">
                      <div className="text-color-grey">
                        <div className="body-s">Special rates available for multi-location</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-hero_card">
                  <div>
                    <div className="u-mb-12">
                      <div className="h4">Flat Rate</div>
                    </div>
                    <p className="body-l">Predictable cost and no restaurant fees. Best for restaurants at C$7k+/mo in online sales.</p>
                  </div>
                  <div>
                    <div>
                      <span className="h2">$699 CAD</span>
                      <span className="body-l">{" /month"}</span>
                    </div>
                    <div className="u-mt-4">
                      <div className="opacity-50">
                        <div className="text-color-grey">
                          <p className="body-l">with no additional restaurant fees</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <A href="/demo" data-button-instance="" className="btn w-inline-block">
              <div data-button-text="" className="btn-text">Get a free demo</div>
            </A>
          </div>
          <div className="pricing-hero_list-wrap">
            <div className="opacity-50">
              <div className="text-color-grey">
                <div className="h4">Included on all plans</div>
              </div>
            </div>
            <ul role="list" className="pricing-hero_list">
              <li className="pricing-hero_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                  <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                  <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
                </svg>
                <div className="h5">AI-Optimized Website</div>
                <p id="w-node-_1596c012-8722-0370-f9a6-9eb55cc2990c-5cc29906" className="body-m">Built to rank on Google. Average restaurant sees 20% more SEO traffic in 30 days.</p>
              </li>
              <li className="pricing-hero_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                  <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                  <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
                </svg>
                <div className="h5">Online Ordering</div>
                <p id="w-node-_1596c012-8722-0370-f9a6-9eb55cc2990c-5cc29906" className="body-m">Turn up to 80% more visitors into customers vs. the average restaurant website.</p>
              </li>
              <li className="pricing-hero_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                  <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                  <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
                </svg>
                <div className="h5">Branded Mobile App</div>
                <p id="w-node-_1596c012-8722-0370-f9a6-9eb55cc2990c-5cc29906" className="body-m">Guests who use your branded app reorder around 2x more often.</p>
              </li>
              <li className="pricing-hero_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                  <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                  <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
                </svg>
                <div className="h5">Automated SEO Pages</div>
                <p id="w-node-_1596c012-8722-0370-f9a6-9eb55cc2990c-5cc29906" className="body-m">We build SEO-optimized pages that rank and earn you more direct orders.</p>
              </li>
              <li className="pricing-hero_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                  <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                  <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
                </svg>
                <div className="h5">Loyalty and Rewards</div>
                <p id="w-node-_1596c012-8722-0370-f9a6-9eb55cc2990c-5cc29906" className="body-m">A rewards program that drives repeat orders, just like the top chains.</p>
              </li>
              <li className="pricing-hero_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                  <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                  <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
                </svg>
                <div className="h5">AI-Powered Marketing</div>
                <p id="w-node-_1596c012-8722-0370-f9a6-9eb55cc2990c-5cc29906" className="body-m">Proven automated email campaigns that drive sales on their own.</p>
              </li>
              <li className="pricing-hero_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                  <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                  <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
                </svg>
                <div className="h5">Direct Catering Orders</div>
                <p id="w-node-_1596c012-8722-0370-f9a6-9eb55cc2990c-5cc29906" className="body-m">Catering menus, easy ordering, and SEO pages that get found by local businesses.</p>
              </li>
            </ul>
          </div>
          <ul role="list" className="pricing-hero_info-list">
            <li className="pricing-hero_info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
              </svg>
              <div className="h5">{"Setup & Migration"}</div>
              <p className="body-m">We handle your entire switch. You get a dedicated specialist.</p>
            </li>
            <li className="pricing-hero_info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
              </svg>
              <div className="h5">Chargeback Protection</div>
              <p className="body-m">Full protection. Stay safe from fraudulent chargebacks.</p>
            </li>
            <li className="pricing-hero_info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 28 28" fill="none" className="icon-28">
                <path d="M3.15966 17.0202C2.52443 15.9199 2.20682 15.3698 2.0825 14.7849C1.9725 14.2674 1.9725 13.7326 2.0825 13.2151C2.20682 12.6302 2.52443 12.0801 3.15966 10.9798L5.96429 6.12209C6.59952 5.02185 6.91714 4.47171 7.36149 4.07161C7.75465 3.71761 8.21783 3.45019 8.72099 3.2867C9.28966 3.10193 9.92489 3.10193 11.1954 3.10193H16.8046C18.0751 3.10193 18.7103 3.10193 19.279 3.2867C19.7821 3.45019 20.2453 3.71761 20.6384 4.07161C21.0828 4.47171 21.4004 5.02185 22.0356 6.1221L24.8404 10.9798C25.4756 12.0801 25.7932 12.6302 25.9174 13.2151C26.0275 13.7326 26.0275 14.2674 25.9174 14.7849C25.7932 15.3698 25.4756 15.9199 24.8404 17.0202L22.0356 21.878C21.4004 22.9782 21.0828 23.5282 20.6384 23.9284C20.2453 24.2824 19.7821 24.5498 19.279 24.7133C18.7103 24.8981 18.0751 24.8981 16.8046 24.8981H11.1954C9.92489 24.8981 9.28966 24.8981 8.72099 24.7133C8.21783 24.5498 7.75465 24.2824 7.36149 23.9284C6.91714 23.5282 6.59952 22.9782 5.96429 21.878L3.15966 17.0202Z" stroke="currentColor" strokeWidth="2.5168" />
                <path d="M12.4199 15.2025L10.5344 13.6433L9 15.5312L12.8275 18.6982L18.2691 11.4787L16.3422 10L12.4199 15.2025Z" fill="currentColor" />
              </svg>
              <div className="h5">24/7 Support</div>
              <p className="body-m">{"You're 24/7, so our support is, too. Consistently top-rated."}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
