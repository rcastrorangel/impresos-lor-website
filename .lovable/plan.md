

## Fix: Update BASE_URL in useDocumentHead.ts

### Problem
`src/hooks/useDocumentHead.ts` line 9 still has:
```ts
const BASE_URL = "https://impresoslor.com";
```
This causes every page's dynamically-set `<link rel="canonical">` to point to `impresoslor.com` instead of `impresoslor.com.mx` — exactly what Google Search Console is flagging.

### Fix
Change line 9 to:
```ts
const BASE_URL = "https://impresoslor.com.mx";
```

### Files to modify
- **`src/hooks/useDocumentHead.ts`** — Update `BASE_URL` to `https://impresoslor.com.mx`

This is the only remaining old-domain reference. All other files (`index.html`, `sitemap.xml`, `robots.txt`) already use `.com.mx`.

