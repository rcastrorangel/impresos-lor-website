/**
 * Página de Política de Cookies. Documenta las cookies utilizadas por el
 * sitio (funcionales y analíticas de Google Analytics/GA4) y cómo se
 * relacionan con el banner de consentimiento (`CookieConsent`) y Google
 * Consent Mode v2.
 *
 * El contenido es texto estático: si se agregan o eliminan cookies
 * (por ejemplo, al integrar un nuevo servicio de terceros), las tablas de
 * este archivo deben actualizarse manualmente.
 */
import useDocumentHead from "@/hooks/useDocumentHead";

const PoliticaDeCookies = () => {
  useDocumentHead({
    title: "Política de Cookies",
    description: "Política de cookies de Impresos Lor. Conoce qué cookies usamos y cómo gestionarlas.",
    canonical: "/politica-de-cookies",
  });
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>
            Este sitio web, operado por <strong className="text-foreground">Impresos Lor</strong>, utiliza cookies y tecnologías similares. A continuación, te explicamos qué son, cuáles usamos y cómo puedes gestionarlas.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tablet o teléfono) cuando visitas un sitio web. Permiten que el sitio recuerde información sobre tu visita, como tus preferencias, para facilitar tu próxima visita y hacer el sitio más útil.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            2. Cookies que utilizamos
          </h2>

          <h3 className="font-heading text-lg font-medium text-foreground">
            Cookies estrictamente necesarias
          </h3>
          <p>
            Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas. Incluyen cookies de preferencia de consentimiento.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-2 border-b border-border text-foreground">Cookie</th>
                  <th className="text-left p-2 border-b border-border text-foreground">Finalidad</th>
                  <th className="text-left p-2 border-b border-border text-foreground">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-border font-mono text-xs">cookie_consent</td>
                  <td className="p-2 border-b border-border">Almacena tu preferencia de consentimiento de cookies</td>
                  <td className="p-2 border-b border-border">Permanente (localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-lg font-medium text-foreground">
            Cookies analíticas (requieren consentimiento)
          </h3>
          <p>
            Estas cookies se instalan únicamente si aceptas su uso a través del banner de consentimiento. Son proporcionadas por Google Analytics (GA4) y nos permiten entender cómo los visitantes interactúan con el sitio.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-2 border-b border-border text-foreground">Cookie</th>
                  <th className="text-left p-2 border-b border-border text-foreground">Finalidad</th>
                  <th className="text-left p-2 border-b border-border text-foreground">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-border font-mono text-xs">_ga</td>
                  <td className="p-2 border-b border-border">Distinguir usuarios únicos</td>
                  <td className="p-2 border-b border-border">2 años</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-border font-mono text-xs">_ga_*</td>
                  <td className="p-2 border-b border-border">Mantener el estado de la sesión</td>
                  <td className="p-2 border-b border-border">2 años</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            3. Google Consent Mode v2
          </h2>
          <p>
            Implementamos Google Consent Mode v2, lo cual significa que:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Por defecto, todas las cookies analíticas y publicitarias están <strong className="text-foreground">denegadas</strong></li>
            <li>Las cookies solo se activan cuando aceptas explícitamente su uso</li>
            <li>Si rechazas las cookies, Google Analytics no almacenará ninguna cookie en tu dispositivo</li>
            <li>Tu preferencia queda guardada para futuras visitas</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            4. ¿Cómo gestionar las cookies?
          </h2>
          <p>
            Puedes gestionar tus preferencias de cookies de las siguientes maneras:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-foreground">Banner de consentimiento:</strong> Al visitar el sitio por primera vez, aparecerá un banner donde puedes aceptar o rechazar las cookies analíticas.
            </li>
            <li>
              <strong className="text-foreground">Configuración del navegador:</strong> Puedes configurar tu navegador para bloquear o eliminar cookies. Consulta la ayuda de tu navegador para más información.
            </li>
            <li>
              <strong className="text-foreground">Complemento de exclusión de Google Analytics:</strong>{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Descargar complemento
              </a>
            </li>
          </ul>
          <p>
            Para restablecer tu preferencia de cookies en este sitio, puedes borrar el dato <code className="bg-muted px-1 rounded text-xs">cookie_consent</code> del almacenamiento local de tu navegador.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            5. Cambios a esta política
          </h2>
          <p>
            Nos reservamos el derecho de modificar esta Política de Cookies en cualquier momento. Los cambios serán publicados en esta misma página.
          </p>

          <p className="text-xs text-muted-foreground/70 pt-4 border-t border-border">
            Última actualización: marzo de 2026.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PoliticaDeCookies;
