import { Button } from "@/components/ui/button";
import { Leaf, User, Trophy } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in magical-glow">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2 animate-slide-in-left group">
          <Leaf className="h-8 w-8 text-primary floating-elements group-hover:scale-125 transition-transform" />
          <span className="text-2xl font-bold gradient-text shimmer">CarbonStar</span>
        </div>
        
        <div className="flex items-center space-x-4 animate-slide-in-right">
          <Button variant="ghost" size="sm" className="hover-scale magical-glow group">
            <Trophy className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform floating-elements" />
            Leaderboard
          </Button>
          <Button variant="ghost" size="sm" className="hover-scale magical-glow group">
            <User className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform floating-elements" />
            Profile
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover-scale magical-glow shimmer pulse-glow">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;