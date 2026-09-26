# Case study creatives — Featured Product Work & Featured Engineering Work cards

Every case study card (both sections) looks for a creative image at
`images/creatives/<slug>.png`, matching the case study's `slug` in
`studyData()` inside `index.html`. Drop a file in with the exact name below
and it appears in the card automatically — no code changes needed.

## Featured Product Work

| Case study      | Expected file                         | Status |
|------------------|----------------------------------------|--------|
| Paid Collab      | `images/creatives/paid-collab.png`     | ✅ live |
| Campaign Report  | `images/creatives/campaign-report.png` | ✅ live |
| Brand PMF        | `images/creatives/brand-pmf.png`       | ✅ live |

## Featured Engineering Work

| Case study                              | Expected file                              | Status |
|-------------------------------------------|-----------------------------------------------|--------|
| Configurable Order Journey Engine        | `images/creatives/eng-catalogue.png`         | ⬜ needed |
| OMS Regression Testing Automation        | `images/creatives/eng-oms-regression.png`    | ⬜ needed |

Until a file exists at that path, the card falls back to a dashed
"Placeholder — send me the image" tile automatically (same pattern as the
retailer logos in `images/logos/`).

The image area sizes itself to each image's own natural aspect ratio
(`width:100%; height:auto`, no cropping, no forced box shape) — so nothing
gets clipped or letterboxed regardless of the source dimensions. A 4:3
export (e.g. 1449×1086, matching Paid Collab/Brand PMF) keeps all cards
in a section visually uniform in height, but isn't required.
