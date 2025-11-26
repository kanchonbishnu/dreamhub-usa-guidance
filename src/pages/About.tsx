import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards, providing honest, transparent advice at every step.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Transparency",
      description: "Clear pricing, straightforward processes, and no hidden conditions—ever.",
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Dedication",
      description: "Personalized guidance throughout your entire journey, treating each client as family.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Excellence",
      description: "Your documents and information are handled with complete confidentiality and meticulous care.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-deep-blue to-secondary text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Excellence in U.S. Visa Consulting</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
            DreamHubUSA is a premier visa advisory firm dedicated to empowering international students and 
            professionals in achieving their American aspirations with confidence and precision.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              To deliver unparalleled, transparent, and strategic visa guidance that empowers international 
              students and professionals to confidently pursue their educational and career objectives in the United States.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
              We combine deep expertise with personalized service to navigate the complexities of U.S. immigration with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">Core Services</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground mb-10 leading-relaxed">
              DreamHubUSA provides comprehensive support across all aspects of U.S. visa applications:
            </p>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4 group">
                <span className="text-primary font-bold text-2xl mt-1">✓</span>
                <span className="text-lg md:text-xl leading-relaxed group-hover:text-primary transition-colors">Strategic university and program selection aligned with your academic and financial profile</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="text-primary font-bold text-2xl mt-1">✓</span>
                <span className="text-lg md:text-xl leading-relaxed group-hover:text-primary transition-colors">Comprehensive application document preparation and optimization</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="text-primary font-bold text-2xl mt-1">✓</span>
                <span className="text-lg md:text-xl leading-relaxed group-hover:text-primary transition-colors">Precision DS-160 form completion with error-free submission guarantee</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="text-primary font-bold text-2xl mt-1">✓</span>
                <span className="text-lg md:text-xl leading-relaxed group-hover:text-primary transition-colors">Expert interview preparation with proven success strategies</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="text-primary font-bold text-2xl mt-1">✓</span>
                <span className="text-lg md:text-xl leading-relaxed group-hover:text-primary transition-colors">Complete guidance on U.S. entry requirements and travel procedures</span>
              </li>
            </ul>
            <p className="text-base md:text-lg text-muted-foreground mt-10 italic px-6 py-4 border-l-4 border-primary/40 bg-muted/20 rounded">
              <strong className="text-foreground">Disclaimer:</strong> While we provide exceptional preparation and guidance, visa approval remains at the discretion of U.S. immigration authorities. We maximize your chances through expert preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-premium hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 space-y-5">
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gradient">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Why DreamHubUSA Exists
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              The U.S. visa process presents significant challenges. Many applicants face critical obstacles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300">
                <span className="text-destructive font-bold text-xl">×</span> <span className="text-base md:text-lg font-medium">Form errors and inaccuracies</span>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300">
                <span className="text-destructive font-bold text-xl">×</span> <span className="text-base md:text-lg font-medium">Incomplete documentation</span>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300">
                <span className="text-destructive font-bold text-xl">×</span> <span className="text-base md:text-lg font-medium">Inadequate interview preparation</span>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300">
                <span className="text-destructive font-bold text-xl">×</span> <span className="text-base md:text-lg font-medium">Misaligned university selection</span>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-xl md:text-2xl font-bold text-gradient leading-relaxed">
                DreamHubUSA eliminates these obstacles through expert guidance, strategic planning, and proven methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
