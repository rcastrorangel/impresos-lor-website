import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">Impresos Lor</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Impresión offset de alta calidad para negocios en Puebla y Cholula.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wider">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Inicio</Link>
              <Link to="/servicios" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Servicios</Link>
              <Link to="/contacto" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contacto</Link>
              <Link to="/aviso-de-privacidad" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Aviso de Privacidad</Link>
              <Link to="/politica-de-cookies" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Política de Cookies</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/impresoslor" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/impresoslor/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Impresos Lor. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
