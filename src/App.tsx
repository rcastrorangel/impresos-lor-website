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

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AppContent = () => {
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
