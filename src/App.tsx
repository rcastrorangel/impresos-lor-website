import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import usePageTracking from "@/hooks/usePageTracking";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import AvisoDePrivacidad from "./pages/AvisoDePrivacidad";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import NotFound from "./pages/NotFound";

// Cliente de React Query compartido por toda la aplicación.
const queryClient = new QueryClient();

/**
 * Lleva el scroll al inicio de la página cada vez que cambia la ruta.
 * No renderiza contenido visible.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/**
 * Contenido principal de la aplicación: define las rutas del sitio y
 * los elementos globales que se muestran en todas las páginas
 * (barra de navegación, pie de página, botón de WhatsApp y aviso de cookies).
 */
const AppContent = () => {
  // Registra vistas de página en Google Analytics en cada cambio de ruta.
  usePageTracking();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-de-privacidad" element={<AvisoDePrivacidad />} />
          <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </>
  );
};

/**
 * Componente raíz de la aplicación.
 * Configura los proveedores globales (React Query, tooltips, notificaciones
 * tipo "toast") y el enrutador del sitio.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
