import { MessageCircle, FileText, Stethoscope, Tag, Package, Timer, Settings, Truck, Briefcase, MapPin, UtensilsCrossed, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_URL = "https://wa.me/522213543712";

const services = [
  {
    icon: FileText,
    title: "Formatos comerciales",
    text: "Hojas membretadas, formatos para inventarios, notas de remisión, folders, comandas, manteletas, boletos y papel grado alimenticio.",
  },
  {
    icon: Stethoscope,
    title: "Recetarios y Formatos Médicos",
    text: "Recetarios, formatos de registro, folders, y sobres para radiografías o resultados de laboratorio.",
  },
  {
    icon: Tag,
    title: "Etiquetas",
    text: "Adhesivas para identificación de producto, etiquetas en cartulinas (copetes) para exhibición, y etiquetas con suajes especiales.",
  },
  {
    icon: Package,
    title: "Cajas",
    text: "Empaques para perfumes, lentes, chocolates, hamburguesas, alitas y marquesitas. Acabados con barniz brillante o hotstamping.",
  },
  {
    icon: UtensilsCrossed,
    title: "Impresos para Restaurantes",
    text: "Remisiones para respaldo de entregas, manteletas y comandas. En variedad de tamaños y papeles, a un color o en full color.",
  },
  {
    icon: Leaf,
    title: "Papel Grado Alimenticio",
    text: "Protege la frescura e higiene de tus alimentos. Envuelve hamburguesas, alitas, galletas y más con papel certificado.",
  },
];

const valueProps = [
  {
    icon: Timer,
    text: "Somos una empresa pequeña, ofreciendo gran calidad y tiempos de entrega significativamente mejores que la competencia.",
  },
  {
    icon: Settings,
    text: "Control total sobre la producción. Respondemos rápido a cotizaciones y entregas.",
  },
  {
    icon: Truck,
    text: "Entregas a domicilio en áreas cercanas a nosotros.",
  },
  {
    icon: Briefcase,
    text: "Trabajamos con clientes directos y despachos de diseño, ofreciendo flexibilidad en precios para mantenerlos competitivos.",
  },
];

const galleryImages = [
  { src: "/placeholder.svg", alt: "Impresión de formatos comerciales" },
  { src: "/placeholder.svg", alt: "Impresión de etiquetas adhesivas" },
  { src: "/placeholder.svg", alt: "Cajas impresas con acabado especial" },
  { src: "/placeholder.svg", alt: "Recetarios médicos impresos" },
  { src: "/placeholder.svg", alt: "Impresión offset de alta calidad" },
  { src: "/placeholder.svg", alt: "Impresión de lona para restaurante" },
];

const Index = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl max-w-4xl mx-auto">
            Impresión y Offset para Negocios en Puebla y Cholula
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Calidad profesional, tiempos de entrega rápidos y precios competitivos para PyMES.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
            <Button size="lg" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 text-base font-semibold gap-2 px-8 py-6">
              <MessageCircle className="h-5 w-5" />
              Cotizar mi proyecto ahora
            </Button>
          </a>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Impresos en papel, de alta calidad.
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Desde 1 color, hasta selección de color.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-none shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14 md:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <prop.icon className="h-8 w-8 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{prop.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14 md:text-4xl">
            Nuestro Trabajo
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8 md:text-4xl">
            Encuéntranos
          </h2>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-accent" />
              <span>C. Maya Sur #16 Loc38, Bello Horizonte, 72760 San Pedro Cholula, Pue., México</span>
            </div>
          </div>
          <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md">
            <iframe
              title="Ubicación de Impresos Lor"
              src="https://maps.google.com/maps?width=100%25&height=100%25&hl=es&q=Impresos+Lor,+C.+Maya+Sur+16,+Bello+Horizonte,+72760+San+Pedro+Cholula,+Pue.&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
