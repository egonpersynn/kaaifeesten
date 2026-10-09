import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import logo from "@/assets/kaaifeesten-logo.png";
import community from "@/assets/gallery-5.png";
import festival from "@/assets/hero-partners.png";
import market from "@/assets/hero-rommelmarkt.png";

const experiences = [
  { title: "Kaaifeesten", subtitle: "Het buurtfeest voor iedereen", image: community, to: "/kaaifeesten", number: "01", label: "Samen vieren" },
  { title: "Kaai Festival", subtitle: "Muziek. Mensen. Momenten.", image: festival, to: "/kaai-festival", number: "02", label: "Samen losgaan" },
  { title: "Rommelmarkt", subtitle: "De grootste van Vlaanderen", image: market, to: "/rommelmarkt", number: "03", label: "Samen ontdekken" },
];

export default function Welcome() {
  return <main className="welcome bg-primary text-primary-foreground">
    <header className="welcome-header"><Link to="/" aria-label="De Kaaifeesten startpagina"><img src={logo} alt="Kaaifeesten Eeklo" className="brand-logo" /></Link><span className="flex items-center gap-2 text-sm"><MapPin size={15} /> Eeklo, België</span></header>
    <section className="welcome-intro"><p className="eyebrow">Eén plek. Drie belevenissen.</p><h1>Waar kom jij<br />voor <em>langs?</em></h1><p>Een plein vol verhalen. Kies jouw beleving.</p></section>
    <section className="experience-grid" aria-label="Kies je beleving">{experiences.map(item => <Link key={item.to} to={item.to} className="experience">
      <img src={item.image} alt={item.title} /><div className="experience-shade" />
      <div className="experience-top"><span>{item.number} / {item.label}</span><ArrowUpRight size={28} strokeWidth={1.5} /></div>
      <div className="experience-bottom"><h2>{item.title}</h2><p>{item.subtitle}</p><span className="experience-action">Ontdek {item.title} <ArrowUpRight size={18} /></span></div>
    </Link>)}</section>
    <footer className="welcome-footer"><span>Al sinds 1927 deel van Eeklo.</span><Link to="/contact">Een vraag? Contacteer ons <ArrowUpRight size={14} /></Link></footer>
  </main>;
}