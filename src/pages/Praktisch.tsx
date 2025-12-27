import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

type DayKey = "vrijdag" | "zaterdag" | "zondag" | "maandag";

interface DayInfo {
  title: string;
  fullDate: string;
  content: React.ReactNode;
}

const dayContent: Record<DayKey, DayInfo> = {
  vrijdag: {
    title: "Vrijdag 2 oktober 2026",
    fullDate: "2 oktober 2026",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Vanaf <strong className="text-foreground">19u</strong> vindt er een <strong className="text-foreground">rockavond</strong> plaats in de tent.
        </p>
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <p className="text-foreground font-semibold">🎸 Gratis inkom!</p>
        </div>
        <p className="text-muted-foreground">
          De line-up wordt later gecommuniceerd. Blijf op de hoogte via onze website en sociale media.
        </p>
      </div>
    ),
  },
  zaterdag: {
    title: "Zaterdag 3 oktober 2026",
    fullDate: "3 oktober 2026",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">11u</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Receptie buurtbewoners</h4>
              <p className="text-muted-foreground">Welkom aan alle buurtbewoners voor een gezellig samenzijn.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">14u-16u30</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Kindernamiddag</h4>
              <p className="text-muted-foreground">Leuke activiteiten en entertainment voor de kleinsten.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">18u</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Tent opent</h4>
              <p className="text-muted-foreground">Avondprogramma start om 20u. De line-up wordt later bekendgemaakt.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-accent/20 rounded-lg p-4 border border-accent/30">
          <p className="text-foreground font-semibold mb-3">🎫 Tickets vereist voor de avond!</p>
          <a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ticket" size="lg">
              Koop tickets voor zaterdagavond
            </Button>
          </a>
        </div>
      </div>
    ),
  },
  zondag: {
    title: "Zondag 4 oktober 2026",
    fullDate: "4 oktober 2026",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
          <h4 className="font-display text-2xl font-bold text-foreground mb-2">
            🏆 De Grootste Rommelmarkt van Vlaanderen
          </h4>
          <p className="text-muted-foreground">
            Met circa 1300 standhouders door de straten van Eeklo.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Parkeren</h4>
          <p className="text-muted-foreground">
            Er zijn <strong className="text-foreground">9 verschillende parkings</strong> beschikbaar, 
            waaronder parking aan het station en de sporthal.
          </p>
          
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground italic">
              📍 Het plan van de rommelmarkt wordt hier binnenkort geüpload.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Avondprogramma: Ambiance op 't Kaaiken</h4>
          <p className="text-muted-foreground">
            's Avonds vindt <strong className="text-foreground">Ambiance op 't Kaaiken</strong> plaats 
            met tal van schlagerzangers.
          </p>
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <p className="text-foreground font-semibold">🎵 Gratis toegang tot de tent!</p>
          </div>
        </div>
      </div>
    ),
  },
  maandag: {
    title: "Maandag 5 oktober 2026",
    fullDate: "5 oktober 2026",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">13u</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Tent opent</h4>
              <p className="text-muted-foreground">De tent gaat open voor de seniorennamiddag.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">14u</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Seniorennamiddag</h4>
              <p className="text-muted-foreground">
                Tijdens de seniorennamiddag zijn er tal van optredens. Bij de pauze kunnen bezoekers 
                genieten van brood met beleg en 2 tassen koffie. De seniorennamiddag eindigt om 17u.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Tickets seniorennamiddag:</strong> Te verkrijgen bij ...
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">20u</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Toneel</h4>
              <p className="text-muted-foreground">
                We sluiten het weekend af met een toneelvoorstelling.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <p className="text-foreground font-semibold">🎭 Gratis toegang voor het toneel!</p>
        </div>
      </div>
    ),
  },
};

const Praktisch = () => {
  const [selectedDay, setSelectedDay] = useState<DayKey | null>(null);

  const days: { key: DayKey; label: string }[] = [
    { key: "vrijdag", label: "Vrijdag 2 oktober" },
    { key: "zaterdag", label: "Zaterdag 3 oktober" },
    { key: "zondag", label: "Zondag 4 oktober" },
    { key: "maandag", label: "Maandag 5 oktober" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground text-center mb-8">
            Praktische Info
          </h1>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-card text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                2-5 oktober 2026
              </h3>
              <p className="text-muted-foreground text-sm">
                Eerste weekend van oktober
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Gebr. Van De Woestyneplein
              </h3>
              <p className="text-muted-foreground text-sm">
                9900 Eeklo
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Alle leeftijden welkom
              </h3>
              <p className="text-muted-foreground text-sm">
                Van jong tot oud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day Selection */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Selecteer een dag voor meer informatie
              </h2>
            </div>

            {/* Day Dropdown */}
            <div className="bg-card rounded-xl p-6 shadow-card mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {days.map((day) => (
                  <button
                    key={day.key}
                    onClick={() => setSelectedDay(selectedDay === day.key ? null : day.key)}
                    className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedDay === day.key
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Day Content */}
            {selectedDay && (
              <div className="bg-card rounded-xl p-8 shadow-card animate-fade-in">
                <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                  {dayContent[selectedDay].title}
                </h3>
                {dayContent[selectedDay].content}
              </div>
            )}

            {!selectedDay && (
              <div className="text-center py-12 text-muted-foreground">
                <ChevronDown className="w-8 h-8 mx-auto mb-4 animate-bounce" />
                <p>Klik op een dag hierboven om de details te bekijken</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Praktisch;
