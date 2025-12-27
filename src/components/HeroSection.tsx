import { Play } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import heroHome from "@/assets/hero-home.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-foreground/70 z-10" />
        <img
          src={heroHome}
          alt="Kaaifeesten sfeer"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Play Button Overlay (for video) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button className="w-24 h-24 bg-background flex items-center justify-center hover:bg-muted transition-colors">
          <Play className="w-10 h-10 text-foreground ml-1" />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4">
        <div className="animate-fade-in">
          <span className="inline-block px-6 py-2 border border-background/30 text-background text-sm font-medium uppercase tracking-[0.3em] mb-8">
            2 — 5 Oktober 2026
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 animate-slide-up tracking-tight">
          DE KAAIFEESTEN
        </h1>
        
        <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-12 animate-slide-up font-light italic" style={{ animationDelay: "0.2s" }}>
          De grootste rommelmarkt van Vlaanderen — <span className="font-medium not-italic">Eeklo</span>
        </p>

        {/* Countdown Timer */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <CountdownTimer />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-float">
        <div className="w-px h-16 bg-background/30 relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-background animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;