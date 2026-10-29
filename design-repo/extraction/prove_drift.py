#!/usr/bin/env python3
"""Proves verify_all.py (and extraction/wrapper_gate.py) actually CATCH drift: copies this design repo to a scratch
folder, injects one defect at a time, and requires verify_all.py to fail with the matching message. Also requires the
unmodified copy to pass (a check that rejects everything is broken too). The clone's src/ and public/ are symlinked
(read-only) next to the copy, with its package.json, so citation / usedAt / asset / source-identity checks run for real;
when design-repo/ is copied alone those cases are skipped and say so.
Usage: python3 extraction/prove_drift.py [--scratch DIR]   (DIR: where the scratch copies go; default: the OS temp dir)"""
import json, os, re, shutil, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
PKG = os.path.dirname(REPO)
CLONE_NAME = "owner-com-clone"
def _has_clone():
    try: return json.load(open(os.path.join(PKG, "package.json"), encoding="utf-8")).get("name") == CLONE_NAME
    except Exception: return False
HAS_CLONE = _has_clone()


def jload(p): return json.load(open(p, encoding="utf-8"))
def jsave(p, d): json.dump(d, open(p, "w", encoding="utf-8"), indent=2)


def first_section(r):
    return sorted(f for f in os.listdir(os.path.join(r, "sections")) if f.endswith(".json"))[0]


def inj_phantom(r):
    p = os.path.join(r, "tokens/llm/component-allowlist.json"); d = jload(p); d["sections"].append("content.phantom-section"); jsave(p, d)
def inj_orphan(r):
    src = os.path.join(r, "sections", first_section(r)); d = jload(src); d["id"] = "content.orphan-section"
    jsave(os.path.join(r, "sections/content.orphan-section.json"), d)
def inj_count(r):
    p = os.path.join(r, "registry.manifest.json"); d = jload(p); d["counts"]["sections"] += 1; jsave(p, d)
def inj_readme(r):
    p = os.path.join(r, "README.md"); s = open(p).read(); s = re.sub(r"^- Templates: (\d+)$", lambda m: f"- Templates: {int(m.group(1)) + 7}", s, flags=re.M); open(p, "w").write(s)
def _ledger(r):
    p = os.path.join(r, "extraction/measured-values.json"); return p, jload(p)
def _first_cited(d):
    return next((x for rt in d["routes"] for x in rt["sections"] if x.get("lines")), None)
def inj_cite_range(r):   # the ledger claims a range past the end of the snapshot file
    p, d = _ledger(r); x = _first_cited(d)
    if not x: return False
    x["lines"] = [999999, 1000000]; jsave(p, d)
def inj_cite_wrong(r):   # in range, but the cited line is not that element (anchor no longer on the line)
    p, d = _ledger(r); x = _first_cited(d)
    if not x: return False
    x["anchor"] = "anchor-that-is-not-on-this-line"; jsave(p, d)
def inj_cite_other(r):   # a contract cites a range that belongs to a DIFFERENT section
    _, led = _ledger(r)
    ents = [(x["id"], f"{x['file']}:{x['lines'][0]}-{x['lines'][1]}") for rt in led["routes"] for x in rt["sections"] if x.get("lines")]
    if not ents: return False
    a = ents[0]; b = next((e for e in ents if e[0] != a[0]), None)
    if not b: return False
    p = os.path.join(r, "sections", a[0] + ".json"); d = jload(p); d["evidence"]["measuredFrom"] = [b[1]]; jsave(p, d)
def inj_allow_version(r):
    p = os.path.join(r, "tokens/llm/component-allowlist.json"); d = jload(p); d["version"] = str(d["version"]) + "-drift"; jsave(p, d)
def inj_pinned(r):
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["roles"]["avatar"]["generationPolicy"] = "may-generate-new"; jsave(p, d)  # valid value, wrong for this role
def inj_abs(r):
    p = os.path.join(r, "README.md"); open(p, "a").write("\nSource: " + "/" + "Users" + "/someone/project\n")  # built at run time so this file holds no machine path
def inj_entry(r):
    p = os.path.join(r, "registry.manifest.json"); d = jload(p); d["entryPoints"]["tokenCatalog"] = "../ia.json"; jsave(p, d)
def inj_policy(r):
    p = os.path.join(r, "tokens/llm/token-policy.json"); d = jload(p); d["rawValueRestrictions"]["typography-human-label"] = "forbidden"; jsave(p, d)
def inj_graph(r):
    p = os.path.join(r, "compatibility/graph.json"); d = jload(p)
    lim = next(x for x in d["rules"] if x["id"] == "SECTION_PER_PAGE_LIMITS")["limits"]
    if not lim: return False
    k = sorted(lim)[0]; lim[k] += 5; jsave(p, d)
def inj_theme(r):
    p = os.path.join(r, "tokens/themes/light.json"); d = jload(p)
    if not d["resolves"]: return False
    k = sorted(d["resolves"])[0]; d["resolves"][k] = "rgb(1,2,3)"; jsave(p, d)
def inj_schema_enum(r):
    p = os.path.join(r, "schema/pagespec.schema.json"); d = jload(p); d["definitions"]["node"]["properties"]["type"]["enum"].append("hero.not-a-contract"); jsave(p, d)
def inj_branch(r):   # a section's content-definition branch in the node schema goes stale (the dangling content.u-mb-40 ref seen before)
    p = os.path.join(r, "schema/pagespec.schema.json"); d = jload(p); b = d["definitions"]["node"]["allOf"]
    b[0]["then"]["properties"]["content"]["$ref"] = "#/definitions/content.content.not-a-section"; jsave(p, d)
def inj_rule_kind(r):
    p = os.path.join(r, "compatibility/graph.json"); d = jload(p); d["rules"].append({"id": "UNIMPLEMENTED", "severity": "error", "kind": "notARealKind"}); jsave(p, d)
def inj_snapshot_folder(r):   # the ledger points the evidence tree back at the unshipped recon mirror
    p, d = _ledger(r); d["sourceProject"]["snapshotFolder"] = "recon/mirror/src/"; jsave(p, d)
def _sec(r, sid): return os.path.join(r, "sections", sid + ".json")
def inj_availability(r):   # registry-only edit: the real logo becomes generation-safe
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["roles"]["logo"]["availability"] = "generation-safe"; jsave(p, d)
def inj_availability_blocked(r):   # a blocked live endpoint loosened to clone-only (different but valid value)
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["roles"]["live-embed"]["availability"] = "clone-only"; jsave(p, d)
def inj_remove_pin(r):   # a pin removed from the code table in verify_all.py
    p = os.path.join(r, "extraction/verify_all.py"); s = open(p).read(); s2 = s.replace("    'live-embed': 'blocked-for-generation', ", "    ", 1)
    if s2 == s: return False
    open(p, "w").write(s2)
def inj_pin_tables_diverge(r):   # semantic_validate.py's pin table edited alone
    p = os.path.join(r, "schema/semantic_validate.py"); s = open(p).read(); s2 = s.replace("'font': 'clone-only', 'product-screenshot'", "'font': 'generation-safe', 'product-screenshot'", 1)
    if s2 == s: return False
    open(p, "w").write(s2)
def inj_substitutes(r):
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["roles"]["avatar"]["generationSafeSubstitutes"] = []; jsave(p, d)
def inj_retrieval_contract_allowlist(r):   # contract + allowlist flipped TOGETHER: only the code pin catches it
    p = _sec(r, "hero.demo-variant-modal"); d = jload(p); d["retrievalEligible"] = True; d.pop("retrievalIneligibleReason", None); jsave(p, d)
    a = os.path.join(r, "tokens/llm/component-allowlist.json"); al = jload(a); al["retrievalIneligible"] = [x for x in al["retrievalIneligible"] if x != "hero.demo-variant-modal"]; jsave(a, al)
def inj_runtime_unpinned(r):   # a new runtime-UI-looking section that nobody pinned
    src = _sec(r, "content.section-base"); d = jload(src); d["id"] = "content.cookie-banner"; d["semantic"]["id"] = "content.cookie-banner"
    jsave(_sec(r, "content.cookie-banner"), d)
    a = os.path.join(r, "tokens/llm/component-allowlist.json"); al = jload(a); al["sections"].append("content.cookie-banner"); jsave(a, al)
def inj_contract_schema(r):
    p = _sec(r, "cta.section-cta"); d = jload(p); d["inventedField"] = True; jsave(p, d)
def inj_source_is_semantic(r):
    p = _sec(r, "cta.section-cta"); d = jload(p); d["source"]["id"] = "cta.section-cta"; jsave(p, d)
def inj_mode_enum(r):
    p = os.path.join(r, "schema/pagespec.schema.json"); d = jload(p); d["properties"]["mode"]["enum"] = ["clone"]; jsave(p, d)
def inj_catalog(r):
    p = os.path.join(r, "tokens/llm/token-catalog.json"); d = jload(p); d["categories"]["color"].append("surface.invented"); jsave(p, d)
def inj_identity(r):
    p = os.path.join(r, "schema/source-identity.json"); d = jload(p); d["people"] = d["people"][1:]; jsave(p, d)
def inj_gen_example(r):
    p = os.path.join(r, "schema/examples/generated-home.pagespec.json"); d = jload(p); d["nodes"][1]["content"]["heading"] = "Hand edited"; jsave(p, d)
def inj_gen_example_missing(r):
    os.remove(os.path.join(r, "schema/examples/generated-legal.pagespec.json"))
def inj_policy_category(r):
    p = os.path.join(r, "registry.manifest.json"); d = jload(p); d["category"] = "consumer-app"; jsave(p, d)
def inj_policy_hash(r):   # an enforcing file changes but the contentHash is not recomputed
    open(os.path.join(r, "schema/semantic_validate.py"), "a").write("\n# drift\n")
def inj_policy_saas_id(r):
    p = os.path.join(r, "registry.manifest.json"); d = jload(p); d["designPolicy"]["policyId"] = "consumer-service-marketplace-web"; jsave(p, d)
def inj_usedat(r):   # a section claims to be rendered at a page line that renders something else
    p, d = _ledger(r); s_ = d["routes"][0]["sections"][1]; f, ln = s_["usedAt"].rsplit(":", 1); s_["usedAt"] = f"{f}:{int(ln) + 1}"; jsave(p, d)
def inj_inclone(r):
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); x = next(a for a in d["assets"] if a.get("inClone")); x["inClone"] = False; jsave(p, d)
def inj_unmodelled_route(r):   # a route the clone serves is dropped from the ledger without an exclusion
    p, d = _ledger(r); d["routes"] = [x for x in d["routes"] if x["route"] != "/demo"]; jsave(p, d)
def _heights(r):
    p, d = _ledger(r); return p, d, d["sectionHeights"]
def _hero_node(sh, route="/"):
    rt = sh["routes"][route]; return next(n for n in rt["nodes"] if n["section"].startswith("hero."))
def inj_gate_hero_3100(r):
    p, d, sh = _heights(r); _hero_node(sh)["heightPx"] = 3100; sh["routes"]["/"]["documentHeightPx"] += 3100; jsave(p, d)
def inj_gate_share(r):   # one content node grows to hold most of the page
    p, d, sh = _heights(r); rt = sh["routes"]["/"]; n = next(x for x in rt["nodes"] if x["section"] == "content.section-owner-stack")
    n["heightPx"] = rt["documentHeightPx"] * 3; rt["documentHeightPx"] *= 4; jsave(p, d)
def inj_gate_missing(r):
    p, d, sh = _heights(r); sh["routes"]["/pricing"]["nodes"][2]["heightPx"] = None; jsave(p, d)
def inj_gate_route_missing(r):
    p, d, sh = _heights(r); del sh["routes"]["/press"]; jsave(p, d)
def inj_gate_viewport(r):
    p, d, sh = _heights(r); sh["viewport"]["width"] = 1280; jsave(p, d)
def inj_gate_justification(r):
    p = os.path.join(r, "extraction/wrapper-gate-whitelist.json"); d = jload(p); d["entries"][0]["justification"] = "too short"; jsave(p, d)
def inj_gate_reviewer(r):
    p = os.path.join(r, "extraction/wrapper-gate-whitelist.json"); d = jload(p); d["entries"][0]["reviewedBy"] = "revision agent"; jsave(p, d)
def inj_gate_stale(r):
    p = os.path.join(r, "extraction/wrapper-gate-whitelist.json"); d = jload(p); d["entries"].append(dict(d["entries"][0], template="template.home", section="hero.section-hp-hero")); jsave(p, d)
def inj_gate_overcap(r):
    p = os.path.join(r, "extraction/wrapper-gate-whitelist.json"); d = jload(p); d["entries"][0]["maxHeightPx"] = 100; jsave(p, d)
def inj_gate_threshold(r):   # the pinned threshold loosened in code
    p = os.path.join(r, "extraction/wrapper_gate.py"); s = open(p).read(); s2 = s.replace("HERO_ERROR_PX = 3000", "HERO_ERROR_PX = 30000", 1); open(p, "w").write(s2)
    return _gate_threshold_mark(r)
def _gate_threshold_mark(r):   # ... together with a 3100px hero, so the loosened gate would pass it: verify_all must still fail
    p, d, sh = _heights(r); _hero_node(sh)["heightPx"] = 3100; jsave(p, d)
def inj_gate_whitelist_missing(r):
    os.remove(os.path.join(r, "extraction/wrapper-gate-whitelist.json"))
def inj_hero_exception(r):   # the graph claims a template has >1 HERO section that it does not
    p = os.path.join(r, "compatibility/graph.json"); d = jload(p)
    rule = next((x for x in d["rules"] if x["id"] == "ONE_HERO_PER_PAGE"), None)
    if rule is None: return False
    rule["exceptions"] = list(rule.get("exceptions", [])) + ["template.phantom-multi-hero"]; jsave(p, d)

def inj_junk_component(r):   # a utility class leaks back into the canonical component vocabulary
    p = os.path.join(r, "components", "u-mb-16.json")
    json.dump({"id": "u-mb-16", "name": "u-mb-16", "occurrences": 1, "composedOf": [], "evidence": {"level": "measured", "sampleRoute": "/"}}, open(p, "w"))
    a = os.path.join(r, "tokens/llm/component-allowlist.json"); d = jload(a); d["components"].append("u-mb-16"); jsave(a, d)
def inj_one_section_route(r):   # a whole page modelled as one section again
    p, d = _ledger(r)
    if not d["routes"]: return False
    d["routes"][0]["sections"] = d["routes"][0]["sections"][:1]; jsave(p, d)
def inj_routes_md(r):   # the route inventory disagrees with the ledger
    p = os.path.join(os.path.dirname(r), "ROUTES.md")
    if not os.path.isfile(p): return False
    s = open(p).read(); s = re.sub(r"^(\| `/[^`]*` \| )template\.[^ |]+( \|)$", r"\1template.phantom\2", s, count=1, flags=re.M); open(p, "w").write(s)
def inj_route_coverage(r):   # the manifest claims a different number of excluded routes than the ledger lists
    p = os.path.join(r, "registry.manifest.json"); d = jload(p)
    if "routeCoverage" not in d: return False
    d["routeCoverage"]["excluded"] += 1; jsave(p, d)


INJECTIONS = [
    ("phantom allowlist entry", inj_phantom, "has no contract file"),
    ("orphan section contract", inj_orphan, "has no allowlist entry"),
    ("wrong manifest count", inj_count, "manifest counts.sections"),
    ("stale README count", inj_readme, "README count 'Templates'"),
    ("out-of-range citation", inj_cite_range, "range exceeds the file", "src"),
    ("in-range citation pointing at the wrong element", inj_cite_wrong, "does not contain the cited element", "src"),
    ("contract citing another section's range", inj_cite_other, "points at", None),
    ("allowlistVersion drift", inj_allow_version, "allowlistVersion drift"),
    ("pinned asset policy changed to a different valid value", inj_pinned, "pinned asset role 'avatar'"),
    ("absolute path leak", inj_abs, "absolute path"),
    ("entryPoint escaping design-repo", inj_entry, "entryPoints.tokenCatalog"),
    ("policy category not in catalog", inj_policy, "rawValueRestrictions"),
    ("graph limit drifted from contract", inj_graph, "SECTION_PER_PAGE_LIMITS"),
    ("theme resolution drift", inj_theme, "theme light"),
    ("schema enum drifted from contracts", inj_schema_enum, "schema node type enum"),
    ("schema node branch pointing at a stale content definition", inj_branch, "allOf branch"),
    ("graph rule the validator does not implement", inj_rule_kind, "not implemented"),
    ("snapshotFolder points back at the unshipped recon mirror", inj_snapshot_folder, "must be 'src/'"),
    ("registry availability loosened (logo generation-safe)", inj_availability, "availability 'generation-safe' differs from the pinned"),
    ("registry availability changed to a different valid value", inj_availability_blocked, "asset role 'live-embed' availability"),
    ("a pin removed from verify_all.py's table", inj_remove_pin, "PINNED_AVAILABILITY in verify_all.py and semantic_validate.py differ"),
    ("semantic_validate.py pin table edited alone", inj_pin_tables_diverge, "PINNED_AVAILABILITY in verify_all.py and semantic_validate.py differ"),
    ("generation-safe substitutes removed", inj_substitutes, "generationSafeSubstitutes"),
    ("retrieval flipped in contract AND allowlist together", inj_retrieval_contract_allowlist, "retrieval: sections/hero.demo-variant-modal.json"),
    ("runtime-UI-looking section not pinned", inj_runtime_unpinned, "looks like runtime UI"),
    ("section contract violates its closed schema", inj_contract_schema, "violates section-contract.schema.json"),
    ("source.id reuses the semantic id", inj_source_is_semantic, "provenance id"),
    ("PageSpec mode enum narrowed", inj_mode_enum, "required closed mode enum"),
    ("token catalog edited by hand", inj_catalog, "differs from a fresh build from the token files"),
    ("source identity edited by hand", inj_identity, "source-identity.json differs from a fresh build", "src"),
    ("generation example edited by hand", inj_gen_example, "differs from a fresh build"),
    ("generation example for a family missing", inj_gen_example_missing, "missing generation example"),
    ("manifest category changed", inj_policy_category, "manifest category"),
    ("enforcing file changed, contentHash stale", inj_policy_hash, "designPolicy.contentHash"),
    ("SaaS repo bound to a non-SaaS policy", inj_policy_saas_id, "manifest designPolicy must bind"),
    ("usedAt points at the wrong page line", inj_usedat, "does not render", "src"),
    ("asset inClone flag disagrees with public/", inj_inclone, "flagged inClone: false", "src"),
    ("a served route dropped from the ledger", inj_unmodelled_route, "neither models nor excludes", "src"),
    ("wrapper gate: HERO 3100px", inj_gate_hero_3100, "HERO_HEIGHT"),
    ("wrapper gate: one section holds most of the page", inj_gate_share, "PAGE_SHARE"),
    ("wrapper gate: missing node measurement", inj_gate_missing, "has no measured height"),
    ("wrapper gate: route not measured", inj_gate_route_missing, "has no measured sectionHeights"),
    ("wrapper gate: wrong viewport", inj_gate_viewport, "gate requires 1440"),
    ("wrapper gate: whitelist justification too short", inj_gate_justification, "justification shorter than 30"),
    ("wrapper gate: agent reviewer without attestation", inj_gate_reviewer, "agent attestation, not a human sign-off"),
    ("wrapper gate: stale whitelist entry", inj_gate_stale, "stale entry"),
    ("wrapper gate: whitelist cap below measured height", inj_gate_overcap, "exceeds whitelisted maxHeightPx"),
    ("wrapper gate: pinned threshold loosened in code (with a 3100px hero)", inj_gate_threshold, "wrapper gate thresholds drifted"),
    ("wrapper gate: whitelist file missing", inj_gate_whitelist_missing, "missing"),
    ("ONE_HERO_PER_PAGE exception for a template that is not one", inj_hero_exception, "ONE_HERO_PER_PAGE exceptions"),
    ("utility class back in the component vocabulary", inj_junk_component, "utility, vendor or page-scaffold class"),
    ("a page modelled as a single section", inj_one_section_route, "modelled as a single section"),
    ("ROUTES.md disagrees with the ledger", inj_routes_md, "ROUTES.md disagrees"),
    ("manifest routeCoverage disagrees with the ledger", inj_route_coverage, "manifest routeCoverage"),
]


def run(r, full=False):
    env = dict(os.environ, PYTHONDONTWRITEBYTECODE="1")
    if not full: env["VERIFY_SKIP_ADVERSARIAL"] = "1"  # injections target verify_all's own checks
    p = subprocess.run([sys.executable, os.path.join(r, "extraction/verify_all.py")], capture_output=True, text=True, env=env)
    return p.returncode, p.stdout + p.stderr


def main():
    scratch = None
    if "--scratch" in sys.argv:
        scratch = sys.argv[sys.argv.index("--scratch") + 1]; os.makedirs(scratch, exist_ok=True)
    tmp = tempfile.mkdtemp(prefix="drift-", dir=scratch)
    try:
        def fresh():
            pkg = tempfile.mkdtemp(dir=tmp)
            shutil.copytree(REPO, os.path.join(pkg, "design-repo"), ignore=shutil.ignore_patterns("__pycache__"))
            for f in (".gitignore", "ROUTES.md", "package.json", "CLONE_SPEC.md", "ASSET_MANIFEST.md"):
                if os.path.isfile(os.path.join(PKG, f)): shutil.copy(os.path.join(PKG, f), os.path.join(pkg, f))
            if HAS_CLONE:
                for d in ("src", "public"):
                    os.symlink(os.path.join(PKG, d), os.path.join(pkg, d))
            return os.path.join(pkg, "design-repo")
        ok = fail = skip = 0
        code, out = run(fresh(), full=True)
        if code == 0: ok += 1; print("  ok    control: unmodified copy is admitted")
        else: fail += 1; print("  FAIL  control: unmodified copy was rejected:\n" + out)
        if HAS_CLONE:   # the clone is present but its src/ is not: must FAIL, not degrade to a warning
            r = fresh(); os.remove(os.path.join(os.path.dirname(r), "src"))
            code, out = run(r)
            if code != 0 and "src/ is missing there" in out: ok += 1; print("  ok    caught: clone present but src/ missing")
            else: fail += 1; print("  FAIL  NOT caught: clone present but src/ missing\n" + out[-600:])
        for inj in INJECTIONS:
            label, fn, needle = inj[:3]; needs = inj[3] if len(inj) > 3 else None
            if needs == "src" and not HAS_CLONE:
                skip += 1; print(f"  skip  {label}: needs the clone's src/ beside design-repo/ (design-repo copied alone)"); continue
            r = fresh()
            try:
                applied = fn(r)
            except Exception as e:  # a broken injection is a failure of this proof, not a silent pass
                fail += 1; print(f"  FAIL  {label}: the injection itself crashed: {e!r}"); continue
            if applied is False:
                skip += 1; print(f"  skip  {label}: not applicable to this repo"); continue
            code, out = run(r)
            if code != 0 and needle in out: ok += 1; print(f"  ok    caught: {label}")
            else: fail += 1; print(f"  FAIL  NOT caught: {label} (expected '{needle}')\n{out[-600:]}")
        # the gate's warning band: a 1900px hero must WARN, not fail
        r = fresh(); p, d, sh = _heights(r); _hero_node(sh)["heightPx"] = 1900; jsave(p, d)
        sys.path.insert(0, os.path.join(r, "extraction"))
        import importlib.util
        spec = importlib.util.spec_from_file_location("wg_scratch", os.path.join(r, "extraction", "wrapper_gate.py")); wg = importlib.util.module_from_spec(spec); spec.loader.exec_module(wg)
        gf, gw = wg.run(r)
        if not gf and any("HERO_HEIGHT" in w and "1900px > 1800px" in w for w in gw): ok += 1; print("  ok    gate: HERO 1900px warns without failing")
        else: fail += 1; print(f"  FAIL  gate: HERO 1900px expected a warning only, got fails={gf[:2]} warns={[w for w in gw if 'HERO' in w][:2]}")
        print(f"drift-proof: {ok} passed, {fail} failed, {skip} skipped")
        sys.exit(1 if fail else 0)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
