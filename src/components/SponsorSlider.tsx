import adremKeukens from "@/assets/sponsors/adrem-keukens.png";
import leonidas from "@/assets/sponsors/leonidas.png";
import steyaertHeene from "@/assets/sponsors/steyaert-heene.png";
import hubo from "@/assets/sponsors/hubo.png";
import alsan from "@/assets/sponsors/alsan.png";
import willemsBiscuits from "@/assets/sponsors/willems-biscuits.png";
import kuvacon from "@/assets/sponsors/kuvacon.png";
import smo from "@/assets/sponsors/smo.png";
import immoyves from "@/assets/sponsors/immoyves.png";
import tuinenDeJonghe from "@/assets/sponsors/tuinen-de-jonghe.png";

const sponsors = [
  { id: 1, name: "Adrem Keukens", logo: adremKeukens },
  { id: 2, name: "Leonidas", logo: leonidas },
  { id: 3, name: "Steyaert-Heene", logo: steyaertHeene },
  { id: 4, name: "Hubo", logo: hubo },
  { id: 5, name: "Alsan", logo: alsan },
  { id: 6, name: "Willems Biscuits", logo: willemsBiscuits },
  { id: 7, name: "Kuvacon", logo: kuvacon },
  { id: 8, name: "SMO", logo: smo },
  { id: 9, name: "Immo Yves", logo: immoyves },
  { id: 10, name: "Tuinen De Jonghe", logo: tuinenDeJonghe },
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
        <div className="flex w-max animate-scroll gap-12">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 w-40 h-20 bg-background flex items-center justify-center hover:border-primary transition-colors p-4"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
              />
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
            transform: translateX(calc(-50% - 24px));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SponsorSlider;
