## Plan: Reemplazar número telefónico en todo el sitio

### Número

- **Actual:** `522213543712` (con prefijo MX 52)
- **Nuevo:** `522218594321`
- Formato visible para mostrar al usuario:  `221 859 4321`

### Cambios

**1. Reemplazar el número en los 5 archivos donde aparece:**

- `src/components/FloatingWhatsApp.tsx` → constante `WHATSAPP_URL`
- `src/components/Navbar.tsx` → constante `WHATSAPP_URL`
- `src/pages/Contacto.tsx` → constante `WHATSAPP_NUMBER`
- `src/pages/Index.tsx` → constante `WHATSAPP_URL`
- `src/pages/Servicios.tsx` → constante `WHATSAPP_URL`

**2. Agregar el teléfono en la página de Contacto (`src/pages/Contacto.tsx`)**

Insertar un nuevo bloque arriba del bloque de Correo, dentro del `space-y-6` de la columna izquierda, usando el ícono `Phone` de `lucide-react`:

```tsx
<div className="flex items-start gap-4">
  <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
  <div>
    <p className="font-semibold text-foreground">Teléfono</p>
    <a href="tel:+522218594321" className="text-muted-foreground hover:text-accent transition-colors">
      +52 221 859 4321
    </a>
  </div>
</div>
```

Y agregar `Phone` al import de `lucide-react` (junto con `MessageCircle, Mail, MapPin`).

**3. Agregar el teléfono al JSON-LD en `index.html**`

Como el nuevo número sí se puede usar para llamadas, agregar de nuevo el campo `telephone` al schema `PrintService` (debajo de `email`):

```json
"telephone": "+522218594321",
```

### Archivos a modificar

- `src/components/FloatingWhatsApp.tsx`
- `src/components/Navbar.tsx`
- `src/pages/Contacto.tsx`
- `src/pages/Index.tsx`
- `src/pages/Servicios.tsx`
- `index.html`

### Notas

- Después de aplicar los cambios, será necesario re-publicar para que el sitio en vivo (`impresoslor.com.mx`) refleje el nuevo número.