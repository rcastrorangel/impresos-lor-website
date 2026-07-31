import { MessageCircle, FileText, Stethoscope, Tag, Package } from "lucide-react";
import useDocumentHead from "@/hooks/useDocumentHead";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * Página de servicios.
 *
 * Detalla, en formato de acordeón, cada línea de servicio ofrecida por
 * la empresa, con una descripción más extensa que la mostrada en la
 * página de inicio.
 */

// TODO: si el número de WhatsApp cambia, actualizarlo también en
// Navbar.tsx, FloatingWhatsApp.tsx y src/pages/Contacto.tsx.
const WHATSAPP_URL = "https://wa.me/522218594321";

/** Lista de servicios detallados, mostrados como secciones del acordeón. */
const services = [
  {
    id: "formatos",
    icon: FileText,
    title: "Formatos comerciales",
    description:
      "Ofrecemos impresión de hojas membretadas, formatos para inventarios, notas de remisión, folders, comandas, manteletas, boletos y papel grado alimenticio. Trabajamos con impresión offset desde 1 color hasta selección de color completa, garantizando acabados profesionales para tu negocio.",
  },
  {
    id: "recetarios",
    icon: Stethoscope,
    title: "Recetarios y Formatos Médicos",
    description:
      "Imprimimos recetarios médicos, formatos de registro de pacientes, folders para consultorios, y sobres especiales para radiografías o resultados de laboratorio. Todos nuestros productos cumplen con los estándares de presentación profesional que el sector salud requiere.",
  },
  {
    id: "etiquetas",
    icon: Tag,
    title: "Etiquetas",
    description:
      "Producimos etiquetas adhesivas para identificación de producto, etiquetas en cartulinas (copetes) ideales para exhibición en punto de venta, y etiquetas con suajes especiales adaptados a la forma de tu producto. Disponibles en múltiples acabados y materiales.",
  },
  {
    id: "cajas",
    icon: Package,
    title: "Cajas",
    description:
      "Fabricamos empaques personalizados para perfumes, lentes, chocolates, hamburguesas, alitas y marquesitas, entre otros productos. Ofrecemos acabados premium como barniz brillante y hotstamping para darle a tu producto una presentación de alta gama.",
  },
];

const Servicios = () => {
  useDocumentHead({
    title: "Servicios de Impresión Offset",
    description: "Conoce nuestros servicios: formatos comerciales, recetarios médicos, etiquetas y cajas. Impresión offset en Puebla y Cholula.",
    canonical: "/servicios",
  });

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
            Nuestros Servicios de Impresión
          </h1>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Soluciones completas de impresión offset para todo tipo de negocio.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem key={service.id} value={service.id} className="border-border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-heading text-lg font-semibold text-foreground">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Pregúntanos por WhatsApp.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
            <Button size="lg" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 text-base font-semibold gap-2 px-8 py-6">
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Servicios;
