#!/usr/bin/env python3
"""Adversarial suite: proves every rule REJECTS a bad PageSpec for the RIGHT reason, and that controls pass.

Controls: the bundled clone-mode example (real owner.com content: clone mode must keep validating it), the
generation-mode example of every template family (schema/examples/generated-*.pagespec.json) and one synthesized
minimal PageSpec per template (generic loop, so a new template needs no new control code). Mutations are built from this repo's own contracts; each one must
produce an error (or, for warn-severity rules, a warning) naming the specific rule it targets. A mutation
that cannot be built for this repo is reported as SKIPPED with the reason -- never silently dropped.
Usage: python3 adversarial_test.py"""
import copy, glob, importlib.util, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SCHEMA = os.path.dirname(HERE)
REPO = os.path.dirname(SCHEMA)
spec_ = importlib.util.spec_from_file_location("semantic_validate", os.path.join(SCHEMA, "semantic_validate.py"))
sv = importlib.util.module_from_spec(spec_); spec_.loader.exec_module(sv)

SECS = sv.contracts()
TEMPLATES = sv.load("templates/templates.json")["templates"]
GRAPH = {r["id"]: r for r in sv.load("compatibility/graph.json")["rules"]}
VERSION = sv.load("schema/pagespec.schema.json")["properties"]["pageSpecVersion"]["const"]
NONE = {"pattern": "none", "reducedMotionFallback": "disable-animation"}


def minimal_node(sid, motion=None):
    f = SECS[sid]["content"]["fields"]
    content = {}
    if f.get("heading", {}).get("required"): content["heading"] = "Sample"
    if f.get("subheading", {}).get("required"): content["subheading"] = "Sample"
    if f.get("body", {}).get("required"): content["body"] = ["Sample"]
    if f.get("ctas", {}).get("required"): content["ctas"] = [{"label": "Go"}]
    if f.get("items", {}).get("required"): content["items"] = [{"title": "Sample"}]
    if f.get("images", {}).get("required"): content["images"] = [{"assetRole": f["images"]["assetRoles"][0]}]
    return {"type": sid, "content": content, "motion": dict(motion or NONE)}


def control_for(t):
    return {"pageSpecVersion": VERSION, "mode": "clone", "template": t["id"], "route": (t.get("routes") or ["/sample"])[0],
            "nodes": [minimal_node(n["section"]) for n in t["nodes"]]}


def main():
    example = sv.load("schema/example.pagespec.json")
    tmpl = {t["id"]: t for t in TEMPLATES}[example["template"]]
    tseq = [n["section"] for n in tmpl["nodes"]]
    types = [n["type"] for n in example["nodes"]]
    cases, skipped = [], []   # case: (label, spec, expect, needle) with expect in {"pass", "error", "warn"}
    cases.append(("control: bundled example", example, "pass", None))
    for t in TEMPLATES:
        cases.append((f"control: minimal {t['id']}", control_for(t), "pass", None))

    def mut(label, fn, needle, expect="error", why_not=None):
        if why_not:
            skipped.append(f"{label}: {why_not}"); return
        s = copy.deepcopy(example); fn(s); cases.append((label, s, expect, needle))

    first_idx = lambda pred: next((i for i, n in enumerate(example["nodes"]) if pred(n)), None)

    # ---- schema layer
    mut("wrong template enum", lambda s: s.__setitem__("template", "template.does-not-exist"), "schema: template")
    mut("missing required motion", lambda s: s["nodes"][0].pop("motion"), "'motion' is a required property")
    mut("invented section type", lambda s: s["nodes"][0].__setitem__("type", "hero.invented-type"), "schema: nodes/0/type")
    mut("missing reducedMotionFallback", lambda s: s["nodes"][0]["motion"].pop("reducedMotionFallback"), "reducedMotionFallback")
    mut("invented motion field", lambda s: s["nodes"][0]["motion"].__setitem__("inventedAnimation", True), "inventedAnimation")
    mut("per-instance style override on a node", lambda s: s["nodes"][0].__setitem__("style", {"color": "#ff0000"}), "'style' was unexpected")
    mut("raw theme override at page level", lambda s: s.__setitem__("theme", {"color.text.primary": "#ff0000"}), "is not of type 'string'")
    mut("missing required mode", lambda s: s.pop("mode"), "'mode' is a required property")
    mut("mode outside the closed enum", lambda s: s.__setitem__("mode", "remix"), "schema: mode")
    mut("wrong pageSpecVersion", lambda s: s.__setitem__("pageSpecVersion", "9.9.9"), "schema: pageSpecVersion")
    mut("unknown content field", lambda s: s["nodes"][0]["content"].__setitem__("inventedField", "x"), "'inventedField' was unexpected")
    cta = first_idx(lambda n: "ctas" in SECS[n["type"]]["content"]["fields"])
    mut("link to a live external URL", lambda s: s["nodes"][cta]["content"].__setitem__("ctas", [{"label": "Go", "href": "https://www.owner.com/pricing"}]),
        "does not match", why_not=None if cta is not None else "no section with ctas")
    img = first_idx(lambda n: "images" in SECS[n["type"]]["content"]["fields"])
    mut("invented assetRole", lambda s: s["nodes"][img]["content"].__setitem__("images", [{"assetRole": "invented-role"}]),
        "invented-role", why_not=None if img is not None else "no section with images")
    if img is not None:
        role = (SECS[example["nodes"][img]["type"]]["content"]["fields"]["images"].get("assetRoles") or ["content-image"])[0]
        mut("alt text over its word budget", lambda s: s["nodes"][img]["content"].__setitem__("images", [{"assetRole": role, "alt": " ".join(["w"] * 17)}]), "alt has 17 words")

    # ---- structural layer (template cross-reference)
    once = [i for i, tn in enumerate(tmpl["nodes"]) if tn["required"] and tseq.count(tn["section"]) == 1]
    mut("removed mandatory section", lambda s: s["nodes"].pop(types.index(tseq[once[0]])), "missing",
        why_not=None if once and len(types) > 1 else "no required section that occurs once")
    if len(types) >= 2 and types[0] != types[1]:
        mut("first two sections swapped", lambda s: s["nodes"].__setitem__(slice(0, 2), [s["nodes"][1], s["nodes"][0]]), "out of order")
    else:
        skipped.append("first two sections swapped: fewer than two distinct leading sections")
    foreign = next((sid for sid in sorted(SECS) if sid not in tseq), None)
    mut("section from outside the template", lambda s: s["nodes"].insert(1, minimal_node(foreign)), "not part of template",
        why_not=None if foreign else "every section belongs to this template")
    other = next((t for t in TEMPLATES if t["id"] != tmpl["id"] and [n["section"] for n in t["nodes"]] != tseq), None)
    mut("declared template contradicts the nodes", lambda s: s.__setitem__("template", other["id"]), "template:",
        why_not=None if other else "only one template in this repo")

    # ---- product pages and editorial articles are separate contracts: neither may borrow the other's opening block
    byid = {t["id"]: t for t in TEMPLATES}
    def biggest_with(sid): return max((t for t in TEMPLATES if any(n["section"] == sid for n in t["nodes"])), key=lambda t: t["routeCount"], default=None)
    for old, new in (("hero.article-header", "hero.section-product-hero"), ("hero.section-product-hero", "hero.article-header")):
        t = biggest_with(old)
        if t and old in SECS and new in SECS and not any(n["section"] == new for n in t["nodes"]):
            sp = control_for(t); sp["nodes"] = [minimal_node(new) if n["type"] == old else n for n in sp["nodes"]]
            cases.append((f"{t['id']} opened with {new} instead of {old}", sp, "error", "not part of template"))
        else:
            skipped.append(f"{old}/{new} separation: no template that uses only one of the two")

    # ---- graph layer: each rule must fire by its own id
    one = first_idx(lambda n: SECS[n["type"]]["constraints"].get("onePerPage"))
    mut("SECTION_PER_PAGE_LIMITS: one-per-page section duplicated", lambda s: s["nodes"].insert(one + 1, copy.deepcopy(s["nodes"][one])),
        "SECTION_PER_PAGE_LIMITS", why_not=None if one is not None else "no one-per-page section")
    fb = GRAPH["SHELL_MUST_BE_FIRST"]["sections"]; fi = first_idx(lambda n: n["type"] in fb)
    mut("SHELL_MUST_BE_FIRST: first section moved to the end", lambda s: s["nodes"].append(s["nodes"].pop(fi)), "SHELL_MUST_BE_FIRST",
        why_not=None if fi is not None and len(types) > 1 else "no mustBeFirst section in the example")
    lb = GRAPH["SHELL_MUST_BE_LAST"]["sections"]; li = next((i for i in range(len(types) - 1, -1, -1) if types[i] in lb), None)
    mut("SHELL_MUST_BE_LAST: last section moved to the front", lambda s: s["nodes"].insert(0, s["nodes"].pop(li)), "SHELL_MUST_BE_LAST",
        why_not=None if li is not None and len(types) > 1 else "no mustBeLast section in the example")
    nc = GRAPH["NO_CONSECUTIVE_SAME_SECTION"]["sections"]; ni = first_idx(lambda n: n["type"] in nc)
    mut("NO_CONSECUTIVE_SAME_SECTION (warn)", lambda s: s["nodes"].insert(ni + 1, copy.deepcopy(s["nodes"][ni])), "NO_CONSECUTIVE_SAME_SECTION", "warn",
        why_not=None if ni is not None else "no section is restricted from repeating back-to-back")
    allowed = {tuple(p) for p in GRAPH["NO_ADJACENT_SAME_CATEGORY"].get("exceptions", [])}
    pair = next(((a, b) for a in sorted(SECS) for b in sorted(SECS) if a != b and SECS[a]["category"] == SECS[b]["category"] and (a, b) not in allowed), None)
    mut("NO_ADJACENT_SAME_CATEGORY (warn)", lambda s: s["nodes"].extend([minimal_node(pair[0]), minimal_node(pair[1])]), "NO_ADJACENT_SAME_CATEGORY", "warn",
        why_not=None if pair else "no two sections share a category")
    budget = GRAPH["MOTION_BUDGET"]["max"]
    animated = next((sid for sid in sorted(SECS) if [p for p in SECS[sid]["motion"]["allowedPatterns"] if p != "none"]), None)
    if animated:
        pat = [p for p in SECS[animated]["motion"]["allowedPatterns"] if p != "none"][0]
        mut("MOTION_BUDGET (warn)", lambda s: s["nodes"].extend([minimal_node(animated, {"pattern": pat, "reducedMotionFallback": "disable-animation"}) for _ in range(budget + 1)]), "MOTION_BUDGET", "warn")
    else:
        skipped.append("MOTION_BUDGET: no section allows an animated pattern")
    heroes = sorted(sid for sid, c in SECS.items() if c["category"] == "HERO")
    hi = first_idx(lambda n: SECS[n["type"]]["category"] == "HERO")
    extra = next((h for h in heroes if hi is None or h != types[hi]), None)
    why = None if (hi is not None and extra) else "fewer than two HERO section types"
    if not why and example["template"] in GRAPH["ONE_HERO_PER_PAGE"]["exceptions"]: why = "the example's template is a named exception"
    mut("ONE_HERO_PER_PAGE: a second HERO section", lambda s: s["nodes"].insert(hi + 1, minimal_node(extra)), "ONE_HERO_PER_PAGE", why_not=why)

    # ---- runtime budgets
    wn = next(((i, k) for i, n in enumerate(example["nodes"]) for k in ("heading", "subheading") if k in n["content"]), None)
    if wn:
        i, k = wn; mw = SECS[types[i]]["content"]["fields"][k]["maxWords"]
        mut(f"maxWords overflow on a {k}", lambda s: s["nodes"][i]["content"].__setitem__(k, " ".join(["word"] * (mw + 1))), f"{k} has {mw + 1} words")
    else:
        skipped.append("maxWords overflow: example has no heading")
    itn = first_idx(lambda n: n["content"].get("items"))
    if itn is not None:
        tw = SECS[types[itn]]["content"]["fields"]["items"]["titleMaxWords"]
        mut("maxWords overflow on an item title", lambda s: s["nodes"][itn]["content"]["items"][0].__setitem__("title", " ".join(["word"] * (tw + 1))), "title has")
    noanim = first_idx(lambda n: SECS[n["type"]]["motion"]["allowedPatterns"] == ["none"])
    mut("motion pattern not allowed for its section", lambda s: s["nodes"][noanim]["motion"].__setitem__("pattern", "scroll-linked"), "not allowed",
        why_not=None if noanim is not None else "every section allows animation")

    # ---- generation-mode controls and leakage (R2 / R4 / R5)
    gens = {os.path.basename(p): json.load(open(p, encoding="utf-8")) for p in sorted(glob.glob(os.path.join(SCHEMA, "examples", "generated-*.pagespec.json")))}
    for name, g in gens.items():
        cases.append((f"control: generation example {name}", g, "pass", None))
    if "generated-home.pagespec.json" not in gens:
        skipped.append("generation leakage mutations: no generated-home example")
    else:
        G = gens["generated-home.pagespec.json"]
        hi_ = next(i for i, n in enumerate(G["nodes"]) if SECS[n["type"]]["category"] == "HERO")
        img_ = next(i for i, n in enumerate(G["nodes"]) if n["content"].get("images"))
        cta_ = next(i for i, n in enumerate(G["nodes"]) if n["content"].get("ctas"))
        body_ = next(i for i, n in enumerate(G["nodes"]) if n["content"].get("body"))
        def gm(label, fn, needle, base=G):
            s = copy.deepcopy(base); fn(s); cases.append((label, s, "error", needle))
        def set_heading(v): return lambda s: s["nodes"][hi_]["content"].__setitem__("heading", v)
        def set_body(v): return lambda s: s["nodes"][body_]["content"].__setitem__("body", [v])
        def set_img(**kw): return lambda s: s["nodes"][img_]["content"]["images"][0].update(kw)
        def set_cta(label=None, href=None):
            def f(s):
                c0 = s["nodes"][cta_]["content"]["ctas"][0]
                if label is not None: c0["label"] = label
                if href is not None: c0["href"] = href
            return f
        gm("generation: brand name in a heading", set_heading("Grow online with Owner.com"), "GENERATION_MODE_BRAND")
        gm("generation: brand as a proper noun", set_body("Thousands of cafes run on Owner every day"), "GENERATION_MODE_BRAND")
        gm("generation: brand name with zero-width + fullwidth tricks", set_heading("Try Ｏwner\u200b.com free"), "GENERATION_MODE_BRAND")
        gm("generation: source product name", set_body("Meet Owner POS for your counter"), "GENERATION_MODE_BRAND")
        gm("generation: source CTA string", set_cta(label="Get Owner"), "GENERATION_MODE_BRAND")
        gm("generation: page brand is the source brand", lambda s: s["brand"].__setitem__("name", "Owner.com"), "GENERATION_MODE_BRAND")
        gm("generation: real logo role", set_img(assetRole="logo"), "GENERATION_MODE_BRAND")
        gm("generation: real customer logo role", set_img(assetRole="customer-logo"), "GENERATION_MODE_CUSTOMER")
        gm("generation: real person avatar role", set_img(assetRole="avatar"), "GENERATION_MODE_PERSON")
        gm("generation: product screenshot role", set_img(assetRole="product-screenshot"), "GENERATION_MODE_SCREENSHOT")
        gm("generation: clone-only content image role", set_img(assetRole="content-image"), "GENERATION_MODE_ASSET")
        gm("generation: live embed role", set_img(assetRole="live-embed"), "GENERATION_MODE_EMBED")
        gm("generation: real asset file as src", set_img(src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69d2e13331f50967b44bc225_talkintacos.jpg"), "GENERATION_MODE_ASSET")
        gm("generation: youtube embed as src", set_img(src="https://www.youtube.com/embed/SDDrocdOOmw"), "GENERATION_MODE_EMBED")
        gm("generation: app store link as src", set_img(src="https://apps.apple.com/us/app/sample/id1"), "GENERATION_MODE_URL")
        gm("generation: source host named in copy", set_body("Log in at dashboard.owner.com to see orders"), "GENERATION_MODE_URL")
        gm("generation: link to a source entity route", set_cta(href="/case-studies/metro-pizza"), "GENERATION_MODE_URL")
        gm("generation: page served at a source article route", lambda s: s.__setitem__("route", "/blog/seo-for-restaurants"), "GENERATION_MODE_URL")
        gm("generation: real person named in copy", set_body("Loved by Hengameh Stanfield and friends"), "GENERATION_MODE_PERSON")
        gm("generation: real reviewer identity", set_body("Brian E. says it changed his week"), "GENERATION_MODE_PERSON")
        gm("generation: real restaurant customer", set_heading("How Metro Pizza filled its tables"), "GENERATION_MODE_CUSTOMER")
        gm("generation: real rating / review-count claim", set_body("Rated by 1,000+ reviews on every site"), "GENERATION_MODE_CLAIM")
        gm("generation: '#1 rated' claim", set_heading("The #1 rated garden planner"), "GENERATION_MODE_CLAIM")
        gm("generation: source headline copy", set_heading("Give your restaurant the same tech"), "GENERATION_MODE_COPY")
        gm("generation: source paragraph copy, curly quotes", set_body("Your customers are used to ordering on their phone. That\u2019s why we give your restaurant its own mobile app."), "GENERATION_MODE_COPY")
        # clone mode must still accept real content + clone-only assets (the same strings)
        cl = copy.deepcopy(G); cl["mode"] = "clone"
        cl["nodes"][body_]["content"]["body"] = ["Your customers are used to ordering on their phone."]
        cl["nodes"][img_]["content"]["images"][0].update(assetRole=(SECS[cl["nodes"][img_]["type"]]["content"]["fields"]["images"]["assetRoles"] or ["content-image"])[0], src="/_ext/cdn.prod.website-files.com/69b9330c8b70142e4e5f7d3c/69d2e13331f50967b44bc225_talkintacos.jpg")
        cases.append(("control: clone mode accepts real copy and a clone-only asset", cl, "pass", None))

        # ---- token rules (R10)
        def tok(slot, v): return lambda s: s["nodes"][hi_].setdefault("tokens", {}).__setitem__(slot, v)
        gm("TOKEN_UNKNOWN: invented token", tok("surface", "surface.neon"), "TOKEN_UNKNOWN")
        gm("TOKEN_RAW_COLOR: raw hex", tok("text", "#ff0066"), "TOKEN_RAW_COLOR")
        gm("TOKEN_RAW_COLOR: raw rgb()", tok("surface", "rgb(1, 2, 3)"), "TOKEN_RAW_COLOR")
        gm("TOKEN_ARBITRARY_SPACING: raw px", tok("paddingTop", "37px"), "TOKEN_ARBITRARY_SPACING")
        gm("TOKEN_ARBITRARY_SPACING: raw rem", tok("gap", "2.5rem"), "TOKEN_ARBITRARY_SPACING")
        gm("TOKEN_UNSUPPORTED_FONT", tok("fontFamily", "Comic Sans MS"), "TOKEN_UNSUPPORTED_FONT")
        gm("TOKEN_SLOT_MISMATCH: layout token as a surface", tok("surface", "layout.gutter"), "TOKEN_SLOT_MISMATCH")
        gm("TOKEN_THEME_UNKNOWN: unvalidated theme", lambda s: s.__setitem__("theme", "dark"), "TOKEN_THEME_UNKNOWN")
        gm("TOKEN_INVALID_COMBINATION: white text on white surface", lambda s: s["nodes"][hi_].__setitem__("tokens", {"surface": "surface.default", "text": "text.inverse"}), "TOKEN_INVALID_COMBINATION")
        ok_tok = copy.deepcopy(G); ok_tok["nodes"][hi_]["tokens"] = {"surface": "surface.alt", "text": "text.inverse", "fontFamily": "STKBureauSans", "gap": "layout.gridGap", "radius": "radius.control"}
        cases.append(("control: valid token choices", ok_tok, "pass", None))

    # ---- retrieval eligibility (R8): node, contract and allowlist level; pins vs registry availability (R3)
    rt = sorted(sv.PINNED_RETRIEVAL)[0]
    tmpl_rt = next((t for t in TEMPLATES if any(n["section"] == rt for n in t["nodes"])), None)
    if tmpl_rt:
        sp = control_for(tmpl_rt); sp["nodes"][[n["type"] for n in sp["nodes"]].index(rt)]["retrievalEligible"] = True
        cases.append((f"RETRIEVAL_PIN: runtime UI {rt} flipped eligible on the node", sp, "error", "RETRIEVAL_PIN"))
    content_sid = next(n["type"] for n in example["nodes"] if SECS[n["type"]]["category"] == "CONTENT")
    sp = copy.deepcopy(example); sp["nodes"][types.index(content_sid)]["retrievalEligible"] = False
    cases.append(("RETRIEVAL_PIN: content section marked ineligible on the node", sp, "error", "RETRIEVAL_PIN"))
    def p_contract(_):
        c = copy.deepcopy(sv.contracts()); c[rt]["retrievalEligible"] = True; return ("__sections__", c)
    def p_contract_content(_):
        c = copy.deepcopy(sv.contracts()); c[content_sid]["retrievalEligible"] = False; return ("__sections__", c)
    def p_allow(_):
        a = copy.deepcopy(sv.load("tokens/llm/component-allowlist.json")); a["retrievalIneligible"] = []; return ("tokens/llm/component-allowlist.json", a)
    def p_avail(_):
        a = copy.deepcopy(sv.load("assets/asset-roles.json")); a["roles"]["logo"]["availability"] = "generation-safe"; return ("assets/asset-roles.json", a)
    def p_avail_blocked(_):
        a = copy.deepcopy(sv.load("assets/asset-roles.json")); a["roles"]["live-embed"]["availability"] = "clone-only"; return ("assets/asset-roles.json", a)
    for label, patch, needle in (("RETRIEVAL_PIN: runtime UI flipped eligible in its contract", p_contract, "RETRIEVAL_PIN"),
                                 ("RETRIEVAL_PIN: content section flipped ineligible in its contract", p_contract_content, "RETRIEVAL_PIN"),
                                 ("RETRIEVAL_PIN: allowlist drops the ineligible list", p_allow, "RETRIEVAL_PIN"),
                                 ("AVAILABILITY_PIN: registry makes the real logo generation-safe", p_avail, "AVAILABILITY_PIN"),
                                 ("AVAILABILITY_PIN: registry loosens a blocked role to clone-only", p_avail_blocked, "AVAILABILITY_PIN")):
        cases.append((label, ("__patched__", patch), "error", needle))

    ok = fail = 0
    for label, spec, expect, needle in cases:
        if isinstance(spec, tuple) and spec[0] == "__patched__":
            key, val = spec[1](None)
            saved = sv._CACHE.get(key)
            sv._CACHE[key] = val
            try:
                errors, warnings = sv.check(example)
            finally:
                if saved is None: sv._CACHE.pop(key, None)
                else: sv._CACHE[key] = saved
            good = any(needle in e for e in errors)
            if good: ok += 1
            else: fail += 1; print(f"FAIL: {label}: expected error containing '{needle}'; errors={errors[:3]}")
            continue
        errors, warnings = sv.check(spec)
        if expect == "pass": good = not errors
        elif expect == "error": good = any(needle in e for e in errors)
        else: good = any(needle in w for w in warnings)
        if good: ok += 1
        else:
            fail += 1
            print(f"FAIL: {label}: expected {expect}" + (f" containing '{needle}'" if needle else "") + f"; errors={errors[:3]} warnings={warnings[:3]}")
    for s_ in skipped: print("SKIPPED:", s_)
    n_ctrl = sum(1 for c in cases if c[2] == "pass")
    print(f"adversarial: {ok} passed, {fail} failed ({n_ctrl} controls, {len(cases) - n_ctrl} mutations, {len(skipped)} skipped as not applicable)")
    sys.exit(1 if fail else 0)


if __name__ == "__main__":
    main()
