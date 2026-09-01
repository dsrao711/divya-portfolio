# Retailer logos — Campaign Report case study

Drop retailer logo images into this folder using these exact filenames. The
site already references these paths, so adding a file here makes it appear
on the site with no code changes needed — until then it falls back to a
text badge automatically.

| Retailer | Expected file        |
|----------|-----------------------|
| Myntra   | `myntra.png`           |
| Flipkart | `flipkart.png`         |
| Meesho   | `meesho.png`           |
| Amazon   | `amazon.png`           |
| Shopsy   | `shopsy.png`           |
| Nykaa    | `nykaa.png`            |
| Tira     | `tira.png`             |
| Ajio     | `ajio.png`             |

Tips:
- PNG with a transparent background works best (matches the site's light
  card background); SVG also works if you'd rather use `.svg` — just update
  the `logo` path for that retailer in `index.html` (`studyData()` →
  `campaign-report` → section `D`) to match the extension.
- Roughly 200px tall source images scale down cleanly; the on-page logo
  renders at 20px tall.
