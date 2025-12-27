import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden",
      description: "We nemen zo snel mogelijk contact met u op.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            Contact
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-light italic">
            Heb je vragen? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border max-w-5xl mx-auto border border-border">
            {/* Contact Form */}
            <div className="bg-background p-8 md:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">
                Stuur ons een bericht
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-xs uppercase tracking-wider">Voornaam *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Jan"
                      className="border-border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-xs uppercase tracking-wider">Achternaam *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Janssen"
                      className="border-border bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider">E-mailadres *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jan@voorbeeld.be"
                    className="border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wider">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+32 123 45 67 89"
                    className="border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs uppercase tracking-wider">Bedrijf</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Uw bedrijfsnaam"
                    className="border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs uppercase tracking-wider">Uw bericht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Schrijf hier uw bericht..."
                    rows={5}
                    className="border-border bg-background resize-none"
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full uppercase tracking-[0.15em] text-xs">
                  <Send className="w-4 h-4 mr-2" />
                  Verstuur bericht
                </Button>
              </form>
            </div>

            {/* Map & Contact Info */}
            <div className="bg-secondary flex flex-col">
              {/* Google Maps */}
              <div className="h-80 lg:h-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.6647474831086!2d3.5567!3d51.1858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c373f0e1a0c4e9%3A0x40099ab2f4d6f50!2sGebroeders%20Van%20de%20Woestyneplein%2C%209900%20Eeklo!5e0!3m2!1snl!2sbe!4v1703123456789!5m2!1snl!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie De Kaaifeesten"
                />
              </div>

              {/* Contact Details */}
              <div className="p-8 md:p-12 flex-1">
                <h3 className="text-lg font-bold text-foreground mb-6 tracking-tight">
                  Contactgegevens
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-foreground flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Adres</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        Gebr. Van De Woestyneplein<br />
                        9900 Eeklo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-foreground flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">E-mail</h4>
                      <a
                        href="mailto:dirkmussche7@telenet.be"
                        className="text-muted-foreground text-sm mt-1 hover:text-foreground transition-colors"
                      >
                        dirkmussche7@telenet.be
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-4 h-4 text-foreground flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Telefoon</h4>
                      <a
                        href="tel:+32476463092"
                        className="text-muted-foreground text-sm mt-1 hover:text-foreground transition-colors"
                      >
                        0476 46 30 92
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;