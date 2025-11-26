import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, CheckCircle, BookOpen, FileText, Shield, Globe2, Award, Users } from 'lucide-react';

const F1Student = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'University Selection',
      description: 'Strategic matching with top-tier U.S. institutions aligned with your academic profile and career goals.',
    },
    {
      icon: FileText,
      title: 'I-20 Processing',
      description: 'Complete assistance with SEVIS registration, I-20 acquisition, and all required documentation.',
    },
    {
      icon: Shield,
      title: 'Visa Interview Prep',
      description: 'Intensive coaching sessions with proven strategies to ace your F-1 visa interview confidently.',
    },
    {
      icon: Award,
      title: 'Scholarship Guidance',
      description: 'Expert advice on finding and applying for scholarships, grants, and financial aid opportunities.',
    },
  ];

  const requirements = [
    'Valid passport with at least 6 months validity',
    'Acceptance letter (I-20) from a SEVP-approved U.S. institution',
    'Proof of financial support for tuition and living expenses',
    'Academic transcripts and standardized test scores (TOEFL, IELTS, SAT, GRE)',
    'DS-160 confirmation page',
    'SEVIS fee payment receipt',
  ];

  const process = [
    {
      step: '01',
      title: 'University Research & Application',
      description: 'We help you identify the best-fit universities, prepare compelling application materials, and submit applications strategically.',
    },
    {
      step: '02',
      title: 'I-20 Acquisition',
      description: 'Once accepted, we guide you through SEVIS registration and ensure you receive your I-20 form correctly.',
    },
    {
      step: '03',
      title: 'DS-160 & Visa Application',
      description: 'Expert completion of your DS-160 form, scheduling your visa interview, and preparing all supporting documents.',
    },
    {
      step: '04',
      title: 'Interview Preparation',
      description: 'Comprehensive mock interviews, question-answer practice, and confidence-building sessions.',
    },
    {
      step: '05',
      title: 'Pre-Departure Guidance',
      description: 'Travel arrangements, accommodation setup, cultural orientation, and essential tips for your U.S. journey.',
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
            <GraduationCap className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              F-1 Student Visa
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Your gateway to world-class education in the United States. Comprehensive support from university selection to visa approval.
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
                Study in America with Confidence
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                The F-1 visa is the most common student visa for those wishing to pursue academic studies 
                at accredited U.S. institutions. With our comprehensive support system, you'll navigate 
                every step—from selecting the perfect university to landing on U.S. soil.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We provide end-to-end assistance including university applications, I-20 processing, 
                DS-160 completion, interview preparation, and pre-departure orientation—ensuring your 
                American education dream becomes reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Comprehensive F-1 Support
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
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              F-1 Visa Requirements
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

      {/* Process Timeline */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
            Your F-1 Journey with Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/40 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-gradient">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">
              Start Your American Education Journey
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Let our experts guide you through every step of the F-1 visa process. Book your consultation today.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                Begin F-1 Visa Application
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default F1Student;
