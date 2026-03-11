

## Plan: Fix Google Maps embed and update geo SEO

### Problem
The current Maps embed uses placeholder coordinates (`19.0`, `-98.2`) with no real place ID, so no pin is visible. The address also says "Pue." but should reference "San Pedro Cholula" for better local SEO.

### Changes

**1. Fix Google Maps embed (Index.tsx + Contacto.tsx)**
Replace the broken iframe `src` in both files with a working embed URL that shows "Impresos Lor" with a pin:
```
https://www.google.com/maps?q=Impresos+Lor,+C.+Maya+Sur+16,+Bello+Horizonte,+72760+San+Pedro+Cholula,+Pue.&output=embed
```

**2. Add geo meta tags (index.html)**
Add geographic meta tags after the existing meta tags:
```html
<meta name="geo.region" content="MX-PUE" />
<meta name="geo.placename" content="San Pedro Cholula, Puebla" />
<meta name="geo.position" content="19.0486;-98.3069" />
<meta name="ICBM" content="19.0486, -98.3069" />
```

**3. Update address display text**
Update the visible address in both pages to:
`C. Maya Sur #16 Loc38, Bello Horizonte, 72760 San Pedro Cholula, Pue., México`

This adds "San Pedro Cholula" which is the correct municipality shown in Google Maps for better local search relevance.

