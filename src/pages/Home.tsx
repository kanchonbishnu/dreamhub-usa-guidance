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
        className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.90), rgba(59, 130, 246, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          background: 'var(--hero-mesh)',
          animation: 'float 20s ease-in-out infinite'
        }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        <div className="container mx-auto px-4 text-center space-y-8 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl">
            DreamHubUSA — Your Gateway to the <span className="text-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">United States</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-lg font-light">
            Guiding students and travelers with trusted visa support, step-by-step assistance, 
            and personalized solutions to make your American dream a reality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {[
              { icon: CheckCircle2, text: "Student Visa Guidance" },
              { icon: CheckCircle2, text: "Tourist Visa Support" },
              { icon: CheckCircle2, text: "Interview Coaching" },
              { icon: CheckCircle2, text: "Document Preparation" }
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-center space-x-2 px-4 py-2 rounded-full hover:scale-105 transition-transform">
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 font-semibold"
            >
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Start Your Journey Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why Choose <span className="text-gradient">DreamHubUSA</span>?
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Experience excellence in visa support with our comprehensive services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-none card-3d group relative overflow-hidden"
                style={{ 
                  boxShadow: 'var(--card-shadow-3d)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 text-center space-y-4 relative z-10">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Comprehensive visa support tailored to your journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center space-x-3 p-5 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <span className="font-semibold text-sm group-hover:text-primary transition-colors">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all px-8 py-6 text-base font-semibold rounded-full"
            >
              <a href="/services">Explore All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-white rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-primary-foreground/80 mb-16 text-lg max-w-2xl mx-auto">
            Real success stories from satisfied clients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/95 backdrop-blur-sm text-foreground border-none card-3d group"
                style={{ boxShadow: 'var(--card-shadow-3d)' }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">"</div>
                  <p className="text-lg mb-6 italic relative z-10 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <p className="font-bold text-primary">— {testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your <span className="text-gradient">Journey</span>?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Book a free consultation today and take the first step toward your American dream.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-accent/50 hover:scale-110 transition-all duration-300 font-bold"
          >
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
