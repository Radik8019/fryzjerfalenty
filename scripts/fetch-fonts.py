import re
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parents[1]
out = root / "public" / "fonts"
out.mkdir(parents=True, exist_ok=True)

css_url = (
    "https://fonts.googleapis.com/css2"
    "?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500"
    "&family=Outfit:wght@300;400;500&display=swap"
)
req = urllib.request.Request(
    css_url,
    headers={
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
        )
    },
)
css = urllib.request.urlopen(req, timeout=30).read().decode("utf-8")
parts = re.split(r"(?=/\* )", css)
kept: list[str] = []
downloaded: dict[str, int] = {}


def file_name(family: str, italic: bool, weight: str, subset: str) -> str:
    fam = "cormorant" if "Cormorant" in family else "outfit"
    style = "italic" if italic else "normal"
    return f"{fam}-{weight}-{style}-{subset}.woff2"


for part in parts:
    if "@font-face" not in part:
        continue
    comment = part.strip().split("\n", 1)[0]
    if "latin-ext" in comment:
        subset = "latin-ext"
    elif "/* latin" in comment:
        subset = "latin"
    else:
        continue
    family = re.search(r"font-family: '([^']+)'", part).group(1)
    italic = "italic" in re.search(r"font-style: ([^;]+)", part).group(1)
    weight = re.search(r"font-weight: ([^;]+)", part).group(1)
    url = re.search(r"url\((https://[^)]+)\)", part).group(1)
    fname = file_name(family, italic, weight, subset)
    dest = out / fname
    if fname not in downloaded:
        urllib.request.urlretrieve(url, dest)
        downloaded[fname] = dest.stat().st_size
        print("got", fname, dest.stat().st_size)
    kept.append(part.strip().replace(url, f"/fonts/{fname}"))

css_path = root / "src" / "styles" / "fonts.css"
css_path.write_text("\n\n".join(kept) + "\n", encoding="utf-8")
print("faces", len(kept), "files", len(downloaded), "bytes", sum(downloaded.values()))
