"""Optimize theme icons to WebP for fast mobile/desktop loading."""
from __future__ import annotations

import io
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images"
MAX_WIDTH = 400
TARGET_KB = 50


def to_webp_bytes(im: Image.Image, quality: int) -> bytes:
    buf = io.BytesIO()
    im.save(buf, format="WEBP", quality=quality, method=6)
    return buf.getvalue()


def best_quality(im: Image.Image, max_kb: int) -> tuple[int, bytes]:
    lo, hi = 78, 95
    best_q = 78
    best_data = to_webp_bytes(im, best_q)

    while lo <= hi:
        q = (lo + hi) // 2
        data = to_webp_bytes(im, q)
        if len(data) / 1024 <= max_kb:
            best_q = q
            best_data = data
            lo = q + 1
        else:
            hi = q - 1

    return best_q, best_data


def optimize_icon(src: Path) -> dict:
    im = Image.open(src)
    im.load()
    if im.mode == "P":
        im = im.convert("RGBA")
    elif im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")

    if im.width > MAX_WIDTH:
        ratio = MAX_WIDTH / im.width
        im = im.resize((MAX_WIDTH, round(im.height * ratio)), Image.Resampling.LANCZOS)

    q, data = best_quality(im, TARGET_KB)
    dst = src.with_suffix(".webp")
    dst.write_bytes(data)

    return {
        "file": src.name,
        "webp": dst.name,
        "size": f"{im.width}x{im.height}",
        "before_kb": round(src.stat().st_size / 1024, 1),
        "after_kb": round(len(data) / 1024, 1),
        "quality": q,
        "width": im.width,
        "height": im.height,
    }


def main() -> None:
    icons = sorted(IMAGES.glob("icon*.png"))
    results = [optimize_icon(p) for p in icons]

    print(f"{'file':30s} {'dims':12s} {'before':>8s} {'after':>8s} {'q':>3s}")
    print("-" * 68)
    for r in results:
        print(
            f"{r['file']:30s} {r['size']:12s} {r['before_kb']:7.1f}K {r['after_kb']:7.1f}K {r['quality']:3d}"
        )


if __name__ == "__main__":
    main()
