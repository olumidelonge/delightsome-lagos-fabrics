import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Adebayo Ogundimu",
      role: "Founder & CEO",
      description: "With 20 years of experience in the textile industry, Adebayo founded 1st Delightsome Fabric with a vision to celebrate Nigerian heritage through authentic fabrics.",
      initials: "AO"
    },
    {
      name: "Funmilayo Adebisi",
      role: "Head of Design",
      description: "A graduate of Fashion Design from the University of Lagos, Funmilayo ensures every fabric meets our exacting standards for quality and authenticity.",
      initials: "FA"
    },
    {
      name: "Chinyere Okwu",
      role: "Customer Relations",
      description: "Chinyere brings warmth and expertise to every customer interaction, helping clients find the perfect fabric for their special occasions.",
      initials: "CO"
    },
    {
      name: "Ibrahim Suleiman",
      role: "Store Manager",
      description: "With an eye for detail and passion for organization, Ibrahim ensures our store always showcases our fabrics in their best light.",
      initials: "IS"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">
            Our Team
          </h1>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Meet the passionate individuals who bring you the finest Nigerian fabrics with dedication, 
            expertise, and a deep love for our cultural heritage.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-20 h-20 bg-gradient-sunset">
                      <AvatarFallback className="text-primary-foreground font-bold text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                      <p className="text-accent font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="bg-gradient-fabric p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">Join Our Family</h3>
                <p className="text-primary-foreground/90 text-lg">
                  We're always looking for passionate individuals who share our love for Nigerian textiles. 
                  Contact us to learn about career opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;