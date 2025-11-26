import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { School, CheckCircle2, GraduationCap, Building2, DollarSign, Shield } from 'lucide-react';

const UniversityPlacement = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Academic Matching',
      description: 'Align your academic background with institutions that value your qualifications.',
    },
    {
      icon: Building2,
      title: 'Institution Selection',
      description: 'Access our curated network of accredited U.S. universities and colleges.',
    },
    {
      icon: DollarSign,
      title: 'Financial Planning',
      description: 'Strategic guidance on tuition costs, scholarships, and financial aid opportunities.',
    },
    {
      icon: Shield,
      title: 'Admission Support',
      description: 'Complete application assistance from essay review to document verification.',
    },
  ];

  const steps = [
    'Initial profile assessment and goal clarification',
    'Comprehensive university research and shortlisting',
    'Application strategy development',
    'Document preparation and optimization',
    'Application submission and tracking',
    'Admission decision support and next steps',
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
            <School className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Elite University Placement
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Strategic matching with top-tier institutions aligned with your academic goals and financial parameters.
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
                Your Path to the Perfect University
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Selecting the right university is the foundation of your academic success in the United States. 
                Our elite placement service combines data-driven analysis with personalized guidance to ensure 
                you're matched with institutions where you'll thrive academically, financially, and personally.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We go beyond rankings to understand your unique profile, career aspirations, and financial 
                constraints, delivering a curated selection of universities perfectly suited to your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Comprehensive Placement Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-premium hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-gradient">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              Our Placement Process
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold glow-elegant">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed group-hover:text-primary transition-colors">
                    {step}
                  </p>
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
              Ready to Find Your Perfect University?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Let our experts guide you to the institution that will shape your future.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                Start Your Placement Journey
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UniversityPlacement;
