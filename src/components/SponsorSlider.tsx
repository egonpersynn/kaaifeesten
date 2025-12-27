const sponsors = [
  { id: 1, name: "Sponsor 1" },
  { id: 2, name: "Sponsor 2" },
  { id: 3, name: "Sponsor 3" },
  { id: 4, name: "Sponsor 4" },
  { id: 5, name: "Sponsor 5" },
  { id: 6, name: "Sponsor 6" },
  { id: 7, name: "Sponsor 7" },
  { id: 8, name: "Sponsor 8" },
];

const SponsorSlider = () => {
  return (
    <section className="py-16 bg-secondary border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Met steun van onze sponsors
        </span>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll gap-12">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 w-40 h-20 bg-background border border-border flex items-center justify-center hover:border-primary transition-colors"
            >
              <span className="text-muted-foreground text-xs uppercase tracking-wider">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SponsorSlider;
