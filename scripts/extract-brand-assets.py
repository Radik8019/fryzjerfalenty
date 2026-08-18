"""Extract brand assets from mockup reference images."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    r"C:\Users\PC\.cursor\projects\d-Strona-internetowa-Fryzjer-Falenty\assets"
)
OUT = ROOT / "public" / "brand"

MOCKUP_DARK = ASSETS / (
    "c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_2975855d83a2dd14a6e3a02229cec2a6_images_"
    "Gemini_Generated_Image_pox9wypox9wypox91-307ef41e-606e-4b45-92d9-a7ddf9e81332.png"
)
MOCKUP_LIGHT = ASSETS / (
    "c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_2975855d83a2dd14a6e3a02229cec2a6_images_"
    "Gemini_Generated_Image_pox9wypox9wypox92-f079d71c-7238-4995-8d8f-e97b0199e4c4.png"
)

FIGURE_BOX = (0.38, 0.10, 1.0, 0.70)


def crop_ratio(img: Image.Image, box: tuple[float, float, float, float]) -> Image.Image:
    w, h = img.size
    left = int(box[0] * w)
    top = int(box[1] * h)
    right = int(box[2] * w)
    bottom = int(box[3] * h)
    return img.crop((left, top, right, bottom))


def make_stage(img: Image.Image, is_dark: bool) -> Image.Image:
    w, h = img.size
    strip = img.crop((int(w * 0.28), int(h * 0.05), w, int(h * 0.58)))
    target_w, target_h = 1920, 1200
    stage = strip.resize((target_w, target_h), Image.Resampling.LANCZOS)

    if is_dark:
        stage = ImageEnhance.Brightness(stage).enhance(0.88)
        stage = ImageEnhance.Contrast(stage).enhance(1.06)

    return stage


def process(mockup_path: Path, prefix: str, is_dark: bool) -> None:
    img = Image.open(mockup_path).convert("RGBA")
    figure = crop_ratio(img, FIGURE_BOX)
    # Upscale figure for retina desktop (source mockups are ~700px wide)
    fig_w = 900
    fig_h = int(figure.height * (fig_w / figure.width))
    figure = figure.resize((fig_w, fig_h), Image.Resampling.LANCZOS)
    stage = make_stage(img, is_dark)

    OUT.mkdir(parents=True, exist_ok=True)
    figure.save(OUT / f"figure-{prefix}.png", optimize=True)
    stage.save(OUT / f"stage-{prefix}.png", optimize=True)
    print(f"Saved figure-{prefix}.png ({figure.size})")
    print(f"Saved stage-{prefix}.png ({stage.size})")


def main() -> None:
    if not MOCKUP_DARK.exists():
        raise FileNotFoundError(MOCKUP_DARK)
    if not MOCKUP_LIGHT.exists():
        raise FileNotFoundError(MOCKUP_LIGHT)

    process(MOCKUP_DARK, "dark", is_dark=True)
    process(MOCKUP_LIGHT, "light", is_dark=False)
    print("Done.")


if __name__ == "__main__":
    main()
