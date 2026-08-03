/**
 * Hook para detectar si el ancho de la ventana corresponde a un
 * dispositivo móvil, según el punto de quiebre (breakpoint) definido.
 */
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Indica si el ancho actual de la ventana está por debajo del breakpoint
 * móvil. Se actualiza automáticamente al redimensionar la ventana.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
