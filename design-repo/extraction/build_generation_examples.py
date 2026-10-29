#!/usr/bin/env python3
"""build_generation_examples.py: writes one generation-safe example PageSpec per template family to
schema/examples/generated-<family>.pagespec.json (mode "generation").

Usage:  python3 extraction/build_generation_examples.py           (rewrite the examples)
        python3 extraction/build_generation_examples.py --check   (exit 1 if a committed example differs from a fresh build)

Every example is built from its template's real node list and each section contract's own content budget, with a
fictional brand (Quillfern, a scheduling tool for community gardens: nothing to do with the source), original copy,
generation-safe asset roles only (placeholder / generated / operator-supplied), placeholder URLs on the reserved
.example TLD, fictional people and catalog tokens. They must pass schema + semantic validation with zero
GENERATION_MODE_* hits; schema/tests/adversarial_test.py uses them as controls and mutates them with real source
identity / content. Root derived from __file__.
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(REPO, 'schema', 'examples')
FAMILY_TEMPLATE = {'home': 'template.home', 'product': 'template.group-3', 'pricing': 'template.group-2', 'company': 'template.our-story',
                   'conversion': 'template.partner-request', 'legal': 'template.group', 'editorial-index': 'template.blog',
                   'article': 'template.blog-2', 'case-study': 'template.case-studies-2', 'support': 'template.support'}
BRAND = {'name': 'Quillfern', 'domain': 'quillfern.example'}
# original copy, written for this fictional brand (checked against the source shingles by the validator)
HEAD = ['Plot schedules your whole allotment can follow', 'Watering rotas that never double book a bed', 'Seed swaps, tool sheds and harvest days in one calendar',
        'Every gardener sees which beds need help this week', 'Quiet tools for loud tomato seasons', 'Plan the compost turn before the first frost']
BODY = ['Quillfern keeps volunteer gardeners in step: shared bed maps, rota reminders by text and a calendar the shed committee can actually edit.',
        'Members trade shifts in two taps while coordinators watch frost alerts and rain gauges from one tidy board.',
        'Allotment groups move their paper sign up sheets over in an afternoon and keep every plot history in one place.',
        'Volunteers log what they planted, what they picked and which hose leaks, so next spring starts with notes instead of guesses.']
ITEM = [('Bed map', 'Drag plots around a drawing of your site and pin who tends each one.'),
        ('Rota swaps', 'Gardeners hand off a watering shift without a long group chat.'),
        ('Frost watch', 'A gentle nudge goes out when the overnight forecast dips toward zero.'),
        ('Harvest log', 'Weigh the pumpkins, note the variety, compare with last autumn.')]
PEOPLE = ['Wren Calloway', 'Odile Featherstone', 'Basil Orrin']
CTA = [('Book a plot tour', '/tour'), ('See plans', '/plans'), ('Start free', 'https://app.quillfern.example/start')]


def fit(text, n):
    w = text.split()
    return ' '.join(w[:max(1, n)])


def node_for(sid, c, k):
    F = c['content']['fields']
    content = {}
    if 'heading' in F:
        content['heading'] = fit(HEAD[k % len(HEAD)], F['heading']['maxWords'])
    if 'subheading' in F:
        content['subheading'] = fit('Built with garden committees in Leeds, Lyon and Lisbon', F['subheading']['maxWords'])
    if 'body' in F:
        content['body'] = [fit(BODY[(k + j) % len(BODY)], F['body']['maxWords']) for j in range(min(2, F['body']['maxItems']))]
    if 'ctas' in F:
        content['ctas'] = [{'label': fit(l, F['ctas']['maxWords']), 'href': h} for l, h in CTA[:min(2, F['ctas']['maxItems'])]]
    if 'items' in F:
        its = []
        for j in range(min(2, F['items']['maxItems'])):
            t, b = ITEM[(k + j) % len(ITEM)]
            if sid.startswith('proof.'):
                t = PEOPLE[j % len(PEOPLE)] + ', plot coordinator'
            it = {'title': fit(t, F['items']['titleMaxWords'])}
            if F['items'].get('bodyMaxWords'):
                it['body'] = fit(b, F['items']['bodyMaxWords'])
            its.append(it)
        content['items'] = its
    if 'images' in F:
        roles = [r for r in c.get('generatedAssetRoles', [])]
        pref = [r for r in ('avatar.fictional-person', 'logo.placeholder-company', 'screenshot.placeholder', 'illustration.generated', 'brand.placeholder-mark', 'asset.operator-supplied') if r in roles]
        if pref:
            content['images'] = [{'assetRole': pref[0], 'alt': fit('Illustrated raised beds under a striped awning', 16),
                                  'src': f'https://assets.quillfern.example/{sid.split(".", 1)[1]}.png'}]
    for f, spec in F.items():
        if spec.get('required') and f not in content:
            raise SystemExit(f'{sid}: cannot satisfy required field {f}')
    pat = 'none' if 'none' in c['motion']['allowedPatterns'] else c['motion']['allowedPatterns'][0]
    nd = {'type': sid, 'content': content, 'motion': {'pattern': pat, 'reducedMotionFallback': c['motion']['reducedMotionFallback']}}
    if c['category'] in ('HERO', 'CTA'):
        nd['tokens'] = {'surface': 'surface.default', 'text': 'text.primary', 'typography': 'typography.display', 'paddingTop': 'layout.sectionPaddingTop'}
    return nd


def build():
    secs = {}
    for f in sorted(os.listdir(os.path.join(REPO, 'sections'))):
        c = json.load(open(os.path.join(REPO, 'sections', f), encoding='utf-8'))
        secs[c['id']] = c
    templates = {t['id']: t for t in json.load(open(os.path.join(REPO, 'templates', 'templates.json'), encoding='utf-8'))['templates']}
    version = json.load(open(os.path.join(REPO, 'schema', 'pagespec.schema.json')))['properties']['pageSpecVersion']['const']
    out = {}
    for fam, tid in FAMILY_TEMPLATE.items():
        t = templates[tid]
        nodes, k = [], 0
        for tn in t['nodes']:
            n = min(2, tn.get('maxCount', 1)) if tn['repeatable'] else 1
            for _ in range(n):
                nodes.append(node_for(tn['section'], secs[tn['section']], k)); k += 1
        out[fam] = {'pageSpecVersion': version, 'mode': 'generation', 'template': tid, 'route': f'/{fam}-sample', 'theme': 'light', 'brand': BRAND, 'nodes': nodes}
    return out


def render(d):
    return json.dumps(d, indent=2, ensure_ascii=False) + '\n'


if __name__ == '__main__':
    ex = build()
    os.makedirs(OUT, exist_ok=True)
    bad = 0
    for fam, spec in ex.items():
        p = os.path.join(OUT, f'generated-{fam}.pagespec.json')
        if '--check' in sys.argv:
            if not os.path.isfile(p) or open(p, encoding='utf-8').read() != render(spec):
                print(f'STALE: schema/examples/generated-{fam}.pagespec.json'); bad += 1
        else:
            open(p, 'w', encoding='utf-8').write(render(spec))
    known = {f'generated-{f}.pagespec.json' for f in ex}
    extra = [f for f in os.listdir(OUT) if f.startswith('generated-') and f not in known]
    if extra: print('unexpected example files:', extra); bad += 1
    print(f'{len(ex)} generation examples ' + ('checked' if '--check' in sys.argv else 'written'))
    sys.exit(1 if bad else 0)
