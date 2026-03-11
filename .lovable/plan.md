

# Formulario de contacto → WhatsApp directo

## Enfoque
Al enviar el formulario, se abrirá WhatsApp con un mensaje pre-llenado con los datos del formulario (nombre, teléfono, servicio, mensaje). No requiere backend ni API keys.

## Cambios

### `src/pages/Contacto.tsx`
- Modificar `handleSubmit` para construir un mensaje de texto con los datos del formulario
- Usar `encodeURIComponent` para sanitizar el texto
- Abrir `https://wa.me/522213543712?text={mensaje}` en nueva pestaña
- Mantener el toast de confirmación
- Agregar validación básica con campos `required`

### Formato del mensaje WhatsApp
```text
*Nuevo mensaje desde el sitio web*
📋 *Nombre:* Juan Pérez
📞 *Teléfono:* 222 123 4567
🏷️ *Servicio:* Formatos comerciales
💬 *Mensaje:* Necesito cotizar 500 volantes
```

No se requiere Supabase, edge functions ni API keys. Todo funciona del lado del cliente.

