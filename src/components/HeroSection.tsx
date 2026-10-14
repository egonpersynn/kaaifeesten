import CountdownTimer from "./CountdownTimer";
import heroHome from "@/assets/hero-home.png";

export default function HeroSection() {
  return <>
    <section className="event-hero bg-primary text-background">
      <img src={heroHome} alt="De rommelmarkt op de Kaaifeesten in Eeklo" className="banner-photo" />
      <div className="banner-shade" />
      <div className="container relative z-10">
        <p className="hero-date eyebrow">2 — 5 oktober 2026</p>
        <h1>De Kaaifeesten</h1>
        <p className="hero-description"><em>De grootste rommelmarkt van Vlaanderen</em> — Eeklo</p>
        <div className="hero-countdown"><CountdownTimer /></div>
      </div>
    </section>
  </>;
}
