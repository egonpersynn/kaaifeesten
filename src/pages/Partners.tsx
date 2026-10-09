import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import heroPartners from "@/assets/hero-partners.png";

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

const partners = [
  { id: 1, name: "Adrem Keukens", logo: adremKeukens, tier: "gold" },
  { id: 2, name: "Steyaert-Heene", logo: steyaertHeene, tier: "gold" },
  { id: 3, name: "Hubo", logo: hubo, tier: "silver" },
  { id: 4, name: "Leonidas", logo: leonidas, tier: "silver" },
  { id: 5, name: "Alsan", logo: alsan, tier: "silver" },
  { id: 6, name: "SMO", logo: smo, tier: "bronze" },
  { id: 7, name: "Kuvacon", logo: kuvacon, tier: "bronze" },
  { id: 8, name: "Willems Biscuits", logo: willemsBiscuits, tier: "bronze" },
  { id: 9, name: "Immo Yves", logo: immoyves, tier: "bronze" },
  { id: 10, name: "Tuinen De Jonghe", logo: tuinenDeJonghe, tier: "bronze" },
];

const Partners = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageBanner title="Samen maken we het." eyebrow="Onze partners" description="Met steun van mensen en bedrijven die in de Kaai geloven." image={heroPartners} />

      {/* Partner Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
              Word partner van De Kaaifeesten
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              De Kaaifeesten is een van de grootste evenementen in de regio en trekt jaarlijks 
              duizenden bezoekers aan. Door partner te worden, bereikt u een breed en divers 
              publiek en draagt u bij aan een uniek stukje Vlaams erfgoed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Wij bieden verschillende partnerpakketten aan, aangepast aan uw wensen en budget. 
              Van zichtbaarheid op onze website en sociale media tot exclusieve branding tijdens 
              het evenement — <em className="italic">samen vinden we de perfecte match</em>.
            </p>
            <a href="/contact">
              <Button variant="default" size="lg" className="uppercase tracking-[0.15em] text-xs">
                <Mail className="w-4 h-4 mr-2" />
                Neem contact op
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Current Partners Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Met dank aan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Huidige Partners
            </h2>
          </div>

          {/* Gold Partners */}
          <div className="mb-16">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Hoofdsponsors
            </h3>
            <div className="flex flex-wrap gap-4">
              {partners
                .filter((p) => p.tier === "gold")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-64 h-40 bg-background border border-border flex items-center justify-center hover:border-foreground transition-colors p-6"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Silver Partners */}
          <div className="mb-16">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Partners
            </h3>
            <div className="flex flex-wrap gap-4">
              {partners
                .filter((p) => p.tier === "silver")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-48 h-32 bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors p-4"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Bronze Partners */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Supporters
            </h3>
            <div className="flex flex-wrap gap-4">
              {partners
                .filter((p) => p.tier === "bronze")
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="w-40 h-28 bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors p-3"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Partners;
