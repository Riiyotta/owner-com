#!/usr/bin/env python3
"""Semantic validator for a PageSpec against this design repo.

Enforces, in order:
  1. JSON Schema draft-07 (schema/pagespec.schema.json) -- structural closure, required closed `mode`
  2. template cross-reference: the node sequence must follow the DECLARED template's own node list
     (order, required nodes present, repeatable/maxCount respected, no foreign sections) -- match_template()
  3. every rule in compatibility/graph.json, respecting severity (error fails, warn is reported)
  4. per-field maxWords budgets from sections/<id>.json, on this instance
  5. motion: pattern allowed for that section, reducedMotionFallback present
  6. images: assetRole allowed for that section in this mode (assetRoles in clone mode, generatedAssetRoles in
     generation mode)
  7. RETRIEVAL_PIN: node / contract / allowlist retrievalEligible must equal PINNED_RETRIEVAL (runtime UI is never
     eligible; any section whose id looks like runtime UI must be pinned)
  8. AVAILABILITY_PIN: assets/asset-roles.json availability must equal PINNED_AVAILABILITY (pinned here, in code)
  9. TOKEN_*: node `tokens` slots hold catalog tokens of the right category; no raw colours, raw lengths, unsupported
     fonts, unknown themes, unresolved theme tokens or text/surface pairs below 3:1 contrast
 10. GENERATION_MODE_*: in mode "generation" no owner.com identity or content (schema/source-identity.json, built
     from the real source by extraction/build_source_identity.py): BRAND, PERSON, CUSTOMER, CLAIM, COPY, URL, EMBED,
     ASSET, SCREENSHOT. Strings are normalised (NFKC, zero-width removal, curly quotes, dashes, case) before matching.
     Detection is string-based: verbatim or lightly reformatted reuse, not paraphrase. No human reviewed the patterns.
     Mode "clone" may carry real copy / clone-only assets (a control in the adversarial suite proves it).

Usage:  python3 semantic_validate.py <pagespec.json>
Import: check(spec) -> (errors, warnings)
"""
import hashlib, re, unicodedata
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
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
# which GENERATION_MODE_* rule rejects a non-generation-safe role (pinned with the availability)
ROLE_RULE = {'logo': 'GENERATION_MODE_BRAND', 'customer-logo': 'GENERATION_MODE_CUSTOMER', 'avatar': 'GENERATION_MODE_PERSON',
             'product-screenshot': 'GENERATION_MODE_SCREENSHOT', 'live-embed': 'GENERATION_MODE_EMBED', 'founder-contact-email': 'GENERATION_MODE_URL'}
PINNED_RETRIEVAL = {'content.demo-hidden-control': False, 'hero.demo-variant-modal': False}
RUNTIME_UI_RE = re.compile(r'modal|dialog|drawer|popup|pop-up|cookie|consent|preloader|toast|overlay|lightbox|hidden-control|banner-dismiss')
EMBED_HOSTS = ('youtube.com', 'youtu.be', 'youtube-nocookie.com', 'twitter.com', 'x.com', 'linkedin.com', 'b-cdn.net', 'vimeo.com', 'instagram.com', 'tiktok.com')
RESERVED_URL = re.compile(r'^(https://([a-z0-9-]+\.)+(example|invalid)(/\S*)?|mailto:[^@\s]+@([a-z0-9-]+\.)+(example|invalid))$')
RAW_COLOR = re.compile(r'#[0-9a-fA-F]{3,8}\b|\b(rgba?|hsla?|hwb|lab|lch|oklch|color)\s*\(', re.I)
RAW_LENGTH = re.compile(r'^-?\d*\.?\d+\s*(px|rem|em|%|vh|vw|vmin|vmax|pt|ch)?$', re.I)
COPY_MIN_HITS = 2          # a field reusing >= 2 source 5-word shingles is source copy
COPY_SHORT_FIELD_WORDS = 7  # ... or >= 1 shingle when the field is a short headline / CTA (<= 7 words)
ZW = re.compile('[\u200b-\u200f\u2060-\u2064\ufeff\u00ad]')
DASH = re.compile('[\u2010-\u2015\u2212]')
QUOTES = {'\u2018': "'", '\u2019': "'", '\u201a': "'", '\u201b': "'", '\u201c': '"', '\u201d': '"', '\u201e': '"', '\u00ab': '"', '\u00bb': '"'}


def norm(s):
    s = unicodedata.normalize('NFKC', str(s))
    s = ZW.sub('', s)
    for a, b in QUOTES.items():
        s = s.replace(a, b)
    s = DASH.sub('-', s)
    return re.sub(r'\s+', ' ', s).strip().lower()


def norm_words(s):
    return re.findall(r"[0-9a-z\u00c0-\u024f]+(?:'[a-z]+)?", norm(s))


RULE_KINDS = {"maxCategoryPerPage", "perPageLimits", "mustBeFirst", "mustBeLast", "noConsecutive",
              "noAdjacentSameCategory", "maxAnimatedSections"}


_CACHE = {}


def load(rel):
    # contracts are read once per process: the adversarial suite calls check() hundreds of times
    if rel not in _CACHE:
        with open(os.path.join(REPO, rel), encoding="utf-8") as f:
            _CACHE[rel] = json.load(f)
    return _CACHE[rel]


def words(s):
    return len(str(s).split())


def contracts():
    if "__sections__" in _CACHE:
        return _CACHE["__sections__"]
    out = {}
    d = os.path.join(REPO, "sections")
    for f in sorted(os.listdir(d)):
        if f.endswith(".json"):
            c = json.load(open(os.path.join(d, f), encoding="utf-8"))
            out[c["id"]] = c
    _CACHE["__sections__"] = out
    return out


def validator():
    if "__validator__" not in _CACHE:
        from jsonschema import Draft7Validator
        _CACHE["__validator__"] = Draft7Validator(load("schema/pagespec.schema.json"))
    return _CACHE["__validator__"]


def identity():
    if "__identity__" not in _CACHE:
        p = os.path.join(REPO, "schema", "source-identity.json")
        d = json.load(open(p, encoding="utf-8")) if os.path.isfile(p) else {}
        phrase = lambda xs: [(x, re.compile(r"(?<![0-9a-z])" + re.escape(norm(x)) + r"(?![0-9a-z])")) for x in xs]
        _CACHE["__identity__"] = {
            "brand": [(b["key"], re.compile(b["pattern"]) if b.get("caseSensitive") else re.compile(b["pattern"]), bool(b.get("caseSensitive"))) for b in d.get("brand", [])],
            "hosts": sorted({h["host"] for h in d.get("hosts", [])} | {"owner.com"}),
            "people": phrase([p["name"] for p in d.get("people", [])]),
            "customers": phrase([c["name"] for c in d.get("customers", [])]),
            "claims": phrase([c["term"] for c in d.get("claims", [])] + [c["phrase"] for c in d.get("numericClaims", [])]),
            "routes": {r["route"] for r in d.get("routes", [])},
            "shingles": set(d.get("copyShingles", {}).get("hashes", [])),
            "size": d.get("copyShingles", {}).get("size", 5),
            "loaded": bool(d),
        }
    return _CACHE["__identity__"]


def asset_paths():
    if "__assets__" not in _CACHE:
        a = load("assets/asset-roles.json")
        _CACHE["__assets__"] = {os.path.basename(x["path"]).lower() for x in a.get("assets", []) if ":" not in x["path"].split("/")[0]}
    return _CACHE["__assets__"]


def match_template(t, types):
    """errors for a node-type sequence against template t (order, required, repeatable/maxCount, foreign sections)"""
    errors, tid, i = [], t["id"], 0
    tsecs = [tn["section"] for tn in t["nodes"]]
    for k, tn in enumerate(t["nodes"]):
        cnt = 0
        while i < len(types) and types[i] == tn["section"]:
            cnt += 1; i += 1
        if cnt == 0 and tn.get("required"):
            if tn["section"] in types:
                errors.append(f"template: section '{tn['section']}' is out of order for {tid} (expected as node {k + 1})")
            else:
                errors.append(f"template: required section '{tn['section']}' missing (node {k + 1} of {tid})")
        if cnt > 1 and not tn.get("repeatable"):
            errors.append(f"template: section '{tn['section']}' repeated {cnt}x but is not repeatable in {tid}")
        if tn.get("repeatable") and cnt > tn.get("maxCount", cnt):
            errors.append(f"template: section '{tn['section']}' repeated {cnt}x, max {tn['maxCount']} in {tid}")
    for extra in types[i:]:
        if extra in tsecs:
            errors.append(f"template: section '{extra}' is out of order for {tid}")
        else:
            errors.append(f"template: section '{extra}' is not part of template {tid}")
        break
    return errors


def node_strings(nd):
    c = nd.get("content") if isinstance(nd.get("content"), dict) else {}
    out = []
    for k in ("heading", "subheading"):
        if isinstance(c.get(k), str): out.append((k, c[k]))
    for j, b in enumerate(c.get("body") or [] if isinstance(c.get("body"), list) else []):
        if isinstance(b, str): out.append((f"body[{j}]", b))
    for j, x in enumerate(c.get("ctas") or [] if isinstance(c.get("ctas"), list) else []):
        if isinstance(x, dict) and isinstance(x.get("label"), str): out.append((f"ctas[{j}].label", x["label"]))
    for j, x in enumerate(c.get("items") or [] if isinstance(c.get("items"), list) else []):
        if isinstance(x, dict):
            for kk in ("title", "body"):
                if isinstance(x.get(kk), str): out.append((f"items[{j}].{kk}", x[kk]))
    for j, x in enumerate(c.get("images") or [] if isinstance(c.get("images"), list) else []):
        if isinstance(x, dict) and isinstance(x.get("alt"), str): out.append((f"images[{j}].alt", x["alt"]))
    return out


def host_of(u):
    m = re.match(r"^(?:[a-z]+:)?//([^/?#:]+)", str(u).strip().lower())
    if m: return m.group(1)[4:] if m.group(1).startswith("www.") else m.group(1)
    m = re.match(r"^mailto:[^@]+@([^?]+)", str(u).strip().lower())
    return m.group(1) if m else None


def generation_rules(spec, nodes, secs, errors):
    idn = identity()
    if not idn["loaded"]:
        errors.append("GENERATION_MODE_REGISTRY: schema/source-identity.json is missing: generation mode cannot be checked")
        return
    def hits_text(where, text):
        nt = norm(text)
        raw = unicodedata.normalize("NFKC", str(text))
        for key, rx, cs in idn["brand"]:
            if (rx.search(raw) if cs else rx.search(nt)):
                errors.append(f"GENERATION_MODE_BRAND: {where} names the source brand ({key}): {text[:60]!r}"); break
        for h in idn["hosts"]:
            if re.search(r"(?<![0-9a-z.-])" + re.escape(h) + r"(?![0-9a-z-])", nt):
                errors.append(f"GENERATION_MODE_URL: {where} names a source host '{h}'"); break
        for name, rx in idn["people"]:
            if rx.search(nt):
                errors.append(f"GENERATION_MODE_PERSON: {where} names a real person from the source ('{name}')"); break
        for name, rx in idn["customers"]:
            if rx.search(nt):
                errors.append(f"GENERATION_MODE_CUSTOMER: {where} names a real source customer ('{name}')"); break
        for term, rx in idn["claims"]:
            if rx.search(nt):
                errors.append(f"GENERATION_MODE_CLAIM: {where} repeats a source claim ('{term}')"); break
        w = norm_words(text); n = idn["size"]
        sh = {hashlib.sha256(" ".join(w[i:i + n]).encode("utf8")).hexdigest()[:16] for i in range(len(w) - n + 1)}
        hit = len(sh & idn["shingles"])
        if hit >= COPY_MIN_HITS or (hit and len(w) <= COPY_SHORT_FIELD_WORDS):
            errors.append(f"GENERATION_MODE_COPY: {where} reuses source copy ({hit} source 5-word shingle(s)): {text[:60]!r}")
    def check_url(where, u, kind):
        h = host_of(u)
        if h and any(h == e or h.endswith("." + e) for e in EMBED_HOSTS):
            errors.append(f"GENERATION_MODE_EMBED: {where} {kind} points at a live embed host '{h}'"); return
        if h and not RESERVED_URL.match(str(u).strip().lower()):
            errors.append(f"GENERATION_MODE_URL: {where} {kind} '{u}' is not a placeholder URL (.example / .invalid only)"); return
        if not h and str(u).split("?")[0].split("#")[0].rstrip("/") in idn["routes"]:
            errors.append(f"GENERATION_MODE_URL: {where} {kind} '{u}' is a source entity route (case study / article / memo)")
    b = spec.get("brand") if isinstance(spec.get("brand"), dict) else {}
    if b.get("name"): hits_text("brand.name", b["name"])
    if b.get("domain"): check_url("brand.domain", "https://" + b["domain"], "domain")
    check_url("route", spec.get("route", ""), "route")
    apaths = asset_paths()
    for k, nd in enumerate(nodes):
        where = f"node {k + 1} ({nd.get('type')})"
        for f, text in node_strings(nd):
            hits_text(f"{where}.{f}", text)
        c = nd.get("content") if isinstance(nd.get("content"), dict) else {}
        for j, x in enumerate(c.get("ctas") or [] if isinstance(c.get("ctas"), list) else []):
            if isinstance(x, dict) and x.get("href"): check_url(f"{where}.ctas[{j}]", x["href"], "href")
        for j, img in enumerate(c.get("images") or [] if isinstance(c.get("images"), list) else []):
            if not isinstance(img, dict): continue
            role = img.get("assetRole")
            av = PINNED_AVAILABILITY.get(role)
            if av and av != "generation-safe":
                rule = ROLE_RULE.get(role, "GENERATION_MODE_ASSET")
                errors.append(f"{rule}: {where}.images[{j}] uses role '{role}' ({av}); bind a generation-safe substitute")
            src = img.get("src")
            if src:
                base = os.path.basename(str(src).split("?")[0]).lower()
                if host_of(src): check_url(f"{where}.images[{j}]", src, "src")
                elif base in apaths or re.match(r"^/?(_ext|_apps|_videos|stills)/", str(src)):
                    errors.append(f"GENERATION_MODE_ASSET: {where}.images[{j}].src '{src}' is a real source asset")


def _lum(rgb):
    def ch(v):
        v /= 255.0
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = rgb
    return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b)


def _rgb(v):
    m = re.match(r"rgba?\((\d+),\s*(\d+),\s*(\d+)", str(v).replace(" ", ""))
    return tuple(int(x) for x in m.groups()) if m else None


def token_rules(spec, nodes, errors):
    cat = load("tokens/llm/token-catalog.json")
    pol = load("tokens/llm/token-policy.json")
    man = load("registry.manifest.json")
    allids = {i: k for k, ids in cat["categories"].items() for i in ids}
    theme = spec.get("theme", man.get("defaultTheme"))
    if not isinstance(theme, str):
        return  # the schema already rejects a non-string theme
    if isinstance(spec.get("theme"), str) and spec["theme"] not in man.get("schemaValidatedThemes", []):
        errors.append(f"TOKEN_THEME_UNKNOWN: theme '{spec['theme']}' is not one of {man.get('schemaValidatedThemes')}")
        return
    resolved = set(cat.get("themes", {}).get(theme, []))
    tfile = os.path.join(REPO, "tokens", "themes", f"{theme}.json")
    tvals = json.load(open(tfile, encoding="utf-8"))["resolves"] if os.path.isfile(tfile) else {}
    fonts = set(cat["categories"].get("fontFamily", []))
    for k, nd in enumerate(nodes):
        tk = nd.get("tokens")
        if not isinstance(tk, dict): continue
        where = f"node {k + 1} ({nd.get('type')}).tokens"
        for slot, v in tk.items():
            spec_ = cat["pageSpecSlots"].get(slot)
            if not spec_ or not isinstance(v, str): continue
            if RAW_COLOR.search(v):
                errors.append(f"TOKEN_RAW_COLOR: {where}.{slot} = {v!r} is a raw colour; use a catalog colour token"); continue
            if RAW_LENGTH.match(v.strip()):
                errors.append(f"TOKEN_ARBITRARY_SPACING: {where}.{slot} = {v!r} is a raw length; use a catalog layout token"); continue
            if slot == "fontFamily":
                if v not in fonts: errors.append(f"TOKEN_UNSUPPORTED_FONT: {where}.fontFamily {v!r} is not a supported font ({', '.join(sorted(fonts))})")
                continue
            if v not in allids:
                errors.append(f"TOKEN_UNKNOWN: {where}.{slot} = {v!r} is not a catalog token"); continue
            if allids[v] != spec_["category"] or not v.startswith(spec_["prefix"]):
                errors.append(f"TOKEN_SLOT_MISMATCH: {where}.{slot} = {v!r} is a {allids[v]} token; slot needs {spec_['category']} '{spec_['prefix']}*'"); continue
            if allids[v] in ("color", "typography", "radius", "elevation") and v not in resolved:
                errors.append(f"TOKEN_THEME_UNRESOLVED: {where}.{slot} = {v!r} is not resolved by theme '{theme}'")
        if isinstance(tk.get("text"), str) and isinstance(tk.get("surface"), str):
            a, b = _rgb(tvals.get(tk["text"])), _rgb(tvals.get(tk["surface"]))
            if a and b:
                la, lb = sorted((_lum(a), _lum(b)), reverse=True)
                ratio = (la + 0.05) / (lb + 0.05)
                if ratio < pol.get("minContrastRatio", 3.0):
                    errors.append(f"TOKEN_INVALID_COMBINATION: {where} text {tk['text']} on surface {tk['surface']} has contrast {ratio:.2f}:1 in theme '{theme}' (min {pol.get('minContrastRatio', 3.0)})")


def pin_errors(secs):
    """registry / contract / allowlist vs the pins held in this file"""
    out = []
    roles = load("assets/asset-roles.json")["roles"]
    for r, want in PINNED_AVAILABILITY.items():
        got = roles.get(r, {}).get("availability")
        if got != want: out.append(f"AVAILABILITY_PIN: asset role '{r}' availability is {got!r} in the registry, pinned {want!r}")
    for r in roles:
        if r not in PINNED_AVAILABILITY: out.append(f"AVAILABILITY_PIN: asset role '{r}' has no pinned availability")
    allow = set(load("tokens/llm/component-allowlist.json").get("retrievalIneligible", []))
    for sid, c in secs.items():
        want = PINNED_RETRIEVAL.get(sid, True)
        if RUNTIME_UI_RE.search(sid) and sid not in PINNED_RETRIEVAL:
            out.append(f"RETRIEVAL_PIN: '{sid}' looks like runtime UI but is not in PINNED_RETRIEVAL")
        if c.get("retrievalEligible") is not want:
            out.append(f"RETRIEVAL_PIN: sections/{sid}.json retrievalEligible {c.get('retrievalEligible')!r}, pinned {want}")
        if (sid in allow) != (want is False):
            out.append(f"RETRIEVAL_PIN: allowlist retrievalIneligible disagrees with the pin for '{sid}'")
    return out


def check(spec):
    errors, warnings = [], []
    # ---- 1. schema
    try:
        v = validator()
    except ImportError:
        return ["jsonschema is required (pip install jsonschema)"], []
    for e in sorted(v.iter_errors(spec), key=lambda e: [str(p) for p in e.absolute_path]):
        loc = "/".join(str(p) for p in e.absolute_path) or "(root)"
        errors.append(f"schema: {loc}: {e.message}")
    if not isinstance(spec, dict) or not isinstance(spec.get("nodes"), list):
        return errors or ["schema: nodes must be a list"], warnings
    nodes = [n for n in spec["nodes"] if isinstance(n, dict)]
    types = [n.get("type") for n in nodes]
    secs = contracts()
    templates = {t["id"]: t for t in load("templates/templates.json")["templates"]}

    # ---- 2. declared template cross-reference
    tid = spec.get("template")
    t = templates.get(tid)
    if t:
        errors.extend(match_template(t, types))
    mode = spec.get("mode")

    # ---- 3. compatibility graph (severity-aware)
    cat = {sid: c["category"] for sid, c in secs.items()}
    for rule in load("compatibility/graph.json")["rules"]:
        kind, rid = rule.get("kind"), rule.get("id")
        sink = errors if rule.get("severity") == "error" else warnings
        tag = f"{rid} ({rule.get('severity')})"
        if kind not in RULE_KINDS:
            errors.append(f"graph: rule {rid} has kind '{kind}' that this validator does not implement")
            continue
        if kind == "maxCategoryPerPage":
            n = sum(1 for s in types if cat.get(s) == rule["category"])
            if n > rule["max"] and tid not in rule.get("exceptions", []):
                sink.append(f"{tag}: {n} {rule['category']} sections on one page (max {rule['max']})")
        elif kind == "perPageLimits":
            for s, lim in rule["limits"].items():
                n = types.count(s)
                if n > lim:
                    sink.append(f"{tag}: '{s}' appears {n}x (limit {lim})")
        elif kind == "mustBeFirst":
            for s in rule["sections"]:
                if s in types and types[0] != s:
                    sink.append(f"{tag}: '{s}' must be the first node")
        elif kind == "mustBeLast":
            for s in rule["sections"]:
                if s in types and types[-1] != s:
                    sink.append(f"{tag}: '{s}' must be the last node")
        elif kind == "noConsecutive":
            for a, b in zip(types, types[1:]):
                if a == b and a in rule["sections"]:
                    sink.append(f"{tag}: '{a}' appears twice in a row")
        elif kind == "noAdjacentSameCategory":
            allowed = {tuple(p) for p in rule.get("exceptions", [])}
            for a, b in zip(types, types[1:]):
                if a != b and a in cat and cat.get(a) == cat.get(b) and (a, b) not in allowed:
                    sink.append(f"{tag}: '{a}' and '{b}' are both {cat[a]} and adjacent")
        elif kind == "maxAnimatedSections":
            n = sum(1 for nd in nodes if isinstance(nd.get("motion"), dict) and nd["motion"].get("pattern") not in (None, "none"))
            if n > rule["max"]:
                sink.append(f"{tag}: {n} animated sections (max {rule['max']})")

    # ---- 4-6. per-node content budgets, motion, asset roles
    for k, nd in enumerate(nodes):
        c = secs.get(nd.get("type"))
        if not c:
            continue
        f = c["content"]["fields"]
        content = nd.get("content") if isinstance(nd.get("content"), dict) else {}
        where = f"node {k + 1} ({nd.get('type')})"
        for key in ("heading", "subheading"):
            if key in content and key in f and words(content[key]) > f[key]["maxWords"]:
                errors.append(f"maxWords: {where}.{key} has {words(content[key])} words (max {f[key]['maxWords']})")
        if "body" in content and "body" in f and isinstance(content["body"], list):
            for j, p in enumerate(content["body"]):
                if words(p) > f["body"]["maxWords"]:
                    errors.append(f"maxWords: {where}.body[{j}] has {words(p)} words (max {f['body']['maxWords']})")
        if "ctas" in content and "ctas" in f and isinstance(content["ctas"], list):
            for j, cta in enumerate(content["ctas"]):
                if isinstance(cta, dict) and words(cta.get("label", "")) > f["ctas"]["maxWords"]:
                    errors.append(f"maxWords: {where}.ctas[{j}].label has {words(cta['label'])} words (max {f['ctas']['maxWords']})")
        if "items" in content and "items" in f and isinstance(content["items"], list):
            for j, it in enumerate(content["items"]):
                if not isinstance(it, dict): continue
                if words(it.get("title", "")) > f["items"]["titleMaxWords"]:
                    errors.append(f"maxWords: {where}.items[{j}].title has {words(it['title'])} words (max {f['items']['titleMaxWords']})")
                if "body" in it and words(it["body"]) > f["items"].get("bodyMaxWords", 0):
                    errors.append(f"maxWords: {where}.items[{j}].body has {words(it['body'])} words (max {f['items'].get('bodyMaxWords', 0)})")
        m = nd.get("motion")
        if not isinstance(m, dict) or not m.get("reducedMotionFallback"):
            errors.append(f"motion: {where} has no reducedMotionFallback")
        elif m.get("pattern") not in c["motion"]["allowedPatterns"]:
            errors.append(f"motion: {where} pattern '{m.get('pattern')}' not allowed (allowed: {', '.join(c['motion']['allowedPatterns'])})")
        for j, img in enumerate(content.get("images", []) if isinstance(content.get("images"), list) else []):
            roles = (c.get("generatedAssetRoles", []) if mode == "generation" else f.get("images", {}).get("assetRoles", []) + c.get("generatedAssetRoles", [])) if f.get("images") else []
            if isinstance(img, dict) and "alt" in img and words(img["alt"]) > 16:
                errors.append(f"maxWords: {where}.images[{j}].alt has {words(img['alt'])} words (max 16)")
            if isinstance(img, dict) and roles and img.get("assetRole") not in roles:
                errors.append(f"assetRole: {where}.images[{j}] role '{img.get('assetRole')}' not used by this section (allowed: {', '.join(roles)})")
        # ---- 7. retrieval eligibility (node level must equal the pin)
        if "retrievalEligible" in nd and nd["retrievalEligible"] is not PINNED_RETRIEVAL.get(nd.get("type"), True):
            errors.append(f"RETRIEVAL_PIN: {where} retrievalEligible {nd['retrievalEligible']!r}, pinned {PINNED_RETRIEVAL.get(nd.get('type'), True)}")
    # ---- 8. pins vs registry/contracts/allowlist
    errors.extend(pin_errors(secs))
    # ---- 9. tokens
    token_rules(spec, nodes, errors)
    # ---- 10. generation mode
    if mode == "generation":
        generation_rules(spec, nodes, secs, errors)
    return errors, warnings


def main():
    if len(sys.argv) < 2:
        sys.exit("usage: semantic_validate.py <pagespec.json>")
    errors, warnings = check(json.load(open(sys.argv[1], encoding="utf-8")))
    for w in warnings:
        print("WARN:", w)
    if errors:
        print("INVALID:"); [print("  -", e) for e in errors]; sys.exit(1)
    print("VALID"); sys.exit(0)


if __name__ == "__main__":
    main()
