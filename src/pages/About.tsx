import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-secondary" />,
      title: "Integrity",
      description: "We follow ethical standards and provide honest advice.",
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Transparency",
      description: "Clear fees, clear processes, and no hidden conditions.",
    },
    {
      icon: <Heart className="h-12 w-12 text-secondary" />,
      title: "Support",
      description: "We guide you like a family — step-by-step until your journey begins.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-secondary" />,
      title: "Professionalism",
      description: "Your documents and personal information are handled with complete care and confidentiality.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl max-w-3xl mx-auto">
            DreamHubUSA is a visa support and consulting agency dedicated to helping students and 
            travelers enter the United States with confidence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To provide reliable, transparent, and professional visa guidance so international 
              students and travelers can confidently pursue their dreams in the United States.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              At DreamHubUSA, we assist clients with:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-lg">Choosing the right universities and programs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-lg">Preparing strong application documents</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-lg">Completing all visa forms accurately</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-lg">Getting ready for visa interviews</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-lg">Understanding U.S. travel requirements</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground mt-8 italic">
              We do not guarantee approval, but we give you the best preparation and support possible.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why DreamHubUSA Exists
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              The visa process can be confusing, stressful, and overwhelming. Many people struggle with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-card rounded-lg border border-border">
                <span className="text-accent font-semibold">×</span> Incorrect forms
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <span className="text-accent font-semibold">×</span> Missing documents
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <span className="text-accent font-semibold">×</span> Lack of interview preparation
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <span className="text-accent font-semibold">×</span> Wrong university choices
              </div>
            </div>
            <p className="text-lg font-semibold text-primary pt-6">
              DreamHubUSA was created to solve these problems with proper guidance, support, and expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
