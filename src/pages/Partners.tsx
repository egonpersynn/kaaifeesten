import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const partners = [
  { id: 1, name: "Hoofdsponsor", tier: "gold" },
  { id: 2, name: "Partner", tier: "silver" },
  { id: 3, name: "Partner", tier: "silver" },
  { id: 4, name: "Partner", tier: "bronze" },
  { id: 5, name: "Partner", tier: "bronze" },
  { id: 6, name: "Partner", tier: "bronze" },
];

const Partners = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Dark hero background for proper navbar contrast */}
      <div className="bg-foreground">
        <Navbar />
      </div>
      
      {/* Hero with image placeholder */}
      <section className="relative">
        <div className="h-[60vh] bg-primary relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=1920&h=800&fit=crop"
            alt="Partners achtergrond"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
                Onze Partners
              </h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-light italic">
                Samen maken we De Kaaifeesten mogelijk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
              Word partner van De Kaaifeesten
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              De Kaaifeesten is een van de grootste evenementen in de regio en trekt jaarlijks 
              duizenden bezoekers aan. Door partner te worden, bereikt u een breed en divers 
              publiek en draagt u bij aan een uniek stukje Vlaams erfgoed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Wij bieden verschillende partnerpakketten aan, aangepast aan uw wensen en budget. 
              Van zichtbaarheid op onze website en sociale media tot exclusieve branding tijdens 
              het evenement — <em className="italic">samen vinden we de perfecte match</em>.
            </p>
            <a href="/contact">
              <Button variant="default" size="lg" className="uppercase tracking-[0.15em] text-xs">
                <Mail className="w-4 h-4 mr-2" />
                Neem contact op
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Current Partners Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Met dank aan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Huidige Partners
            </h2>
          </div>

          {/* Gold Partners */}
          <div className="mb-16">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Hoofdsponsors
            </h3>
            <div className="flex justify-start">
              {partners
                .filter((p) => p.tier === "gold")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-64 h-40 bg-background border border-border flex items-center justify-center hover:border-foreground transition-colors"
                  >
                    <span className="text-muted-foreground text-xs uppercase tracking-wider">
                      Logo partner
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Silver Partners */}
          <div className="mb-16">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Partners
            </h3>
            <div className="flex flex-wrap gap-px bg-border border border-border max-w-3xl">
              {partners
                .filter((p) => p.tier === "silver")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-48 h-32 bg-background flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <span className="text-muted-foreground text-xs uppercase tracking-wider">
                      Logo
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Bronze Partners */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Supporters
            </h3>
            <div className="flex flex-wrap gap-px bg-border border border-border max-w-2xl">
              {partners
                .filter((p) => p.tier === "bronze")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-32 h-24 bg-background flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <span className="text-muted-foreground text-[10px] uppercase tracking-wider">
                      Logo
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Partners;