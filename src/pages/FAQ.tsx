import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const generalFAQs = [
    {
      question: "What does DreamHubUSA do?",
      answer: "We provide professional guidance for U.S. student visas, tourist visas, DS-160 assistance, interview coaching, and university selection support. We do not guarantee visas but help you prepare strongly.",
    },
    {
      question: "Do you guarantee visa approval?",
      answer: "No. No agency or consultant can legally guarantee a visa. We provide expert guidance and preparation to improve your chances.",
    },
    {
      question: "Do you operate internationally?",
      answer: "Yes! We assist clients from all countries through Telegram, phone, email, and video calls.",
    },
    {
      question: "How long does the visa process take?",
      answer: "Timelines vary by country, embassy, and application type. On average: F-1 Student Visa: 2–3 months, B1/B2 Tourist Visa: 1–3 months, DS-160 only: 1–3 days.",
    },
  ];

  const studentFAQs = [
    {
      question: "Can you help me choose the right university?",
      answer: "Yes. We evaluate your academic background, budget, and goals to match the best universities and programs.",
    },
    {
      question: "Do you help with SOP/essays?",
      answer: "Yes, we guide you with structure, editing, and review.",
    },
    {
      question: "Will you help me with the I-20 and SEVIS process?",
      answer: "Yes. We explain the process, documentation, and fee payments.",
    },
  ];

  const touristFAQs = [
    {
      question: "Do you help prepare travel itineraries?",
      answer: "Yes, including hotel suggestions, flight planning, and trip structure to support your application.",
    },
    {
      question: "Can you help families apply together?",
      answer: "Yes, we assist with individual and family DS-160 forms.",
    },
  ];

  const paymentFAQs = [
    {
      question: "What payment methods do you accept?",
      answer: "Bank transfer, credit/debit cards, PayPal, or local payment options.",
    },
    {
      question: "Is my information secure?",
      answer: "Yes. We use encrypted tools and never share client information.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">Frequently Asked Questions</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-12 sm:space-y-16">
          {/* General Questions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">General Questions</h2>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Student Visa Questions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">Student Visa (F-1) Questions</h2>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {studentFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`student-${index}`} className="border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Tourist Visa Questions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">Tourist Visa (B1/B2) Questions</h2>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {touristFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`tourist-${index}`} className="border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Payment & Support Questions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">Payment & Support Questions</h2>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {paymentFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`payment-${index}`} className="border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
