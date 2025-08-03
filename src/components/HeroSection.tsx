import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Trophy, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-earth.jpg";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full floating-elements pulse-glow"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-accent/5 rounded-full floating-elements pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-success/5 rounded-full floating-elements pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-warning/5 rounded-full floating-elements" style={{animationDelay: '3s'}}></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full floating-elements" style={{animationDelay: '4s'}}></div>
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
                Track Your <span className="gradient-text">Carbon Footprint</span>
                <br />
                <span className="gradient-text shimmer">Game On!</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Join thousands of eco-warriors reducing their environmental impact through fun challenges, friendly competition, and actionable insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover-lift group magical-glow shimmer">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale border-2 hover:border-primary/50 morphing-border">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-4 text-center border-l-4 border-l-primary hover-lift animate-scale-in magical-glow group" style={{animationDelay: '0.2s'}}>
                <Leaf className="h-8 w-8 text-primary mx-auto mb-2 floating-elements group-hover:scale-110 transition-transform" />
                <p className="font-semibold">Track Habits</p>
                <p className="text-sm text-muted-foreground">Daily activities</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-l-accent hover-lift animate-scale-in magical-glow group" style={{animationDelay: '0.4s'}}>
                <Users className="h-8 w-8 text-accent mx-auto mb-2 floating-elements group-hover:scale-110 transition-transform" style={{animationDelay: '0.5s'}} />
                <p className="font-semibold">Compare</p>
                <p className="text-sm text-muted-foreground">With friends</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-l-success hover-lift animate-scale-in magical-glow group" style={{animationDelay: '0.6s'}}>
                <Trophy className="h-8 w-8 text-success mx-auto mb-2 floating-elements group-hover:scale-110 transition-transform" style={{animationDelay: '1s'}} />
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
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 shimmer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/20 to-success/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 magical-glow"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl -z-10 transform translate-x-6 translate-y-6 pulse-glow"></div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-success/20 rounded-full floating-elements flex items-center justify-center magical-glow group">
              <Leaf className="h-8 w-8 text-success group-hover:scale-125 transition-transform" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/20 rounded-full floating-elements flex items-center justify-center magical-glow group" style={{animationDelay: '1.5s'}}>
              <Trophy className="h-10 w-10 text-primary group-hover:scale-125 transition-transform" />
            </div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-accent/20 rounded-full floating-elements flex items-center justify-center pulse-glow" style={{animationDelay: '2.5s'}}>
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;