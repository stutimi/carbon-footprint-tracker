import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickTracker from "@/components/QuickTracker";
import FeatureShowcase from "@/components/FeatureShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <QuickTracker />
      <FeatureShowcase />
    </div>
  );
};

export default Index;
