import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { MinimalGlobeScene } from '@/components/3d/MinimalGlobeScene';
import { FlowingWaves } from '@/components/FlowingWaves';
import { SparkleParticles } from '@/components/SparkleParticles';
import { TypewriterText } from '@/components/TypewriterText';
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
      link: '/visas/f1-student',
    },
    {
      icon: Plane,
      title: 'B1/B2 Visitor Visa',
      description: 'Strategic travel documentation, itinerary planning, and interview preparation for business and tourism visits.',
      link: '/visas/b1b2-visitor',
    },
    {
      icon: FileCheck,
      title: 'DS-160 Excellence',
      description: 'Precision form completion with zero-error guarantee. Every detail verified to maximize approval chances.',
      link: '/services/ds-160',
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
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Minimal Globe */}
        <MinimalGlobeScene />
        
        {/* Flowing Waves Background */}
        <FlowingWaves />
        
        {/* Sparkle Particles */}
        <SparkleParticles />
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37, #FFD700, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                textShadow: [
                  '0 2px 10px hsl(215 89% 52% / 0.2)',
                  '0 4px 20px hsl(214 95% 36% / 0.4)',
                  '0 2px 10px hsl(215 89% 52% / 0.2)',
                ]
              }}
              transition={{ 
                opacity: { duration: 1, ease: "easeOut", delay: 0 },
                y: { duration: 1, ease: "easeOut", delay: 0 },
                textShadow: { duration: 3, repeat: Infinity, delay: 1 }
              }}
            >
              DreamHubUSA
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <TypewriterText
                text="Empowering Your American Dream."
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 md:mb-4 font-semibold tracking-tight px-2"
                typingSpeed={80}
                cursorBlinkSpeed={0.8}
              />
            </motion.div>
            
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-6 sm:px-8 leading-relaxed"
              style={{ color: '#E5E7EB' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Expert guidance and strategic support for F-1 student visas, B1/B2 visitor visas, and comprehensive U.S. immigration services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5 
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-deep-blue to-secondary hover:shadow-2xl text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 lg:py-8 rounded-full font-bold glow-elegant hover:glow-premium transition-all duration-500 group relative overflow-hidden"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    <span className="whitespace-nowrap font-semibold">Begin Your Journey</span>
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                  </a>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-deep-blue via-primary to-royal-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>

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
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 leading-tight"
              style={{ 
                background: 'linear-gradient(135deg, hsl(215 89% 52%), hsl(214 95% 36%), hsl(224 76% 48%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Select Your Visa Pathway
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed" style={{ color: 'hsl(215 16% 35%)' }}>
              Choose the service that aligns with your American aspirations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
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
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 leading-tight"
              style={{ 
                background: 'linear-gradient(135deg, hsl(215 89% 52%), hsl(214 95% 36%), hsl(224 76% 48%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Your Success Timeline
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed" style={{ color: 'hsl(215 16% 35%)' }}>
              A proven, step-by-step methodology for visa approval
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
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
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 leading-tight"
              style={{ 
                background: 'linear-gradient(135deg, hsl(215 89% 52%), hsl(214 95% 36%), hsl(224 76% 48%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Comprehensive Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed" style={{ color: 'hsl(215 16% 35%)' }}>
              Elite visa consulting tailored to your individual requirements
            </p>
          </motion.div>

          <div className="bento-grid max-w-7xl mx-auto">
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
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 leading-tight"
              style={{ 
                background: 'linear-gradient(135deg, hsl(215 89% 52%), hsl(214 95% 36%), hsl(224 76% 48%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Client Success Stories
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed" style={{ color: 'hsl(215 16% 35%)' }}>
              Trusted by hundreds of successful visa applicants worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard3D key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Holographic CTA */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-40 relative overflow-hidden">
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
            className="glass-morphism max-w-4xl mx-auto p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl neon-border"
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 px-2"
              style={{ 
                background: 'linear-gradient(135deg, hsl(215 89% 52%), hsl(214 95% 36%), hsl(224 76% 48%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Ready to Begin?
            </motion.h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6" style={{ color: 'hsl(215 16% 35%)' }}>
              Book a free consultation today
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-10 rounded-full font-bold neon-glow relative overflow-hidden group"
              >
                <span className="relative z-10">
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                    <span className="whitespace-nowrap">Book Free Consultation</span>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
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
