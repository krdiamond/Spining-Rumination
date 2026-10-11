# Spining-Rumination

A minimal static site for the Fortune Teller Ring: the line **End Rumination Through Decisive Acceptance** set in a free pixel font and arranged on a ring that spins continuously in 2D.

## Stack

- Plain HTML (no bundler, no framework)
- [Tailwind CSS Play CDN](https://tailwindcss.com/docs/installation/play-cdn)
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) (Google Fonts)

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 43127
```

Then visit http://127.0.0.1:43127

## Adjust spin speed

Near the top of `index.html`, inside the `<style>` block:

```css
:root {
  --spin-duration: 28s; /* smaller = faster, larger = slower */
}
```

Examples: `10s` (fast), `28s` (default), `60s` (slow).

## GitHub Pages

**https://krdiamond.github.io/Spining-Rumination/**

Starts very slow, speeds up over 60 seconds, then implodes to a center point.

Same page also at:

**https://krdiamond.github.io/Spining-Rumination/dev/ascii-ritual/**

Sources: root `index.html` and `dev/ascii-ritual/index.html`
