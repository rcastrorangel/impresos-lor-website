

# Impresos Lor — Sitio Web Estático

## Design System
- **Colors**: Deep Blue (#3B4A9B) for navbar/footer, Cyan (#00AEEF) for accents/icons, White/Light Gray backgrounds, WhatsApp Green (#25D366) for all CTAs
- **Fonts**: Montserrat (headings), Inter (body text) via Google Fonts
- **Style**: Minimalist, industrial, clean, professional — all content in Spanish (Mexico)

## Global Components

### Navbar (fixed)
- Logo "Impresos Lor" on the left
- Center links: Inicio, Servicios, Contacto
- Right: WhatsApp CTA button ("Cotizar por WhatsApp")
- Mobile: hamburger menu with sheet/drawer

### Footer
- Small logo, quick links, Facebook/Instagram icons, copyright, "Aviso de Privacidad" link

### Floating WhatsApp Button
- Persistent bottom-right floating button linking to wa.me/522213543712

## Page 1: Inicio (/)

1. **Hero Section** — Full-width with placeholder printing image background, overlay with H1 ("Impresión y Offset para Negocios en Puebla y Cholula"), subtitle, and WhatsApp CTA button
2. **Services Summary** — Bento grid with 4 cards (Formatos comerciales, Recetarios y Formatos Médicos, Etiquetas, Cajas) using Lucide icons
3. **Value Proposition** — 4-column grid with icons (Timer, Settings, Truck, Briefcase) and benefit text
4. **Gallery** — 4-6 image grid with placeholder images and descriptive alt text
5. **Location** — Embedded Google Map iframe + address text

## Page 2: Servicios (/servicios)

- Page header: "Nuestros Servicios de Impresión"
- Accordion component with 4 expandable sections matching the homepage service cards, with full detailed descriptions
- Bottom CTA section with WhatsApp button

## Page 3: Contacto (/contacto)

- Split layout (side-by-side desktop, stacked mobile)
- Left: Contact info (phone, WhatsApp, email, address) with prominent WhatsApp button
- Right: Embedded Google Map
- Below: Simple contact form (Name, Phone, Service dropdown, Message) — visual hierarchy keeps WhatsApp as primary CTA

