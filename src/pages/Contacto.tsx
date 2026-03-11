import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "522213543712";

const SERVICE_LABELS: Record<string, string> = {
  formatos: "Formatos comerciales",
  recetarios: "Recetarios y Formatos Médicos",
  etiquetas: "Etiquetas",
  cajas: "Cajas",
  otro: "Otro",
};

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "*Nuevo mensaje desde el sitio web*",
      `📋 *Nombre:* ${formData.name.trim()}`,
      `📞 *Teléfono:* ${formData.phone.trim()}`,
      formData.service ? `🏷️ *Servicio:* ${SERVICE_LABELS[formData.service] ?? formData.service}` : "",
      formData.message.trim() ? `💬 *Mensaje:* ${formData.message.trim()}` : "",
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast({ title: "Redirigiendo a WhatsApp", description: "Se abrirá WhatsApp con tu mensaje." });
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 text-primary-foreground/70 text-lg">
            Estamos listos para ayudarte con tu próximo proyecto de impresión.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — Contact Info */}
            <div className="flex flex-col gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <a href="tel:+522223543712" className="text-muted-foreground hover:text-accent transition-colors">222 354 3712</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">+52 221 354 3712</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Correo</p>
                    <a href="mailto:impresoslor@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">impresoslor@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-muted-foreground">C. Maya Sur #16 Loc38, Bello Horizonte, 72760 San Pedro Cholula, Pue., México</p>
                  </div>
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 w-full font-semibold gap-2 py-6 text-base">
                  <MessageCircle className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </Button>
              </a>
            </div>

            {/* Right — Map */}
            <div className="aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Ubicación de Impresos Lor"
                src="https://www.google.com/maps?q=Impresos+Lor,+C.+Maya+Sur+16,+Bello+Horizonte,+72760+San+Pedro+Cholula,+Pue.&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8 md:text-3xl">
            Envíanos un mensaje
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Tu teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Servicio</Label>
              <Select value={formData.service} onValueChange={(val) => setFormData({ ...formData, service: val })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="formatos">Formatos comerciales</SelectItem>
                  <SelectItem value="recetarios">Recetarios y Formatos Médicos</SelectItem>
                  <SelectItem value="etiquetas">Etiquetas</SelectItem>
                  <SelectItem value="cajas">Cajas</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Cuéntanos sobre tu proyecto"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
