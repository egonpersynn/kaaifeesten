const StorySection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Sinds 1927
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Ons Verhaal
            </h2>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              De Kaaifeesten startten oorspronkelijk als een kleinschalige rommelmarkt 
              in Eeklo in <strong className="text-foreground font-semibold">1927</strong>. Intussen mogen we trots zeggen dat de 
              rommelmarkt tot iets veel groters is uitgegroeid: Zondag mogen we nu elk 
              jaar de <em className="text-foreground italic">grootste rommelmarkt van Vlaanderen</em> laten doorgaan 
              in het mooie Eeklo, met circa <strong className="text-foreground font-semibold">1300 standhouders</strong>.
            </p>

            <p>
              Het buurtfeest De Kaaifeesten gaat elk jaar door het eerste weekend van 
              oktober. We starten de <strong className="text-foreground font-semibold">vrijdagavond</strong> met een rockavond, 
              <strong className="text-foreground font-semibold"> zaterdagochtend</strong> een receptie voor de buurtbewoners met in de 
              namiddag een kindernamiddag en 's avonds <em className="italic">Ambiance op 't Kaaiken</em>.
            </p>

            <p>
              <strong className="text-foreground font-semibold">Zondag</strong> hebben we tenslotte onze grote rommelmarkt met 's avonds 
              een programma aan schlagerzangers. Zondagnamiddag verwelkomen we onze 
              senioren in de tent op de seniorennamiddag. Afsluiten doen we 
              <strong className="text-foreground font-semibold"> maandagavond</strong> met een toneel.
            </p>

            <p className="text-foreground font-medium text-xl md:text-2xl pt-8 border-t border-border italic">
              "De Kaaifeesten zijn op heden uitgegroeid tot een mooi buurtfeest 
              waar zowel jong als oud langskomt."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;