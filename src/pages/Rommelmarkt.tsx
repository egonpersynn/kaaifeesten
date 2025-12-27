import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Info } from "lucide-react";

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
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Zondag 4 oktober 2026
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Grootste Rommelmarkt van Vlaanderen
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Boek hier jouw standplaats voor 2026
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Belangrijke informatie voor standhouders
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Tot 1 januari 2026</h4>
                    <p className="text-muted-foreground text-sm">
                      Enkel de bewoners van de straten waarin gemarkt wordt kunnen hun plaats boeken. 
                      De prijs blijft <strong className="text-foreground">€12/6m</strong> zoals vorig jaar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">1 januari 2026 - 31 maart 2026</h4>
                    <p className="text-muted-foreground text-sm">
                      Enkel de standhouders die in 2025 hebben deelgenomen kunnen de plaatsen boeken 
                      die ze in 2025 innamen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Vanaf 1 april 2026</h4>
                    <p className="text-muted-foreground text-sm">
                      De plaatsen worden vrijgegeven zodat iedereen die dit wenst een plaats kan reserveren.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="ticket" size="xl">
                  Meld je aan voor de rommelmarkt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Street Availability */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beschikbare plaatsen per straat
            </h2>
            <p className="text-muted-foreground">
              Overzicht van de beschikbare standplaatsen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {streets.map((street) => {
              const percentage = (street.availableSpots / street.totalSpots) * 100;
              const isLow = percentage < 30;
              const isMedium = percentage >= 30 && percentage < 60;

              return (
                <div
                  key={street.id}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-foreground text-lg">
                      {street.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isLow
                          ? "bg-destructive/10 text-destructive"
                          : isMedium
                          ? "bg-accent/20 text-accent-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {street.availableSpots} vrij
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isLow
                          ? "bg-destructive"
                          : isMedium
                          ? "bg-accent"
                          : "bg-primary"
                      }`}
                      style={{ width: `${100 - percentage}%` }}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {street.totalSpots - street.availableSpots} van {street.totalSpots} geboekt
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
