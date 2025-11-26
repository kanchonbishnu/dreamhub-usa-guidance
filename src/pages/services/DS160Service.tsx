import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, AlertTriangle, CheckCircle, Shield, Clock, Target } from 'lucide-react';

const DS160Service = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Zero-Error Guarantee',
      description: 'Every field verified with meticulous attention to detail ensuring complete accuracy.',
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Your personal information handled with bank-level security and complete confidentiality.',
    },
    {
      icon: Clock,
      title: 'Efficient Processing',
      description: 'Streamlined completion process that saves you time while ensuring perfection.',
    },
    {
      icon: Target,
      title: 'Expert Review',
      description: 'Multiple verification layers by experienced visa specialists before submission.',
    },
  ];

  const commonErrors = [
    'Incorrect passport information',
    'Incomplete travel history',
    'Inconsistent dates and timelines',
    'Missing or unclear previous visa details',
    'Improper address formatting',
    'Incorrect employment information',
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
            <FileCheck className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              DS-160 Mastery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Expert precision in every form field with comprehensive review and zero-error guarantee.
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
                Precision DS-160 Form Completion
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                The DS-160 form is the cornerstone of your U.S. visa application. A single error can lead to 
                delays, additional documentation requests, or even visa denial. Our DS-160 mastery service 
                ensures flawless completion through expert guidance and rigorous verification.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We handle every aspect of the form—from passport details to travel history—with the precision 
                that comes from years of experience and thousands of successful submissions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Errors Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              Common DS-160 Errors We Prevent
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
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{error}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Our DS-160 Service Features
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
              Get Your DS-160 Done Right
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Don't risk your visa application with errors. Let our experts handle your DS-160.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <FileCheck className="w-6 h-6" />
                Start DS-160 Service
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DS160Service;
