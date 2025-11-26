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
      title: 'F-1 Student Visa',
      description: 'Comprehensive university placement, I-20 processing, and SEVIS compliance. Expert guidance from application to visa approval.',
    },
    {
      icon: Plane,
      title: 'B1/B2 Visitor Visa',
      description: 'Strategic travel documentation, itinerary planning, and interview preparation for business and tourism visits.',
    },
    {
      icon: FileCheck,
      title: 'DS-160 Excellence',
      description: 'Precision form completion with zero-error guarantee. Every detail verified to maximize approval chances.',
    },
  ];

  const timelineSteps = [
    {
      title: 'Strategic Assessment',
      description: 'Comprehensive profile evaluation and personalized roadmap development tailored to your unique goals.',
    },
    {
      title: 'Document Excellence',
      description: 'Meticulous preparation and organization of all required materials with our expert checklist system.',
    },
    {
      title: 'Application Processing',
      description: 'Flawless DS-160 completion, SEVIS registration, and comprehensive paperwork management.',
    },
    {
      title: 'Interview Mastery',
      description: 'Intensive coaching with proven techniques, mock interviews, and expert feedback to ensure confidence.',
    },
    {
      title: 'Visa Approval & Beyond',
      description: 'Successful visa acquisition with complete pre-departure guidance for your seamless journey to America.',
    },
  ];

  const services = [
    {
      icon: School,
      title: 'Elite University Placement',
      description: 'Strategic matching with top-tier institutions aligned with your academic goals and financial parameters.',
      size: 'large' as const,
      link: '/services/university-placement',
    },
    {
      icon: FileCheck,
      title: 'DS-160 Mastery',
      description: 'Expert precision in every form field with comprehensive review.',
      size: 'small' as const,
      link: '/services/ds-160',
    },
    {
      icon: MessageSquare,
      title: 'Interview Excellence',
      description: 'Proven strategies with real-world scenario preparation.',
      size: 'small' as const,
      link: '/services/interview-prep',
    },
    {
      icon: MapPin,
      title: 'Travel Strategy',
      description: 'Complete itinerary design and comprehensive travel planning.',
      size: 'small' as const,
      link: '/services/travel-strategy',
    },
    {
      icon: Shield,
      title: 'Document Verification',
      description: 'Rigorous quality assurance for all application materials.',
      size: 'small' as const,
      link: '/services/document-verification',
    },
    {
      icon: Award,
      title: 'Success Optimization',
      description: 'Data-driven strategies proven to maximize visa approval rates.',
      size: 'large' as const,
      link: '/services/success-optimization',
    },
  ];

  const testimonials = [
    {
      quote: 'DreamHubUSA delivered exceptional guidance throughout my F-1 visa process. Their interview preparation was instrumental in my first-attempt approval.',
      author: 'Aisha M., Nigeria',
    },
    {
      quote: 'Highly professional service with outstanding attention to detail. Their strategic approach made all the difference.',
      author: 'Rahul S., India',
    },
    {
      quote: 'The expertise and personalized support I received exceeded all expectations. A truly premium consulting experience.',
      author: 'Maria L., Brazil',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with 3D Globe */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Scene Background */}
        <div className="absolute inset-0 h-[600px] md:h-full">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
        
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
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-gradient leading-tight"
              animate={{ 
                textShadow: [
                  '0 4px 20px hsl(var(--navy-blue) / 0.3)',
                  '0 4px 30px hsl(var(--deep-blue) / 0.4)',
                  '0 4px 20px hsl(var(--navy-blue) / 0.3)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              DreamHubUSA
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 font-semibold tracking-tight"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Premier U.S. Visa Advisory
            </motion.p>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Expert guidance and strategic support for F-1 student visas, B1/B2 visitor visas, and comprehensive U.S. immigration services.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-deep-blue to-secondary hover:shadow-2xl text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 rounded-full font-bold glow-elegant hover:glow-premium transition-all duration-500 group relative overflow-hidden"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span className="whitespace-nowrap font-semibold">Begin Your Journey</span>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-deep-blue via-primary to-royal-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating UI elements */}
        <motion.div
          className="hidden md:block absolute top-20 left-4 md:left-10 glass-morphism p-3 md:p-4 rounded-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Globe2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </motion.div>
        
        <motion.div
          className="hidden md:block absolute bottom-32 right-4 md:right-20 glass-morphism p-3 md:p-4 rounded-2xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Target className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
        </motion.div>
      </section>

      {/* Interactive Visa Type Selection */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-gradient px-4 leading-tight">
              Select Your Visa Pathway
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Choose the service that aligns with your American aspirations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {visaTypes.map((visa, index) => (
              <VisaTypeCard key={index} {...visa} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-gradient px-4 leading-tight">
              Your Success Timeline
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              A proven, step-by-step methodology for visa approval
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
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-gradient px-4 leading-tight">
              Comprehensive Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Elite visa consulting tailored to your individual requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto auto-rows-fr">
            {services.map((service, index) => (
              <BentoServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3D Testimonials Slider */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-gradient px-4 leading-tight">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Trusted by hundreds of successful visa applicants worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard3D key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Holographic CTA */}
      <section className="py-16 md:py-24 lg:py-40 relative overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-morphism max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-3xl neon-border"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-gradient"
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
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 px-4">
              Book a free holographic consultation today
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent text-white text-base sm:text-lg md:text-xl lg:text-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 rounded-full font-bold neon-glow relative overflow-hidden group"
              >
                <span className="relative z-10">
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                    <span className="whitespace-nowrap">Book Free Consultation</span>
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </a>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-deep-blue to-royal-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
