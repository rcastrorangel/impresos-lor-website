import { useEffect } from "react";

interface DocumentHeadOptions {
  title: string;
  description: string;
  canonical?: string;
}

const BASE_URL = "https://impresoslor.com.mx";
const SITE_NAME = "Impresos Lor";

const useDocumentHead = ({ title, description, canonical }: DocumentHeadOptions) => {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

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
