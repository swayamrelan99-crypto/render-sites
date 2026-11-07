# BUILD-NOTES — glpatchess.onrender.com

## Build inputs
- Domain: glpatchess.onrender.com
- Product: GLPro GLPatch (transdermal blood sugar & GLP-1 support patch)
- Reference site: https://glpatch.shop/
- Checkout: real BuyGoods link confirmed from glpatch.shop (account_id=12421,
  product_codename=GPP6V4) — set as the `/order` redirect target in `_redirects`.
- Pack size: this asset pack's own product photo (`potes.webp`) labels the pouch
  "10 WEIGHT MANAGEMENT PATCHES ... 1 MONTH PACK" — i.e. 10 patches per pouch, used daily
  for a 1-month supply.
- Pricing (confirmed on glpatch.shop, 2026-11-07): 2 packages $79/ea ($158, +shipping);
  3 packages $69/ea ($207, +shipping); 6 packages $49/ea ($294, free US shipping, saves
  $60, most popular). 60-day money-back guarantee.
- No subscription terms were stated on the reference page, so none are claimed here.

## Ingredient disclosure note
glpatch.shop does not name specific botanical ingredients or amounts anywhere on the page
— it only describes "a proprietary blend of natural botanical extracts" and "GLP-1-
supporting botanicals" in general terms. No individual-ingredient images were supplied
either. This build does not invent ingredient names: the Formula section uses the site's
own 4 stated pillars (Transdermal Technology, GLP-1 Support Complex, Zero Synthetic
Stimulants, GMP Certified Formula) and says plainly that specific ingredients aren't
disclosed.

## Asset pack note
This asset pack was much smaller than other builds on this account — 6 usable images
(product shot in 2 crops, guarantee badge, fast-shipping badge, certifications strip,
payment-icons strip) plus 15 generic line-icon SVGs. There were no lifestyle photos,
named-ingredient photos, or customer photos this time, so the Benefits, Formula and
Reviews sections use plain icon/text cards instead of photo-based cards, and review
quotes are illustrative rather than attributed to real supplied photos.

## CSS / frontend fingerprint
- CSS prefix: `glp2-`
- Palette sampled from the pouch: deep teal, white panel, gold trim
- Hero visual: a small, contained GLP-1/blood-sugar themed network/pulse diagram (Blood
  Sugar, GLP-1, Appetite, Transdermal nodes) behind the bottle, sized and scoped to avoid
  the sizing bugs found on earlier builds this session (explicit :not() exclusions, no
  unstyled checkmark icons, diagram confined to its own container)

## Pages delivered this pass
- `index.html` only — full JSON-LD @graph, meta tags, security headers
- `robots.txt`, `sitemap.xml`
- `site.webmanifest`, `_headers`, `_redirects`

## Known gaps / operator checks still required
- Blog, ingredients.html, official.html, reviews.html, and the 4 legal pages were **not**
  built this pass — only the one-page `index.html` plus core SEO files. Ask for these as a
  follow-up if you want the full multi-page site.
- No `llms.txt`, `humans.txt`, `.well-known/security.txt`, `404.html`, `sitemap-images.xml`,
  or parked `.htaccess` yet — same reason as above.
- No dedicated favicon was supplied — a generated SVG is used in the meantime.
- Pricing/guarantee figures reflect glpatch.shop as of 2026-11-07 and should be
  reconfirmed before launch in case the seller has changed them.
