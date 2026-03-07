import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "granted") {
      updateConsent("granted");
    }
  }, []);

  const updateConsent = (state: "granted" | "denied") => {
    window.gtag?.("consent", "update", {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    });
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateConsent("granted");
    setVisible(false);
  };

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
          Usamos cookies para analizar el tráfico del sitio y mejorar tu experiencia. Puedes aceptar o rechazar el uso de cookies analíticas.
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
