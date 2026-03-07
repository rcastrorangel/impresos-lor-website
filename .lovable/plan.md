

# SEO Local para Puebla y Cholula

## What's already in place
- `lang="es-MX"`, title/description with "Puebla y Cholula", OG tags, canonical, robots.txt
- H1 with local keywords, Google Maps embed, address text

## What's missing for full local SEO

### 1. JSON-LD Structured Data (most impactful)
- **LocalBusiness** schema on the homepage with name, address (PostalAddress), geo coordinates, phone, email, URL, openingHours, areaServed (Puebla, Cholula), priceRange, sameAs (Facebook, Instagram)
- **BreadcrumbList** schema on Servicios and Contacto pages

### 2. Per-page `<title>` and `<meta description>`
Currently only one static title in `index.html`. Since this is a React SPA, add a small `useDocumentHead` hook or use `document.title` in each page to set unique titles:
- Inicio: "Impresos Lor — Impresión Offset en Puebla y Cholula" (already set)
- Servicios: "Servicios de Impresión Offset en Puebla | Impresos Lor"
- Contacto: "Contacto — Impresos Lor | Impresión en Puebla y Cholula"

### 3. Semantic HTML improvements
- Add `<address>` element wrapping contact info on Contacto page
- Add `aria-label` attributes on landmark sections
- Add `<h2>`/`<h3>` with geo-keywords where natural (e.g., "Servicios de Impresión en Puebla y Cholula")

### 4. Sitemap
- Create `public/sitemap.xml` with all 3 routes + lastmod dates

### 5. Robots.txt update
- Add `Sitemap: https://impresoslor.com/sitemap.xml`

### 6. Geo meta tags
- Add `<meta name="geo.region">`, `<meta name="geo.placename">`, `<meta name="geo.position">` to index.html

### 7. Local keyword enrichment in content
- Sprinkle "en Puebla", "en Cholula", "zona metropolitana de Puebla" naturally into page copy (subtitles, service descriptions, value props)

## Files to create/modify

| File | Change |
|------|--------|
| `index.html` | Add geo meta tags |
| `src/hooks/useDocumentHead.ts` | New hook to set title + meta description per page |
| `src/components/LocalBusinessSchema.tsx` | New component: injects JSON-LD LocalBusiness script |
| `src/components/BreadcrumbSchema.tsx` | New component: injects JSON-LD BreadcrumbList script |
| `src/pages/Index.tsx` | Use useDocumentHead, add LocalBusinessSchema, enrich copy with local keywords |
| `src/pages/Servicios.tsx` | Use useDocumentHead, add BreadcrumbSchema, enrich H1/subtitles |
| `src/pages/Contacto.tsx` | Use useDocumentHead, add BreadcrumbSchema, wrap address in `<address>`, enrich copy |
| `public/sitemap.xml` | New file with 3 routes |
| `public/robots.txt` | Add Sitemap directive |

