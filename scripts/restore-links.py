#!/usr/bin/env python3
"""Restore the href on anchors the builder stripped.

website-builder removed the href from every link that pointed off-site or at a same-domain page it had not captured
(1601 links, including the nav's "Get a free demo" CTA). The clone process keeps external links outbound and never
silently disables links, so this puts the original href back, read from the rendered-DOM snapshot each section came from.

Matching: for every route, the anchors of its sections (page order) are aligned with the anchors in the route's snapshot
(recon/mirror/src/<route>/index.html) on their class list + visible text, using difflib. An href is only restored when
the aligned snapshot anchor has the same class list. Same-domain targets are rewritten:
  - 301/302 on the live site to a captured route -> that route (internal)
  - captured route -> the route (internal; the builder already kept these, so this is rare)
  - anything else on www.owner.com -> absolute https://www.owner.com/... (outbound, like any other external page)
Run from the project root:  python3 scripts/restore-links.py [--dry]
"""
import difflib, html, json, re, sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MIRROR = ROOT / "recon/mirror/src"
DRY = "--dry" in sys.argv
ORIGIN = "https://www.owner.com"

# Live status checked 2026-10-09 with curl (see QA_REPORT.md): same-domain links whose target redirects to a captured route.
REDIRECTS = json.loads((ROOT / "src/redirects.json").read_text())

manifest = json.loads((ROOT / "clone-manifest.json").read_text())
captured = set(re.findall(r'path: "([^"]+)"', (ROOT / "src/routes.js").read_text()))


class Anchors(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.stack, self.in_body = [], [], False

    def handle_starttag(self, tag, attrs):
        if tag == "body":
            self.in_body = True
        if not self.in_body:
            return
        if tag == "a":
            self.out.append({"attrs": dict(attrs), "text": ""})
            self.stack.append(len(self.out) - 1)

    def handle_endtag(self, tag):
        if tag == "a" and self.stack:
            self.stack.pop()

    def handle_data(self, data):
        for i in self.stack:
            self.out[i]["text"] += data


def snapshot_anchors(route):
    f = MIRROR / ("index.html" if route == "/" else route.strip("/") + "/index.html")
    if not f.exists():
        return None
    p = Anchors()
    p.feed(f.read_text(errors="replace"))
    return p.out


TAG = re.compile(r"<(a|A)((?:\s+[^\s=>/]+(?:=(?:\"[^\"]*\"|\{(?:[^{}]|\{[^{}]*\})*\}))?)*)\s*(/?)>")
CLS = re.compile(r'className=(?:"([^"]*)"|\{"([^"]*)"\})')
HREF = re.compile(r"\shref=")


def jsx_anchors(src):
    out = []
    for m in TAG.finditer(src):
        attrs = m.group(2)
        c = CLS.search(attrs)
        cls = (c.group(1) or c.group(2)) if c else ""
        # visible text: everything up to the matching close tag, tags stripped (good enough for alignment)
        end = src.find("</" + m.group(1) + ">", m.end())
        inner = src[m.end(): end if end > 0 else m.end()]
        text = re.sub(r"<[^>]+>|\{\"|\"\}", " ", inner)
        out.append({"start": m.start(), "end": m.end(), "attrs": attrs, "cls": cls,
                    "has_href": bool(HREF.search(attrs)), "text": norm(text)})
    return out


norm = lambda s: " ".join(html.unescape(s).split())[:60]
ckey = lambda c: " ".join(sorted(c.split()))


def target(href):
    """original href -> what the clone should link to, or None to leave it alone."""
    if not href or href.startswith(("#", "javascript:")):
        return None
    if href.startswith(("mailto:", "tel:", "sms:")):
        return href
    if href.startswith("//"):
        href = "https:" + href
    m = re.match(r"^(?:https?://(?:www\.)?owner\.com)?(/[^?#]*)?([?#].*)?$", href)
    if not m or not (href.startswith("/") or re.match(r"^https?://(?:www\.)?owner\.com(?:[/?#]|$)", href)):
        return href  # another site: stays outbound
    path = (m.group(1) or "/").rstrip("/") or "/"
    rest = m.group(2) or ""
    if path.startswith("/_ext/"):  # the mirror's spelling of an off-site URL: /_ext/<host>/<path>
        return "https://" + (m.group(1) or "")[len("/_ext/"):] + rest
    if path in REDIRECTS:
        return REDIRECTS[path] + rest
    if path in captured:
        return path + rest
    return ORIGIN + path + rest


def page_sections(page_file):
    src = (ROOT / page_file).read_text()
    order = re.findall(r"<([A-Z]\w*) />", src.split("return (", 1)[-1])
    imports = dict(re.findall(r'import (\w+) from "\.\./sections/(\w+\.jsx)"', src))
    return [imports[n] for n in order if n in imports]


def main():
    edits = {}  # section file -> {jsx anchor index: href}
    stats = {"stripped": 0, "restored": 0, "unmatched": 0}
    seen_components = set()
    for r in manifest["routes"]:
        snap = snapshot_anchors(r["route"])
        if snap is None:
            continue
        secs = page_sections(r["page"])
        flat = []
        for s in secs:
            src = (ROOT / "src/sections" / s).read_text()
            for i, a in enumerate(jsx_anchors(src)):
                flat.append((s, i, a))
        A = [ckey(a["cls"]) + "|" + a["text"] for _, _, a in flat]
        B = [ckey(b["attrs"].get("class", "")) + "|" + norm(b["text"]) for b in snap]
        sm = difflib.SequenceMatcher(None, A, B, autojunk=False)
        mapping = {}
        for tag, i1, i2, j1, j2 in sm.get_opcodes():
            if tag == "equal" or (tag == "replace" and i2 - i1 == j2 - j1):
                for k in range(i2 - i1):
                    mapping[i1 + k] = j1 + k
        for k, (s, i, a) in enumerate(flat):
            if a["has_href"] or (s in seen_components and i in edits.get(s, {})):
                continue
            if k not in mapping:
                continue
            b = snap[mapping[k]]
            if ckey(b["attrs"].get("class", "")) != ckey(a["cls"]):
                continue
            t = target(b["attrs"].get("href"))
            if t:
                edits.setdefault(s, {})[i] = (t, b["attrs"].get("target"), b["attrs"].get("rel"))
        seen_components.update(secs)

    for s in sorted(p.name for p in (ROOT / "src/sections").glob("*.jsx")):
        src = (ROOT / "src/sections" / s).read_text()
        anchors = jsx_anchors(src)
        todo = edits.get(s, {})
        stats["stripped"] += sum(1 for a in anchors if not a["has_href"])
        out, pos = [], 0
        for i, a in enumerate(anchors):
            if a["has_href"] or i not in todo:
                if not a["has_href"]:
                    stats["unmatched"] += 1
                continue
            href, tgt, rel = todo[i]
            add = f' href={json.dumps(href)}'
            external = href.startswith("http")
            if external and "target=" not in a["attrs"] and tgt:
                add += f' target={json.dumps(tgt)}'
            if external and "rel=" not in a["attrs"]:
                add += ' rel="noopener noreferrer"' if (tgt == "_blank" or 'target="_blank"' in a["attrs"]) else (f' rel={json.dumps(rel)}' if rel else "")
            insert_at = a["start"] + 2  # after "<a"
            out.append(src[pos:insert_at] + add)
            pos = insert_at
            stats["restored"] += 1
        out.append(src[pos:])
        new = "".join(out)
        if new != src and not DRY:
            (ROOT / "src/sections" / s).write_text(new)
    print(json.dumps(stats))


if __name__ == "__main__":
    main()
