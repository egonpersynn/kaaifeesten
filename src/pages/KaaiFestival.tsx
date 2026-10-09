import { Link } from "react-router-dom";
import { ArrowUpRight, Music2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SponsorSlider from "@/components/SponsorSlider";
import PhotoGallery from "@/components/PhotoGallery";
import photo from "@/assets/hero-partners.png";
import { Button } from "@/components/ui/button";

export default function KaaiFestival() {
  return <main><Navbar /><PageBanner title="Kaai Festival." eyebrow="Eeklo / muziek & beleving" description="Voor de muziek. Voor elkaar. Voor die ene avond die blijft hangen." image={photo} />
    <section className="container festival-intro"><div><p className="eyebrow text-primary">Voel de Kaai</p><h2>Het volume omhoog.<br /><em>Iedereen erbij.</em></h2></div><div><Music2 className="text-primary mb-6" size={36} strokeWidth={1} /><p className="text-lg text-muted-foreground leading-relaxed">De sfeer van de Kaai, de energie van live muziek en een publiek dat samen feestviert.</p><div className="mt-8 border-t border-border pt-6"><h3 className="text-2xl mb-2">Het programma volgt binnenkort.</h3><p className="text-muted-foreground">Datum, artiesten en ticketinformatie worden later bekendgemaakt.</p></div><Button asChild className="mt-8"><Link to="/contact">Neem contact op <ArrowUpRight /></Link></Button></div></section>
    <PhotoGallery /><SponsorSlider /><Footer /></main>;
}