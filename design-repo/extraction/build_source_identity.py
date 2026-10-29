#!/usr/bin/env python3
"""build_source_identity.py: derives schema/source-identity.json from the REAL source of the owner.com clone.

Usage:  python3 extraction/build_source_identity.py            (rewrite schema/source-identity.json)
        python3 extraction/build_source_identity.py --check    (exit 1 if the committed registry differs from a fresh build)

Needs the sibling clone project (the parent folder of design-repo/ with src/ and a package.json named
"owner-com-clone"). semantic_validate.py uses the registry to reject owner.com identity / content in mode "generation":

  brand      Owner / owner.com name variants and product names                                    GENERATION_MODE_BRAND
  hosts      every host name linked from the source (owner.com subdomains, g2.com, youtube.com ...) GENERATION_MODE_URL / _EMBED
  people     real named people (testimonial / review / quote authors, leadership, board)          GENERATION_MODE_PERSON
  customers  real restaurant customers (case-study subjects, "Owner at <Restaurant>")             GENERATION_MODE_CUSTOMER
  claims     rating / award marks and numeric marketing claims found in the source               GENERATION_MODE_CLAIM
  copy       sha256-16 hashes of every 5-word shingle of the source copy                          GENERATION_MODE_COPY
  routes     entity-specific source routes (case studies, blog posts, memo, resources)            GENERATION_MODE_URL

Every pattern keeps up to 3 file:line evidence refs. Strings are normalised before both extraction and matching
(NFKC, zero-width removal, curly quotes -> straight, unicode dashes -> '-', lower case, whitespace collapsed; shingles
also drop punctuation). Detection is string-based: it catches verbatim and lightly reformatted reuse, not paraphrase.
No human reviewed these patterns. Root derived from __file__; no machine path lives in this file.
"""
import hashlib
import json
import os
import re
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(REPO, 'schema', 'source-identity.json')
PROJECT_NAME = 'owner-com-clone'
ZW = re.compile('[​-‏⁠-⁤﻿­]')
DASH = re.compile('[‐-―−]')
QUOTES = {'‘': "'", '’': "'", '‚': "'", '‛': "'", '“': '"', '”': '"', '„': '"', '«': '"', '»': '"'}
SHINGLE = 5


def norm(s):
    s = unicodedata.normalize('NFKC', s)
    s = ZW.sub('', s)
    for a, b in QUOTES.items():
        s = s.replace(a, b)
    s = DASH.sub('-', s)
    return re.sub(r'\s+', ' ', s).strip().lower()


def words(s):
    return re.findall(r"[0-9a-zÀ-ɏ]+(?:'[a-z]+)?", norm(s))


def shingles(s, n=SHINGLE):
    w = words(s)
    return {' '.join(w[i:i + n]) for i in range(len(w) - n + 1)}


def h16(s):
    return hashlib.sha256(s.encode('utf8')).hexdigest()[:16]


def project_root():
    proj = os.path.dirname(REPO)
    try:
        if os.path.isdir(os.path.join(proj, 'src')) and json.load(open(os.path.join(proj, 'package.json'))).get('name') == PROJECT_NAME:
            return proj
    except Exception:
        pass
    return None


def source_files(proj):
    out = []
    for base in ('src/sections', 'src/pages'):
        for f in sorted(os.listdir(os.path.join(proj, base))):
            if f.endswith('.jsx'):
                out.append(f'{base}/{f}')
    for f in ('src/routes.js', 'CLONE_SPEC.md', 'ASSET_MANIFEST.md'):
        if os.path.isfile(os.path.join(proj, f)):
            out.append(f)
    return sorted(out)


# JSX text nodes, {"..."} string literals, and human-readable attributes (alt / title / aria-label / placeholder)
TEXT_RE = re.compile(r'>([^<>{}\n]{3,})<|\{"((?:[^"\\\n]|\\.){3,})"\}|\b(?:alt|title|aria-label|placeholder)="([^"\n]{3,})"')
MD_RE = re.compile(r'"([^"\n]{12,})"|“([^”\n]{12,})”')


def texts_with_lines(text, is_md):
    rx = MD_RE if is_md else TEXT_RE
    for i, line in enumerate(text.split('\n'), 1):
        for m in rx.finditer(line):
            s = next(g for g in m.groups() if g is not None)
            if not is_md:
                s = s.replace('\\"', '"')
            yield i, s.strip()


def add(d, key, ref, display=None):
    e = d.setdefault(key, {'display': display or key, 'evidence': []})
    if ref not in e['evidence'] and len(e['evidence']) < 3:
        e['evidence'].append(ref)


NAME_WORD = r"[A-Z][a-zà-ÿ'’-]+"
PERSON_RE = re.compile(rf"^{NAME_WORD}(?: (?:[A-Z]\.|{NAME_WORD})){{1,2}}$")
PERSON_CTX = re.compile(r'name|author|person|leader|board|team|investor|quote|testimonial|review|avatar|founder', re.I)
NOT_PERSON = re.compile(r'restaurant|pizza|owner|online|order|menu|review|google|delivery|marketing|website|search|sales|program|growth|'
                        r'catering|guide|blog|case|stud|apps?\b|loyalty|reward|support|team|story|press|career|lead|board|direct|learn|more|'
                        r'read|see|get|book|demo|watch|join|meet|our|the|your|all|new|best|top|free|privacy|terms|policy|cookie', re.I)
HOST_RE = re.compile(r'https?://([a-z0-9-]+(?:\.[a-z0-9-]+)+)', re.I)
CLAIM_TERMS = ['#1 rated', '#1-rated', 'number one rated', 'g2 leader', 'g2 high performer', 'capterra', 'trustpilot', 'g2.com',
               'thousands of restaurants', '1,000+ reviews', '4.8 stars', 'series d']
NUM_CLAIM_RE = re.compile(r"(?:[+$]?\d[\d,.]*\s?(?:%|x\b|k\+|m\+|\+|k/month|/month)|\$\d[\d,.]*\s?[kmb]?)\s+[a-z']{3,}(?: [a-z']{3,})?")
BRAND_VARIANTS = [
    ('owner.com', r'\bowner\s*\.\s*com\b'),
    ('ownercom', r'\bownercom\b'),
    ('owner product name', r'\bowner\s+(?:pos|app|ai|flex|flat|kitchen tablet|websites?|stack|grader|mobile app|marketing platform|platform)\b'),
    ('restaurant grader', r'\brestaurant grader\b'),
    ('owner cta', r'\b(?:get|try|download|choose|switch to|join|book|start with)\s+owner\b(?!s\b|-)'),
]
# case-sensitive: "Owner" used as a proper noun after a lower-case word ("with Owner", "use Owner"); title-case headings
# ("Every Owner") and the plural common noun ("restaurant owners") do not match.
BRAND_PROPER = re.compile(r"\b[a-z][a-z']*\s+Owner\b(?!['’]?s\b|-)")
CUSTOMER_AT = re.compile(rf"\b(?:[Oo]wners?|[Ff]ounders?|[Cc]o-[Ff]ounders?|CEO|GM|[Mm]anagers?|[Cc]hef|[Pp]artners?|[Oo]perators?)\s+(?:at|of)\s+((?:{NAME_WORD}|&|[A-Z]{{2,}}|\d+)(?:\s+(?:{NAME_WORD}|&|[A-Z]{{2,}}|'s|of|the|\d+)){{0,4}})")
CUSTOMER_FROM = re.compile(rf"\bHow\s+(?:{NAME_WORD}(?:\s+(?:&|and)\s+{NAME_WORD})?)\s+(?:from|of|at)\s+((?:{NAME_WORD}|&|\d+)(?:\s+(?:{NAME_WORD}|&|'s|\d+)){{0,4}})\s+(?:grew|increased|saved|drove|doubled|tripled|boosted|went|made|got|built|added|hit|reached)")
CUSTOMER_HOW = re.compile(rf"\bHow\s+((?:{NAME_WORD}|\d+)(?:\s+(?:{NAME_WORD}|'s|\d+)){{0,4}})\s+(?:grew|increased|saved|drove|doubled|tripled|boosted)")
GENERIC_HOSTS = ('w3.org', 'schema.org', 'example', 'invalid')


def build(proj):
    files = source_files(proj)
    brand, hosts, people, customers, claims, num_claims = {}, {}, {}, {}, {}, {}
    copy = set()
    lower_vocab = set()  # words the source itself uses in lower case = common words, never a name on their own
    digest = hashlib.sha256()
    for rel in files:
        raw = open(os.path.join(proj, rel), encoding='utf8', errors='ignore').read()
        digest.update(rel.encode() + b'\0' + raw.encode('utf8', 'ignore') + b'\0')
        lines = raw.split('\n')
        is_md = rel.endswith('.md')
        for i, line in enumerate(lines, 1):
            nl = norm(line)
            ref = f'{rel}:{i}'
            for key, pat in BRAND_VARIANTS:
                if re.search(pat, nl):
                    add(brand, key, ref)
            if BRAND_PROPER.search(unicodedata.normalize('NFKC', line)):
                add(brand, 'Owner (proper noun)', ref)
            for m in HOST_RE.finditer(line):
                h = m.group(1).lower().strip('.')
                if h.startswith('www.'):
                    h = h[4:]
                if not any(g in h for g in GENERIC_HOSTS) and not re.match(r'^\d', h):
                    add(hosts, h, ref)
            for t in CLAIM_TERMS:
                if t in nl:
                    add(claims, t, ref)
        for i, s in texts_with_lines(raw, is_md):
            if re.search(r'https?://|\.(?:png|svg|webp|jpe?g|avif|mp4|css|js)\b', s):
                continue
            ref = f'{rel}:{i}'
            lower_vocab.update(re.findall(r"\b[a-z][a-z'\u2019]+\b", unicodedata.normalize('NFKC', s)))
            ctx = '\n'.join(lines[max(0, i - 5):i + 1])
            ns = unicodedata.normalize('NFKC', s).strip(' "\'-—')
            if not is_md and PERSON_RE.match(ns) and PERSON_CTX.search(ctx) and not NOT_PERSON.search(ns):
                add(people, norm(ns), ref, ns)
            for rx in (CUSTOMER_AT, CUSTOMER_FROM, CUSTOMER_HOW):
                for m in rx.finditer(ns):
                    nm = re.sub(r"\s+(?:&|'s|of|the|\d+)$", '', m.group(1).strip())
                    if len(nm) >= 4 and not re.search(r'owner|restaurant$|^the$|^your\b|^our\b', nm, re.I):
                        add(customers, norm(nm), ref, nm)
            w = words(s)
            if len(w) < 3:
                continue
            for m in NUM_CLAIM_RE.finditer(norm(s)):
                add(num_claims, m.group(0), ref)
            if len(w) >= SHINGLE:
                copy |= {h16(x) for x in shingles(s)}
    def common(name):
        ws = [w for w in re.findall(r"[a-z\u00e0-\u00ff'\u2019]+", name.lower()) if len(w) > 1]
        return bool(ws) and all(w in lower_vocab for w in ws)
    for k in list(people):
        if k in customers or common(people[k]['display']) or re.search(r'\b(?:Chief|Sr|Officer|Principal|Manager|Engineer|Caption|Bureau|Law|Responsibilities)\b', people[k]['display']):
            del people[k]
    for k in list(customers):
        d = customers[k]['display']
        if re.search(r"[-\u2019']s?$", d) or (' ' not in d and (common(d) or len(d) < 6)) or common(d) and len(d.split()) < 3:
            del customers[k]
    hosts = {h: v for h, v in hosts.items() if '.' in h}
    # entity-specific routes: a generated page must not link to (or be served at) a source case study / article / memo
    route_src = open(os.path.join(proj, 'src/routes.js'), encoding='utf8').read().split('\n')
    routes = {}
    for i, line in enumerate(route_src, 1):
        m = re.search(r'path: "(/[^"]+)"', line)
        if m and (m.group(1).count('/') >= 2 or m.group(1) in ('/d',)):
            routes[m.group(1)] = [f'src/routes.js:{i}']
    reg = {
        '$description': 'GENERATED by extraction/build_source_identity.py from the real source of the owner.com clone (src/sections, src/pages, src/routes.js, CLONE_SPEC.md, ASSET_MANIFEST.md). Used by schema/semantic_validate.py GENERATION_MODE_* rules. Do not hand-edit: verify_all.py re-builds it from the source tree (when the clone is present) and fails on any difference. No human reviewed these patterns; detection is string-based (verbatim or lightly reformatted reuse, not paraphrase).',
        'generatedBy': 'extraction/build_source_identity.py',
        'normalization': ['NFKC', 'zero-width / soft-hyphen removal', 'curly quotes -> straight', 'unicode dashes -> -', 'lower case', 'whitespace collapsed', 'shingles: words of [0-9a-z, Latin-1 letters] only'],
        'sourceFiles': files,
        'sourceDigest': 'sha256:' + digest.hexdigest(),
        'brand': [{'key': k, 'pattern': p, 'evidence': brand[k]['evidence']} for k, p in BRAND_VARIANTS if k in brand]
                 + ([{'key': 'Owner (proper noun)', 'pattern': BRAND_PROPER.pattern, 'caseSensitive': True, 'evidence': brand['Owner (proper noun)']['evidence']}] if 'Owner (proper noun)' in brand else []),
        'hosts': [{'host': h, 'evidence': v['evidence']} for h, v in sorted(hosts.items())],
        'people': [{'name': v['display'], 'evidence': v['evidence']} for k, v in sorted(people.items())],
        'customers': [{'name': v['display'], 'evidence': v['evidence']} for k, v in sorted(customers.items())],
        'claims': [{'term': k, 'evidence': v['evidence']} for k, v in sorted(claims.items())],
        'numericClaims': [{'phrase': k, 'evidence': v['evidence']} for k, v in sorted(num_claims.items())],
        'routes': [{'route': r, 'evidence': e} for r, e in sorted(routes.items())],
        'copyShingles': {'size': SHINGLE, 'hash': 'sha256 hex, first 16 chars, of the normalised space-joined shingle', 'count': len(copy), 'hashes': sorted(copy)},
    }
    return reg


def render(reg):
    return json.dumps(reg, indent=1, ensure_ascii=False) + '\n'


def main(argv):
    proj = project_root()
    if proj is None:
        print(f'build_source_identity.py: no sibling clone (parent with src/ and package.json "{PROJECT_NAME}"); nothing to build', file=sys.stderr)
        return 2
    text = render(build(proj))
    if '--check' in argv:
        cur = open(OUT, encoding='utf8').read() if os.path.isfile(OUT) else ''
        if cur != text:
            print('schema/source-identity.json is STALE: it differs from a fresh build from the source tree')
            return 1
        print('schema/source-identity.json matches a fresh build')
        return 0
    open(OUT, 'w', encoding='utf8').write(text)
    reg = json.loads(text)
    print(f'wrote schema/source-identity.json: brand {len(reg["brand"])}, hosts {len(reg["hosts"])}, people {len(reg["people"])}, customers {len(reg["customers"])}, '
          f'claims {len(reg["claims"])}, numericClaims {len(reg["numericClaims"])}, routes {len(reg["routes"])}, copy shingles {reg["copyShingles"]["count"]}')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
