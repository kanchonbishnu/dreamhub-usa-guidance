import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Plane, FileText, MessageSquare, School, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-secondary" />,
      title: "Student Visa (F-1) Guidance",
      ideal: "Students wanting to study in U.S. colleges or universities",
      includes: [
        "Profile evaluation",
        "University/program selection",
        "Application help (SOP, essays, documents)",
        "I-20 guidance",
        "SEVIS fee explanation",
        "DS-160 assistance",
        "Visa appointment support",
        "Mock interview coaching",
        "Pre-departure checklist",
      ],
      outcome: "A strong and well-prepared student visa application",
    },
    {
      icon: <Plane className="h-12 w-12 text-secondary" />,
      title: "Tourist Visa (B1/B2) Support",
      ideal: "Visitors traveling for tourism, events, family visits, or business meetings",
      includes: [
        "Eligibility evaluation",
        "DS-160 form filling",
        "Document checklist",
        "Itinerary creation (optional)",
        "Interview preparation",
        "Travel advice",
      ],
      outcome: "A complete, properly prepared tourist visa application",
    },
    {
      icon: <FileText className="h-12 w-12 text-secondary" />,
      title: "DS-160 Form Assistance",
      ideal: "Anyone needing accurate form completion",
      includes: [
        "Detailed form review",
        "Error prevention",
        "Accuracy guarantee",
        "Quick turnaround",
      ],
      outcome: "Form filled accurately, avoiding common mistakes that lead to delays or denials",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-secondary" />,
      title: "Visa Interview Coaching",
      ideal: "Anyone preparing for their visa interview",
      includes: [
        "Real interview-style questions",
        "Personalized feedback",
        "Confidence building",
        "Common pitfall avoidance",
      ],
      outcome: "Feel confident and ready for your interview",
    },
    {
      icon: <School className="h-12 w-12 text-secondary" />,
      title: "University Application Support",
      ideal: "Students seeking the right university match",
      includes: [
        "Budget-based recommendations",
        "Academic background matching",
        "Location preferences",
        "Program goal alignment",
        "Essay and recommendation guidance",
        "Application submission help",
      ],
      outcome: "Find and apply to universities that match your goals",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-secondary" />,
      title: "Pre-Departure Support",
      ideal: "Students and travelers after visa approval",
      includes: [
        "Flight planning",
        "Housing options",
        "Packing lists",
        "U.S. cultural tips",
        "Airport arrival guidance",
      ],
      outcome: "Smooth transition to the United States",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive visa support and guidance for your U.S. journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-semibold">Ideal for:</span> {service.ideal}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">✓</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      Outcome: {service.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your free consultation or contact us directly to begin your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Contact on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="mailto:support@dreamhubusa.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
