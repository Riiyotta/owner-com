// IA section(s): shell.demo-control-header (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// demo-control-header — the section's real markup, read from the rendered page (route /pos-demo, section 0; shared by 2 routes).
export default function DemoControlHeader() {
  return (
    <header className="demo-control-header" data-clone-section="DemoControlHeader">
      <A href="/">
        <img alt="Owner" src="/_apps/grader/assets/new-branding/owner-lockup-black.svg" />
      </A>
    </header>
  );
}
