import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Video, FileText, Target, TrendingUp, Users } from 'lucide-react';

const InterviewPrep = () => {
  const features = [
    {
      icon: Video,
      title: 'Mock Interview Sessions',
      description: 'Realistic practice sessions with experienced visa interview specialists.',
    },
    {
      icon: FileText,
      title: 'Question Bank Access',
      description: 'Comprehensive database of real visa interview questions and optimal responses.',
    },
    {
      icon: Target,
      title: 'Personalized Coaching',
      description: 'Tailored feedback addressing your specific weaknesses and concerns.',
    },
    {
      icon: TrendingUp,
      title: 'Confidence Building',
      description: 'Proven techniques to overcome anxiety and present yourself effectively.',
    },
  ];

  const topics = [
    'Academic and career objectives',
    'Financial documentation explanation',
    'Ties to home country demonstration',
    'Study plan articulation',
    'Post-graduation intentions',
    'Response to difficult questions',
    'Body language and presentation',
    'Handling rejection scenarios',
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
            <MessageSquare className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Interview Excellence
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Proven strategies with real-world scenario preparation to ensure visa interview success.
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
                Master Your Visa Interview
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                The visa interview is the final and most critical step in your application process. Even with 
                perfect documentation, a poor interview performance can result in denial. Our interview 
                excellence program transforms nervous applicants into confident, articulate candidates.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Through intensive mock sessions, expert feedback, and proven communication strategies, we 
                prepare you to answer any question with clarity and confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              Interview Topics We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-premium hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-lg text-foreground">{topic}</span>
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
            Our Interview Preparation Approach
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
              Ready to Ace Your Interview?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join hundreds of successful applicants who mastered their interviews with our coaching.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                Book Interview Coaching
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InterviewPrep;
