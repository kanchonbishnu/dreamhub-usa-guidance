import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, TrendingUp, Target, BarChart3, Users, Lightbulb } from 'lucide-react';

const SuccessOptimization = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Leverage our extensive database of successful applications to inform your strategy.',
    },
    {
      icon: Target,
      title: 'Strategic Positioning',
      description: 'Optimize your profile to align with visa officer expectations and requirements.',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'One-on-one sessions with seasoned visa specialists who understand approval patterns.',
    },
    {
      icon: Lightbulb,
      title: 'Proactive Problem Solving',
      description: 'Identify and address potential red flags before they impact your application.',
    },
  ];

  const strategies = [
    {
      title: 'Profile Enhancement',
      description: 'Strategic improvements to strengthen weak areas of your application.',
    },
    {
      title: 'Timeline Optimization',
      description: 'Perfect timing for submission based on historical approval patterns.',
    },
    {
      title: 'Documentation Strategy',
      description: 'Curated document selection that tells a compelling, consistent story.',
    },
    {
      title: 'Risk Mitigation',
      description: 'Proactive identification and resolution of potential denial factors.',
    },
    {
      title: 'Competitive Positioning',
      description: 'Stand out among other applicants with strategic differentiation.',
    },
    {
      title: 'Continuous Optimization',
      description: 'Ongoing refinement throughout the application process.',
    },
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
            <Award className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Success Optimization
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Data-driven strategies proven to maximize visa approval rates through expert optimization.
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
                Maximizing Your Approval Chances
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Success in visa applications isn't about luck—it's about strategy. Our success optimization 
                service combines years of experience, data analysis, and proven methodologies to give you the 
                competitive edge needed in today's stringent visa environment.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We analyze every aspect of your application through the lens of what visa officers look for, 
                identifying opportunities for enhancement and eliminating potential weaknesses before submission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Our Optimization Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-premium hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gradient">{strategy.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{strategy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Why Choose Our Optimization Service
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
              Optimize Your Path to Success
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Give yourself every advantage. Start your success optimization consultation today.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                Begin Optimization
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SuccessOptimization;
