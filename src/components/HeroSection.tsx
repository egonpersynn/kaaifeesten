import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <img
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&h=1080&fit=crop"
          alt="Kaaifeesten sfeer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Play Button Overlay (for video) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button className="w-24 h-24 bg-primary/80 rounded-full flex items-center justify-center hover:bg-primary transition-colors shadow-glow">
          <Play className="w-10 h-10 text-primary-foreground ml-1" />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4">
        <div className="animate-fade-in">
          <span className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-foreground text-sm font-semibold uppercase tracking-widest mb-6">
            2 - 5 Oktober 2026
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-slide-up">
          De Kaaifeesten
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          De grootste rommelmarkt van Vlaanderen<br />
          <span className="text-primary">Eeklo</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ticket" size="xl">
              Koop Tickets
            </Button>
          </a>
          <a href="/praktisch">
            <Button variant="hero" size="xl">
              Praktische Info
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
