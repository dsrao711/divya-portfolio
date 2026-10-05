# Divya Rao — Portfolio

Personal portfolio site: product and engineering case studies, restyled in the spirit of
gracesportfolio.com — original HTML/CSS throughout, no build step, no framework.

## Structure

- `index.html` — home page (hero, work, skills, about, contact)
- `paid-collab.html`, `campaign-report.html`, `brand-pmf.html`, `eng-catalogue.html`,
  `eng-oms-regression.html` — full case study detail pages, chained to each other via an
  "up next" card
- `images/`, `videos/` — case study creatives, product screenshots, diagrams and demo clips

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Static site, deployed via GitHub Pages from the `main` branch root.
