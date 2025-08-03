import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickTracker from "@/components/QuickTracker";
import FeatureShowcase from "@/components/FeatureShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <QuickTracker />
      <FeatureShowcase />
      <Footer />
    </div>
  );
};

export default Index;
