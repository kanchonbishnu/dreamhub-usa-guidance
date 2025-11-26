import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, CheckCircle, Briefcase, Camera, Users, FileText, Shield, Globe2 } from 'lucide-react';

const B1B2Visitor = () => {
  const visaTypes = [
    {
      icon: Briefcase,
      title: 'B-1 Business Visa',
      description: 'For business meetings, conferences, contract negotiations, and professional consultations.',
      purposes: [
        'Attend business meetings or conferences',
        'Negotiate contracts',
        'Consult with business associates',
        'Settle estates',
        'Participate in short-term training',
      ],
    },
    {
      icon: Camera,
      title: 'B-2 Tourist Visa',
      description: 'For tourism, vacation, family visits, medical treatment, and social activities.',
      purposes: [
        'Tourism and sightseeing',
        'Visit friends and family',
        'Medical treatment',
        'Attend social events',
        'Participate in amateur competitions',
      ],
    },
  ];

  const benefits = [
    {
      icon: FileText,
      title: 'Strategic Documentation',
      description: 'Comprehensive document preparation including invitation letters, itinerary planning, and supporting evidence.',
    },
    {
      icon: Shield,
      title: 'Interview Excellence',
      description: 'Proven interview strategies to demonstrate strong ties to your home country and clear intent.',
    },
    {
      icon: Globe2,
      title: 'Travel Planning',
      description: 'Complete itinerary development that aligns with your visa purpose and strengthens your application.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Personalized consulting based on your specific travel purpose and profile assessment.',
    },
  ];

  const requirements = [
    'Valid passport with at least 6 months validity beyond your intended stay',
    'Completed DS-160 form confirmation',
    'Visa appointment confirmation',
    'Proof of financial ability to cover trip expenses',
    'Evidence of strong ties to home country (employment, property, family)',
    'Detailed travel itinerary and accommodation plans',
    'Invitation letter (if applicable)',
    'Business documents or conference registration (for B-1)',
  ];

  const commonErrors = [
    'Weak evidence of ties to home country',
    'Unclear or suspicious travel purpose',
    'Insufficient financial documentation',
    'Poor interview performance showing unclear intent',
    'Incomplete or inconsistent documentation',
    'Overly ambitious itinerary that seems unrealistic',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-deep-blue to-secondary text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Plane className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              B-1/B-2 Visitor Visa
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Your pathway to business opportunities and unforgettable American experiences. Expert guidance for visitor visa success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-8">
                Visit the USA with Confidence
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                The B-1/B-2 visitor visa is for temporary visits to the United States for business (B-1) 
                or tourism/medical treatment (B-2). Often issued as a combination B-1/B-2 visa, it offers 
                flexibility for both business and pleasure travel.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We specialize in creating compelling applications that demonstrate clear intent, strong ties 
                to your home country, and proper documentation—the three pillars of B-1/B-2 visa success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visa Types Grid */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Understanding B-1 & B-2 Visas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visaTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="border-premium hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <type.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-gradient">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{type.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Common Purposes:</h4>
                      {type.purposes.map((purpose, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{purpose}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Our B-1/B-2 Visa Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-premium hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <benefit.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-gradient">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              Visa Requirements Checklist
            </h2>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{req}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Errors Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              Common Mistakes We Help You Avoid
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonErrors.map((error, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-destructive/40 transition-all duration-300"
                >
                  <Shield className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{error}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">
              Ready to Visit the USA?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Book a consultation today and let our experts maximize your B-1/B-2 visa approval chances.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Plane className="w-6 h-6" />
                Start B-1/B-2 Application
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default B1B2Visitor;
