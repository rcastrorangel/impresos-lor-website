

## Fix: Google Maps iframe popup blocked error

### Problem
The `?q=...&output=embed` URL format causes cross-origin opener policy errors when clicking the pin to open in a new tab. This is a known issue with this embed format in sandboxed iframes.

### Solution
Switch to the official Google Maps Embed API format using `/maps/embed/v1/place` or, more simply, use the `maps.google.com/maps?q=...&output=embed` format with the proper embed URL structure.

The most reliable fix without requiring an API key is to use the `google.com/maps/embed` format:

```
https://maps.google.com/maps?width=100%&height=100%&hl=es&q=Impresos+Lor,+C.+Maya+Sur+16,+Bello+Horizonte,+72760+San+Pedro+Cholula,+Pue.&t=&z=16&ie=UTF8&iwloc=B&output=embed
```

### Files to change
- **src/pages/Index.tsx** — Update iframe `src`
- **src/pages/Contacto.tsx** — Update iframe `src`

Both iframes will also get `sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"` attribute to explicitly allow popups to escape the sandbox, which resolves the COOP error.

