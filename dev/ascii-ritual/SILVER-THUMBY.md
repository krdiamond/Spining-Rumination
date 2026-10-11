# Silver 🜛 (U+1F71B) — Thumby assets

Rendered from **Noto Sans Symbols** glyph for `U+1F71B` ALCHEMICAL SYMBOL FOR SILVER
(the same icon you see for 🜛 — small ring on larger ring with footed base).

## Files

| File | Use |
|------|-----|
| `silver.png` | Silver-colored PNG of 🜛 |
| `silver.bin` | Thumby **32×32** VLSB bitmap |
| `silver-thumby.png` | 1-bit 32×32 preview (matches `.bin`) |
| `silver-72x40.bin` / `.png` | Optional full-screen centered |

## Thumby

```python
import thumby
silver = thumby.Sprite(32, 32, "/Games/YourGame/silver.bin", 20, 4)
thumby.display.drawSprite(silver)
thumby.display.update()
```

`.bin` is raw **VLSB** (no header). 32×32 = 128 bytes.
