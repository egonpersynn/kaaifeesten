import { Link } from "react-router-dom";
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

const tiers = [{ key: "gold", label: "Hoofdsponsors" }, { key: "silver", label: "Partners" }, { key: "bronze", label: "Supporters" }];

const Partners = () => (
  <main className="partners-page min-h-screen bg-background">
    <Navbar />
    <PageBanner title="Onze partners" eyebrow="De Kaaifeesten / partners" description="Samen maken we De Kaaifeesten mogelijk." image={heroPartners} />
    <section className="partners-intro bg-background">
      <div className="container"><div className="partners-intro-inner">
        <h2>Word partner van De Kaaifeesten</h2>
        <p>De Kaaifeesten is een van de grootste evenementen in de regio en trekt jaarlijks duizenden bezoekers aan. Door partner te worden, bereikt u een breed en divers publiek en draagt u bij aan een uniek stukje Vlaams erfgoed.</p>
        <p>Wij bieden verschillende partnerpakketten aan, aangepast aan uw wensen en budget. Van zichtbaarheid op onze website en sociale media tot exclusieve branding tijdens het evenement — <em>samen vinden we de perfecte match</em>.</p>
        <Button asChild size="lg"><Link to="/contact"><Mail size={16} />Neem contact op</Link></Button>
      </div></div>
    </section>
    <section className="partners-section bg-secondary">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow text-primary mb-4">Met dank aan</p><h2>Met steun van onze sponsors</h2></div></div>
        {tiers.map((tier) => <div className="partner-tier" key={tier.key}>
          <h3>{tier.label}</h3>
          <div className={`partner-grid ${tier.key === "gold" ? "partner-grid-primary" : ""}`}>
            {partners.filter((partner) => partner.tier === tier.key).map((partner) => <div className="partner-logo" key={partner.id}><img src={partner.logo} alt={partner.name} loading="lazy" /></div>)}
          </div>
        </div>)}
      </div>
    </section>
    <Footer />
  </main>
);

export default Partners;
