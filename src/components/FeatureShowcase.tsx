import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Users, Trophy, Target, Leaf, Award, Star, Zap } from "lucide-react";

const FeatureShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-success/5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-primary/5 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-16 h-16 bg-accent/5 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="text-center mb-12 animate-fade-in relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="h-8 w-8 text-warning animate-glow" />
          <Zap className="h-6 w-6 text-accent" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Gamified Sustainability</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Turn environmental action into an engaging experience with achievements, leaderboards, and social challenges
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
        <Card className="border-l-4 border-l-primary hover-lift animate-scale-in glow-border group" style={{animationDelay: '0.1s'}}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <CardTitle>Personal Dashboard</CardTitle>
            </div>
            <CardDescription>
              Visualize your carbon footprint with interactive charts and trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Monthly Progress</span>
                <span className="text-success font-semibold animate-fade-in">-15% vs last month</span>
              </div>
              <Progress value={72} className="h-3 transition-all duration-500 hover:h-4" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent hover-lift animate-scale-in glow-border group" style={{animationDelay: '0.3s'}}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
              <CardTitle>Social Comparison</CardTitle>
            </div>
            <CardDescription>
              Compare your impact with friends and your city average
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center hover-scale">
                <span className="text-sm">vs City Average</span>
                <Badge variant="outline" className="text-success border-success/50 animate-fade-in">-23%</Badge>
              </div>
              <div className="flex justify-between items-center hover-scale">
                <span className="text-sm">vs Friends</span>
                <Badge variant="outline" className="text-warning border-warning/50 animate-fade-in">+5%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success hover-lift animate-scale-in glow-border group" style={{animationDelay: '0.5s'}}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-success group-hover:scale-110 transition-transform animate-float" />
              <CardTitle>Achievements</CardTitle>
            </div>
            <CardDescription>
              Earn badges and climb leaderboards for eco-friendly actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-success/10 text-success hover:bg-success/20 hover-scale animate-fade-in">
                <Leaf className="w-3 h-3 mr-1 animate-float" />
                Green Warrior
              </Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Award className="w-3 h-3 mr-1 animate-float" style={{animationDelay: '0.5s'}} />
                First Timer
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-slide-in-left">
          <h3 className="text-2xl font-bold text-foreground">Weekly Challenges</h3>
          <p className="text-muted-foreground leading-relaxed">
            Participate in weekly challenges designed to reduce your environmental impact while having fun with the community.
          </p>
          
          <div className="space-y-4">
            <Card className="p-4 hover-lift animate-scale-in group" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Bike to Work Week</p>
                    <p className="text-sm text-muted-foreground">Reduce transport emissions</p>
                  </div>
                </div>
                <Badge className="animate-glow">Active</Badge>
              </div>
            </Card>

            <Card className="p-4 hover-lift animate-scale-in group" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Leaf className="h-5 w-5 text-success group-hover:scale-110 transition-transform animate-float" />
                  <div>
                    <p className="font-medium">Meat-Free Monday</p>
                    <p className="text-sm text-muted-foreground">Reduce food carbon footprint</p>
                  </div>
                </div>
                <Badge variant="outline" className="hover-scale">Upcoming</Badge>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 hover-lift animate-slide-in-right glow-border group">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow">
              <Trophy className="h-10 w-10 text-white animate-float" />
            </div>
            <CardTitle className="text-2xl">Your Carbon Score</CardTitle>
            <CardDescription>
              Based on your monthly habits and improvements
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 animate-glow">
              847
            </div>
            <div className="text-lg text-muted-foreground mb-6">
              EcoPoints this month
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="hover-scale">
                <div className="text-2xl font-bold text-success animate-fade-in">#12</div>
                <div className="text-sm text-muted-foreground">City Rank</div>
              </div>
              <div className="hover-scale">
                <div className="text-2xl font-bold text-accent animate-fade-in" style={{animationDelay: '0.2s'}}>#3</div>
                <div className="text-sm text-muted-foreground">Friends</div>
              </div>
              <div className="hover-scale">
                <div className="text-2xl font-bold text-primary animate-fade-in" style={{animationDelay: '0.4s'}}>5</div>
                <div className="text-sm text-muted-foreground">Badges</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeatureShowcase;