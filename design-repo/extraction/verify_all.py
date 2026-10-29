#!/usr/bin/env python3
"""Admission check for this design repo. Exit 0 = admitted.

  1  required files exist and parse
  2  manifest fields; entryPoints relative, inside design-repo/ (no ../), present
  3  allowlistVersion matches the allowlist (machine-checked version field)
  4  counts recomputed from the files on disk (manifest AND README)
  5  allowlist parity: sections/components/primitives files <-> allowlist, nodeProperties <-> schema
  6  schema parity: template/section/assetRole enums and content definitions match the contracts; closed `mode`
  7  templates: every node has a contract; routes assigned exactly once; every ledger route's measured section
     sequence is ACCEPTED by its template (the validator's own match_template); every route src/routes.js serves is
     either modelled or listed as excluded with a reason
  8  constraints + graph recomputed from templates (a rule in prose and in code must agree)
  9  citations: every ledger range resolves in the clone's own JSX (src/sections/*.jsx), is in range and the cited
     line holds the cited tag/anchor; every usedAt line in src/pages/*.jsx renders that component; contracts cite
     only their own ranges; contract `source` ranges resolve too and `semantic` is the AI-facing taxonomy
 10  tokens: references resolve; theme resolves every semantic token; catalog == fresh build from the token files;
     policy categories == catalog categories; policy names every TOKEN_* rule the validator implements
 11  assets: closed role vocabulary; PINNED roles hold their exact policy; PINNED_AVAILABILITY (here AND in
     semantic_validate.py, identical) matches the registry; substitutes / guidance present; inClone flags match public/
 12  motion closed to the contract's fields; section patterns inside the contract
 13  no absolute machine paths in any JSON/MD/PY/MJS file
 14  schema is valid draft-07; every section contract validates against schema/section-contract.schema.json;
     example + generation examples validate with zero errors; adversarial suite passes
 15  retrieval eligibility: PINNED_RETRIEVAL (here AND in semantic_validate.py) matches contracts + allowlist; ids
     that look like runtime UI must be pinned
 16  wrapper gate (extraction/wrapper_gate.py) over measured sectionHeights
 17  generation layer: source-identity.json == fresh build from the clone source; generation examples == fresh
     build, one per template family
 18  design policy: manifest category + designPolicy binding; policy file exists; contentHash recomputed
 19  zip hygiene, only if someone creates ../design-repo.zip by hand (the builder does not produce one)

Evidence: the clone itself is the evidence tree. When design-repo/ sits in its clone (parent folder with a package.json
named "owner-com-clone"), src/ and public/ there are checked for real; a missing src/ or public/ in that case FAILS.
Only when design-repo/ is copied alone (no clone package.json beside it) are the source-tree checks reported as
warnings and skipped. Drift-proofing lives in extraction/prove_drift.py (injects each defect into a scratch copy).
"""
import hashlib, importlib.util, json, os, re, subprocess, sys, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
PKG = os.path.dirname(REPO)
CLONE_NAME = "owner-com-clone"
errs, warns = [], []


def clone_present():
    """True when design-repo/ sits inside its clone (a package.json named owner-com-clone next to it)."""
    try:
        return json.load(open(os.path.join(PKG, "package.json"), encoding="utf-8")).get("name") == CLONE_NAME
    except Exception:
        return False


HAS_CLONE = False
# Pinned generation policies. Kept HERE, independent of assets/asset-roles.json, so that changing a
# role in the registry to a different-but-still-valid policy is caught (membership alone is not enough).
PINNED = {"logo": "must-reuse-exact", "customer-logo": "must-not-fabricate", "avatar": "must-not-fabricate",
          "font": "must-reuse-exact", "live-embed": "must-not-reuse-live-endpoint",
          "founder-contact-email": "must-not-reuse-live-endpoint", "product-screenshot": "must-not-fabricate"}
# Availability per role, pinned HERE (and identically in schema/semantic_validate.py), independent of the registry.
PINNED_AVAILABILITY = {
    'logo': 'clone-only', 'customer-logo': 'clone-only', 'avatar': 'clone-only', 'icon': 'clone-only', 'illustration': 'clone-only',
    'background': 'clone-only', 'hero-image': 'clone-only', 'content-image': 'clone-only', 'animation': 'clone-only', 'video': 'clone-only',
    'font': 'clone-only', 'product-screenshot': 'clone-only',
    'live-embed': 'blocked-for-generation', 'founder-contact-email': 'blocked-for-generation',
    'brand.placeholder-mark': 'generation-safe', 'asset.operator-supplied': 'generation-safe', 'illustration.generated': 'generation-safe',
    'screenshot.placeholder': 'generation-safe', 'avatar.fictional-person': 'generation-safe', 'logo.placeholder-company': 'generation-safe',
    'link.placeholder-url': 'generation-safe', 'copy.original': 'generation-safe', 'video.placeholder': 'generation-safe',
    'font.operator-licensed': 'generation-safe',
}
REQUIRED_GENERATION_SAFE = ['brand.placeholder-mark', 'asset.operator-supplied', 'illustration.generated', 'screenshot.placeholder',
                            'avatar.fictional-person', 'logo.placeholder-company', 'link.placeholder-url', 'copy.original']
PINNED_RETRIEVAL = {'content.demo-hidden-control': False, 'hero.demo-variant-modal': False}
RUNTIME_UI_RE = re.compile(r'modal|dialog|drawer|popup|pop-up|cookie|consent|preloader|toast|overlay|lightbox|hidden-control|banner-dismiss')
MODES = ["clone", "generation"]
SAAS_POLICY = ("n0-saas-design-constraints-common", "0.1.0")
TOKEN_RULES = ["TOKEN_UNKNOWN", "TOKEN_RAW_COLOR", "TOKEN_ARBITRARY_SPACING", "TOKEN_UNSUPPORTED_FONT", "TOKEN_SLOT_MISMATCH",
               "TOKEN_THEME_UNKNOWN", "TOKEN_THEME_UNRESOLVED", "TOKEN_INVALID_COMBINATION"]
REQUIRED = ["registry.manifest.json", "README.md", "CHANGELOG.md", "tokens/themes/light.json",
            "tokens/llm/token-catalog.json", "tokens/llm/token-policy.json", "tokens/llm/component-allowlist.json",
            "templates/templates.json", "compatibility/graph.json", "assets/asset-roles.json", "motion/motion-contract.json",
            "schema/pagespec.schema.json", "schema/example.pagespec.json", "schema/semantic_validate.py",
            "schema/tests/adversarial_test.py", "extraction/measured-values.json", "extraction/prove_drift.py",
            "schema/section-contract.schema.json", "schema/source-identity.json", "extraction/wrapper_gate.py", "extraction/wrapper-gate-whitelist.json",
            "extraction/measure_sections.mjs", "extraction/build_source_identity.py", "extraction/build_token_catalog.py",
            "extraction/build_generation_examples.py", "policy/design-policy.json"]
ENTRY_KEYS = ["tokenCatalog", "tokenPolicy", "componentAllowlist", "compatibilityGraph", "assetContract", "motionContract",
              "templates", "pagespecSchema", "examplePageSpec", "semanticValidate", "adversarialSuite", "admission",
              "driftProof", "measuredValues", "defaultTheme", "sectionContractSchema", "sourceIdentity", "wrapperGate",
              "wrapperGateWhitelist", "measureSections", "buildSourceIdentity", "buildTokenCatalog", "buildGenerationExamples",
              "generationExamples", "designPolicy"]


def J(rel):
    with open(os.path.join(REPO, rel), encoding="utf-8") as f:
        return json.load(f)


def files_in(d, ext=".json"):
    p = os.path.join(REPO, d)
    return sorted(f for f in os.listdir(p) if f.endswith(ext)) if os.path.isdir(p) else []


def tokens_in(tier):
    out = {}
    for f in files_in(os.path.join("tokens", tier)):
        out.update(J(os.path.join("tokens", tier, f)).get("tokens", {}))
    return out


def main():
    # 1
    for rel in REQUIRED:
        p = os.path.join(REPO, rel)
        if not os.path.exists(p): errs.append(f"missing: {rel}")
        elif rel.endswith(".json"):
            try: J(rel)
            except Exception as e: errs.append(f"bad json {rel}: {e}")
    for d in ("tokens/00-foundation", "tokens/10-semantic", "tokens/20-component", "tokens/30-layout", "sections", "primitives", "components"):
        if not os.path.isdir(os.path.join(REPO, d)): errs.append(f"missing folder: {d}/")
    if errs: return finish()
    man = J("registry.manifest.json")
    allow = J("tokens/llm/component-allowlist.json")
    schema = J("schema/pagespec.schema.json")
    templates = J("templates/templates.json")["templates"]
    graph = J("compatibility/graph.json")
    assets = J("assets/asset-roles.json")
    ledger = J("extraction/measured-values.json")

    # the evidence tree is the clone itself: <clone>/src (JSX) and <clone>/public (assets). snapshotFolder must say "src/".
    global HAS_CLONE
    HAS_CLONE = clone_present()
    snap = ledger.get("sourceProject", {}).get("snapshotFolder")
    if os.path.normpath(snap or "") != "src":
        errs.append(f"measured-values.json sourceProject.snapshotFolder must be 'src/' (the clone's own source), got {snap!r}")
    if HAS_CLONE:
        for d in ("src", "public"):
            if not os.path.isdir(os.path.join(PKG, d)):
                errs.append(f"design-repo/ sits in its clone ({CLONE_NAME}) but {d}/ is missing there: the evidence tree must be present")
    else:
        warns.append("design-repo/ is copied alone (no owner-com-clone package.json beside it): citations, usedAt lines, asset files, "
                     "source-identity rebuild and routes.js coverage are NOT checked here; run verify_all.py inside the clone to admit fully")
    secs = {}
    for f in files_in("sections"):
        c = J(f"sections/{f}")
        if c.get("id") + ".json" != f: errs.append(f"sections/{f}: id '{c.get('id')}' does not match its file name")
        secs[c["id"]] = c

    # 2
    for k in ("repositoryId", "status", "productionApproved", "defaultTheme", "schemaValidatedThemes", "allowlistVersion", "versionFieldNote", "counts", "entryPoints"):
        if k not in man: errs.append(f"manifest: missing field {k}")
    eps = man.get("entryPoints", {})
    for k in ENTRY_KEYS:
        if k not in eps: errs.append(f"entryPoints.{k} is not wired in")
    for k, v in eps.items():
        if not isinstance(v, str) or os.path.isabs(v) or v.startswith("..") or "/../" in v or re.match(r"^[A-Za-z]:", v):
            errs.append(f"entryPoints.{k} must be a relative path inside design-repo/, got {v!r}")
        elif not os.path.exists(os.path.join(REPO, v)):
            errs.append(f"entryPoints.{k} points at a missing file: {v}")

    # 3
    if man.get("allowlistVersion") != allow.get("version"):
        errs.append(f"allowlistVersion drift: manifest {man.get('allowlistVersion')!r} vs allowlist {allow.get('version')!r}")

    # 4
    F, S, L = tokens_in("00-foundation"), tokens_in("10-semantic"), tokens_in("30-layout")
    C = {}  # component tokens share prop names across files, so namespace them: button.background
    for f in files_in("tokens/20-component"):
        d = J(f"tokens/20-component/{f}")
        C.update({f"{d['component']}.{k}": v for k, v in d.get("tokens", {}).items()})
    comp_tokens = len(C)
    actual = {"sections": len(secs), "templates": len(templates), "routes": sum(t["routeCount"] for t in templates),
              "primitives": len(files_in("primitives")), "components": len(files_in("components")), "assets": len(assets.get("assets", [])),
              "themes": len(files_in("tokens/themes")), "rules": len(graph.get("rules", [])),
              "tokens": {"foundation": len(F), "semantic": len(S), "component": comp_tokens, "layout": len(L)}}
    actual["assetRoles"] = len(assets.get("roles", {}))
    actual["generationExamples"] = len([f for f in os.listdir(os.path.join(REPO, "schema", "examples")) if f.startswith("generated-")]) if os.path.isdir(os.path.join(REPO, "schema", "examples")) else 0
    mc = man.get("counts", {})
    for k, v in actual.items():
        if mc.get(k) != v: errs.append(f"manifest counts.{k} = {mc.get(k)} but the files give {v}")
    readme = open(os.path.join(REPO, "README.md"), encoding="utf-8").read()
    for label, v in [("Sections", actual["sections"]), ("Templates", actual["templates"]), ("Routes", actual["routes"]),
                     ("Primitives", actual["primitives"]), ("Components", actual["components"]), ("Assets", actual["assets"]),
                     ("Foundation tokens", len(F)), ("Semantic tokens", len(S)), ("Rules", actual["rules"])]:
        m = re.search(rf"^- {label}: (\d+)$", readme, re.M)
        if not m or int(m.group(1)) != v: errs.append(f"README count '{label}' is {m.group(1) if m else 'missing'} but the files give {v}")

    # 5
    for key, found in [("sections", sorted(secs)), ("primitives", [f[:-5] for f in files_in("primitives")]), ("components", [f[:-5] for f in files_in("components")])]:
        a = set(allow.get(key, []))
        for x in sorted(a - set(found)): errs.append(f"allowlist parity: '{x}' in allowlist.{key} has no contract file")
        for x in sorted(set(found) - a): errs.append(f"allowlist parity: {key}/{x}.json has no allowlist entry")
    node_props = set(schema["definitions"]["node"]["properties"])
    if set(allow.get("nodeProperties", [])) != node_props:
        errs.append(f"allowlist.nodeProperties {sorted(allow.get('nodeProperties', []))} != schema node properties {sorted(node_props)}")
    for sid, c in secs.items():
        if sorted(allow.get("contentFields", {}).get(sid, [])) != sorted(c["content"]["fields"]):
            errs.append(f"allowlist.contentFields['{sid}'] differs from sections/{sid}.json")

    # 6
    if sorted(schema["properties"]["template"]["enum"]) != sorted(t["id"] for t in templates): errs.append("schema template enum differs from templates.json")
    if schema["properties"].get("mode", {}).get("enum") != MODES or "mode" not in schema.get("required", []):
        errs.append(f"schema: PageSpec must carry a required closed mode enum {MODES}")
    if sorted(schema["definitions"]["node"]["properties"]["type"]["enum"]) != sorted(secs): errs.append("schema node type enum differs from sections/")
    if sorted(schema["definitions"]["assetRole"]["enum"]) != sorted(assets["roles"]): errs.append("schema assetRole enum differs from assets/asset-roles.json roles")
    branches = {b["if"]["properties"]["type"]["const"]: b["then"]["properties"]["content"]["$ref"] for b in schema["definitions"]["node"].get("allOf", [])}
    if sorted(branches) != sorted(secs): errs.append(f"schema node allOf branches differ from sections/: {sorted(set(branches) ^ set(secs))}")
    for sid_, ref in branches.items():
        if ref != f"#/definitions/content.{sid_}" or ref.split("/")[-1] not in schema["definitions"]: errs.append(f"schema node allOf branch for '{sid_}' points at {ref}, which is not its content definition")
    for sid, c in secs.items():
        d = schema["definitions"].get(f"content.{sid}")
        if not d: errs.append(f"schema has no content definition for {sid}"); continue
        if d.get("additionalProperties") is not False: errs.append(f"schema content.{sid} is not closed (additionalProperties must be false)")
        if sorted(d["properties"]) != sorted(c["content"]["fields"]): errs.append(f"schema content.{sid} fields differ from the section contract")

    # 7
    sv = load_validator()
    seen = {}
    ledger_routes = [r["route"] for r in ledger["routes"]]
    for t in templates:
        for n in t["nodes"]:
            if n["section"] not in secs: errs.append(f"template {t['id']} node '{n['section']}' has no section contract")
            for k in ("section", "required", "repeatable"):
                if k not in n: errs.append(f"template {t['id']} node is missing '{k}' (nodes must be structured objects)")
    for r in ledger["routes"]:
        if r["route"] in seen: errs.append(f"route {r['route']} assigned twice")
        seen[r["route"]] = r["template"]
        if r["template"] not in {t["id"] for t in templates}: errs.append(f"route {r['route']} maps to unknown template {r['template']}")
    if sum(t["routeCount"] for t in templates) != len(ledger_routes): errs.append("sum of template routeCount differs from the measured route list")
    for t in templates:
        n = sum(1 for r in ledger["routes"] if r["template"] == t["id"])
        if n != t["routeCount"]: errs.append(f"template {t['id']}: routeCount {t['routeCount']} but {n} measured routes map to it")
        for r in t.get("routes", []):
            if seen.get(r) != t["id"]: errs.append(f"template {t['id']} lists route {r} that the ledger maps elsewhere")
        for r in ledger["routes"]:
            if r["template"] == t["id"]:
                bad = sv.match_template(t, [s["id"] for s in r["sections"]])
                if bad: errs.append(f"route {r['route']}: measured section sequence is not accepted by template {t['id']}: {bad[0]}"); break
        if not t.get("family"): errs.append(f"template {t['id']} has no family")
    fams = J("templates/templates.json").get("families")
    if sorted(fams or []) != sorted({t.get("family") for t in templates}): errs.append(f"templates.json families {fams} differ from the templates' own families")
    if HAS_CLONE and os.path.isfile(os.path.join(PKG, "src", "routes.js")):  # every route the clone's router serves is modelled exactly once or excluded with a reason
        served = re.findall(r'path: "(/[^"]*)"', open(os.path.join(PKG, "src", "routes.js"), encoding="utf-8").read())
        excl_routes = {e["route"] for e in ledger.get("routeCoverage", {}).get("excludedRoutes", [])}
        for rt in served:
            if rt not in seen and rt not in excl_routes: errs.append(f"src/routes.js serves {rt} but the ledger neither models nor excludes it")
        for rt in seen:
            if rt not in served: errs.append(f"ledger models {rt} but src/routes.js does not serve it")

    # 7b  vocabulary and modelling: what a generator may be offered, and how a page is split
    exv = ledger.get("excludedFromCanonicalVocabulary", {})
    excluded_ids = {c["id"] for c in exv.get("classes", [])}
    junk = re.compile(r"^(u-(mb|mt|mr|ml|pb|pt)-\d+|hs-.+|hbs-form|osano-.+|nice-select|page-wrapper|main-wrapper)$")
    for f in files_in("components"):
        cid = f[:-5]
        if cid in excluded_ids or junk.match(cid): errs.append(f"components/{f}: '{cid}' is a utility, vendor or page-scaffold class: it belongs in the ledger's excludedFromCanonicalVocabulary, not in components/")
    for sid in secs:
        bare = sid.split(".", 1)[1]
        if bare in excluded_ids or junk.match(bare): errs.append(f"sections/{sid}.json: '{bare}' is a utility, vendor or page-scaffold class, not a semantic section")
    for r in ledger["routes"]:
        if len(r["sections"]) < 2: errs.append(f"route {r['route']} is modelled as a single section: a whole page must be split into semantic sections")
    for t in templates:
        if len(t["nodes"]) < 2: errs.append(f"template {t['id']} has a single node: a template must compose a page from semantic sections")
    cov = ledger.get("routeCoverage", {}); mcov = man.get("routeCoverage", {})
    excl = [e["route"] for e in cov.get("excludedRoutes", [])]
    if cov.get("capturedRoutes") != len(ledger["routes"]): errs.append(f"ledger routeCoverage.capturedRoutes {cov.get('capturedRoutes')} but the ledger has {len(ledger['routes'])} routes")
    if set(excl) & set(ledger_routes): errs.append(f"routeCoverage.excludedRoutes lists captured routes: {sorted(set(excl) & set(ledger_routes))}")
    if mcov.get("captured") != len(ledger["routes"]) or mcov.get("excluded") != len(excl): errs.append(f"manifest routeCoverage {mcov} disagrees with the ledger ({len(ledger['routes'])} captured, {len(excl)} excluded)")
    rm = os.path.join(PKG, "ROUTES.md")
    if os.path.isfile(rm):  # the route inventory is generated from the ledger, never edited by hand
        rows = dict(re.findall(r"^\| `(/[^`]*)` \| (template\.[^ |]+) \|$", open(rm, encoding="utf-8").read().split("## Excluded routes")[0], re.M))
        want = {r["route"]: r["template"] for r in ledger["routes"]}
        if rows != want:
            bad = sorted(k for k in set(rows) | set(want) if rows.get(k) != want.get(k))
            errs.append(f"ROUTES.md disagrees with measured-values.json for {len(bad)} route(s), e.g. {bad[:3]}")
    else: warns.append("no ROUTES.md next to design-repo/: route inventory not checked")

    # 8
    for sid, c in secs.items():
        tm = [t for t in templates if any(n["section"] == sid for n in t["nodes"])]
        mx = max((sum((n.get("maxCount", 1) if n["repeatable"] else 1) for n in t["nodes"] if n["section"] == sid) for t in tm), default=0)
        cons = c["constraints"]
        if (cons.get("onePerPage") and mx != 1) or (not cons.get("onePerPage") and cons.get("maxPerPage") != mx):
            errs.append(f"sections/{sid}.json constraints disagree with templates (observed max per page {mx})")
        first = c["category"] == "SHELL" and tm and all(t["nodes"][0]["section"] == sid for t in tm)
        last = c["category"] == "SHELL" and tm and all(t["nodes"][-1]["section"] == sid for t in tm)
        if bool(cons.get("mustBeFirst")) != bool(first): errs.append(f"sections/{sid}.json mustBeFirst disagrees with templates")
        if bool(cons.get("mustBeLast")) != bool(last): errs.append(f"sections/{sid}.json mustBeLast disagrees with templates")
    rules = {r["id"]: r for r in graph["rules"]}
    for r in graph["rules"]:
        if r.get("severity") not in ("error", "warn"): errs.append(f"graph rule {r['id']} has no valid severity")
        if r.get("kind") not in sv.RULE_KINDS: errs.append(f"graph rule {r['id']} kind '{r.get('kind')}' is not implemented by semantic_validate.py")
    lim = rules.get("SECTION_PER_PAGE_LIMITS", {}).get("limits", {})
    for sid, c in secs.items():
        want = 1 if c["constraints"].get("onePerPage") else c["constraints"].get("maxPerPage")
        if lim.get(sid) != want: errs.append(f"graph SECTION_PER_PAGE_LIMITS['{sid}'] = {lim.get(sid)} but the contract says {want}")
    for rid, key in (("SHELL_MUST_BE_FIRST", "mustBeFirst"), ("SHELL_MUST_BE_LAST", "mustBeLast"), ("NO_CONSECUTIVE_SAME_SECTION", "noConsecutive")):
        if sorted(rules.get(rid, {}).get("sections", [])) != sorted(s for s, c in secs.items() if c["constraints"].get(key)):
            errs.append(f"graph {rid} disagrees with the section contracts' {key}")
    # a repeatable node (consecutive duplicates collapsed by the model into one {repeatable, maxCount}) represents
    # maxCount instances of that section, not one — a template with hero.main, hero.main collapses to a single
    # node but still puts two HERO sections on the page, so it must count as 2 here too, not 1.
    hero_ex = sorted(t["id"] for t in templates if sum((n.get("maxCount") or 1) if n.get("repeatable") else 1 for n in t["nodes"] if secs.get(n["section"], {}).get("category") == "HERO") > 1)
    if sorted(rules.get("ONE_HERO_PER_PAGE", {}).get("exceptions", [])) != hero_ex:
        errs.append(f"graph ONE_HERO_PER_PAGE exceptions {rules.get('ONE_HERO_PER_PAGE', {}).get('exceptions')} but templates give {hero_ex}")

    # 9
    ledger_at = {}  # "file:start-end" -> ledger entry (the ONE section that range belongs to)
    for r in ledger["routes"]:
        for s_ in r["sections"]:
            if s_.get("lines"):
                c_ = f"{s_['file']}:{s_['lines'][0]}-{s_['lines'][1]}"
                if c_ in ledger_at and ledger_at[c_]["id"] != s_["id"]: errs.append(f"citation {c_} is claimed by both '{ledger_at[c_]['id']}' and '{s_['id']}'")
                ledger_at[c_] = s_
            else: errs.append(f"route {r['route']} section {s_.get('idx')} {s_.get('id')} has no cited line range")
    for sid, c in secs.items():  # a contract may only cite ranges the ledger attributes to THIS section
        for cite in c["evidence"].get("measuredFrom", []):
            e = ledger_at.get(cite)
            if not e: errs.append(f"citation {cite} in sections/{sid}.json is not a measured section range")
            elif e["id"] != sid: errs.append(f"citation {cite} in sections/{sid}.json points at '{e['id']}', not '{sid}'")
        so, se = c.get("source", {}), c.get("semantic", {})
        if se.get("id") != sid or se.get("category") != c["category"]: errs.append(f"sections/{sid}.json semantic {{id, category}} must equal the contract id and category")
        if so.get("id") == sid or not str(so.get("id", "")).startswith("jsx:"): errs.append(f"sections/{sid}.json source.id must be a provenance id (jsx:...), never the contract id")
        sc = f"{so.get('file')}:{(so.get('lines') or [0, 0])[0]}-{(so.get('lines') or [0, 0])[-1]}"
        if sc not in ledger_at or ledger_at[sc]["id"] != sid: errs.append(f"sections/{sid}.json source range {sc} is not one of this section's measured ranges")
        elif ledger_at[sc]["tag"] != so.get("tag"): errs.append(f"sections/{sid}.json source.tag {so.get('tag')!r} differs from the ledger ({ledger_at[sc]['tag']!r})")
    if not HAS_CLONE:
        warns.append(f"no clone source beside design-repo/ — {len(ledger_at)} citations not resolved against files (expected only when design-repo/ is copied alone)")
    else:
        cache = {}
        def lines_of(rel):
            p = os.path.join(PKG, rel)
            if p not in cache:
                cache[p] = open(p, encoding="utf-8", errors="ignore", newline="").read().split("\n") if os.path.isfile(p) else None
            return cache[p]
        for cite, e in ledger_at.items():
            m = re.match(r"^(.+):(\d+)-(\d+)$", cite)
            lines, a_, b_ = lines_of(m.group(1)), int(m.group(2)), int(m.group(3))
            if lines is None: errs.append(f"citation {cite}: file does not exist"); continue
            if not (1 <= a_ <= b_ <= len(lines)): errs.append(f"citation {cite}: range exceeds the file ({len(lines)} lines)"); continue
            line = lines[a_ - 1]
            if f"<{e['tag']}" not in line: errs.append(f"citation {cite}: line {a_} does not contain the cited <{e['tag']}> element")
            elif e.get("anchor") and e["anchor"] not in line: errs.append(f"citation {cite}: line {a_} does not contain the cited element's {e['anchor']!r}")
        for r in ledger["routes"]:
            pl = lines_of(r["file"])
            if pl is None: errs.append(f"route {r['route']}: page file {r['file']} does not exist"); continue
            last = 0
            for s_ in r["sections"]:
                m = re.match(r"^(.+):(\d+)$", s_.get("usedAt", ""))
                if not m or m.group(1) != r["file"]: errs.append(f"route {r['route']} section {s_['idx']}: usedAt {s_.get('usedAt')!r} is not a line of {r['file']}"); continue
                k = int(m.group(2))
                if not (1 <= k <= len(pl)) or not re.search(rf"<{re.escape(s_['component'])}\s*/>", pl[k - 1]):
                    errs.append(f"route {r['route']}: {s_.get('usedAt')} does not render <{s_['component']} />")
                elif k < last: errs.append(f"route {r['route']}: section {s_['idx']} is rendered before the previous section (usedAt order)")
                last = k
                if s_["file"] != f"src/sections/{s_['component']}.jsx": errs.append(f"route {r['route']} section {s_['idx']}: cites {s_['file']} but renders {s_['component']}")

    # 10
    known = set(F) | set(S) | set(L) | set(C)
    def refs(v):
        if isinstance(v, dict): return [x for vv in v.values() for x in refs(vv)]
        return re.findall(r"^\{(.+)\}$", v) if isinstance(v, str) else []
    for tier, toks in (("10-semantic", S), ("20-component", C), ("30-layout", L)):
        for tid, t in toks.items():
            for ref in refs(t.get("$value")):
                if ref not in known: errs.append(f"tokens/{tier}: {tid} references unknown token {{{ref}}}")
    allvals = {k: v.get("$value") for d in (F, S, L) for k, v in d.items()}
    def resolve(v, depth=0):
        if isinstance(v, dict): return {k: resolve(x, depth) for k, x in v.items()}
        m = re.match(r"^\{(.+)\}$", v) if isinstance(v, str) else None
        return resolve(allvals.get(m.group(1), v), depth + 1) if m and depth < 5 else v
    theme = J("tokens/themes/light.json")["resolves"]
    for sid, t in S.items():
        if sid not in theme: errs.append(f"theme light does not resolve semantic token {sid}")
        elif resolve(t["$value"]) != theme[sid]: errs.append(f"theme light: {sid} resolves to {theme[sid]!r} but the tokens give {resolve(t['$value'])!r}")
    for sid in theme:
        if sid not in S: errs.append(f"theme light resolves unknown token {sid}")
    cat = J("tokens/llm/token-catalog.json")["categories"]
    comp_ids = set(C)
    fam_vals = {v.get("$value") for k, v in F.items() if k.startswith("fontFamily.")}
    for i in cat.get("fontFamily", []):
        if i not in fam_vals: errs.append(f"token-catalog.fontFamily: '{i}' is not a foundation fontFamily value")
    for k, ids in cat.items():
        if k == "fontFamily": continue
        for i in ids:
            if i not in S and i not in L and i not in comp_ids: errs.append(f"token-catalog.{k}: '{i}' is not a real token")
    pol = J("tokens/llm/token-policy.json")
    tc = load_module("extraction/build_token_catalog.py", "build_token_catalog")
    if tc.render(tc.build()) != open(os.path.join(REPO, "tokens/llm/token-catalog.json"), encoding="utf-8").read():
        errs.append("tokens/llm/token-catalog.json differs from a fresh build from the token files (run extraction/build_token_catalog.py)")
    for rid in TOKEN_RULES:
        if rid not in pol.get("rules", {}): errs.append(f"token-policy.json does not document {rid}")
        if rid not in open(os.path.join(REPO, "schema/semantic_validate.py"), encoding="utf-8").read(): errs.append(f"semantic_validate.py does not implement {rid}")
    if sorted(pol.get("rawValueRestrictions", {})) != sorted(cat): errs.append(f"token-policy rawValueRestrictions keys {sorted(pol.get('rawValueRestrictions', {}))} do not match catalog categories {sorted(cat)}")

    # 11
    roles = assets["roles"]; policies = set(assets["generationPolicies"])
    for r, v in roles.items():
        if v["generationPolicy"] not in policies: errs.append(f"asset role {r}: policy '{v['generationPolicy']}' is not in generationPolicies")
    for r, want in PINNED.items():
        if r not in roles: errs.append(f"pinned asset role '{r}' is missing from the registry")
        elif roles[r]["generationPolicy"] != want or not roles[r].get("pinned"): errs.append(f"pinned asset role '{r}' must be '{want}' (pinned), found '{roles[r]['generationPolicy']}'")
    pub = os.path.join(PKG, "public")
    # Some asset entries are not a file under public/ at all (e.g. a mailto: contact address) — real
    # evidence worth a pinned contract, but nothing to resolve on disk.
    is_virtual = lambda a: ":" in a["path"].split("/")[0] and not re.match(r"^[A-Za-z]:\\", a["path"])
    for a in assets["assets"]:
        if a["role"] not in roles: errs.append(f"asset {a['path']}: role '{a['role']}' is not in the closed role set")
        if not is_virtual(a) and not isinstance(a.get("inClone"), bool): errs.append(f"asset {a['path']}: inClone must be a boolean")
    if HAS_CLONE:
        for a in assets["assets"]:
            if is_virtual(a): continue
            on_disk = os.path.isfile(os.path.join(pub, a["path"]))
            if a.get("inClone") and not on_disk: errs.append(f"asset missing on disk: public/{a['path']} (inClone: true)")
            elif not a.get("inClone") and on_disk: errs.append(f"asset public/{a['path']} exists but is flagged inClone: false")
    else:
        warns.append("no clone public/ beside design-repo/ — asset files not checked")
    if PINNED_AVAILABILITY != sv.PINNED_AVAILABILITY: errs.append("PINNED_AVAILABILITY in verify_all.py and semantic_validate.py differ")
    av_vals = set(assets.get("availabilityValues", []))
    if av_vals != {"clone-only", "generation-safe", "blocked-for-generation"}: errs.append(f"asset-roles availabilityValues {sorted(av_vals)} is not the closed set")
    for r, want in PINNED_AVAILABILITY.items():
        if r not in roles: errs.append(f"pinned availability role '{r}' is missing from the registry"); continue
        v = roles[r]
        if v.get("availability") != want: errs.append(f"asset role '{r}' availability {v.get('availability')!r} differs from the pinned {want!r}")
        if want != "generation-safe":
            subs = v.get("generationSafeSubstitutes") or []
            if not subs or any(PINNED_AVAILABILITY.get(x) != "generation-safe" for x in subs): errs.append(f"asset role '{r}' needs generationSafeSubstitutes that are all generation-safe")
        if len(v.get("generatedModeGuidance", "")) < 30: errs.append(f"asset role '{r}' has no generatedModeGuidance")
    for r in roles:
        if r not in PINNED_AVAILABILITY: errs.append(f"asset role '{r}' has no pinned availability in code")
    for r in REQUIRED_GENERATION_SAFE:
        if PINNED_AVAILABILITY.get(r) != "generation-safe": errs.append(f"required generation-safe role '{r}' is missing")
    if roles.get("logo", {}).get("availability") == "generation-safe": errs.append("the real logo can never be generation-safe")
    for sid, c in secs.items():
        for r in c.get("assetRoles", []):
            if r not in roles: errs.append(f"sections/{sid}.json uses unknown asset role '{r}'")
        for r in c.get("generatedAssetRoles", []):
            if PINNED_AVAILABILITY.get(r) != "generation-safe": errs.append(f"sections/{sid}.json generatedAssetRoles lists '{r}', which is not generation-safe")
        want_g = sorted({x for r in c.get("assetRoles", []) for x in roles.get(r, {}).get("generationSafeSubstitutes", [])} | {r for r in c.get("assetRoles", []) if PINNED_AVAILABILITY.get(r) == "generation-safe"})
        if sorted(c.get("generatedAssetRoles", [])) != want_g: errs.append(f"sections/{sid}.json generatedAssetRoles {c.get('generatedAssetRoles')} != substitutes of its assetRoles {want_g}")

    # 12
    mot = schema["definitions"]["motion"]; mc_ = J("motion/motion-contract.json")
    if mot.get("additionalProperties") is not False: errs.append("schema motion object is not closed")
    if sorted(mot["properties"]) != sorted(mc_["closedFields"]): errs.append("schema motion fields differ from motion-contract closedFields")
    if sorted(mot["properties"]["pattern"]["enum"]) != sorted(mc_["patterns"]): errs.append("schema motion patterns differ from motion-contract patterns")
    for sid, c in secs.items():
        for p in c["motion"]["allowedPatterns"]:
            if p not in mc_["patterns"]: errs.append(f"sections/{sid}.json motion pattern '{p}' is not in the motion contract")

    # 13  machine paths: every JSON string VALUE that starts with one (site routes like "/home/about" are not paths)
    roots = ["/" + "Users/", "/" + "home/[^/\\s]+/", "/" + "private/", "/" + "var/folders/", "/" + "tmp/", r"[A-Za-z]:\\\\"]
    leak = re.compile(r"^(" + "|".join(roots) + ")")
    md_leak = re.compile(r"(?:^|[\s`(\"'])(" + "|".join(roots) + ")", re.M)
    ROUTE_KEYS = {"route", "routes", "sampleRoute", "routePattern"}
    def walk(v, key=None):
        if isinstance(v, dict):
            for k, x in v.items(): yield from walk(x, k)
        elif isinstance(v, list):
            for x in v: yield from walk(x, key)
        elif isinstance(v, str) and key not in ROUTE_KEYS:
            m = leak.match(v)
            if m: yield m.group(1)
    for root, _, fs in os.walk(REPO):
        for f in fs:
            p = os.path.join(root, f); rel = os.path.relpath(p, REPO)
            if f.endswith(".json"):
                hit = next(walk(json.load(open(p, encoding="utf-8"))), None)
                if hit: errs.append(f"absolute path in {rel}: {hit}")
            elif f.endswith(".md"):
                m = md_leak.search(open(p, encoding="utf-8", errors="ignore").read())
                if m: errs.append(f"absolute path in {rel}: {m.group(1)}")
            elif f.endswith((".py", ".mjs")):
                txt = open(p, encoding="utf-8", errors="ignore").read()
                if re.search(r"^(REPO|ROOT|HERE)\s*=\s*['\"]/", txt, re.M): errs.append(f"hard-coded root path in {rel}")
                m = md_leak.search(txt)
                if m: errs.append(f"absolute path in {rel}: {m.group(1)}")

    # 14
    from jsonschema import Draft7Validator
    try: Draft7Validator.check_schema(schema)
    except Exception as e: errs.append(f"pagespec.schema.json is not valid draft-07: {e}")
    cs = Draft7Validator(J("schema/section-contract.schema.json"))
    for sid, c in secs.items():
        for e in cs.iter_errors(c): errs.append(f"sections/{sid}.json violates section-contract.schema.json at {'/'.join(map(str, e.path)) or '(root)'}: {e.message[:120]}")
    ex0 = J("schema/example.pagespec.json")
    try: e1, w1 = sv.check(ex0)
    except Exception as e: e1 = [f"semantic validation crashed: {type(e).__name__}: {str(e)[:200]}"]
    for e in e1: errs.append(f"example.pagespec.json: {e}")
    if ex0.get("mode") != "clone": errs.append("example.pagespec.json must be a mode 'clone' example (real content control)")

    # 15 retrieval eligibility pins
    if PINNED_RETRIEVAL != sv.PINNED_RETRIEVAL: errs.append("PINNED_RETRIEVAL in verify_all.py and semantic_validate.py differ")
    ineligible = set(allow.get("retrievalIneligible", []))
    for sid, c in secs.items():
        want = PINNED_RETRIEVAL.get(sid, True)
        if RUNTIME_UI_RE.search(sid) and sid not in PINNED_RETRIEVAL: errs.append(f"retrieval: '{sid}' looks like runtime UI but is not in PINNED_RETRIEVAL")
        if c.get("retrievalEligible") is not want: errs.append(f"retrieval: sections/{sid}.json retrievalEligible {c.get('retrievalEligible')!r}, pinned {want}")
        if (sid in ineligible) != (want is False): errs.append(f"retrieval: allowlist retrievalIneligible disagrees with the pin for '{sid}'")
    for sid in PINNED_RETRIEVAL:
        if sid not in secs: errs.append(f"retrieval: pinned section '{sid}' has no contract")

    # 16 wrapper gate over measured heights
    wg = load_module("extraction/wrapper_gate.py", "wrapper_gate")
    if (wg.VIEWPORT_WIDTH, wg.HERO_WARN_PX, wg.HERO_ERROR_PX, wg.SHARE_WARN, wg.SHARE_ERROR, wg.MIN_INFLOW_FOR_SHARE) != (1440, 1800, 3000, 0.50, 0.60, 3):
        errs.append("wrapper gate thresholds drifted from the pinned 1440px / 1800px / 3000px / 50% / 60% / 3 in-flow nodes")
    gf, gw = wg.run(REPO)
    for e in gf: errs.append(f"wrapper gate: {e}")
    if gw: warns.append(f"wrapper gate: {len(gw)} warning(s) (python3 extraction/wrapper_gate.py lists them)")

    # 17 generation layer
    if HAS_CLONE and os.path.isdir(os.path.join(PKG, "src")):
        bi = load_module("extraction/build_source_identity.py", "build_source_identity")
        if bi.render(bi.build(PKG)) != open(os.path.join(REPO, "schema/source-identity.json"), encoding="utf-8").read():
            errs.append("schema/source-identity.json differs from a fresh build from the clone source (run extraction/build_source_identity.py)")
    else:
        warns.append("source-identity.json not rebuilt (no clone source beside design-repo/)")
    sid_reg = J("schema/source-identity.json")
    for k in ("brand", "hosts", "people", "customers", "claims", "routes"):
        if not sid_reg.get(k): errs.append(f"source-identity.json has no {k} patterns")
    if not sid_reg.get("copyShingles", {}).get("hashes"): errs.append("source-identity.json has no copy shingles")
    ge = load_module("extraction/build_generation_examples.py", "build_generation_examples")
    built = ge.build()
    fams = {t.get("family") for t in templates}
    if set(built) != fams: errs.append(f"generation examples cover families {sorted(built)} but templates have {sorted(fams)}")
    for fam, spec in built.items():
        rel = f"schema/examples/generated-{fam}.pagespec.json"
        if not os.path.isfile(os.path.join(REPO, rel)): errs.append(f"missing generation example {rel}"); continue
        if open(os.path.join(REPO, rel), encoding="utf-8").read() != ge.render(spec): errs.append(f"{rel} differs from a fresh build (run extraction/build_generation_examples.py)")
        got = J(rel)
        if got.get("mode") != "generation": errs.append(f"{rel} is not mode 'generation'")
        try: ge_, _ = sv.check(got)
        except Exception as e: ge_ = [f"semantic validation crashed: {type(e).__name__}: {str(e)[:200]}"]
        for e in ge_: errs.append(f"{rel}: {e}")

    # 18 design policy binding
    dp = man.get("designPolicy") or {}
    if man.get("category") != "saas": errs.append(f"manifest category {man.get('category')!r} != 'saas' (B2B SaaS evidence in policy/design-policy.json)")
    if (dp.get("policyId"), dp.get("policyVersion")) != SAAS_POLICY: errs.append(f"manifest designPolicy must bind {SAAS_POLICY}, found {(dp.get('policyId'), dp.get('policyVersion'))}")
    if dp.get("commonIrVersion") != "0.5" or dp.get("enforcementMode") != "hard-and-soft": errs.append("manifest designPolicy needs commonIrVersion 0.5 and enforcementMode hard-and-soft")
    pref = dp.get("ref", "")
    if not pref or not os.path.isfile(os.path.join(REPO, pref)): errs.append(f"designPolicy.ref {pref!r} does not exist")
    else:
        pf = J(pref)
        if (pf.get("policyId"), pf.get("policyVersion")) != SAAS_POLICY or pf.get("commonIrVersion") != "0.5": errs.append("policy file does not declare the bound policy id/version/commonIrVersion")
        if pf.get("classification", {}).get("isSaaS") is not True or not pf.get("classification", {}).get("evidence"): errs.append("policy file must record isSaaS: true with evidence")
        for ev in pf.get("classification", {}).get("evidence", []):
            m = re.match(r"^(.+):(\d+)$", ev.get("ref", ""))
            if not m: errs.append(f"policy evidence ref {ev.get('ref')!r} is not file:line"); continue
            if HAS_CLONE:
                fp = os.path.join(PKG, m.group(1))
                if not os.path.isfile(fp) or int(m.group(2)) > len(open(fp, encoding="utf-8", errors="ignore").read().split("\n")): errs.append(f"policy evidence ref {ev['ref']} does not resolve in the clone")
        h = hashlib.sha256()
        for rel in sorted(pf.get("enforcedBy", [])):
            fp = os.path.join(REPO, rel)
            if not os.path.isfile(fp): errs.append(f"policy enforcedBy file missing: {rel}"); continue
            h.update(rel.encode() + b"\0" + open(fp, "rb").read() + b"\0")
        if dp.get("contentHash") != "sha256:" + h.hexdigest(): errs.append(f"designPolicy.contentHash {dp.get('contentHash')} != recomputed sha256:{h.hexdigest()}")
    if os.environ.get("VERIFY_SKIP_ADVERSARIAL") != "1":  # prove_drift.py sets this: its injections target the checks above
        r = subprocess.run([sys.executable, os.path.join(REPO, "schema/tests/adversarial_test.py")], capture_output=True, text=True)
        last = (r.stdout.strip().splitlines() or ["(no output)"])[-1]
        if r.returncode: errs.append("adversarial suite failed:\n      " + (r.stdout + r.stderr).strip().replace("\n", "\n      "))
        else: print("  " + last)

    # 19
    z = os.path.join(PKG, "design-repo.zip")
    if os.path.isfile(z):
        names = zipfile.ZipFile(z).namelist()
        junk = [n for n in names if "__MACOSX" in n or n.endswith(".DS_Store")]
        if junk: errs.append(f"design-repo.zip contains {len(junk)} __MACOSX/.DS_Store entries")
        zt = os.path.getmtime(z)
        newer = [os.path.relpath(os.path.join(rt, f), REPO) for rt, _, fs in os.walk(REPO) for f in fs if os.path.getmtime(os.path.join(rt, f)) > zt + 1 and "__pycache__" not in rt]
        if newer: errs.append(f"design-repo.zip is stale: {len(newer)} file(s) changed after it was built (e.g. {newer[0]})")
    return finish()


def load_module(rel, name):
    spec = importlib.util.spec_from_file_location(name, os.path.join(REPO, rel))
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    return m


def load_validator():
    spec = importlib.util.spec_from_file_location("semantic_validate", os.path.join(REPO, "schema/semantic_validate.py"))
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    return m


def finish():
    for w in warns: print("WARN:", w)
    if errs:
        print("REPO NOT ADMITTED:"); [print("  -", e) for e in errs]; sys.exit(1)
    if not HAS_CLONE:
        print("REPO OK (design-repo copied alone: citations, usedAt lines, asset files, routes.js coverage and the source-identity rebuild were not checked) — structure, entryPoints, versions, counts, parity, templates, graph, tokens, pins, motion, paths, schemas, examples, wrapper gate, design policy and adversarial suite all pass.")
    else:
        print("REPO OK — structure, entryPoints, versions, counts, parity, templates, routes.js coverage, graph, citations (JSX ranges + usedAt), tokens, pins (availability + retrieval), assets on disk, motion, paths, schemas, examples, source identity, wrapper gate, design policy and adversarial suite all pass.")
    sys.exit(0)


if __name__ == "__main__":
    main()
