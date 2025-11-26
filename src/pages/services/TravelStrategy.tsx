import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Plane, Calendar, FileText, Hotel, Shield } from 'lucide-react';

const TravelStrategy = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Itinerary Design',
      description: 'Comprehensive travel plans that strengthen your visa application credibility.',
    },
    {
      icon: Hotel,
      title: 'Accommodation Guidance',
      description: 'Strategic recommendations for booking confirmations and housing arrangements.',
    },
    {
      icon: Plane,
      title: 'Flight Planning',
      description: 'Optimal travel dates and routing advice to support your visa timeline.',
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Complete travel document preparation including invitation letters and reservations.',
    },
  ];

  const services = [
    'Detailed day-by-day itinerary creation',
    'Hotel and accommodation research',
    'Transportation planning and logistics',
    'Travel insurance recommendations',
    'Entry requirements and customs guidance',
    'Emergency contact information compilation',
    'Pre-departure orientation sessions',
    'Post-arrival support coordination',
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
            <MapPin className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Travel Strategy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Complete itinerary design and comprehensive travel planning for your U.S. journey.
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
                Strategic Travel Planning
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                A well-planned travel itinerary is more than just a schedule—it's a critical component of your 
                visa application that demonstrates the legitimacy and purpose of your trip. Our travel strategy 
                service creates comprehensive, credible itineraries that support your application.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From initial planning to pre-departure preparation, we ensure every aspect of your travel is 
                strategically organized to maximize your success and minimize stress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-premium hover:shadow-lg transition-all duration-300 group"
                >
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-foreground">{service}</span>
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
            Core Travel Services
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
              Plan Your Journey with Confidence
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Let us handle the complexities of travel planning while you focus on your goals.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Plane className="w-6 h-6" />
                Start Travel Planning
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TravelStrategy;
