# Case study creatives — Featured Product Work cards

Each Featured Product Work card looks for a creative image at
`images/creatives/<slug>.png`, matching the case study's `slug` in
`studyData()` inside `index.html`. Drop a file in with the exact name below
and it appears in the card automatically — no code changes needed.

| Case study      | Expected file                         | Status |
|------------------|----------------------------------------|--------|
| Paid Collab      | `images/creatives/paid-collab.png`     | ✅ live |
| Campaign Report  | `images/creatives/campaign-report.png` | ✅ live |
| Brand PMF        | `images/creatives/brand-pmf.png`       | ✅ live |

Until a file exists at that path, the card falls back to a dashed
"Case study creative — Placeholder, send me the image" tile automatically
(same pattern as the retailer logos in `images/logos/`).

The image area uses `object-fit: contain` inside a 4:3 box (not `cover`),
so the whole creative always stays visible — nothing gets cropped, even
though these three aren't all the same aspect ratio (two are 4:3,
Campaign Report is ~16:9 and letterboxes slightly top/bottom).
