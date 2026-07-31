/**
 * Hook para gestionar las etiquetas `<head>` (título, meta descripción,
 * Open Graph y URL canónica) de cada página.
 *
 * Al no usar un framework con soporte nativo de SSR/SEO (como Next.js),
 * este hook actualiza manualmente el DOM del `<head>` cuando el componente
 * de página se monta o cuando cambian sus props.
 */
import { useEffect } from "react";

/** Datos de SEO que cada página debe proporcionar al hook. */
interface DocumentHeadOptions {
  /** Título de la página (se le agrega el nombre del sitio automáticamente). */
  title: string;
  /** Meta descripción usada por buscadores y redes sociales. */
  description: string;
  /** Ruta relativa (ej. "/servicios") usada para construir la URL canónica. */
  canonical?: string;
}

const BASE_URL = "https://impresoslor.com.mx";
const SITE_NAME = "Impresos Lor";

/**
 * Actualiza el título del documento y las etiquetas meta/canónica
 * correspondientes a la página actual.
 *
 * @param options - Título, descripción y ruta canónica de la página.
 */
const useDocumentHead = ({ title, description, canonical }: DocumentHeadOptions) => {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    // Crea la etiqueta <meta> si no existe, o actualiza su contenido si ya existe.
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);

    // Update canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [title, description, canonical]);
};

export default useDocumentHead;
