// Two big changes have upended t — the section's real markup, read from the rendered page (route /d, section 6).
export default function TwoBigChangesHave() {
  return (
    <section data-section-overlap="" className="section-s-d_why-now" data-clone-section="TwoBigChangesHave">
      <div className="container-large">
        <div className="u-mb-64">
          <div className="s-d_wrap">
            <div>
              <div className="u-mb-20">
                <div className="opacity-80">
                  <p className="body-m">Why now?</p>
                </div>
              </div>
              <div className="u-mb-20">
                <div className="max-width-550">
                  <h2 className="h3">Two big changes have upended the status quo.</h2>
                </div>
              </div>
              <div className="text-color-muted">
                <p className="body-l text-weight-semibold">
                  <strong>One is market-related. The other is technological. Together, they open a new opportunity for Owner to lead the restaurant tech market.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="s-d_wrap">
          <div>
            <div className="u-mb-16">
              <h2 className="h4">1. Market change</h2>
            </div>
            <div className="text-rich-text_series-d w-richtext">
              <p>
                <strong>Consumer behavior has shifted online, even when buying from brick-and-mortar businesses.</strong>
                {" 5 years ago for local businesses, an effective digital presence was a nice-to-have. Succeeding digitally was one potential way to grow your business. But now, an effective digital presence is a must-have. "}
                <br />
                <br />
                {"Local restaurants are the prime example, but the same trend affects every local business. Even though "}
                <a>80%+</a>
                {" of purchases happen offline, consumers research online before buying in-store. This online shift was already happening before 2020, and it isn’t going to shift back. Local business owners are desperate for a solution, and Owner has proven to be that desperately needed solution. Thousands of local business owners now depend on it."}
              </p>
            </div>
          </div>
          <div>
            <div className="u-mb-16">
              <h2 className="h4">2. Technology change</h2>
            </div>
            <div className="text-rich-text_series-d w-richtext">
              <p>
                <strong>{"AI has accelerated Owner’s product development dramatically. "}</strong>
                {"It’s now possible to build software in weeks or months after other companies spent years developing it. "}
                <br />
                <br />
                AI will help Owner bring forward new growth horizons faster than ever imagined: new products, geographies, and verticals can launch years sooner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
