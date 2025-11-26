import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { VisaTypeCard } from '@/components/VisaTypeCard';
import { TimelineStep } from '@/components/TimelineStep';
import { BentoServiceCard } from '@/components/BentoServiceCard';
import { TestimonialCard3D } from '@/components/TestimonialCard3D';
import { 
  GraduationCap, 
  Plane, 
  FileCheck, 
  MessageSquare,
  School,
  MapPin,
  Shield,
  Sparkles,
  Target,
  Zap,
  Globe2,
  Award
} from 'lucide-react';

const Home = () => {
  const visaTypes = [
    {
      icon: GraduationCap,
      title: 'Student Visa (F-1)',
      description: 'Complete support for university applications, I-20, SEVIS, and visa interview preparation.',
    },
    {
      icon: Plane,
      title: 'Tourist Visa (B1/B2)',
      description: 'Tourism and business travel guidance with itinerary planning and documentation support.',
    },
    {
      icon: FileCheck,
      title: 'DS-160 Assistance',
      description: 'Accurate form completion to avoid common mistakes that lead to delays or denials.',
    },
  ];

  const timelineSteps = [
    {
      title: 'Initial Consultation',
      description: 'We evaluate your profile, goals, and documentation to create a personalized roadmap.',
    },
    {
      title: 'Document Preparation',
      description: 'Gather and organize all required documents with our comprehensive checklist.',
    },
    {
      title: 'Application Processing',
      description: 'Complete DS-160 forms, SEVIS registration, and all necessary paperwork accurately.',
    },
    {
      title: 'Interview Coaching',
      description: 'Practice with mock interviews and receive expert feedback to boost confidence.',
    },
    {
      title: 'Visa Success',
      description: 'Receive your visa and get pre-departure guidance for your journey to the USA.',
    },
  ];

  const services = [
    {
      icon: School,
      title: 'University Selection',
      description: 'Find the perfect institution matching your budget, background, and career goals.',
      size: 'large' as const,
    },
    {
      icon: FileCheck,
      title: 'DS-160 Forms',
      description: 'Professional assistance with accurate form completion.',
      size: 'small' as const,
    },
    {
      icon: MessageSquare,
      title: 'Interview Prep',
      description: 'Mock interviews with real-world scenarios.',
      size: 'small' as const,
    },
    {
      icon: MapPin,
      title: 'Travel Planning',
      description: 'Complete itinerary and pre-departure support.',
      size: 'small' as const,
    },
    {
      icon: Shield,
      title: 'Document Review',
      description: 'Thorough verification of all application materials.',
      size: 'small' as const,
    },
    {
      icon: Award,
      title: 'Success Coaching',
      description: 'Personalized strategies for visa approval.',
      size: 'large' as const,
    },
  ];

  const testimonials = [
    {
      quote: 'DreamHubUSA made my visa process so much easier. Their interview coaching helped me get my student visa on the first attempt.',
      author: 'Aisha, Nigeria',
    },
    {
      quote: 'Professional, fast, and very trustworthy. The 3D interactive guidance was amazing!',
      author: 'Rahul, India',
    },
    {
      quote: 'The holographic consultation experience was like nothing I\'ve seen before. Highly recommend!',
      author: 'Maria, Brazil',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with 3D Globe */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Scene Background */}
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
              animate={{ 
                textShadow: [
                  '0 0 20px hsl(var(--neon-blue) / 0.5)',
                  '0 0 40px hsl(var(--neon-purple) / 0.5)',
                  '0 0 20px hsl(var(--neon-blue) / 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              DreamHubUSA
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-4xl mb-4 text-neon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Your Pathway to the USA
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Advanced visa guidance with expert support. Experience the future of visa consulting.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl text-white text-xl px-12 py-8 rounded-full font-bold neon-glow group relative overflow-hidden"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    Start Your Journey
                    <Zap className="w-6 h-6" />
                  </a>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary"
                  animate={{ x: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating UI elements */}
        <motion.div
          className="absolute top-20 left-10 glass-morphism p-4 rounded-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Globe2 className="w-8 h-8 text-primary" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-20 glass-morphism p-4 rounded-2xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Target className="w-8 h-8 text-secondary" />
        </motion.div>
      </section>

      {/* Interactive Visa Type Selection */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Choose Your Visa Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the pathway that matches your American dream
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {visaTypes.map((visa, index) => (
              <VisaTypeCard key={index} {...visa} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Your Journey Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A step-by-step roadmap to visa success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                index={index}
                isLast={index === timelineSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visa support tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto auto-rows-fr">
            {services.map((service, index) => (
              <BentoServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3D Testimonials Slider */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard3D key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Holographic CTA */}
      <section className="py-40 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, hsl(var(--neon-purple) / 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(var(--neon-blue) / 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsl(var(--neon-purple) / 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-morphism max-w-4xl mx-auto p-16 rounded-3xl neon-border"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-8 text-gradient"
              animate={{
                textShadow: [
                  '0 0 30px hsl(var(--neon-purple) / 0.5)',
                  '0 0 60px hsl(var(--neon-blue) / 0.5)',
                  '0 0 30px hsl(var(--neon-purple) / 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Begin?
            </motion.h2>
            
            <p className="text-2xl text-muted-foreground mb-12">
              Book a free holographic consultation today
            </p>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent text-white text-2xl px-16 py-10 rounded-full font-bold neon-glow relative overflow-hidden group"
              >
                <span className="relative z-10">
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                    <Sparkles className="w-8 h-8" />
                    Book Free Consultation
                    <Zap className="w-8 h-8" />
                  </a>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
