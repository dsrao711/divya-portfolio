# Divya Rao — Portfolio

Personal portfolio site: product case studies, engineering work, writing, and a product lab.

## Design

Built from a design produced in [claude.ai/design](https://claude.ai/design) using the "Sawdust" design system (warm analog-cinema aesthetic — cream paper, burnt-amber accent, Instrument Serif + Hanken Grotesk + Space Mono).

## Stack

Static site, no build step:

- `index.html` — page markup + client-side routing/data, using a small custom-element templating runtime (`<x-dc>`, `sc-if`, `sc-for`)
- `support.js` — the templating runtime (loads React/ReactDOM/Babel from CDN and renders the page)
- `_ds/` — design system CSS (colors, type, component primitives)

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Deployed as a static site via GitHub Pages from the `main` branch.
