import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">
            About Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over a decade, 1st Delightsome Fabric has been Lagos's premier destination for authentic Nigerian textiles. 
                We began as a small family business with a passion for preserving and celebrating Nigeria's rich textile heritage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to offer the finest selection of traditional fabrics including Aso Oke, Ankara, Atiku, 
                Adire, and Voile, sourced directly from skilled artisans across Nigeria.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-sunset p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">Quality Assured</h3>
                  <p className="text-primary-foreground/90">Every fabric is carefully selected for its authenticity and superior quality.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-fabric-green p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">Cultural Heritage</h3>
                  <p className="text-primary-foreground/90">Supporting local artisans and preserving traditional textile craftsmanship.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Fabric Varieties</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;