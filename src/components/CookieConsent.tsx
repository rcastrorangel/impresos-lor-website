/**
 * Banner de consentimiento de cookies (Google Consent Mode v2).
 *
 * Se muestra únicamente si el usuario no ha registrado una preferencia
 * previa en `localStorage`. Si el usuario ya había aceptado en una visita
 * anterior, se reenvía el consentimiento a Google Analytics al cargar la
 * página, ya que gtag no persiste este estado entre sesiones por sí mismo.
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Llave usada en localStorage para persistir la preferencia de cookies. */
const CONSENT_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(() => !localStorage.getItem(CONSENT_KEY));

  /** Informa a Google Analytics (gtag) el estado actual de consentimiento. */
  const updateConsent = (state: "granted" | "denied") => {
    window.gtag?.("consent", "update", {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    });
  };

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === "granted") {
      updateConsent("granted");
    }
  }, []);

  /** Guarda la aceptación del usuario y habilita las cookies analíticas. */
  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateConsent("granted");
    setVisible(false);
  };

  /** Guarda el rechazo del usuario y mantiene las cookies analíticas deshabilitadas. */
  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateConsent("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-card border-t border-border shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          Usamos cookies para analizar el tráfico del sitio y mejorar tu experiencia.{" "}
          <Link to="/politica-de-cookies" className="text-primary underline">
            Más información
          </Link>.
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={handleReject}>
            Rechazar
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
