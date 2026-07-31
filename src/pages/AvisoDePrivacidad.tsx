/**
 * Página de Aviso de Privacidad, conforme a la Ley Federal de Protección
 * de Datos Personales en Posesión de los Particulares (LFPDPPP).
 *
 * El contenido legal es texto estático embebido en el componente; si
 * cambian las prácticas de tratamiento de datos del sitio (p. ej. se
 * agrega un nuevo proveedor de analítica), este archivo debe actualizarse
 * manualmente, incluyendo la fecha de "Última actualización" al final.
 */
import useDocumentHead from "@/hooks/useDocumentHead";

const AvisoDePrivacidad = () => {
  useDocumentHead({
    title: "Aviso de Privacidad",
    description: "Consulta el aviso de privacidad de Impresos Lor. Conoce cómo protegemos tus datos personales.",
    canonical: "/aviso-de-privacidad",
  });
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">
          Aviso de Privacidad
        </h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>
            <strong className="text-foreground">Impresos Lor</strong>, con domicilio en Puebla, México (en adelante, "el Responsable"), es responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a la{" "}
            <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP) y su Reglamento.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            1. Datos personales que recabamos
          </h2>
          <p>Para las finalidades señaladas, podemos recabar los siguientes datos personales:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Número de teléfono</li>
            <li>Información sobre el servicio de interés</li>
            <li>Mensaje o comentarios adicionales</li>
            <li>Datos de navegación y uso del sitio web (a través de cookies analíticas, sujeto a su consentimiento)</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            2. Finalidades del tratamiento
          </h2>
          <h3 className="font-heading text-lg font-medium text-foreground">Finalidades primarias (necesarias):</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Atender sus solicitudes de cotización y/o información</li>
            <li>Dar seguimiento a la comunicación iniciada por usted</li>
            <li>Prestar los servicios de impresión contratados</li>
          </ul>
          <h3 className="font-heading text-lg font-medium text-foreground">Finalidades secundarias (no necesarias):</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Análisis estadístico del tráfico y uso del sitio web mediante Google Analytics</li>
            <li>Mejora de la experiencia de navegación</li>
          </ul>
          <p>
            Si no desea que sus datos personales sean tratados para las finalidades secundarias, puede rechazar el uso de cookies analíticas a través del banner de consentimiento de cookies que se muestra al visitar el sitio.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            3. Google Analytics
          </h2>
          <p>
            Este sitio web utiliza Google Analytics, un servicio de análisis web proporcionado por Google LLC. Google Analytics utiliza cookies para analizar el uso del sitio. La información generada por la cookie acerca de su uso del sitio web se transmite a servidores de Google.
          </p>
          <p>Los datos recopilados incluyen:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Páginas visitadas y tiempo de permanencia</li>
            <li>Datos del dispositivo y navegador</li>
            <li>Ubicación geográfica aproximada (a nivel ciudad)</li>
            <li>Fuente de tráfico</li>
          </ul>
          <p>
            Utilizamos la función de anonimización de IP de Google Analytics, por lo que su dirección IP es truncada antes de ser almacenada. Estos datos se procesan únicamente con fines estadísticos y no se vinculan con información personal identificable.
          </p>
          <p>
            Para más información sobre cómo Google utiliza los datos, visite:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Política de Privacidad de Google
            </a>.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            4. Transferencia de datos
          </h2>
          <p>
            Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la LFPDPPP. Los datos recopilados por Google Analytics se transfieren a servidores de Google ubicados en Estados Unidos, bajo los mecanismos de protección de datos aplicables.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            5. Derechos ARCO
          </h2>
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, envíe un mensaje a nuestro número de WhatsApp o al correo electrónico del Responsable indicando:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo del titular</li>
            <li>Descripción clara del derecho que desea ejercer</li>
            <li>Cualquier documento que facilite la localización de sus datos</li>
          </ul>
          <p>
            El Responsable dará respuesta a su solicitud en un plazo máximo de 20 días hábiles contados a partir de la recepción de la misma.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            6. Cambios al Aviso de Privacidad
          </h2>
          <p>
            El Responsable se reserva el derecho de modificar el presente Aviso de Privacidad. Cualquier cambio será publicado en esta misma página web.
          </p>

          <p className="text-xs text-muted-foreground/70 pt-4 border-t border-border">
            Última actualización: marzo de 2026.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AvisoDePrivacidad;
