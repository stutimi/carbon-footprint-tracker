import { Leaf, Heart, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 border-t">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-primary/5 rounded-full floating-elements"></div>
        <div className="absolute bottom-5 right-1/3 w-16 h-16 bg-accent/5 rounded-full floating-elements" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-success/5 rounded-full floating-elements" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2 group">
              <Leaf className="h-8 w-8 text-primary floating-elements group-hover:scale-125 transition-transform" />
              <span className="text-2xl font-bold gradient-text">CarbonStar</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Gamify your journey to carbon neutrality. Track, compete, and make a real difference for our planet.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover-scale magical-glow">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover-scale magical-glow">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover-scale magical-glow">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold text-foreground">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Carbon Tracking</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Leaderboards</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Achievements</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Community Challenges</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Impact Analytics</li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer story-link">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Privacy Policy</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Terms of Service</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Contact</li>
              <li className="hover:text-primary transition-colors cursor-pointer story-link">Blog</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 floating-elements" />
              <span>for our planet</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 CarbonStar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;