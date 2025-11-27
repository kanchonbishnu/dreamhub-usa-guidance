import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { EnhancedGlobeScene } from '@/components/EnhancedGlobeScene';
import { PremiumAtmosphere } from '@/components/PremiumAtmosphere';
import { TypewriterText } from '@/components/TypewriterText';
import { VisaTypeCard } from '@/components/VisaTypeCard';
import { TimelineStep } from '@/components/TimelineStep';
import { BentoServiceCard } from '@/components/BentoServiceCard';
import { TestimonialCard3D } from '@/components/TestimonialCard3D';
import { AdvisorCard } from '@/components/AdvisorCard';
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

  const advisors = [
    {
      name: 'Kanchon Kumar Bishnu',
      qualification: 'MSCS',
      university: 'California State University Los Angeles',
      location: 'CA, USA',
    },
    {
      name: 'Md Rakibul Hasan Tasnim',
      qualification: 'Associate in Computer Science',
      university: 'Los Angeles City College',
      location: 'CA, USA',
    },
    {
      name: 'Saimon Rahman Fahad',
      qualification: 'BBA',
      university: 'The University of South Alabama',
      location: 'Mobile, Alabama, USA',
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
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-0">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50" />
        
        {/* Enhanced 3D Globe */}
        <EnhancedGlobeScene />
        
        {/* Premium atmospheric effects */}
        <PremiumAtmosphere />
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Premium DreamHubUSA headline - Royal Blue */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-none px-2"
              style={{ 
                color: '#1D4ED8',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 8px rgba(29, 78, 216, 0.25), 0 0 40px rgba(255, 255, 255, 0.6)',
                filter: 'drop-shadow(0 4px 12px rgba(29, 78, 216, 0.15))',
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ 
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{ 
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2
              }}
            >
              DreamHubUSA
            </motion.h1>

            {/* Enhanced sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight px-2 text-foreground leading-tight"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '-0.02em',
                }}
              >
                Empowering Your American Dream.
              </p>
            </motion.div>
            
            {/* Description */}
            <motion.p
              className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 leading-relaxed text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              style={{ letterSpacing: '-0.01em' }}
            >
              Elite guidance for F-1 student visas, B1/B2 visitor visas, and comprehensive U.S. immigration services.
            </motion.p>

            {/* Premium button */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.9 
              }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden group text-white text-base sm:text-lg md:text-xl lg:text-2xl px-8 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 lg:py-8 rounded-full font-bold transition-all duration-500 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #DC2626 100%)',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(220, 38, 38, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    <span className="whitespace-nowrap font-bold">Start Your Journey</span>
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </a>
                </motion.span>
                
                {/* Glossy shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/80 via-blue-500 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    filter: 'blur(8px)',
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Visa Type Selection */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 leading-tight text-gradient"
            >
              Select Your Visa Pathway
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed text-muted-foreground">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
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
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 leading-tight text-gradient"
            >
              Your Success Timeline
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed text-muted-foreground">
              A proven, step-by-step methodology for visa approval
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative bg-gradient-to-b from-white via-amber-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 leading-tight text-gradient"
            >
              Comprehensive Services
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed text-muted-foreground">
              Elite visa consulting tailored to your individual requirements
            </p>
          </motion.div>

          <div className="bento-grid max-w-7xl mx-auto gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <BentoServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Your Dedicated Advisors */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-50/30" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 leading-tight"
              style={{ 
                color: '#1D4ED8',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 8px rgba(29, 78, 216, 0.15), 0 0 30px rgba(255, 255, 255, 0.4)',
              }}
            >
              Your Dedicated Advisors
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed text-muted-foreground font-medium">
              These dedicated advisors will stay connected with you throughout your entire journey — providing step-by-step guidance, expert insights, and personalized support to help you achieve your American Dream.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
            {advisors.map((advisor, index) => (
              <AdvisorCard key={index} {...advisor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2 leading-tight"
              style={{ 
                color: '#1D4ED8',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 8px rgba(29, 78, 216, 0.15), 0 0 30px rgba(255, 255, 255, 0.4)',
              }}
            >
              Client Success Stories
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed text-muted-foreground font-medium">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, hsl(217 91% 60% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(45 93% 47% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsl(217 91% 60% / 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-morphism max-w-4xl mx-auto p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl shadow-2xl border border-primary/10"
          >
            <motion.h2
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2 text-gradient"
            >
              Ready to Begin?
            </motion.h2>
            
            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-6 text-muted-foreground">
              Book a free consultation today
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-18 py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 rounded-full font-bold hover:scale-105 transition-all duration-500 relative overflow-hidden group shadow-xl"
              >
                <span className="relative z-10">
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                    <span className="whitespace-nowrap">Book Free Consultation</span>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                  </a>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
