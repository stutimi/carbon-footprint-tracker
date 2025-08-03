import { Button } from "@/components/ui/button";
import { Leaf, User, Trophy } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2 animate-slide-in-left">
          <Leaf className="h-8 w-8 text-primary animate-float" />
          <span className="text-2xl font-bold text-primary">CarbonStar</span>
        </div>
        
        <div className="flex items-center space-x-4 animate-slide-in-right">
          <Button variant="ghost" size="sm" className="hover-scale">
            <Trophy className="h-4 w-4 mr-2" />
            Leaderboard
          </Button>
          <Button variant="ghost" size="sm" className="hover-scale">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover-scale">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;