import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Configuración de Vite. Referencia: https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // "::" expone el servidor de desarrollo en todas las interfaces de red (IPv6/IPv4).
    host: "::",
    port: 8080,
    hmr: {
      // Desactiva el overlay de errores de Vite en pantalla completa durante el desarrollo.
      overlay: false,
    },
  },
  plugins: [
    react(),
    // El "component tagger" de Lovable solo se activa en modo desarrollo;
    // permite editar visualmente los componentes desde la plataforma Lovable.
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      // Permite usar importaciones absolutas del tipo "@/components/..." en vez de rutas relativas.
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
