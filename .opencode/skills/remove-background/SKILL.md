---
name: remove-background
description: Use ONLY when the user asks to remove the background from a PNG image and the background is a known uniform color (typically near-black, white, or a flat brand color) — e.g. "remove o fundo", "tornar transparente", "transparent PNG", "PNG sem fundo", "logo sem fundo", "remove background". Triggers on logos, mascots, and product photos delivered as opaque RGB that need an alpha channel. Do NOT use for AI-based subject extraction (hair, fur, complex edges) — use an external API or rembg for that. This skill is the deterministic, color-key approach when the background color is known and uniform.
---

# Remove background from a PNG

For projects where logos/images arrive as opaque RGB PNGs over a near-black
(or other uniform) background and need to become transparent — most commonly
logos destined for a dark-themed site, favicons, or Open Graph cards.

## 0. Inspect first — never guess the background color

Always sample the four corners and the most-frequent color before picking
thresholds. Backgrounds are often NOT `#000000` and not the brand's main
color — they can be a slightly tinted near-black from JPEG noise, scanner
glow, or export settings.

```python
from PIL import Image
from collections import Counter

img = Image.open(path).convert("RGB")
w, h = img.size
corners = [img.getpixel((0, 0)), img.getpixel((w - 1, 0)),
           img.getpixel((0, h - 1)), img.getpixel((w - 1, h - 1))]
counter = Counter(img.getdata())
print(corners, counter.most_common(3))
```

Real example: the Citranex logos arrived with background pixels at
`(2, 3, 7)` — near-black with a slight blue tint, NOT pure `#000000` and
NOT `brand-ink` (`#0d0d14`). A naïve threshold of "very dark" works; one
tuned to `#0d0d14` would miss.

## 1. The algorithm that works for white-text logos on dark backgrounds

Single-threshold color-keying breaks **anti-aliased white text on a black
background**: pixels at the letter edge are gray, which becomes "transparent
halo" when you only threshold for black, or "wireframe outline" when you
force opaque. The fix is to distinguish **acromatic** (gray-scale) pixels
from **colored** pixels and handle them differently.

```python
from PIL import Image

def remove_near_black_bg(input_path: str, output_path: str) -> None:
    img = Image.open(input_path).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            s = r + g + b
            mx, mn = max(r, g, b), min(r, g, b)
            is_gray = (mx - mn) <= 25

            if is_gray:
                # Anti-aliased white text edge → preserve as white with α gradient.
                if s <= 100:
                    px[x, y] = (0, 0, 0, 0)
                else:
                    a = int(min(255, (s - 100) / 665 * 255))
                    px[x, y] = (255, 255, 255, a)
            else:
                # Colored subject (logo gradient, accent). Drop only near-black AA.
                if s <= 80:
                    px[x, y] = (0, 0, 0, 0)
                else:
                    px[x, y] = (r, g, b, 255)

    img.save(output_path, "PNG", optimize=True)
```

**Why the gray branch promotes to white instead of preserving `(r, g, b)`:**
those pixels are anti-aliasing between the dark background and white text —
they are not "the brand color". Re-emitting them as `(255, 255, 255, α)`
keeps the soft edge AND keeps the text white when composited onto any
background (dark or light).

**Threshold cheatsheet** (sum of R+G+B):

| Sum range | Gray pixel becomes | Colored pixel becomes |
|---|---|---|
| 0–80 | transparent | transparent |
| 80–100 | transparent | opaque, original color |
| 100–765 | white, α proportional | opaque, original color |
| 765 | opaque white | opaque, original color |

Tune the `80` / `100` numbers per image — start by inspecting the corner
samples, then adjust until the corner pixels cleanly classify as
"background".

## 2. Always verify against the real destination background

The Read tool and most image viewers render transparent PNGs on a light
surface. White text with anti-aliasing looks like a "wireframe" on light
backgrounds but renders solid on the actual dark site background. Always
preview against the destination color:

```python
from PIL import Image

bg = (13, 13, 20, 255)  # brand-ink for citranex; swap per project
preview = Image.new("RGBA", (1100, 200), bg)
preview.alpha_composite(Image.open("logo-c.png"), (40, 50))
preview.alpha_composite(Image.open("logo-wordmark.png"), (170, 90))
preview.save("/tmp/preview.png")
```

If the preview looks correct, ship it. If letters look hollow, lower the
`80` / `100` thresholds until the AA pixels are classified as "white text".

## 3. Regenerate every downstream asset that was generated from the old PNG

Favicons, apple-touch icons, Open Graph cards, social-share images — any
asset that was composited from the old opaque PNG will have a black halo.
Regenerate them after the cleanup or they'll look broken.

## Environment

`python3` and `Pillow` (`from PIL import Image`) are preinstalled on the
opencode sandbox at `/usr/bin/python3`. No install needed. Outside the
sandbox:

```bash
python3 -m pip install --user Pillow
```

## When NOT to use this skill

- **Subject has hair, fur, or fine detail against a non-uniform background.**
  → Use an AI service (remove.bg, etc.) or `rembg`. This skill is for
  flat-color logos and product shots.
- **Image is already RGBA with transparency.** Just verify the alpha channel
  is correct; no work to do.
- **Background is not near-black/white.** Sample corners, pick a custom
  threshold per case. The algorithm still applies — change the cutoffs.
- **Subject includes a solid black region.** (E.g. a logo with intentional
  black strokes.) This skill will erase it. Pre-mask it back in after.
