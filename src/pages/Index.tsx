import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const fabrics = [
    {
      name: "Aso Oke",
      description: "Traditional handwoven cloth from the Yoruba people, perfect for special occasions and ceremonies."
    },
    {
      name: "Ankara",
      description: "Vibrant wax-printed cotton fabric with bold patterns, ideal for modern and traditional styles."
    },
    {
      name: "Atiku",
      description: "Elegant flowing fabric perfect for formal wear and traditional Nigerian attire."
    },
    {
      name: "Adire",
      description: "Beautiful indigo-dyed resist textile with unique patterns from Yoruba tradition."
    },
    {
      name: "Voile",
      description: "Lightweight, sheer cotton fabric perfect for comfortable and stylish everyday wear."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Featured Fabrics Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Premium Fabrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of authentic Nigerian textiles, each piece telling a story of tradition and craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabrics.map((fabric, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent/20">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-accent mb-3">{fabric.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{fabric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl">
              View All Fabrics
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-fabric">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience Nigerian Excellence
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Visit our Lagos showroom to see, touch, and feel the quality that has made us 
            Nigeria's premier fabric destination for over a decade.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg rounded-xl"
          >
            Visit Our Store
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
