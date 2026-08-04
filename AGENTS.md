# AGENTS.md — Impresos Lor, sitio web

Instrucciones para cualquier agente de IA (Claude Code, Cursor, Codex, GitHub
Copilot, etc.) que trabaje en este repositorio. `CLAUDE.md` importa este
archivo, así que ambos están siempre sincronizados — edita solo este.

## Qué es este proyecto

Sitio web de marketing para **Impresos Lor**, una imprenta offset en San
Pedro Cholula, Puebla, México. Es una SPA estática (Vite + React +
TypeScript + Tailwind CSS + shadcn/ui), **sin backend propio**: el
formulario de contacto no envía datos a ningún servidor, solo arma un
mensaje y abre WhatsApp. Ver `README.md` para la documentación completa
del proyecto, estructura de carpetas y scripts disponibles.

El repositorio es **público** pero el código es propietario — ver
`LICENSE` ("All Rights Reserved"). Es público únicamente para poder usar
GitHub Actions y branch protection en el plan gratuito de GitHub, no para
invitar a que se reutilice el código.

## Flujo de trabajo obligatorio (no negociable)

- **`main` está protegida.** Todo cambio va por Pull Request — nunca hagas
  push directo a `main`, aunque técnicamente puedas.
- **Merge por squash únicamente.** Cada PR se vuelve un solo commit en
  `main`.
- **El PR debe pasar el check "Lint, build y pruebas"** (lint + build +
  pruebas unitarias de Vitest + pruebas end-to-end de Playwright — ver
  `.github/workflows/ci.yml`) y el deploy de Cloudflare Pages antes de
  poder mergearse.
- **Auto-merge nativo de GitHub está habilitado.** Un PR que no sea de
  Dependabot, o que sea un bump menor/de parche de Dependabot, se mergea
  solo en cuanto pasan los checks — no hace falta clic manual.
- **Los bumps mayores (semver-major) de Dependabot NO se auto-mergean a
  propósito** (ver `.github/workflows/auto-merge.yml`): pueden traer
  cambios incompatibles que el CI no detecta. Quedan abiertos con un
  comentario explicando que requieren revisión manual.

## Antes de abrir o actualizar un PR, corre esto localmente

```sh
npm run lint
npm run build
npm run test        # pruebas unitarias (Vitest)
npm run test:e2e     # pruebas end-to-end (Playwright) — requiere el build arriba
```

Si los cuatro pasan, el PR muy probablemente pasará el CI. Si `test:e2e`
falla pero `lint`/`build`/`test` pasan, **no lo ignores**: significa que
el sitio compila pero algo del comportamiento real se rompió (navegación,
botones de WhatsApp, formulario de contacto, aviso de cookies) — eso es
justo lo que estas pruebas existen para atrapar.

## Actualizaciones de dependencias (Dependabot)

`.github/dependabot.yml` abre PRs automáticamente para `npm` y
`github-actions`. Antes de mergear manualmente un bump **mayor** que quedó
pendiente de revisión:

1. `rm -rf node_modules package-lock.json && npm install` (instalación
   limpia, sin `--legacy-peer-deps` salvo que sea estrictamente
   necesario — si lo es, probablemente indica una incompatibilidad real).
2. `npm ci` para confirmar que instala igual que lo hará el CI.
3. `npm run build && npm run lint && npm run test && npm run test:e2e`.
4. Si todo pasa, además abre el sitio (`npm run preview`) y navega las
   páginas principales a mano si el cambio toca algo visual o de
   enrutamiento (ej. una librería de UI o de routing).

**Cuidado al poner al día una rama de Dependabot que quedó atrás.** Si al
mergear `main` hay conflicto en `package.json`, resuélvelo a mano dejando el
bump de ese PR **más** lo que ya entró en `main` (elegir un lado completo
descarta una actualización que ya se había mergeado). El `package-lock.json`
no se resuelve a mano: toma cualquier lado, y **después** corre `npm install`
para regenerarlo y commitea el resultado. Si commiteas el merge sin regenerar
el lockfile, en local todo parece bien (tu `node_modules` ya está correcto)
pero el CI falla con `npm error code EUSAGE` porque el lockfile describe un
`package.json` distinto al que quedó. Corre la secuencia completa de
verificación **después** del commit de merge, no antes.

Nota práctica: en algunos entornos, un `npm install` limpio deja el árbol en
un estado donde `npm ci` todavía se queja de alguna dependencia transitiva.
Correr `npm install` una segunda vez lo resuelve. Si `npm ci` falla justo
después de una instalación limpia, prueba eso antes de culpar al bump.

**Precedentes de bumps mayores que se rechazaron por romper el sitio o el
tooling** (referencia si Dependabot los vuelve a proponer):

- `react` / `react-dom` / `@types/react` a una versión mayor sin subir
  **todos** a la misma versión → la página queda casi en blanco con un
  error de JavaScript real. El build compila igual, así que esto solo se
  detecta al abrir el sitio. Dependabot abre estos bumps por separado: hay
  que mergearlos juntos o no mergear ninguno.
- `jsdom` 20 → 30 → rompe el arranque de Vitest (`webidl.util.markAsUncloneable
  is not a function`), incompatible con el Node.js usado en CI.
- `lucide-react` 0.x → 1.x → eliminó **permanentemente** todos los íconos
  de marcas (Facebook, Instagram) por temas de marca registrada. Rompe el
  build en `src/components/Footer.tsx`. No es un renombre: aceptarlo exige
  reemplazar esos íconos por SVGs propios u otra librería — decisión de
  diseño, no un bump de rutina.
- `date-fns` 3 → 4 → conflicto de peer dependencies con
  `react-day-picker@8.x`, que solo soporta `^2 || ^3`. Además `date-fns` no
  se usa directamente en `src/`, así que no hay nada que ganar forzándolo.
- `typescript` 5 → 7 → `typescript-eslint` requiere `<6.1.0`. El ecosistema
  todavía no soporta TS 7; conviene revisarlo dentro de unos meses.
- `@eslint/js` 9 → 10 → requiere `eslint@^10`, pero el paquete `eslint` sigue
  en 9.x. Los dos tienen que subir juntos. Nota: `eslint-plugin-react-hooks`
  ya está en 7.1.1, que **sí** soporta ESLint 10 — así que este bloqueo
  desaparece en cuanto Dependabot proponga subir `eslint` a 10.

Un patrón que se repite: antes de asumir que un bump es peligroso, revisa si
el paquete **realmente se usa** (`grep -r "from 'paquete'" src/`). Buena parte
de lo que está en `package.json` viene del andamiaje de shadcn/ui y ninguna
página lo importa (`recharts`, `vaul`, `zod`, `react-resizable-panels`,
`next-themes`, `date-fns`, entre otros). Un paquete que nadie importa se puede
actualizar sin drama; uno que sí se usa merece correr las pruebas e2e.

## Cosas frágiles a las que hay que prestar atención

- **Número de WhatsApp duplicado.** Está hardcodeado como constante en
  `src/components/Navbar.tsx`, `src/components/FloatingWhatsApp.tsx`,
  `src/pages/Contacto.tsx`, `src/pages/Index.tsx`, `src/pages/Servicios.tsx`
  (marcados con comentarios `TODO`), **y también** en
  `e2e/whatsapp.spec.ts` y `e2e/formulario-contacto.spec.ts`. Si cambia,
  hay que actualizarlo en los 7 lugares o las pruebas e2e van a fallar en
  el PR (eso es intencional, no un bug).
- **`src/components/ui/*`** son componentes generados por shadcn/ui. Evita
  editarlos a mano salvo que sea realmente necesario — no siguen las
  mismas convenciones de comentarios que el resto del código propio.
- **Contenido legal como texto estático.** `src/pages/AvisoDePrivacidad.tsx`
  y `src/pages/PoliticaDeCookies.tsx` son JSX escrito directamente, no
  vienen de un CMS. Si cambia el tratamiento de datos o las cookies que
  usa el sitio, hay que editar el texto a mano y actualizar la fecha de
  "Última actualización".
- **No hay backend.** No agregues llamadas a un API propio ni asumas que
  existe un servidor — todo lo que necesite persistencia real (base de
  datos, autenticación, etc.) es una decisión de arquitectura nueva, no
  una extensión trivial de lo que hay.

## Seguridad

- Nunca commitees secretos, tokens, `.env` ni credenciales.
- El repo es público: cualquier cosa que se suba queda visible para
  cualquiera, incluyendo el historial completo de commits.
- El código es propietario (ver `LICENSE`) aunque el repo sea público —
  no lo trates como si fuera código abierto reutilizable.

## Comandos disponibles

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en `http://localhost:8080` |
| `npm run build` | Build de producción en `dist/` |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm run test` | Pruebas unitarias (Vitest) |
| `npm run test:watch` | Pruebas unitarias en modo watch |
| `npm run test:e2e` | Pruebas end-to-end (Playwright), navegador real |
| `npm run preview` | Sirve localmente el build ya compilado |

Para más detalle sobre estructura del proyecto, rutas, CI/CD y
configuración de Dependabot, ver `README.md`.
