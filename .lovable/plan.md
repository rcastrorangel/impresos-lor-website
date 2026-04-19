
## Plan: CTA del Navbar en dos líneas

Cambiar el botón "Cotizar por WhatsApp" del navbar para que muestre texto en dos líneas, tanto en desktop como en el menú móvil.

### Cambio

En `src/components/Navbar.tsx`, reemplazar el contenido del `<Button>` (en ambas instancias: desktop y mobile) por una estructura flex en columna:

```tsx
<Button className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold gap-2 h-auto py-2">
  <MessageCircle className="h-4 w-4" />
  <span className="flex flex-col leading-tight items-start">
    <span>Cotizar por WhatsApp</span>
    <span className="text-[10px] font-normal opacity-90">(Solo Mensajes)</span>
  </span>
</Button>
```

### Detalles
- `h-auto py-2` reemplaza la altura fija del botón (`h-10`) para acomodar dos líneas.
- `leading-tight` reduce el espaciado vertical entre líneas.
- Línea 2 (`(Solo Mensajes)`) usa `text-[10px]` y `font-normal` para verse más pequeña y secundaria.
- `items-start` alinea el texto a la izquierda dentro del botón (junto al ícono).
- Aplicar el mismo cambio al botón del Sheet móvil (manteniendo `w-full` ahí).

### Archivo a modificar
- `src/components/Navbar.tsx` — botón desktop (línea ~46) y botón móvil (línea ~77).
