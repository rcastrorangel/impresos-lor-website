/**
 * Hook que envía un evento `page_view` a Google Analytics (gtag) cada vez
 * que el usuario navega a una nueva ruta dentro de la aplicación de una sola
 * página (SPA), ya que gtag no detecta estos cambios automáticamente.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Registra la vista de página actual en Google Analytics en cada cambio de ruta. */
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location]);
};

export default usePageTracking;
