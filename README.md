# Impresos Lor — Sitio Web

Sitio web corporativo de **Impresos Lor**, imprenta offset ubicada en San Pedro
Cholula, Puebla, México. El sitio presenta los servicios de la empresa y
permite a los clientes solicitar cotizaciones directamente por WhatsApp.

**Sitio en producción**: https://impresoslor.com.mx

## Información del proyecto (Lovable)

Este proyecto fue creado y se sincroniza con [Lovable](https://lovable.dev):

**URL del proyecto**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

Los cambios realizados desde Lovable se envían (commit) automáticamente a
este repositorio, y los cambios que se suban (push) a este repositorio desde
otro lugar (por ejemplo, un IDE local) también se reflejan en Lovable.

## Tecnologías utilizadas

- **[Vite](https://vitejs.dev/)** — herramienta de construcción (build) y servidor de desarrollo.
- **[React 18](https://react.dev/)** + **TypeScript** — biblioteca de UI y tipado estático.
- **[React Router](https://reactrouter.com/)** — enrutamiento de páginas (SPA).
- **[Tailwind CSS](https://tailwindcss.com/)** — estilos basados en utilidades.
- **[shadcn/ui](https://ui.shadcn.com/)** + **[Radix UI](https://www.radix-ui.com/)** — componentes de interfaz accesibles (carpeta `src/components/ui`, generados automáticamente; no requieren mantenimiento manual salvo personalización explícita).
- **[TanStack Query](https://tanstack.com/query)** — utilería para manejo de datos asíncronos (actualmente sin backend propio conectado).
- **[Vitest](https://vitest.dev/)** + Testing Library — pruebas automatizadas.

No hay backend propio: el formulario de contacto no envía datos a un
servidor, sino que redirige al usuario a WhatsApp con el mensaje ya
redactado (ver `src/pages/Contacto.tsx`).

## Estructura del proyecto

```
src/
├── assets/gallery/       # Imágenes de trabajos realizados, usadas en la página de inicio
├── components/           # Componentes propios del sitio (Navbar, Footer, etc.)
│   └── ui/                # Componentes base de shadcn/ui (generados, no editar a mano salvo necesidad)
├── hooks/                 # Hooks reutilizables (SEO, tracking, notificaciones, breakpoint móvil)
├── lib/                   # Utilidades generales (p. ej. combinación de clases de Tailwind)
├── pages/                 # Una página por ruta del sitio (ver App.tsx para el mapeo de rutas)
├── test/                  # Configuración y pruebas con Vitest
├── App.tsx                # Enrutador principal y proveedores globales
├── main.tsx                # Punto de entrada de la aplicación
└── index.css               # Variables de tema (colores, radios, etc.) y estilos globales
```

### Páginas y rutas (`src/App.tsx`)

| Ruta                     | Componente               | Descripción                              |
| ------------------------ | ------------------------ | ----------------------------------------- |
| `/`                       | `pages/Index.tsx`         | Inicio: hero, resumen de servicios, propuesta de valor, galería y mapa. |
| `/servicios`              | `pages/Servicios.tsx`     | Detalle de cada línea de servicio (acordeón). |
| `/contacto`               | `pages/Contacto.tsx`      | Datos de contacto, mapa y formulario que redirige a WhatsApp. |
| `/aviso-de-privacidad`    | `pages/AvisoDePrivacidad.tsx` | Aviso de privacidad (LFPDPPP).       |
| `/politica-de-cookies`    | `pages/PoliticaDeCookies.tsx` | Política de cookies y Consent Mode. |
| `*` (cualquier otra ruta) | `pages/NotFound.tsx`      | Página 404.                               |

## Puntos importantes para el mantenimiento

- **Número de WhatsApp**: está repetido como constante en varios archivos
  (`Navbar.tsx`, `FloatingWhatsApp.tsx`, `Contacto.tsx`, `Index.tsx`,
  `Servicios.tsx`). Si el número cambia, debe actualizarse en los cinco
  lugares (están marcados con comentarios `TODO`).
- **SEO por página**: cada página llama al hook `useDocumentHead` para
  definir su `<title>`, meta descripción y URL canónica (ver
  `src/hooks/useDocumentHead.ts`).
- **Cookies y Google Analytics**: el consentimiento se gestiona con el
  componente `CookieConsent.tsx` mediante Google Consent Mode v2. El texto
  legal correspondiente vive en `PoliticaDeCookies.tsx` y
  `AvisoDePrivacidad.tsx`; si cambia el uso de cookies o de terceros, estos
  textos deben actualizarse manualmente junto con su fecha de "última
  actualización".
- **Contenido legal como texto estático**: el aviso de privacidad y la
  política de cookies no provienen de un CMS; son JSX escrito directamente
  en los componentes de página.

## Cómo editar este código

Hay varias formas de trabajar en este proyecto:

**Usar Lovable**

Visita el [proyecto en Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)
y describe los cambios que deseas hacer mediante instrucciones (prompts).
Los cambios se sincronizan automáticamente con este repositorio.

**Usar tu editor o IDE preferido (desarrollo local)**

Requisito: tener Node.js y npm instalados (se recomienda instalar Node
mediante [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# 2. Entrar a la carpeta del proyecto
cd impresos-lor-website

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo (con recarga en caliente)
npm run dev
```

**Editar un archivo directamente en GitHub**

- Navega hasta el archivo deseado.
- Haz clic en el ícono de lápiz ("Edit") en la parte superior derecha.
- Realiza los cambios y confirma (commit) directamente desde GitHub.

**Usar GitHub Codespaces**

- Desde la página principal del repositorio, haz clic en el botón verde "Code".
- Selecciona la pestaña "Codespaces".
- Haz clic en "New codespace" para iniciar un entorno de desarrollo en la nube.
- Edita, confirma (commit) y sube (push) los cambios desde ahí.

## Integración y entrega continua (CI / auto-merge)

El repositorio incluye dos workflows de GitHub Actions pensados para el
flujo de trabajo con la agencia (rama `main` protegida, todo el trabajo vía
Pull Request):

- **`.github/workflows/ci.yml`** — en cada PR hacia `main` corre
  automáticamente `npm run lint`, `npm run build` y `npm run test`.
- **`.github/workflows/auto-merge.yml`** — habilita el auto-merge nativo
  de GitHub en cuanto se abre o actualiza un PR. GitHub completa el merge
  (squash) automáticamente en cuanto **todos** los checks requeridos
  pasen — por ejemplo el CI de este repo y, si se agrega, el build de
  Cloudflare Pages —, sin importar cuál termine al final ni que alguien
  le dé clic manualmente a "Merge".

  *Nota:* como el repositorio es público, la función nativa "Allow
  auto-merge" de GitHub sí está disponible (en repos **privados** con
  plan gratuito no lo está).

Estos workflows ya quedan activos al hacer push, pero **la protección de la
rama `main` debe configurarse una sola vez, manualmente, desde GitHub**
(no existe una API automatizable para esto en este flujo):

1. Ve a **Settings → General** y activa **"Allow auto-merge"**.
2. Ve a **Settings → General → Pull Requests** y deja activado únicamente
   **"Allow squash merging"** (desactiva "Allow merge commits" y "Allow
   rebase merging"), para que el historial de `main` quede como un commit
   limpio por cada PR.
3. Ve a **Settings → Branches → Add branch protection rule** y crea una regla para `main`:
   - Activa **"Require a pull request before merging"** (así nadie puede subir directo a `main`).
   - Activa **"Require status checks to pass before merging"** y selecciona **cada check** que deba pasar antes de mergear (por ejemplo "Lint, build y pruebas" del workflow `ci.yml`, y el check de Cloudflare Pages si está en uso).
   - *No* actives "Require approvals" si quieres que el merge sea 100% automático solo con base en los checks (esta fue la configuración solicitada). Si más adelante quieres que alguien revise el código antes de mergear, actívala y define el número de aprobaciones necesarias.

Con esto: la agencia crea una rama, abre un PR hacia `main`, los checks
requeridos corren solos, y en cuanto todos pasan, el PR se mergea
automáticamente sin intervención manual. Si algún check falla, el PR se
queda bloqueado hasta que se corrija.

## Scripts disponibles

| Comando            | Descripción                                                   |
| ------------------- | -------------------------------------------------------------- |
| `npm run dev`        | Inicia el servidor de desarrollo en `http://localhost:8080`.  |
| `npm run build`      | Genera la compilación de producción en `dist/`.               |
| `npm run build:dev`  | Genera una compilación en modo desarrollo (sin minificar).    |
| `npm run preview`    | Sirve localmente la carpeta `dist/` ya compilada.              |
| `npm run lint`       | Ejecuta ESLint sobre todo el proyecto.                         |
| `npm run test`       | Ejecuta las pruebas automatizadas una sola vez (Vitest).       |
| `npm run test:watch` | Ejecuta las pruebas en modo observador (watch).                |

## Despliegue (deploy)

La forma más simple es publicar desde Lovable: abre el proyecto y usa
**Share → Publish**.

## Conectar un dominio personalizado

Sí es posible. En Lovable, ve a **Project → Settings → Domains** y haz clic
en **Connect Domain**.

Más información: [Configurar un dominio personalizado](https://docs.lovable.dev/features/custom-domain#custom-domain).
