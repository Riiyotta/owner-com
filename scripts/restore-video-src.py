#!/usr/bin/env python3
"""Put data-player-src back on the Bunny players the builder emptied.

The builder dropped every .m3u8 attribute (HLS was not mirrored), so the 61 player sections render an empty <video>.
The streams were downloaded on 2026-10-09 (with the user's approval) and remuxed to MP4 under public/_videos/<id>.mp4;
the two signed 2160p Vimeo renditions became public/_videos/vimeo-<id>.mp4. This aligns, per route, the players in the
page's sections (page order) with the players in the route's snapshot and writes the local MP4 path as data-player-src.
Run from the project root:  python3 scripts/restore-video-src.py
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MIRROR = ROOT / "recon/mirror/src"
manifest = json.loads((ROOT / "clone-manifest.json").read_text())

SNAP = re.compile(r"<div\b[^>]*\bdata-bunny-player-init=\"\"[^>]*>")
JSX = re.compile(r"<div\b[^>]*\bdata-bunny-player-init=\"\"[^>]*>")


def local(src):
    m = re.search(r"b-cdn\.net/([0-9a-f-]+)/playlist\.m3u8", src)
    if m:
        return f"/_videos/{m.group(1)}.mp4"
    m = re.search(r"playback/(\d+)/rendition", src)
    if m:
        return f"/_videos/vimeo-{m.group(1)}.mp4"
    return None


def page_sections(page_file):
    src = (ROOT / page_file).read_text()
    order = re.findall(r"<([A-Z]\w*) />", src.split("return (", 1)[-1])
    imports = dict(re.findall(r'import (\w+) from "\.\./sections/(\w+\.jsx)"', src))
    return [imports[n] for n in order if n in imports]


done, todo, mismatched = {}, {}, []
for r in manifest["routes"]:
    f = MIRROR / ("index.html" if r["route"] == "/" else r["route"].strip("/") + "/index.html")
    if not f.exists():
        continue
    snap = [re.search(r'data-player-src="([^"]*)"', m.group(0)) for m in SNAP.finditer(f.read_text(errors="replace"))]
    flat = []
    for s in page_sections(r["page"]):
        n = len(JSX.findall((ROOT / "src/sections" / s).read_text()))
        flat += [(s, i) for i in range(n)]
    if len(flat) != len(snap):
        if flat:
            mismatched.append((r["route"], len(flat), len(snap)))
        continue
    for (s, i), m in zip(flat, snap):
        if s in done and i in done[s]:
            continue
        v = local(m.group(1)) if m else None
        if v:
            todo.setdefault(s, {})[i] = v
            done.setdefault(s, set()).add(i)

n = 0
for s, idx in todo.items():
    p = ROOT / "src/sections" / s
    src = p.read_text()
    out, pos = [], 0
    for i, m in enumerate(JSX.finditer(src)):
        if i in idx and "data-player-src" not in m.group(0):
            at = m.start() + len("<div")
            out.append(src[pos:at] + f' data-player-src="{idx[i]}"')
            pos = at
            n += 1
    out.append(src[pos:])
    p.write_text("".join(out))
print(json.dumps({"players_wired": n, "sections": len(todo), "count_mismatch_routes": mismatched}))
