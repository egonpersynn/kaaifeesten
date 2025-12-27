const StorySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Sinds 1927
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Ons Verhaal
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              De Kaaifeesten startten oorspronkelijk als een kleinschalige rommelmarkt 
              in Eeklo in <strong className="text-foreground">1927</strong>. Intussen mogen we trots zeggen dat de 
              rommelmarkt tot iets veel groters is uitgegroeid: Zondag mogen we nu elk 
              jaar de <strong className="text-foreground">grootste rommelmarkt van Vlaanderen</strong> laten doorgaan 
              in het mooie Eeklo, met circa <strong className="text-foreground">1300 standhouders</strong>.
            </p>

            <p>
              Het buurtfeest De Kaaifeesten gaat elk jaar door het eerste weekend van 
              oktober. We starten de <strong className="text-foreground">vrijdagavond</strong> met een rockavond, 
              <strong className="text-foreground"> zaterdagochtend</strong> een receptie voor de buurtbewoners met in de 
              namiddag een kindernamiddag en 's avonds Ambiance op 't Kaaiken.
            </p>

            <p>
              <strong className="text-foreground">Zondag</strong> hebben we tenslotte onze grote rommelmarkt met 's avonds 
              een programma aan schlagerzangers. Zondagnamiddag verwelkomen we onze 
              senioren in de tent op de seniorennamiddag. Afsluiten doen we 
              <strong className="text-foreground"> maandagavond</strong> met een toneel.
            </p>

            <p className="text-foreground font-medium text-xl text-center pt-6">
              De Kaaifeesten zijn op heden uitgegroeid tot een mooi buurtfeest 
              waar zowel jong als oud langskomt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
