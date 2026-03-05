import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProduct from "@/components/FeaturedProduct";
import EcosystemGrid from "@/components/EcosystemGrid";
import VisionSection from "@/components/VisionSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProduct />
      <EcosystemGrid />
      <VisionSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
