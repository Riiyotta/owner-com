// IA section(s): cta.section-career-cta (ia/ia.json, design-repo/sections/)
// See if our values resonate wit — the section's real markup, read from the rendered page (route /careers, section 5).
export default function SeeIfOurValues() {
  return (
    <section data-section-overlap="" className="section-career-cta" data-clone-section="SeeIfOurValues">
      <div className="container-large">
        <div className="career-cta_wrap">
          <div className="max-width-684">
            <h2 className="h2">See if our values resonate with you.</h2>
          </div>
          <div className="max-width-390">
            <p className="body-l">
              {"We take our values seriously. We celebrate them at our weekly all hands meetings. We use them as a roadmap for success and growth within our team. "}
              <br />
              <br />
              We want Owner to be the place you do your best work, and that starts by being surrounded by colleagues who share the same values.
            </p>
            <div className="u-mt-40">
              <a data-button-instance="" target="_blank" className="btn w-inline-block">
                <div data-button-text="" className="btn-text">
                  <strong>See the Owner culture deck</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
