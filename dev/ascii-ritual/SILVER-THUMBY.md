# Silver (alchemy) — Thumby assets

Unicode: U+1F71B 🜛 — alchemical symbol for silver (lunar crescent).

## Files

| File | Use |
|------|-----|
| `silver.png` | 256×256 silver-on-black PNG (preview / general) |
| `silver.bin` | Thumby sprite bitmap **32×32**, VLSB (raw bytes) |
| `silver-thumby.png` | 1-bit preview of the 32×32 sprite (matches `.bin`) |
| `silver-72x40.bin` | Optional full-screen centered 72×40 VLSB |
| `silver-72x40.png` | Preview of the 72×40 bitmap |

## Thumby usage

```python
import thumby

# 32×32 sprite — path relative to your game on the Thumby filesystem
silver = thumby.Sprite(32, 32, "/Games/YourGame/silver.bin", 20, 4)
thumby.display.drawSprite(silver)
thumby.display.update()
```

Bitmap format: **VLSB** (vertical LSB) — same as Thumby / SSD1306. Each bit `1` = lit (white), `0` = off (black). No width/height header in the `.bin`; pass size to `Sprite()`.

Byte length check: 32×32 → 32×4 = **128 bytes**; 72×40 → 72×5 = **360 bytes**.
