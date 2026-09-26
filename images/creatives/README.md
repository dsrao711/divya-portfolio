# Case study creatives — Featured Product Work cards

Each Featured Product Work card looks for a creative image at
`images/creatives/<slug>.png`, matching the case study's `slug` in
`studyData()` inside `index.html`. Drop a file in with the exact name below
and it appears in the card automatically — no code changes needed.

| Case study      | Expected file                         |
|------------------|----------------------------------------|
| Paid Collab      | `images/creatives/paid-collab.png`     |
| Campaign Report  | `images/creatives/campaign-report.png` |
| Brand PMF        | `images/creatives/brand-pmf.png`       |

Until a file exists at that path, the card falls back to a dashed
"Case study creative — Placeholder, send me the image" tile automatically
(same pattern as the retailer logos in `images/logos/`).

Recommended aspect ratio: **4:3** (the card crops to this with
`object-fit: cover`, so anything close to 4:3 — e.g. 1200×900 — will look
best; a very tall or very wide creative will get cropped top/bottom or
left/right).
