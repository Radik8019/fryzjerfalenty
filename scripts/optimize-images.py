"""Optimize PNG photos to WebP — same dimensions, max quality under target KB."""
from __future__ import annotations

import io
import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images"
TARGET_KB = 200
HERO_TARGET_KB = 220  # hero is larger display, slightly higher cap

JOBS: list[tuple[Path, int]] = [
    (IMAGES / "gallery", TARGET_KB),
    (IMAGES / "hero-atelier-cut.png", HERO_TARGET_KB),
    (IMAGES / "about-atelier.png", TARGET_KB),
]


def to_webp_bytes(im: Image.Image, quality: int) -> bytes:
    buf = io.BytesIO()
    im.save(buf, format="WEBP", quality=quality, method=6)
    return buf.getvalue()


def best_quality(im: Image.Image, max_kb: int) -> tuple[int, bytes]:
    lo, hi = 72, 92
    best_q = 72
    best_data = to_webp_bytes(im, best_q)

    while lo <= hi:
        q = (lo + hi) // 2
        data = to_webp_bytes(im, q)
        size_kb = len(data) / 1024
        if size_kb <= max_kb:
            best_q = q
            best_data = data
            lo = q + 1
        else:
            hi = q - 1

    if len(best_data) / 1024 > max_kb:
        for q in range(71, 59, -1):
            data = to_webp_bytes(im, q)
            if len(data) / 1024 <= max_kb:
                return q, data
        return 60, to_webp_bytes(im, 60)

    return best_q, best_data


def optimize_file(src: Path, max_kb: int) -> dict:
    im = Image.open(src)
    im.load()
    if im.mode == "P":
        im = im.convert("RGBA")
    elif im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGB")

    q, data = best_quality(im, max_kb)
    dst = src.with_suffix(".webp")
    dst.write_bytes(data)

    return {
        "file": src.name,
        "size": f"{im.size[0]}x{im.size[1]}",
        "before_kb": round(src.stat().st_size / 1024, 1),
        "after_kb": round(len(data) / 1024, 1),
        "quality": q,
        "webp": dst.name,
    }


def main() -> None:
    results: list[dict] = []

    gallery_dir = IMAGES / "gallery"
    for png in sorted(gallery_dir.glob("*.png")):
        results.append(optimize_file(png, TARGET_KB))

    for rel in ("hero-atelier-cut.png", "about-atelier.png"):
        src = IMAGES / rel
        cap = HERO_TARGET_KB if "hero" in rel else TARGET_KB
        if src.exists():
            results.append(optimize_file(src, cap))

    print(f"{'file':40s} {'dims':12s} {'before':>8s} {'after':>8s} {'q':>3s}")
    print("-" * 78)
    total_before = 0.0
    total_after = 0.0
    over = 0
    for r in results:
        total_before += r["before_kb"]
        total_after += r["after_kb"]
        flag = "!" if r["after_kb"] > TARGET_KB else ""
        if r["after_kb"] > TARGET_KB:
            over += 1
        print(
            f"{r['file']:40s} {r['size']:12s} {r['before_kb']:7.1f}K {r['after_kb']:7.1f}K {r['quality']:3d}{flag}"
        )
    print("-" * 78)
    print(f"Total: {total_before:.1f} KB -> {total_after:.1f} KB ({over} over {TARGET_KB}KB)")


if __name__ == "__main__":
    main()
