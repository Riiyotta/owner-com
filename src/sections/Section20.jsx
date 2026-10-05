import A from "../lib/A.jsx";

// section — the section's real markup, read from the rendered page (route /kitchen-tablet, section 7).
export default function Section20() {
  return (
    <section data-section-overlap="" className="section-footer" data-clone-section="Section20">
      <div className="container-large">
        <div className="footer-wrap">
          <div className="footer-wrap_top">
            <a href="#" className="footer_brand w-inline-block">
              <div className="footer_logo w-embed">
                <svg width="100%" height="100%" viewBox="0 0 133 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.01185 21.0117C8.7446 16.5332 16.2245 16.534 20.9572 21.0127L20.5685 21.4463C18.6225 23.5967 16.4057 25.4871 13.9728 27.0693L13.0783 27.6504C12.7074 27.8752 12.4917 27.9961 12.4845 28L12.3478 27.9229C12.2427 27.8626 12.0802 27.7668 11.8693 27.6387L10.9933 27.0693C8.40298 25.3847 6.05784 23.3505 4.02357 21.0254C4.01975 21.0208 4.01567 21.0163 4.01185 21.0117ZM111.439 7.25781C113.101 7.25782 114.622 7.67438 115.998 8.50391L115.996 8.50586C117.375 9.33739 118.456 10.4726 119.243 11.915C120.051 13.3353 120.455 14.91 120.455 16.6357C120.455 17.1818 120.39 17.7383 120.259 18.3066H105.878C106.004 18.778 106.183 19.2276 106.42 19.6504C106.944 20.5466 107.645 21.2563 108.52 21.7803C109.394 22.3043 110.368 22.5673 111.439 22.5674C112.378 22.5674 113.253 22.3292 114.063 21.8477C114.895 21.3661 115.484 20.7323 115.834 19.9453H119.901C119.396 21.7601 118.37 23.2231 116.818 24.3379C115.265 25.4527 113.471 26.0088 111.439 26.0088C109.712 26.0088 108.127 25.5922 106.684 24.7627C105.24 23.9311 104.103 22.8061 103.273 21.3857C102.441 19.9432 102.026 18.3586 102.026 16.6328C102.026 14.9072 102.443 13.3333 103.273 11.9131C104.105 10.4706 105.24 9.33544 106.684 8.50391C108.127 7.67246 109.777 7.25785 111.439 7.25781ZM44.7286 2.20898C46.915 2.20899 48.9158 2.74513 50.7296 3.81543H50.7316C52.5451 4.86337 53.978 6.2959 55.0265 8.1084C56.0973 9.92315 56.6339 11.9225 56.6339 14.1074C56.6339 16.2925 56.0974 18.2936 55.0265 20.1064C53.9779 21.9192 52.5453 23.3623 50.7316 24.4326C48.9157 25.4827 46.915 26.0068 44.7286 26.0068C42.5425 26.0068 40.5404 25.4806 38.7267 24.4326C36.9128 23.3623 35.4695 21.9193 34.3986 20.1064C33.348 18.2916 32.8234 16.2925 32.8234 14.1074C32.8234 11.9225 33.348 9.92113 34.3986 8.1084C35.4694 6.29577 36.913 4.86339 38.7267 3.81543C40.5425 2.74523 42.5425 2.20902 44.7286 2.20898ZM79.1203 24.1641C78.8551 25.0077 78.0741 25.5809 77.1896 25.5811H76.1447C75.2682 25.581 74.4912 25.0142 74.2199 24.1807L70.7374 13.4434L67.256 24.1807C66.9868 25.0163 66.2088 25.581 65.3302 25.5811H64.255C63.3705 25.5809 62.5895 25.0057 62.3244 24.1621L57.1603 7.68457H60.7999L64.7999 20.8945L69.0958 7.68457H72.3751L76.671 20.8945L76.6749 20.8926L80.6749 7.68262H84.3156L79.1203 24.1641ZM92.4513 7.25781C96.8156 7.25805 100.355 10.7943 100.355 15.1562V25.5801H96.7511V15.1562C96.751 12.7872 94.8216 10.8596 92.4513 10.8594C90.0808 10.8594 88.1516 12.7871 88.1515 15.1562V25.5801H84.548V15.1562C84.5481 10.7942 88.0868 7.25781 92.4513 7.25781ZM132.299 11.2559H125.74V25.5791H122.165V11.2559C122.165 9.2833 123.767 7.68262 125.74 7.68262H132.299V11.2559ZM44.7267 5.97852C43.2613 5.97854 41.9071 6.34048 40.6603 7.06055C39.4356 7.78081 38.461 8.76447 37.7404 10.0107C37.0421 11.2569 36.6916 12.6226 36.6915 14.1074C36.6915 15.5925 37.04 16.9588 37.7404 18.2051C38.4631 19.4514 39.4356 20.434 40.6603 21.1543C41.9072 21.8765 43.2389 22.2373 44.7267 22.2373C46.2146 22.2373 47.5693 21.8746 48.7941 21.1543C50.0186 20.4341 50.9805 19.4512 51.6808 18.2051C52.4035 16.9588 52.7638 15.5925 52.7638 14.1074C52.7637 12.6226 52.4013 11.2569 51.6808 10.0107C50.9804 8.76448 50.0188 7.78081 48.7941 7.06055C47.5693 6.33825 46.1923 5.97853 44.7267 5.97852ZM21.2628 3.74121C21.7434 4.24177 22.1815 4.78354 22.5714 5.36035C22.7353 5.60285 22.8908 5.85192 23.0372 6.10645C23.1593 6.31858 23.2755 6.53494 23.3849 6.75488C23.4067 6.79865 23.4281 6.84266 23.4494 6.88672C23.4921 6.9753 23.5337 7.06551 23.5744 7.15527C23.6352 7.28978 23.6941 7.42544 23.7501 7.5625C23.8623 7.83686 23.9645 8.11643 24.0568 8.40039C24.0721 8.4477 24.0869 8.49541 24.1017 8.54297C24.2053 8.87595 24.2952 9.215 24.3703 9.55957C24.381 9.60879 24.3914 9.65857 24.4015 9.70801C24.5433 10.4005 24.6262 11.1147 24.6447 11.8447C24.6473 11.9489 24.6486 12.0534 24.6486 12.1582C24.6486 15.3416 23.184 18.2223 21.2716 20.6279C16.8423 15.9043 16.8394 8.4684 21.2628 3.74121ZM3.70619 3.74609C8.12227 8.47256 8.11829 15.9017 3.69545 20.624C1.80431 18.2442 0.34972 15.4002 0.31947 12.2578C0.319169 12.2247 0.31947 12.1914 0.31947 12.1582C0.31949 8.8928 1.61019 5.93034 3.70619 3.74609ZM111.439 10.6992C110.368 10.6993 109.394 10.9624 108.52 11.4863C107.645 12.0103 106.944 12.7201 106.42 13.6162C106.171 14.0591 105.985 14.5309 105.86 15.0264H116.634C116.514 14.5288 116.334 14.0592 116.097 13.6162C115.637 12.7201 114.991 12.0103 114.161 11.4863C113.329 10.9624 112.422 10.6992 111.439 10.6992ZM12.6417 0.000976562C13.3742 0.0102622 14.0914 0.0845361 14.7872 0.217773C14.8368 0.22726 14.8864 0.236985 14.9357 0.24707C15.0346 0.267306 15.1335 0.288902 15.2316 0.311523C15.2805 0.322812 15.3294 0.334802 15.3781 0.34668C15.7685 0.441896 16.1519 0.555642 16.5265 0.6875C16.6669 0.736934 16.8065 0.789364 16.9445 0.84375C17.5889 1.09774 18.207 1.40539 18.7921 1.76074C18.9175 1.83685 19.0419 1.91466 19.1642 1.99512C19.4497 2.18292 19.7263 2.38325 19.9943 2.59375C20.0326 2.62383 20.0716 2.65404 20.1095 2.68457C20.2988 2.83695 20.4835 2.99497 20.6632 3.1582C20.6992 3.19088 20.7351 3.22472 20.7706 3.25781C20.8175 3.30139 20.8632 3.34632 20.9093 3.39062C16.1899 7.81108 8.77934 7.81171 4.0597 3.3916C6.24583 1.29254 9.2136 4.45088e-05 12.4845 0L12.6417 0.000976562Z" fill="#2C2C2C" />
                </svg>
              </div>
            </a>
            <div className="button-group cc-footer">
              <a data-button-instance="" className="btn w-inline-block">
                <div data-button-text="" className="btn-text">Get a free demo</div>
              </a>
              <A data-button-instance="" href="/how-owner-works" className="btn w-inline-block is-secondary">
                <div data-button-text="" className="btn-text">See how it works</div>
              </A>
            </div>
          </div>
          <ul role="list" className="footer-middle_wrap">
            <li className="footer-middle_item">
              <div className="text-color-supermuted">
                <div className="body-m text-weight-medium">Grow online discovery</div>
              </div>
              <ul role="list" className="footer-middle_list">
                <li>
                  <A href="/restaurant-website-ai" className="footer-link cc-big">Restaurant Website</A>
                </li>
                <li>
                  <A href="/restaurant-seo" className="footer-link cc-big">Restaurant SEO</A>
                </li>
                <li>
                  <A href="/online-menu" className="footer-link cc-big">Online Menu</A>
                </li>
                <li>
                  <A href="/reviews-engine" className="footer-link cc-big">Reviews Engine</A>
                </li>
                <li>
                  <A href="/listings-management" className="footer-link cc-big">Listings Management</A>
                </li>
              </ul>
            </li>
            <li className="footer-middle_item">
              <div className="text-color-supermuted">
                <div className="body-m text-weight-medium">Grow repeat orders</div>
              </div>
              <ul role="list" className="footer-middle_list">
                <li>
                  <A href="/branded-apps" className="footer-link cc-big">Branded Restaurant App</A>
                </li>
                <li>
                  <A href="/automatic-marketing" className="footer-link cc-big">Marketing Campaigns</A>
                </li>
                <li>
                  <A href="/email-sms-marketing" className="footer-link cc-big">{"Email & SMS Marketing"}</A>
                </li>
                <li>
                  <A href="/push-notifications" className="footer-link cc-big">Push Notifications Marketing</A>
                </li>
                <li>
                  <A href="/loyalty-rewards" className="footer-link cc-big">{"Loyalty & Rewards"}</A>
                </li>
              </ul>
            </li>
            <li className="footer-middle_item">
              <div className="text-color-supermuted">
                <div className="body-m text-weight-medium">Grow online sales</div>
              </div>
              <ul role="list" className="footer-middle_list">
                <li>
                  <A href="/online-ordering" className="footer-link cc-big">Online Ordering</A>
                </li>
                <li>
                  <A href="/smart-upsells" className="footer-link cc-big">Smart Upsells</A>
                </li>
                <li>
                  <A href="/delivery" className="footer-link cc-big">Delivery</A>
                </li>
                <li>
                  <A href="/catering" className="footer-link cc-big">Catering</A>
                </li>
                <li>
                  <A href="/ai-phone-ordering" className="footer-link cc-big w-inline-block">
                    <p>AI Phone Ordering</p>
                    <div className="nav-tag cc-grey">Waitlist</div>
                  </A>
                </li>
              </ul>
            </li>
            <li className="footer-middle_item">
              <div className="text-color-supermuted">
                <div className="body-m text-weight-medium">Run your restaurant</div>
              </div>
              <ul role="list" className="footer-middle_list">
                <li>
                  <A href="/pos" className="footer-link cc-big w-inline-block">
                    <p>Point of Sale</p>
                    <div className="nav-tag">New</div>
                  </A>
                </li>
                <li>
                  <A href="/mobile" className="footer-link cc-big">Owner App</A>
                </li>
                <li>
                  <A href="/reporting-analytics" className="footer-link cc-big">{"Reporting & Analytics"}</A>
                </li>
                <li>
                  <A href="/kitchen-tablet" aria-current="page" className="footer-link cc-big w--current">Kitchen Tablet</A>
                </li>
                <li>
                  <A href="/pos-integrations" className="footer-link cc-big">POS Integrations</A>
                </li>
              </ul>
            </li>
          </ul>
          <ul role="list" className="footer-middle_wrap cc-secondary">
            <li className="footer-middle_item">
              <div className="text-color-supermuted">
                <div className="body-m text-weight-medium">Resources</div>
              </div>
              <ul role="list" className="footer-middle_list">
                <li>
                  <A href="/case-studies" className="footer-link">Case Studies</A>
                </li>
                <li>
                  <A href="/blog" className="footer-link">Blog</A>
                </li>
                <li>
                  <A href="/blog/restaurant-marketing" className="footer-link">Restaurant Marketing Guide</A>
                </li>
                <li>
                  <A href="/blog/seo-for-restaurants" className="footer-link">SEO for Restaurants</A>
                </li>
                <li>
                  <A href="/blog/email-marketing-for-restaurants" className="footer-link">Restaurant Email Marketing</A>
                </li>
                <li>
                  <A href="/blog/mobile-app-for-restaurants" className="footer-link">Restaurant Mobile App</A>
                </li>
                <li>
                  <A href="/blog/online-ordering-system-for-restaurants" className="footer-link">Online Ordering Systems</A>
                </li>
                <li>
                  <A href="/blog/how-to-create-a-restaurant-website" className="footer-link">Restaurant Website Builders</A>
                </li>
                <li>
                  <a className="footer-link">Restaurant Grader</a>
                </li>
              </ul>
            </li>
            <li className="footer-middle_item">
              <div className="text-color-supermuted">
                <div className="body-m text-weight-medium">Company</div>
              </div>
              <ul role="list" className="footer-middle_list">
                <li>
                  <A href="/our-story" className="footer-link">About</A>
                </li>
                <li>
                  <A href="/careers" className="footer-link">Careers</A>
                </li>
                <li>
                  <A href="/leadership" className="footer-link">Leadership</A>
                </li>
                <li>
                  <A href="/builders-wanted" target="_blank" className="footer-link">Builders Wanted</A>
                </li>
                <li>
                  <A href="/press" className="footer-link">Press</A>
                </li>
                <li>
                  <A href="/partner-request" className="footer-link">Partner with Owner</A>
                </li>
              </ul>
            </li>
            <li className="footer-middle_item">
              <div className="text-color-supermuted">
                <div className="body-m text-weight-medium">Support</div>
              </div>
              <ul role="list" className="footer-middle_list">
                <li>
                  <a href="tel:1-844-24-69637" className="footer-link">1-844-24-OWNER</a>
                </li>
                <li>
                  <a href="mailto:support@owner.com" className="footer-link">support@owner.com</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="footer-wrap_bottom">
            <div className="text-color-muted">
              <p className="body-xs">
                <span>2026 ©</span>
                {" Owner.com | All rights reserved. "}
              </p>
            </div>
            <ul role="list" className="footer-bottom_list">
              <li>
                <div className="w-embed">
                  <a className="footer-bottom_link">Cookie Settings</a>
                </div>
              </li>
              <li>
                <A href="/privacy-policy" className="footer-bottom_link">Privacy</A>
              </li>
              <li>
                <A href="/website-terms" className="footer-bottom_link">Website Terms</A>
              </li>
              <li>
                <A href="/disclaimer" className="footer-bottom_link">Disclaimer</A>
              </li>
              <li>
                <A href="/restaurant-participation-agreement" className="footer-bottom_link">Restaurant Agreements</A>
              </li>
              <li>
                <A href="/platform-terms" className="footer-bottom_link">Platform Terms</A>
              </li>
              <li>
                <A href="/accessibility" className="footer-bottom_link">Accessibility</A>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
