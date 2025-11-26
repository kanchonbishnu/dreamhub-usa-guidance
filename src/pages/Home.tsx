import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, FileCheck, TrendingUp, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Personalized Guidance",
      description: "We review your background, goals, and documents to give you the best pathway to success.",
    },
    {
      icon: <FileCheck className="h-8 w-8 text-secondary" />,
      title: "Experienced Visa Support",
      description: "From DS-160 forms to university applications, we assist you through every step.",
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Transparent & Honest Service",
      description: "No false promises. No guaranteed visas. Only professional support and clear guidance.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      title: "Fast and Hassle-Free",
      description: "Quick response, organized document support, and simple communication.",
    },
  ];

  const services = [
    "U.S. Student Visa (F-1) Support",
    "U.S. Tourist Visa (B1/B2) Support",
    "DS-160 Form Assistance",
    "University Selection & Application Support",
    "Mock Visa Interview Coaching",
    "Travel Itinerary & Pre-Departure Help",
  ];

  const testimonials = [
    {
      quote: "DreamHubUSA made my visa process so much easier. Their interview coaching helped me get my student visa on the first attempt.",
      author: "Aisha, Nigeria",
    },
    {
      quote: "Professional, fast, and very trustworthy.",
      author: "Rahul, India",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(59, 130, 246, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            DreamHubUSA — Your Gateway to the United States
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Guiding students and travelers with trusted visa support, step-by-step assistance, 
            and personalized solutions to make your American dream a reality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Student Visa Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Tourist Visa Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Interview Coaching</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Document Preparation</span>
            </div>
          </div>

          <div className="pt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Start Your Journey Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose DreamHubUSA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="/services">Explore All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary-foreground text-foreground">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation today and take the first step toward your American dream.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              Book Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
