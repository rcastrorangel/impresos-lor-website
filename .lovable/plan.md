

# SEO Audit — Gaps Found

After reviewing the entire codebase, the local SEO implementation is already strong. Here are the remaining gaps:

## Issues to Fix

### 1. NotFound page is in English
The 404 page still shows "Oops! Page not found" and "Return to Home" in English. It also lacks `useDocumentHead` for a proper title/description, and uses a generic layout without the Navbar/Footer context.

### 2. No scroll-to-top on route change
When navigating between pages via React Router, the scroll position is preserved. Search engines and users expect pages to start at the top. Add a `ScrollToTop` component in `App.tsx`.

### 3. Missing Aviso de Privacidad page
The footer links to `/aviso-de-privacidad` but the route doesn't exist — this creates a broken link (bad for SEO crawlers). Add a placeholder page with proper head tags and breadcrumb schema.

### 4. Navbar `<nav>` lacks `aria-label`
The desktop and mobile `<nav>` elements should have `aria-label="Navegación principal"` for accessibility/SEO.

### 5. Footer nav lacks semantic `<nav>` with aria-label
Footer links section should be wrapped in `<nav aria-label="Enlaces del pie de página">`.

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/NotFound.tsx` | Translate to Spanish, add `useDocumentHead` |
| `src/App.tsx` | Add `ScrollToTop` component, add `/aviso-de-privacidad` route |
| `src/pages/AvisoDePrivacidad.tsx` | New placeholder privacy page with SEO tags |
| `src/components/Navbar.tsx` | Add `aria-label` to `<nav>` elements |
| `src/components/Footer.tsx` | Wrap links in semantic `<nav>` with `aria-label` |
| `public/sitemap.xml` | Add `/aviso-de-privacidad` route |

