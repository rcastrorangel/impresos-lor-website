

## Plan: Agregar 2 nuevas cajas de servicios

### Cambios

**1. Agregar nuevos imports (línea 1)**
Importar dos nuevos iconos de lucide-react:
- `UtensilsCrossed` para restaurantes
- `Leaf` o `ShieldCheck` para papel grado alimenticio

**2. Actualizar array services (líneas 7-28)**
Agregar 2 nuevos objetos al array:
- "Impresos para Restaurantes": Remisiones, manteletas, comandas
- "Papel Grado Alimenticio": Protección para alimentos, hamburguesas, alitas, galletas

**3. Ajustar grid layout (línea 91)**
Cambiar `lg:grid-cols-4` a `lg:grid-cols-3` para mostrar 6 items en 2 filas de 3 columnas cada una.

### Resultado
Sección mostrará 6 cajas en total: 2 filas de 3 servicios cada una, manteniendo el formato visual consistente.

