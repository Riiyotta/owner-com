// IA section(s): content.section-s-d-about (ia/ia.json, design-repo/sections/)
// A vision biggerthan restaurant — the section's real markup, read from the rendered page (route /d, section 5).
export default function AVisionBiggerthanRestaurant() {
  return (
    <section data-section-overlap="" className="section-s-d_about" data-clone-section="AVisionBiggerthanRestaurant">
      <div className="container-large">
        <div className="u-mb-64">
          <div className="s-d_wrap">
            <div>
              <div className="u-mb-20">
                <div className="opacity-80">
                  <p className="body-m">About Owner</p>
                </div>
              </div>
              <div className="max-width-550">
                <h2 className="h3">
                  A vision bigger
                  <br />
                  than restaurants.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="u-mb-64">
          <div data-col-reveal="" className="ladder">
            <div data-col-reveal-item="" className="ladder__step" style={{ "clipPath": "inset(100% 0% 0% round 20px)" }}>
              <span className="h4">$44B</span>
              <span className="body-s">US independent restaurants</span>
            </div>
            <div data-col-reveal-item="" className="ladder__step is-2" style={{ "clipPath": "inset(100% 0% 0% round 24px)" }}>
              <span className="h4">$105B</span>
              <span className="body-s">
                {"+ UK, Canada, "}
                <br />
                EU, Australia
              </span>
            </div>
            <div data-col-reveal-item="" className="ladder__step is-3" style={{ "clipPath": "inset(100% 0% 0% round 32px)" }}>
              <span className="h2">$785B</span>
              <span className="body-s">
                {"every brick-and-mortar "}
                <br />
                SMB around the world
              </span>
            </div>
          </div>
        </div>
        <div className="s-d_wrap">
          <div>
            <div className="u-mb-16">
              <h2 className="h4">Vision</h2>
            </div>
            <div className="text-rich-text_series-d w-richtext">
              <p>Build the AI system local business owners need to succeed.</p>
            </div>
          </div>
          <div>
            <div className="u-mb-16">
              <h2 className="h4">Mission</h2>
            </div>
            <div className="text-rich-text_series-d w-richtext">
              <p>Arm owners to take on their Goliaths.</p>
            </div>
          </div>
          <div>
            <div className="u-mb-16">
              <h2 className="h4">Market</h2>
            </div>
            <div className="text-rich-text_series-d w-richtext">
              <p>
                Owner’s initial market consists of independent restaurant owners in the US. That’s a ~$44B/year revenue opportunity: 645,000 restaurants spending ~7% of revenue on tech, marketing, and payments. Tech spend is only growing from here, given the expanding role of tech and AI in everyday businesses.
                <br />
                <br />
                But the founding vision has always been bigger than restaurants. The vision involves serving 15+ other verticals: hair salons, spas, independent grocers. The size of that opportunity is $785B/year. Each needs the same solution that Owner is building for restaurants today. So the Owner team has been building a flexible, transferable platform that makes it easy to launch new verticals.
              </p>
            </div>
          </div>
          <div>
            <div className="u-mb-16">
              <h2 className="h4">Insight</h2>
            </div>
            <div className="text-rich-text_series-d w-richtext">
              <p>Owner’s founding insight is that local business owners don’t need another software tool to figure out. They need a system that drives the outcome automatically: growing profitable sales. That’s possible only if the same agentic solution manages every part of the business’ digital experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
