import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const WHATSAPP_URL = "https://wa.me/522218594321";
// CTA: single-line button

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Contacto", to: "/contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          Impresos Lor
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <Button className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold gap-2">
            <MessageCircle className="h-4 w-4" />
            Cotizar por WhatsApp
          </Button>
        </a>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-primary-foreground w-72">
            <SheetTitle className="text-primary-foreground font-heading">Menú</SheetTitle>
            <nav className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-accent ${
                    location.pathname === link.to ? "text-accent" : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 w-full font-semibold gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Cotizar por WhatsApp
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
