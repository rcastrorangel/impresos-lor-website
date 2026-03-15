

## Plan: Mostrar imágenes completas en la galería

### Problema
Las imágenes verticales se recortan porque el contenedor usa `aspect-[4/3]` con `object-cover`, lo que corta las partes superior e inferior.

### Solución
Cambiar el contenedor y la imagen para que se muestre la foto completa con fondo neutro, manteniendo celdas cuadradas consistentes:

**Archivo: `src/pages/Index.tsx` (línea 157)**

Cambiar:
```html
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
  <img ... className="h-full w-full object-cover ..." />
```

Por:
```html
<div className="aspect-square overflow-hidden rounded-lg bg-muted flex items-center justify-center">
  <img ... className="max-h-full max-w-full object-contain ..." />
```

- `aspect-square`: celdas 1:1 uniformes
- `object-contain` + `max-h-full max-w-full`: la imagen se muestra completa sin recorte
- `bg-muted`: relleno sutil en los espacios vacíos que quedan alrededor
- `flex items-center justify-center`: centra la imagen dentro de la celda

