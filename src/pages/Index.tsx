import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <PhotoGallery />
      <Footer />
    </main>
  );
};

export default Index;