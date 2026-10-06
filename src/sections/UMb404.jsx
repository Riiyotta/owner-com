// IA section(s): content.block (ia/ia.json, design-repo/sections/)
// u-mb-40 — the section's real markup, read from the rendered page (route /d, section 15).
export default function UMb404() {
  return (
    <div className="u-mb-40" data-clone-section="UMb404">
      <div data-rise="" className="s-d_conv-rate">
        <p className="h4">Average restaurant website conversion rate</p>
        <div className="conv__grid">
          <div className="conv__cell conv__cell--head"></div>
          <div className="conv__cell conv__cell--head">Independent restaurant websites</div>
          <div className="conv__cell conv__cell--head">Owner.com websites</div>
          <div className="conv__cell conv__cell--head">Performance gain with Owner</div>
          <div className="conv__cell conv__cell--label">Add to cart rate</div>
          <div className="conv__cell conv__cell--num">7.9%</div>
          <div className="conv__cell conv__cell--num conv__cell--owner">15.6%</div>
          <div className="conv__cell conv__cell--gain">97% better</div>
          <div className="conv__cell conv__cell--label">Session to purchase completed</div>
          <div className="conv__cell conv__cell--num">4.5%</div>
          <div className="conv__cell conv__cell--num conv__cell--owner">11.1%</div>
          <div className="conv__cell conv__cell--gain">146% better</div>
        </div>
      </div>
    </div>
  );
}
