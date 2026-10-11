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

## Timing knobs

In `index.html` (and `dev/ascii-ritual/index.html`), edit the `CONFIG` object in the script:

```js
RAMP_MS: 10 * 1000, // slow → fast (tuning; was 60s)
START_RPS: 0.03,    // start speed (revs/sec)
END_RPS: 8,         // end speed before implode
IMPLODE_MS: 1200,   // collapse duration
```

## GitHub Pages

**https://krdiamond.github.io/Spining-Rumination/**

Starts very slow, speeds up over 10 seconds (tuning), then letters rush inward into a 10px black center dot.

Same page also at:

**https://krdiamond.github.io/Spining-Rumination/dev/ascii-ritual/**

Sources: root `index.html` and `dev/ascii-ritual/index.html`
