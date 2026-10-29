#!/usr/bin/env python3
"""build_token_catalog.py: derives tokens/llm/token-catalog.json from the REAL token files (tokens/10-semantic,
tokens/20-component, tokens/30-layout, tokens/themes, tokens/00-foundation typography). Nothing is hand-typed.

Usage:  python3 extraction/build_token_catalog.py           (rewrite the catalog)
        python3 extraction/build_token_catalog.py --check   (exit 1 if the committed catalog differs from a fresh build)

Categories (the keys tokens/llm/token-policy.json rawValueRestrictions must match exactly):
  color / typography / radius / elevation / motion   semantic tokens, grouped by $type
  component                                          <component>.<prop> component tokens
  layout                                             30-layout tokens (section padding, gutter, grid gap, content width)
  fontFamily                                         font families the semantic typography tokens resolve to (the only
                                                     supported fonts for a PageSpec)
pageSpecSlots maps every PageSpec node `tokens` slot to the category (and id prefix) it accepts. themes lists, per
theme file, which catalog tokens it resolves (an unresolved token is an invalid theme/token combination).
Root derived from __file__.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(REPO, 'tokens', 'llm', 'token-catalog.json')
SLOTS = {
    'surface': {'category': 'color', 'prefix': 'surface.'},
    'text': {'category': 'color', 'prefix': 'text.'},
    'accent': {'category': 'color', 'prefix': 'accent.'},
    'border': {'category': 'color', 'prefix': 'border.'},
    'typography': {'category': 'typography', 'prefix': 'typography.'},
    'radius': {'category': 'radius', 'prefix': 'radius.'},
    'elevation': {'category': 'elevation', 'prefix': 'elevation.'},
    'paddingTop': {'category': 'layout', 'prefix': 'layout.sectionPaddingTop'},
    'paddingBottom': {'category': 'layout', 'prefix': 'layout.sectionPaddingBottom'},
    'gap': {'category': 'layout', 'prefix': 'layout.gridGap'},
    'fontFamily': {'category': 'fontFamily', 'prefix': ''},
}


def J(rel):
    with open(os.path.join(REPO, rel), encoding='utf-8') as f:
        return json.load(f)


def tier(d):
    out = {}
    for f in sorted(os.listdir(os.path.join(REPO, d))):
        if f.endswith('.json'):
            out.update(J(f'{d}/{f}').get('tokens', {}))
    return out


def build():
    sem = tier('tokens/10-semantic')
    lay = tier('tokens/30-layout')
    found = tier('tokens/00-foundation')
    cats = {'color': [], 'typography': [], 'radius': [], 'elevation': [], 'motion': []}
    for k, v in sem.items():
        cats.setdefault(v['$type'], []).append(k)
    comp = []
    for f in sorted(os.listdir(os.path.join(REPO, 'tokens/20-component'))):
        d = J(f'tokens/20-component/{f}')
        comp += [f"{d['component']}.{k}" for k in d.get('tokens', {})]
    cats['component'] = comp
    cats['layout'] = list(lay)
    fams = []
    for k in cats['typography']:
        ref = re.match(r'^\{(.+)\}$', sem[k]['$value'].get('fontFamily', ''))
        fam = found.get(ref.group(1), {}).get('$value') if ref else sem[k]['$value'].get('fontFamily')
        if fam and fam not in fams:
            fams.append(fam)
    cats['fontFamily'] = fams
    themes = {}
    for f in sorted(os.listdir(os.path.join(REPO, 'tokens/themes'))):
        t = J(f'tokens/themes/{f}')
        themes[t['id']] = sorted(k for k in t['resolves'])
    return {'version': '0.2.0', 'generatedBy': 'extraction/build_token_catalog.py',
            'note': 'The curated, referenceable view: semantic, component and layout tokens plus the supported font families. Foundation tokens are deliberately not exposed. Derived from the token files; verify_all.py fails if this file differs from a fresh build.',
            'categories': cats, 'pageSpecSlots': SLOTS, 'themes': themes}


def render(c):
    return json.dumps(c, indent=2, ensure_ascii=False) + '\n'


if __name__ == '__main__':
    text = render(build())
    if '--check' in sys.argv:
        cur = open(OUT, encoding='utf-8').read() if os.path.isfile(OUT) else ''
        print('token-catalog.json matches a fresh build' if cur == text else 'token-catalog.json is STALE vs the token files')
        sys.exit(0 if cur == text else 1)
    open(OUT, 'w', encoding='utf-8').write(text)
    print('wrote tokens/llm/token-catalog.json')
