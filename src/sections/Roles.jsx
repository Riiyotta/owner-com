// roles — the section's real markup, read from the rendered page (route /careers, section 7).
export default function Roles() {
  return (
    <section id="roles" data-section-overlap="" className="section-careers" data-clone-section="Roles">
      <div className="container-large">
        <div className="section-base-wrap">
          <div>
            <div className="section-base-row cc-career-head">
              <div className="max-width-582">
                <h2 className="h3">Careers at Owner</h2>
              </div>
              <div className="text-color-muted">
                <p className="h6">
                  <span roles-counter="">X</span>
                  {" openings"}
                </p>
              </div>
            </div>
            <div className="u-mt-24">
              <div className="notification">
                <div className="w-layout-hflex notification-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-24">
                    <path d="M9.25 11.4992L11 13.2492L14.75 9.49924M20.25 11.9116V6.94076C20.25 6.0799 19.6991 5.31562 18.8825 5.04339L12.6325 2.96006C12.2219 2.82321 11.7781 2.82321 11.3675 2.96006L5.11754 5.04339C4.30086 5.31562 3.75 6.0799 3.75 6.94076V11.9116C3.75 16.884 8 19.2492 12 21.4071C16 19.2492 20.25 16.884 20.25 11.9116Z" stroke="currentColor" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="body-s">Stay safe. Our team only uses @owner.com email addresses. We never ask for financial information during the application process.</p>
                </div>
                <svg data-w-id="04fd6516-6c12-f3d7-78d9-d316fb8364f0" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-24">
                  <path d="M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
          <ul data-transition="" role="list" className="careers-roles_team-list">
            <li>
              <div className="u-mb-24">
                <h3 data-team-name="" className="h4">{"Business Operations, Analytics & Applied AI"}</h3>
              </div>
              <ul role="list" className="careers-roles_list">
                <li className="careers-role">
                  <a href="#" className="careers-role_item w-inline-block">
                    <p data-title="" className="h6">Title</p>
                    <div className="w-layout-hflex careers-roles_action">
                      <div className="text-color-muted">
                        <p data-location="" className="body-s">Location</p>
                      </div>
                      <div data-button-instance="" className="btn is-secondary">
                        <div data-button-text="" className="btn-text">Apply</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
