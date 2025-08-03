import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Trophy, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-earth.jpg";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-accent/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-success/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-accent animate-glow" />
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">Eco Gaming Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Track Your <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Carbon Footprint</span>
                <br />
                <span className="text-accent">Game On!</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Join thousands of eco-warriors reducing their environmental impact through fun challenges, friendly competition, and actionable insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover-lift group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale border-2 hover:border-primary/50">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-4 text-center border-l-4 border-l-primary hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
                <Leaf className="h-8 w-8 text-primary mx-auto mb-2 animate-float" />
                <p className="font-semibold">Track Habits</p>
                <p className="text-sm text-muted-foreground">Daily activities</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-l-accent hover-lift animate-scale-in" style={{animationDelay: '0.4s'}}>
                <Users className="h-8 w-8 text-accent mx-auto mb-2 animate-float" style={{animationDelay: '0.5s'}} />
                <p className="font-semibold">Compare</p>
                <p className="text-sm text-muted-foreground">With friends</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-l-success hover-lift animate-scale-in" style={{animationDelay: '0.6s'}}>
                <Trophy className="h-8 w-8 text-success mx-auto mb-2 animate-float" style={{animationDelay: '1s'}} />
                <p className="font-semibold">Earn Badges</p>
                <p className="text-sm text-muted-foreground">Achievements</p>
              </Card>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10 group">
              <img 
                src={heroImage} 
                alt="Carbon footprint tracking hero" 
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl -z-10 transform translate-x-6 translate-y-6 animate-glow"></div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-success/20 rounded-full animate-float flex items-center justify-center">
              <Leaf className="h-8 w-8 text-success" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/20 rounded-full animate-float flex items-center justify-center" style={{animationDelay: '1.5s'}}>
              <Trophy className="h-10 w-10 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;