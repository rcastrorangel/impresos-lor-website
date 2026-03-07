

# Google Analytics 4 con Consent Mode v2

## Cambios

### 1. `index.html` — Script de GA4 con Consent Mode
- Agregar el snippet de Google Consent Mode v2 **antes** del script de gtag.js
- Por defecto, denegar `analytics_storage` y `ad_storage` hasta que el usuario acepte cookies
- Cargar `gtag.js` con un placeholder `G-XXXXXXXXXX`
- Configurar señales: `ads_data_redaction`, `url_passthrough`

### 2. `src/components/CookieConsent.tsx` — Banner de consentimiento
- Banner sticky en la parte inferior con mensaje breve sobre cookies
- Botones "Aceptar" y "Rechazar"
- Al aceptar: actualizar consent con `gtag('consent', 'update', ...)` y guardar preferencia en `localStorage`
- Al rechazar: mantener denegado y guardar preferencia
- No mostrar el banner si ya hay preferencia guardada

### 3. `src/hooks/usePageTracking.ts` — Tracking de navegación SPA
- Hook que escucha cambios de ruta con `useLocation` de react-router
- Envía `page_view` events a GA4 en cada navegación

### 4. `src/App.tsx` — Integrar componentes
- Agregar `CookieConsent` y `usePageTracking`

### Placeholder
El Measurement ID será `G-XXXXXXXXXX`. Cuando tengas tu código GA4 real, solo hay que reemplazarlo en `index.html`.

