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
  { name: "Blekerij", totalSpots: 99, availableSpots: 1 },
  { name: "Broeders van Liefdestraat", totalSpots: 46, availableSpots: 0 },
  { name: "Burggravenstraat", totalSpots: 142, availableSpots: 0 },
  { name: "Dullaert", totalSpots: 140, availableSpots: 5 },
  { name: "Euerardstraat", totalSpots: 150, availableSpots: 5 },
  { name: "Ganzepoel", totalSpots: 21, availableSpots: 0 },
  { name: "Kaaistraat", totalSpots: 40, availableSpots: 2 },
  { name: "Krugercenter", totalSpots: 187, availableSpots: 6 },
  { name: "Raashekke", totalSpots: 108, availableSpots: 0 },
  { name: "Visstraat", totalSpots: 51, availableSpots: 0 },
  { name: "Zuidmoerstraat", totalSpots: 213, availableSpots: 6 },
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
    <PageBanner title="Grootste rommelmarkt van Vlaanderen" eyebrow="Zondag 4 oktober 2026" description="Boek hier jouw standplaats voor 2026." image={heroRommelmarkt} />
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
          <div className="street-directory"><h3>Beschikbare plaatsen per straat</h3><p className="street-note">Overgenomen overzicht · beschikbaarheid te bevestigen</p><div className="street-search"><Search size={18} /><Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Zoek een straat" aria-label="Zoek een straat" /></div><div className="street-list"><div className="street-list-heading"><span>{visibleStreets.length} straten</span><span>Vrij / totaal</span></div>{visibleStreets.map((street) => <article className="street-row" key={street.name}><span className="street-index">{String(streets.indexOf(street) + 1).padStart(2, "0")}</span><div className="street-name"><h4>{street.name}</h4><meter min="0" max={street.totalSpots} value={street.availableSpots} aria-label={`${street.availableSpots} van ${street.totalSpots} plaatsen vrij in ${street.name}`} /></div><div className="street-spots"><strong>{street.availableSpots}</strong><span>/ {street.totalSpots}</span></div></article>)}{visibleStreets.length === 0 && <p className="py-12 text-muted-foreground">Geen straten gevonden voor “{search}”.</p>}</div></div>
        </div>
      </div>
    </section>
    <Footer />
  </main>;
}
