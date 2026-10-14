import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpRight, Search, Maximize2, MapPin } from "lucide-react";
import heroRommelmarkt from "@/assets/hero-rommelmarkt.png";
import marketPlan from "@/assets/rommelmarkt-plan.png.asset.json";

const streets = [
  { name: "Markt", totalSpots: 80, availableSpots: 45 },
  { name: "Boelare", totalSpots: 120, availableSpots: 72 },
  { name: "Stationsstraat", totalSpots: 95, availableSpots: 38 },
  { name: "Molenstraat", totalSpots: 65, availableSpots: 29 },
  { name: "Kerkstraat", totalSpots: 110, availableSpots: 55 },
  { name: "Raverschootstraat", totalSpots: 85, availableSpots: 41 },
  { name: "Leopoldlaan", totalSpots: 100, availableSpots: 63 },
  { name: "Tieltsesteenweg", totalSpots: 75, availableSpots: 34 },
  { name: "Gentsesteenweg", totalSpots: 90, availableSpots: 48 },
  { name: "Vrombautstraat", totalSpots: 55, availableSpots: 22 },
  { name: "Balgerhoeke", totalSpots: 70, availableSpots: 35 },
  { name: "Peperstraat", totalSpots: 60, availableSpots: 28 },
];
const phases = [
  { date: "Tot 1 januari 2026", title: "Eerst de buurt.", description: "Enkel bewoners van de straten waarin gemarkt wordt kunnen hun plaats boeken. De prijs blijft €12 per 6 meter." },
  { date: "1 januari — 31 maart 2026", title: "Jouw vertrouwde plek.", description: "Standhouders die in 2025 deelnamen kunnen opnieuw de plaats boeken die ze toen innamen." },
  { date: "Vanaf 1 april 2026", title: "Iedereen welkom.", description: "De resterende plaatsen worden vrijgegeven. Iedereen die dit wenst kan een standplaats reserveren." },
];

export default function Rommelmarkt() {
  const [search, setSearch] = useState("");
  const visibleStreets = streets.filter((street) => street.name.toLocaleLowerCase("nl").includes(search.trim().toLocaleLowerCase("nl")));
  return <main className="min-h-screen bg-background">
    <Navbar />
    <PageBanner title="De grootste rommelmarkt van Vlaanderen." eyebrow="De Kaaifeesten / rommelmarkt" description="Boek hier jouw standplaats voor 2026." image={heroRommelmarkt} />
    <section className="booking-section container">
      <div className="section-heading"><div><p className="eyebrow text-primary mb-5">Voor onze standhouders</p><h2>Een plek voor jou.</h2></div><span className="booking-price">€12 <small>/ 6 meter</small></span></div>
      <div className="booking-phases">{phases.map((phase, i) => <article key={phase.title}><span className="phase-index">0{i + 1}</span><h3>{phase.date}</h3><p>{phase.description}</p></article>)}</div>
      <div className="booking-contact" id="aanmelden"><Button asChild size="lg"><a href="mailto:dirkmussche7@telenet.be?subject=Aanmelding%20rommelmarkt%202026">Meld je aan voor de rommelmarkt<ArrowUpRight /></a></Button></div>
    </section>
    <section className="market-section bg-secondary">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow text-primary mb-5">De straten van Eeklo</p><h2>Vind jouw plaats.</h2></div><span className="text-muted-foreground text-sm">Plan & standplaatsen</span></div>
        <div className="market-layout">
          <div className="market-map"><div className="market-map-heading"><span><MapPin size={17} />Rommelmarktplan</span><Dialog><DialogTrigger asChild><Button variant="ghost" size="icon" aria-label="Rommelmarktplan vergroten" title="Plan vergroten"><Maximize2 size={19} /></Button></DialogTrigger><DialogContent className="market-map-dialog"><DialogTitle>Rommelmarktplan · Eeklo</DialogTitle><img src={marketPlan.url} alt="Plan van de rommelmarkt in Eeklo met feesttent, parkings en toiletten" /></DialogContent></Dialog></div><img src={marketPlan.url} alt="Rommelmarktplan met de straten, feesttent en parkings in Eeklo" loading="lazy" /><div className="market-map-caption"><span>’t Kaaiken · Eeklo</span><a href={marketPlan.url} target="_blank" rel="noopener noreferrer" aria-label="Open rommelmarktplan in een nieuw venster">Volledig plan<ArrowUpRight size={16} /></a></div></div>
          <div className="street-directory"><h3>Beschikbare plaatsen per straat</h3><p className="street-note">Indicatief overzicht · beschikbaarheid te bevestigen</p><div className="street-search"><Search size={18} /><Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Zoek een straat" aria-label="Zoek een straat" /></div><div className="street-list"><div className="street-list-heading"><span>{visibleStreets.length} straten</span><span>Vrij / totaal</span></div>{visibleStreets.map((street) => <article className="street-row" key={street.name}><span className="street-index">{String(streets.indexOf(street) + 1).padStart(2, "0")}</span><div className="street-name"><h4>{street.name}</h4><meter min="0" max={street.totalSpots} value={street.availableSpots} aria-label={`${street.availableSpots} van ${street.totalSpots} plaatsen vrij in ${street.name}`} /></div><div className="street-spots"><strong>{street.availableSpots}</strong><span>/ {street.totalSpots}</span></div></article>)}{visibleStreets.length === 0 && <p className="py-12 text-muted-foreground">Geen straten gevonden voor “{search}”.</p>}</div></div>
        </div>
      </div>
    </section>
    <Footer />
  </main>;
}
