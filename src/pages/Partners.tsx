import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const partners = [
  {
    id: 1,
    name: "Hoofdsponsor",
    tier: "gold",
  },
  {
    id: 2,
    name: "Partner",
    tier: "silver",
  },
  {
    id: 3,
    name: "Partner",
    tier: "silver",
  },
  {
    id: 4,
    name: "Partner",
    tier: "bronze",
  },
  {
    id: 5,
    name: "Partner",
    tier: "bronze",
  },
  {
    id: 6,
    name: "Partner",
    tier: "bronze",
  },
];

const Partners = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero with image placeholder */}
      <section className="pt-24 relative">
        <div className="h-[50vh] bg-secondary relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=1920&h=800&fit=crop"
            alt="Partners achtergrond"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                Onze Partners
              </h1>
              <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
                Samen maken we De Kaaifeesten mogelijk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Word partner van De Kaaifeesten
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              De Kaaifeesten is een van de grootste evenementen in de regio en trekt jaarlijks 
              duizenden bezoekers aan. Door partner te worden, bereikt u een breed en divers 
              publiek en draagt u bij aan een uniek stukje Vlaams erfgoed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wij bieden verschillende partnerpakketten aan, aangepast aan uw wensen en budget. 
              Van zichtbaarheid op onze website en sociale media tot exclusieve branding tijdens 
              het evenement - samen vinden we de perfecte match.
            </p>
            <a href="/contact">
              <Button variant="festival" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Neem contact op
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Current Partners Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Huidige Partners
            </h2>
            <p className="text-muted-foreground">
              Met dank aan onze partners die dit evenement mogelijk maken
            </p>
          </div>

          {/* Gold Partners */}
          <div className="mb-12">
            <h3 className="text-center text-lg font-semibold text-primary mb-6 uppercase tracking-wider">
              Hoofdsponsors
            </h3>
            <div className="flex justify-center">
              {partners
                .filter((p) => p.tier === "gold")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-64 h-40 bg-card rounded-xl shadow-card flex items-center justify-center border-2 border-accent/30 hover:border-accent transition-colors"
                  >
                    <span className="text-muted-foreground text-sm">
                      Logo partner
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Silver Partners */}
          <div className="mb-12">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {partners
                .filter((p) => p.tier === "silver")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-48 h-32 bg-card rounded-xl shadow-card flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <span className="text-muted-foreground text-sm">
                      Logo partner
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Bronze Partners */}
          <div>
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
              Supporters
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {partners
                .filter((p) => p.tier === "bronze")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-36 h-24 bg-card rounded-lg shadow-card flex items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <span className="text-muted-foreground text-xs">
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
