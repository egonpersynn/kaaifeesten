import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Info } from "lucide-react";
import heroRommelmarkt from "@/assets/hero-rommelmarkt.png";

interface Street {
  id: number;
  name: string;
  totalSpots: number;
  availableSpots: number;
}

const streets: Street[] = [
  { id: 1, name: "Markt", totalSpots: 80, availableSpots: 45 },
  { id: 2, name: "Boelare", totalSpots: 120, availableSpots: 72 },
  { id: 3, name: "Stationsstraat", totalSpots: 95, availableSpots: 38 },
  { id: 4, name: "Molenstraat", totalSpots: 65, availableSpots: 29 },
  { id: 5, name: "Kerkstraat", totalSpots: 110, availableSpots: 55 },
  { id: 6, name: "Raverschootstraat", totalSpots: 85, availableSpots: 41 },
  { id: 7, name: "Leopoldlaan", totalSpots: 100, availableSpots: 63 },
  { id: 8, name: "Tieltsesteenweg", totalSpots: 75, availableSpots: 34 },
  { id: 9, name: "Gentsesteenweg", totalSpots: 90, availableSpots: 48 },
  { id: 10, name: "Vrombautstraat", totalSpots: 55, availableSpots: 22 },
  { id: 11, name: "Balgerhoeke", totalSpots: 70, availableSpots: 35 },
  { id: 12, name: "Peperstraat", totalSpots: 60, availableSpots: 28 },
];

const Rommelmarkt = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageBanner title="Zoek. Vind. Verwonder." eyebrow="Grootste rommelmarkt van Vlaanderen" description="Boek hier jouw standplaats voor 2026." image={heroRommelmarkt} />

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background border border-border p-8 md:p-12">
              <div className="flex items-start gap-4 mb-8">
                <Info className="w-5 h-5 text-foreground flex-shrink-0 mt-1" strokeWidth={1} />
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  Belangrijke informatie voor standhouders
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-6 p-6 border-l-2 border-primary">
                  <div>
                    <h4 className="font-semibold text-foreground">Tot 1 januari 2026</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Enkel de bewoners van de straten waarin gemarkt wordt kunnen hun plaats boeken. 
                      De prijs blijft <strong className="text-foreground">€12/6m</strong> zoals vorig jaar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 border-l-2 border-muted-foreground/30">
                  <div>
                    <h4 className="font-semibold text-foreground">1 januari 2026 — 31 maart 2026</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Enkel de standhouders die in 2025 hebben deelgenomen kunnen de plaatsen boeken 
                      die ze in 2025 innamen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 border-l-2 border-muted-foreground/30">
                  <div>
                    <h4 className="font-semibold text-foreground">Vanaf 1 april 2026</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      De plaatsen worden vrijgegeven zodat iedereen die dit wenst een plaats kan reserveren.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <Button variant="default" size="lg" className="uppercase tracking-[0.15em] text-xs">
                  Meld je aan voor de rommelmarkt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Street Availability */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Overzicht
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Beschikbare plaatsen per straat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {streets.map((street) => {
              const percentage = (street.availableSpots / street.totalSpots) * 100;
              const isLow = percentage < 30;

              return (
                <div
                  key={street.id}
                  className="bg-background p-6 hover:bg-muted transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-foreground">
                      {street.name}
                    </h3>
                    <span className={`text-xs font-medium ${isLow ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {street.availableSpots} vrij
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1 bg-muted mb-2 relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-primary"
                      style={{ width: `${100 - percentage}%` }}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {street.totalSpots - street.availableSpots} / {street.totalSpots} geboekt
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Rommelmarkt;