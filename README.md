# Spining-Rumination

Circular spinning mantra that ramps up, then letters fall into a growing black center.

Live: https://krdiamond.github.io/Spining-Rumination/

## Files

- `index.html` — the page (edit `CONFIG` for timing)
- `font5x7.bin` — Thumby 5×7 font (required; letters will not draw without it)
- `silver.bin` — silver 🜛 sprite, **32×32** VLSB
- `silver-40.bin` — same sprite, **40×40** VLSB (clearer on Thumby)

```python
import thumby
spr = thumby.Sprite(32, 32, "/Games/YourGame/silver.bin", 20, 4)
# or: thumby.Sprite(40, 40, "/Games/YourGame/silver-40.bin", 16, 0)
thumby.display.drawSprite(spr)
thumby.display.update()
```

## Run locally

```bash
python3 -m http.server 43127
```

Open http://127.0.0.1:43127/

## Timing knobs (`CONFIG` in `index.html`)

```js
SLOW_HOLD_MS: 60 * 1000,      // 1 min at slowest spin before ramp
RAMP_MS: 10 * 1000,           // slow → fast spin
START_RPS: 0.03,
END_RPS: 1,
PARTICLE_STAGGER_MS: 90,      // delay between letter drops
PARTICLE_FLIGHT_MS: 700,      // fall duration per letter
DOT_PX: 75,                   // final black circle size
GROW_MS: 3200,                // circle grows smoothly over this many ms
PIXEL_SCALE: 4,               // Thumby glyph size
```
