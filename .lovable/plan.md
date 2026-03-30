

## Problem

Google AI finds "Impresos Lor" for Cholula but not Puebla. The structured data lists `addressLocality` as "San Pedro Cholula" — which is technically correct but doesn't associate the business with "Puebla" as a city-level entity for AI search.

## Plan: Strengthen Puebla Association in Structured Data

### 1. Expand JSON-LD in `index.html`

- Add `"areaServed"` to explicitly declare Puebla and Cholula as service areas:
  ```json
  "areaServed": [
    { "@type": "City", "name": "Puebla", "sameAs": "https://es.wikipedia.org/wiki/Puebla_de_Zaragoza" },
    { "@type": "City", "name": "San Pedro Cholula", "sameAs": "https://es.wikipedia.org/wiki/San_Pedro_Cholula" },
    { "@type": "City", "name": "San Andrés Cholula" }
  ]
  ```
- Change `@type` from `"LocalBusiness"` to `"PrintService"` (a more specific Schema.org type for printing businesses) — this gives AI systems better context.
- Add `"alternateName": "Impresos Lor Puebla"` so AI associates the brand with the city.
- Add `"knowsLanguage": "es"`.
- Add a `"hasOfferCatalog"` with main service categories to enrich the listing.

### 2. Add a secondary `LocalBusiness` breadcrumb via `areaServed`

This is the key change — explicitly telling search engines and AI that Puebla is a served area, not just inferring it from the region field.

### 3. Update meta descriptions

Add "Puebla" more prominently in the `<meta name="description">` and OG tags — currently it says "Puebla y Cholula" which is good, but we can reinforce it.

### Files to modify

- **`index.html`** — Enhance JSON-LD structured data with `areaServed`, `alternateName`, more specific `@type`, and `hasOfferCatalog`.

