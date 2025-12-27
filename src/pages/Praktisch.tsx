import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";

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
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Vanaf <strong className="text-foreground">19u</strong> vindt er een <em className="italic">rockavond</em> plaats in de tent.
        </p>
        <div className="border border-border p-6">
          <p className="text-foreground font-semibold uppercase tracking-wide text-sm">Gratis inkom</p>
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
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <div className="w-20 text-right flex-shrink-0">
              <span className="text-foreground font-bold text-lg">11u</span>
            </div>
            <div className="border-l border-border pl-6">
              <h4 className="font-semibold text-foreground">Receptie buurtbewoners</h4>
              <p className="text-muted-foreground text-sm mt-1">Welkom aan alle buurtbewoners voor een gezellig samenzijn.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-20 text-right flex-shrink-0">
              <span className="text-foreground font-bold text-sm">14u—16u30</span>
            </div>
            <div className="border-l border-border pl-6">
              <h4 className="font-semibold text-foreground">Kindernamiddag</h4>
              <p className="text-muted-foreground text-sm mt-1">Leuke activiteiten en entertainment voor de kleinsten.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-20 text-right flex-shrink-0">
              <span className="text-foreground font-bold text-lg">18u</span>
            </div>
            <div className="border-l border-border pl-6">
              <h4 className="font-semibold text-foreground">Tent opent</h4>
              <p className="text-muted-foreground text-sm mt-1">Avondprogramma start om 20u. De line-up wordt later bekendgemaakt.</p>
            </div>
          </div>
        </div>
        
        <div className="border border-border p-6">
          <p className="text-foreground font-semibold uppercase tracking-wide text-sm mb-4">Tickets vereist voor de avond</p>
          <a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg" className="uppercase tracking-[0.15em] text-xs">
              Koop tickets
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
      <div className="space-y-8">
        <div className="border border-border p-8">
          <h4 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
            De Grootste Rommelmarkt van Vlaanderen
          </h4>
          <p className="text-muted-foreground">
            Met circa <strong className="text-foreground">1300 standhouders</strong> door de straten van Eeklo.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-foreground uppercase tracking-wide text-sm">Parkeren</h4>
          <p className="text-muted-foreground">
            Er zijn <strong className="text-foreground">9 verschillende parkings</strong> beschikbaar, 
            waaronder parking aan het station en de sporthal.
          </p>
          
          <div className="bg-muted p-6">
            <p className="text-sm text-muted-foreground italic">
              Het plan van de rommelmarkt wordt hier binnenkort geüpload.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-foreground uppercase tracking-wide text-sm">Avondprogramma</h4>
          <p className="text-muted-foreground">
            's Avonds vindt <em className="italic">Ambiance op 't Kaaiken</em> plaats 
            met tal van schlagerzangers.
          </p>
          <div className="border border-border p-6">
            <p className="text-foreground font-semibold uppercase tracking-wide text-sm">Gratis toegang tot de tent</p>
          </div>
        </div>
      </div>
    ),
  },
  maandag: {
    title: "Maandag 5 oktober 2026",
    fullDate: "5 oktober 2026",
    content: (
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <div className="w-20 text-right flex-shrink-0">
              <span className="text-foreground font-bold text-lg">13u</span>
            </div>
            <div className="border-l border-border pl-6">
              <h4 className="font-semibold text-foreground">Tent opent</h4>
              <p className="text-muted-foreground text-sm mt-1">De tent gaat open voor de seniorennamiddag.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-20 text-right flex-shrink-0">
              <span className="text-foreground font-bold text-lg">14u</span>
            </div>
            <div className="border-l border-border pl-6">
              <h4 className="font-semibold text-foreground">Seniorennamiddag</h4>
              <p className="text-muted-foreground text-sm mt-1">
                Tijdens de seniorennamiddag zijn er tal van optredens. Bij de pauze kunnen bezoekers 
                genieten van brood met beleg en 2 tassen koffie. De seniorennamiddag eindigt om 17u.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Tickets seniorennamiddag:</strong> Te verkrijgen bij ...
          </p>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-20 text-right flex-shrink-0">
            <span className="text-foreground font-bold text-lg">20u</span>
          </div>
          <div className="border-l border-border pl-6">
            <h4 className="font-semibold text-foreground">Toneel</h4>
            <p className="text-muted-foreground text-sm mt-1">
              We sluiten het weekend af met een toneelvoorstelling.
            </p>
          </div>
        </div>

        <div className="border border-border p-6">
          <p className="text-foreground font-semibold uppercase tracking-wide text-sm">Gratis toegang voor het toneel</p>
        </div>
      </div>
    ),
  },
};

const Praktisch = () => {
  const [selectedDay, setSelectedDay] = useState<DayKey | null>("vrijdag");

  const days: { key: DayKey; label: string }[] = [
    { key: "vrijdag", label: "Vrijdag" },
    { key: "zaterdag", label: "Zaterdag" },
    { key: "zondag", label: "Zondag" },
    { key: "maandag", label: "Maandag" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground text-center tracking-tight">
            Praktische Info
          </h1>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border max-w-4xl mx-auto border border-border">
            <div className="bg-background p-8 text-center">
              <Calendar className="w-6 h-6 text-foreground mx-auto mb-4" strokeWidth={1} />
              <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">
                2—5 oktober 2026
              </h3>
              <p className="text-muted-foreground text-sm">
                Eerste weekend van oktober
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <MapPin className="w-6 h-6 text-foreground mx-auto mb-4" strokeWidth={1} />
              <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">
                Gebr. Van De Woestyneplein
              </h3>
              <p className="text-muted-foreground text-sm">
                9900 Eeklo
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <Users className="w-6 h-6 text-foreground mx-auto mb-4" strokeWidth={1} />
              <h3 className="text-lg font-bold text-foreground mb-1 tracking-tight">
                Alle leeftijden
              </h3>
              <p className="text-muted-foreground text-sm">
                Van jong tot oud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day Selection */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                Programma per dag
              </h2>
              <p className="text-muted-foreground text-sm">
                Selecteer een dag voor meer informatie
              </p>
            </div>

            {/* Day Buttons */}
            <div className="grid grid-cols-4 gap-px bg-border border border-border mb-12">
              {days.map((day) => (
                <button
                  key={day.key}
                  onClick={() => setSelectedDay(selectedDay === day.key ? null : day.key)}
                  className={`p-4 font-medium text-sm uppercase tracking-[0.1em] transition-all duration-200 ${
                    selectedDay === day.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>

            {/* Day Content */}
            {selectedDay && (
              <div className="bg-background border border-border p-8 md:p-12 animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
                  {dayContent[selectedDay].title}
                </h3>
                {dayContent[selectedDay].content}
              </div>
            )}

            {!selectedDay && (
              <div className="text-center py-16 text-muted-foreground">
                <ChevronDown className="w-6 h-6 mx-auto mb-4 animate-bounce" strokeWidth={1} />
                <p className="text-sm">Klik op een dag hierboven</p>
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