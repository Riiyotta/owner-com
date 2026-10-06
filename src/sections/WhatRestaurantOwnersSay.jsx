// IA section(s): support.section-leaders-support (ia/ia.json, design-repo/sections/)
// What restaurant owners say abo — the section's real markup, read from the rendered page (route /pos, section 3).
export default function WhatRestaurantOwnersSay() {
  return (
    <section data-section-overlap="" className="section-leaders-support" data-clone-section="WhatRestaurantOwnersSay">
      <div className="container-large">
        <div className="leaders-support_wrap">
          <div className="max-width-684">
            <h2 className="h2">What restaurant owners say about Owner POS</h2>
          </div>
          <ul role="list" className="leaders-support_list">
            <li className="leaders-support_list-item">
              <p className="h5">
                {"“Owner POS has improved our quality of life at the restaurant. "}
                <br />
                <br />
                {"We've been in business 20 years and with this system we feel like we can actually grow quicker.”"}
              </p>
              <div className="text-color-muted">
                <p className="body-s">
                  <strong>Umer Awan</strong>
                  <br />
                  {"Magoo's California Pizza"}
                </p>
              </div>
            </li>
            <li className="leaders-support_list-item">
              <p className="h5">
                {"“Owner POS is definitely the most intuitive system I've messed with."}
                <br />
                <br />
                The front end is just freaking incredible.”
              </p>
              <div className="text-color-muted">
                <p className="body-s">
                  <strong>Tony Case</strong>
                  <br />
                  Roly Poly Sandwich Shop
                </p>
              </div>
            </li>
            <li className="leaders-support_list-item">
              <p className="h5">
                “My goal is seven locations in San Francisco.
                <br />
                <br />
                {"Owner POS is what's making that feel possible for me.”"}
              </p>
              <div className="text-color-muted">
                <p className="body-s">
                  <strong>Ashley Lee</strong>
                  <br />
                  {"Ashley's Cafe"}
                </p>
              </div>
            </li>
            <li className="leaders-support_list-item">
              <p className="h5">“The greatest thing Owner has given us is the money coming into my company now.”</p>
              <div className="text-color-muted">
                <p className="body-s">
                  <strong>Sarkis Panossian</strong>
                  <br />
                  Township Line Pizza
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
