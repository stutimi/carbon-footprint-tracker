import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Zap, ShoppingBag, Utensils, Calculator, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuickTracker = () => {
  const [transport, setTransport] = useState({ car: "", bus: "", bike: "" });
  const [energy, setEnergy] = useState({ electricity: "", gas: "" });
  const [consumption, setConsumption] = useState({ food: "", shopping: "" });
  const { toast } = useToast();

  const calculateFootprint = () => {
    // Simplified carbon calculation (kg CO2)
    const carEmissions = parseFloat(transport.car || "0") * 0.21; // kg CO2 per km
    const busEmissions = parseFloat(transport.bus || "0") * 0.05;
    const electricityEmissions = parseFloat(energy.electricity || "0") * 0.5; // kg CO2 per kWh
    const gasEmissions = parseFloat(energy.gas || "0") * 2.0;
    const foodEmissions = parseFloat(consumption.food || "0") * 2.5;
    const shoppingEmissions = parseFloat(consumption.shopping || "0") * 0.5;

    const total = carEmissions + busEmissions + electricityEmissions + gasEmissions + foodEmissions + shoppingEmissions;
    
    toast({
      title: "🌱 Carbon Footprint Calculated!",
      description: `Your estimated monthly CO2: ${total.toFixed(2)} kg`,
    });

    return total;
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-accent/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="h-8 w-8 text-primary animate-glow" />
          <TrendingUp className="h-6 w-6 text-accent" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Quick Carbon Calculator</h2>
        <p className="text-lg text-muted-foreground">Enter your monthly habits to get started</p>
      </div>

      <Card className="max-w-4xl mx-auto hover-lift animate-scale-in glow-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary animate-float" />
            Track Your Monthly Impact
          </CardTitle>
          <CardDescription>
            Input your monthly consumption to calculate your carbon footprint
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="transport" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="transport" className="flex items-center gap-2 hover-scale">
                <Car className="h-4 w-4" />
                Transport
              </TabsTrigger>
              <TabsTrigger value="energy" className="flex items-center gap-2 hover-scale">
                <Zap className="h-4 w-4" />
                Energy
              </TabsTrigger>
              <TabsTrigger value="consumption" className="flex items-center gap-2 hover-scale">
                <ShoppingBag className="h-4 w-4" />
                Consumption
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transport" className="space-y-4 mt-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 hover-lift">
                  <Label htmlFor="car">Car (km/month)</Label>
                  <Input
                    id="car"
                    type="number"
                    placeholder="1000"
                    value={transport.car}
                    onChange={(e) => setTransport({...transport, car: e.target.value})}
                    className="transition-all focus:scale-105"
                  />
                </div>
                <div className="space-y-2 hover-lift">
                  <Label htmlFor="bus">Public Transport (km/month)</Label>
                  <Input
                    id="bus"
                    type="number"
                    placeholder="200"
                    value={transport.bus}
                    onChange={(e) => setTransport({...transport, bus: e.target.value})}
                    className="transition-all focus:scale-105"
                  />
                </div>
                <div className="space-y-2 hover-lift">
                  <Label htmlFor="bike">Bike/Walk (km/month)</Label>
                  <Input
                    id="bike"
                    type="number"
                    placeholder="50"
                    value={transport.bike}
                    onChange={(e) => setTransport({...transport, bike: e.target.value})}
                    className="transition-all focus:scale-105"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="energy" className="space-y-4 mt-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 hover-lift">
                  <Label htmlFor="electricity">Electricity (kWh/month)</Label>
                  <Input
                    id="electricity"
                    type="number"
                    placeholder="300"
                    value={energy.electricity}
                    onChange={(e) => setEnergy({...energy, electricity: e.target.value})}
                    className="transition-all focus:scale-105"
                  />
                </div>
                <div className="space-y-2 hover-lift">
                  <Label htmlFor="gas">Gas (m³/month)</Label>
                  <Input
                    id="gas"
                    type="number"
                    placeholder="50"
                    value={energy.gas}
                    onChange={(e) => setEnergy({...energy, gas: e.target.value})}
                    className="transition-all focus:scale-105"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consumption" className="space-y-4 mt-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 hover-lift">
                  <Label htmlFor="food">Food Spending ($/month)</Label>
                  <Input
                    id="food"
                    type="number"
                    placeholder="400"
                    value={consumption.food}
                    onChange={(e) => setConsumption({...consumption, food: e.target.value})}
                    className="transition-all focus:scale-105"
                  />
                </div>
                <div className="space-y-2 hover-lift">
                  <Label htmlFor="shopping">Shopping ($/month)</Label>
                  <Input
                    id="shopping"
                    type="number"
                    placeholder="200"
                    value={consumption.shopping}
                    onChange={(e) => setConsumption({...consumption, shopping: e.target.value})}
                    className="transition-all focus:scale-105"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center pt-6">
            <Button 
              onClick={calculateFootprint} 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover-lift group animate-glow"
            >
              <Calculator className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Calculate My Footprint
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickTracker;