import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Search, CheckCircle2, FileCheck, AlertCircle, Lock } from 'lucide-react';

const DocumentVerification = () => {
  const features = [
    {
      icon: Search,
      title: 'Comprehensive Review',
      description: 'Line-by-line examination of every document for accuracy and completeness.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Multi-stage verification process ensuring nothing is overlooked.',
    },
    {
      icon: Lock,
      title: 'Security & Confidentiality',
      description: 'Your documents handled with maximum security and strict confidentiality protocols.',
    },
    {
      icon: AlertCircle,
      title: 'Issue Resolution',
      description: 'Identification and correction of potential problems before submission.',
    },
  ];

  const documents = [
    'Passport and identification documents',
    'Academic transcripts and certificates',
    'Financial statements and bank documents',
    'Employment letters and proof of income',
    'I-20 or admission letters',
    'DS-160 confirmation pages',
    'Photograph specifications',
    'Supporting affidavits and letters',
    'Previous visa documentation',
    'Travel history records',
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
            <Shield className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Document Verification
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Rigorous quality assurance for all application materials ensuring flawless submission.
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
                Meticulous Document Review
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Your visa application is only as strong as its weakest document. A single missing signature, 
                unclear photo, or expired certificate can result in delays or denials. Our document verification 
                service provides the comprehensive review necessary to ensure every piece of your application is 
                perfect.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With multiple verification checkpoints and attention to the smallest details, we catch errors 
                before they become problems, giving you confidence in your submission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Reviewed */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
              Documents We Verify
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-premium hover:shadow-lg transition-all duration-300 group"
                >
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-foreground">{doc}</span>
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
            Our Verification Process
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
              Ensure Document Perfection
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Don't leave your visa application to chance. Get expert document verification today.
            </p>
            <Button
              size="lg"
              variant="premium"
              className="px-12 py-8 text-xl"
            >
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Start Document Review
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DocumentVerification;
