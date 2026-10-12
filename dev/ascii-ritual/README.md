# Spining-Rumination / Ascii Ritual

**This folder is the project.** Everything for the site and Thumby assets lives here.

Live site: https://krdiamond.github.io/Spining-Rumination/dev/ascii-ritual/

## Stack

- Plain HTML (no bundler)
- Tailwind Play CDN
- Thumby `font5x7.bin` (5×7 bitmap)

## Run locally

From this folder:

```bash
python3 -m http.server 43127
```

Open http://127.0.0.1:43127/

## Timing knobs

In `index.html`, edit the `CONFIG` object:

```js
RAMP_MS: 10 * 1000,           // slow → fast spin
START_RPS: 0.03,
END_RPS: 1,
PARTICLE_STAGGER_MS: 90,      // delay between letter drops
PARTICLE_FLIGHT_MS: 700,      // fall duration per letter
DOT_PX: 75,                   // final black circle size
GROW_MS: 3200,                // circle grows smoothly over this many ms
PIXEL_SCALE: 4,               // Thumby glyph size (was 2)
```

## Thumby silver (🜛)

See `SILVER-THUMBY.md`. Main files: `silver.png`, `silver.bin`.
