# Silver 🜛 — Thumby assets

Shape (matches the icon): **large central ring** + **three smaller rings** outside at
**top / bottom-left / bottom-right** (~120° apart).

## Files

| File | Size | Notes |
|------|------|-------|
| `silver.png` | 512×512 | Silver on black |
| `silver-reference.png` | 512×512 | Black on light (icon-style) |
| `silver.bin` | **32×32** VLSB | Main Thumby sprite |
| `silver-40.bin` | **40×40** VLSB | Larger / clearer on Thumby |
| `silver-thumby.png` | 32×32 | 1-bit preview of `silver.bin` |
| `silver-40.png` | 40×40 | Preview of `silver-40.bin` |
| `silver-72x40.bin` | 72×40 | Full screen, 40×40 centered |

## Thumby

```python
import thumby
# 32×32
spr = thumby.Sprite(32, 32, "/Games/YourGame/silver.bin", 20, 4)
# or clearer 40×40
spr = thumby.Sprite(40, 40, "/Games/YourGame/silver-40.bin", 16, 0)
thumby.display.drawSprite(spr)
thumby.display.update()
```
