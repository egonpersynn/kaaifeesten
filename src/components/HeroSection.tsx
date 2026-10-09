import { ArrowDownRight, MapPin } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import heroHome from "@/assets/hero-home.png";

export default function HeroSection() {
  return <>
    <section className="event-hero bg-primary text-primary-foreground">
      <img src={heroHome} alt="De rommelmarkt op de Kaaifeesten in Eeklo" className="banner-photo" />
      <div className="banner-shade" />
      <div className="container relative z-10">
        <p className="eyebrow mb-8">Eeklo / sinds 1927</p>
        <h1>De Kaai.<br />Ons feest.<br /><em>Jouw weekend.</em></h1>
        <div className="event-hero-bottom"><p>De Kaaifeesten brengen jong en oud samen.<br />Een buurtfeest met een groot hart.</p><a href="#ons-verhaal" aria-label="Ontdek ons verhaal"><ArrowDownRight size={52} strokeWidth={1} /></a></div>
        <div className="mt-8 flex justify-start"><CountdownTimer /></div>
      </div>
    </section>
    <div className="event-strip bg-primary text-primary-foreground"><span><MapPin size={17} /> Gebr. Van De Woestyneplein, Eeklo</span><span>2 — 5 oktober 2026</span><span>Jong & oud welkom</span></div>
  </>;
}
