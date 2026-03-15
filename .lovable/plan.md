

## Plan: Reemplazar imágenes placeholder en la galería "Nuestro Trabajo"

### Cambios

**1. Copiar las 10 imágenes a `src/assets/gallery/`**

Mapeo de imágenes a sus descripciones alt:

| Archivo | Alt text |
|---------|----------|
| Remisiones_1.jpeg | Remisiones impresas personalizadas |
| Remisiones_2.jpeg | Notas de pedido impresas |
| Sobres_1.jpeg | Sobres impresos para consultorio dental |
| Sobres_2.jpeg | Sobres corporativos impresos |
| Cajas_1.jpeg | Cajas impresas para cosméticos |
| Cajas_2.jpeg | Cajas impresas para perfumería |
| Folders_1.jpeg | Folders impresos para consultorio |
| Folders_2.jpeg | Folders corporativos impresos |
| Papel_Grado_Alimenticio.jpeg | Papel grado alimenticio impreso |

**2. Actualizar `src/pages/Index.tsx`**
- Import each image from `@/assets/gallery/`
- Update `galleryImages` array: replace 6 placeholder entries with 9 real images (one per uploaded file, excluding one duplicate if needed, or use all 10)
- Adjust grid: keep `grid-cols-2 md:grid-cols-3` which works well for 9 images (3 rows of 3)

**3. Update gallery grid for 10 images**
Use all 10 images. The `grid-cols-2 md:grid-cols-3` grid handles 10 items gracefully (last row has 1 or 2 items depending on breakpoint).

### Result
The "Nuestro Trabajo" section will showcase real product photos instead of placeholder SVGs.

