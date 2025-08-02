import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">
            Visit Our Store
          </h1>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Experience our beautiful fabrics in person at our Lagos showroom, where you can feel the quality 
            and see the vibrant colors that make our textiles special.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-primary mb-6">Main Showroom</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Balogun Market Road<br />
                        Lagos Island, Lagos State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+234 803 123 4567</p>
                      <p className="text-muted-foreground">+234 701 987 6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@1stdelightsomefabric.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                        <p>Saturday: 8:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full">
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="bg-gradient-sunset p-6">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">Why Visit Us?</h3>
                  <div className="space-y-3 text-primary-foreground/90">
                    <p>✨ Touch and feel the quality of our authentic fabrics</p>
                    <p>🎨 See the true colors under natural lighting</p>
                    <p>👥 Get expert advice from our knowledgeable staff</p>
                    <p>🛍️ Browse our complete collection in one place</p>
                    <p>💎 Access exclusive in-store promotions</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-fabric-green p-6">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">Special Services</h3>
                  <div className="space-y-3 text-primary-foreground/90">
                    <p>📏 Professional fabric measurement</p>
                    <p>✂️ Custom cutting services</p>
                    <p>🚚 Home delivery within Lagos</p>
                    <p>💰 Flexible payment options</p>
                    <p>🎁 Gift wrapping available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Card className="bg-gradient-earth p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">Planning a Visit?</h3>
                <p className="text-primary-foreground/90 text-lg mb-6">
                  We recommend calling ahead for special occasions or large orders to ensure we have 
                  our full team available to assist you.
                </p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;