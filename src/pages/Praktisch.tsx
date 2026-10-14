import { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowUpRight, Ticket } from "lucide-react";
import heroPraktisch from "@/assets/hero-praktisch.png";

const days = [
  { key: "vrijdag", label: "Vrijdag", date: "02", theme: "Een stevige start.", admission: "Gratis inkom", events: [
    { time: "19u", title: "Rockavond", description: "We openen het weekend met een rockavond in de tent. De line-up wordt later bekendgemaakt." },
  ] },
  { key: "zaterdag", label: "Zaterdag", date: "03", theme: "Van buurt tot feest.", admission: "Tickets voor de avond", events: [
    { time: "11u", title: "Receptie voor de buurt", description: "Een gezellig samenzijn voor alle buurtbewoners." },
    { time: "14u", end: "tot 16u30", title: "Kindernamiddag", description: "Een namiddag vol activiteiten en plezier voor de kleinsten." },
    { time: "18u", title: "De tent gaat open", description: "Welkom voor het avondprogramma." },
    { time: "20u", title: "Het avondprogramma", description: "Samen de avond in. De line-up wordt later bekendgemaakt. Voor deze avond zijn tickets nodig." },
  ] },
  { key: "zondag", label: "Zondag", date: "04", theme: "Eeklo op zijn grootst.", admission: "Gratis toegang tot de tent", events: [
    { time: "Overdag", title: "De grootste rommelmarkt van Vlaanderen", description: "Circa 1300 standhouders vullen de straten van Eeklo. Er zijn 9 parkings beschikbaar, onder meer bij het station en de sporthal." },
    { time: "’s Avonds", title: "Ambiance op ’t Kaaiken", description: "Een avond met tal van schlagerzangers. De toegang tot de tent is gratis." },
  ] },
  { key: "maandag", label: "Maandag", date: "05", theme: "Nog één keer samen.", admission: "Toneel: gratis toegang", events: [
    { time: "13u", title: "De tent gaat open", description: "Welkom voor de seniorennamiddag." },
    { time: "14u", end: "tot 17u", title: "Seniorennamiddag", description: "Tal van optredens, met tijdens de pauze brood met beleg en 2 tassen koffie. Tickets zijn te verkrijgen bij …" },
    { time: "20u", title: "Toneel", description: "We sluiten het weekend af met een toneelvoorstelling. Gratis toegang." },
  ] },
];

export default function Praktisch() {
  const [selectedDay, setSelectedDay] = useState("vrijdag");
  const day = days.find((item) => item.key === selectedDay) ?? days[0];
  return <main className="min-h-screen bg-background">
    <Navbar />
    <PageBanner title="Goed om te weten." eyebrow="Jouw bezoek / praktisch" description="Alle informatie voor een fijn weekend op de Kaai." image={heroPraktisch} />
    <section className="visit-details container">
      <div><Calendar size={21} strokeWidth={1.4} /><p><strong>2 — 5 oktober 2026</strong><span>Eerste weekend van oktober</span></p></div>
      <div><MapPin size={21} strokeWidth={1.4} /><p><strong>Gebr. Van De Woestyneplein</strong><span>9900 Eeklo</span></p></div>
      <div><Users size={21} strokeWidth={1.4} /><p><strong>Alle leeftijden welkom</strong><span>Van jong tot oud</span></p></div>
    </section>
    <section className="programme-section container">
      <div className="section-heading"><div><p className="eyebrow text-primary mb-5">Vier dagen op de Kaai</p><h2>Het programma<span className="text-muted-foreground"> / 2026</span></h2></div><span className="text-sm text-muted-foreground">02 — 05 oktober</span></div>
      <div className="programme-tabs" role="tablist" aria-label="Programma per dag">
        {days.map((item) => <Button key={item.key} variant="ghost" role="tab" id={`tab-${item.key}`} aria-selected={selectedDay === item.key} aria-controls="day-programme" className={`programme-tab ${selectedDay === item.key ? "is-selected" : ""}`} onClick={() => setSelectedDay(item.key)}><span className="tab-day">{item.label}</span><span className="tab-date">{item.date}<span>oktober</span></span><ArrowUpRight size={20} /></Button>)}
      </div>
      <div id="day-programme" role="tabpanel" aria-labelledby={`tab-${day.key}`} className="day-programme" key={day.key}>
        <div className="day-editorial"><p className="eyebrow text-muted-foreground">{day.label} {day.date} oktober 2026</p><h3>{day.theme}</h3><div className="day-admission"><Ticket size={18} strokeWidth={1.4} />{day.admission}</div><img src={heroPraktisch} alt="Een kind op het feestterrein van de Kaaifeesten" className="programme-photo" loading="lazy" /></div>
        <div className="programme-events">{day.events.map((event, index) => <article className="programme-event" key={event.title}><div className="event-time"><span>{event.time}</span>{"end" in event && <small>{event.end}</small>}</div><div><span className="event-number">0{index + 1}</span><h4>{event.title}</h4><p>{event.description}</p></div></article>)}
          {day.key === "zaterdag" && <Button asChild className="mt-8" size="lg"><a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer">Tickets zaterdagavond<ArrowUpRight /></a></Button>}
          {day.key === "zondag" && <Button asChild variant="outline" className="mt-8" size="lg"><Link to="/rommelmarkt">Bekijk het rommelmarktplan<ArrowUpRight /></Link></Button>}
        </div>
      </div>
    </section>
    <Footer />
  </main>;
}
