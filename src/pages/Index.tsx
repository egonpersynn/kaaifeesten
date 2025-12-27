import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import StorySection from "@/components/StorySection";
import LatestNews from "@/components/LatestNews";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CountdownTimer />
      <StorySection />
      <LatestNews />
      <PhotoGallery />
      <Footer />
    </main>
  );
};

export default Index;
