import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const studentPackages = [
    {
      name: "Basic",
      price: "$150",
      features: [
        "DS-160 form assistance",
        "Document checklist",
        "Email support",
      ],
    },
    {
      name: "Standard",
      price: "$350",
      popular: true,
      features: [
        "Everything in Basic",
        "University selection assistance",
        "SOP/essay review",
        "Visa interview preparation",
      ],
    },
    {
      name: "Premium",
      price: "$650",
      features: [
        "Complete application support",
        "I-20 guidance",
        "SEVIS assistance",
        "Unlimited mock interviews",
        "Pre-departure support",
      ],
    },
  ];

  const touristPackages = [
    {
      name: "Basic",
      price: "$100",
      features: [
        "DS-160 form assistance",
        "Document review",
      ],
    },
    {
      name: "Standard",
      price: "$180",
      popular: true,
      features: [
        "Everything in Basic",
        "Interview preparation",
        "Travel itinerary guidance",
      ],
    },
    {
      name: "Premium",
      price: "$250",
      features: [
        "Full documentation support",
        "Personalized itinerary",
        "Priority support",
      ],
    },
  ];

  const addOns = [
    { service: "DS-160 Form Only", price: "$50" },
    { service: "Mock Interview Only", price: "$40" },
    { service: "University Shortlisting Only", price: "$80" },
    { service: "SOP Editing", price: "$100" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Pricing</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
            Transparent pricing with flexible packages to suit your needs
          </p>
        </div>
      </section>

      {/* Student Visa Packages */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            🎓 Student Visa Packages (F-1)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {studentPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular ? "border-secondary border-2 shadow-xl" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{pkg.name}</CardTitle>
                  <p className="text-3xl sm:text-4xl font-bold text-primary mt-3 sm:mt-4">{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium" className="w-full mt-4 sm:mt-6">
                    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Visa Packages */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            ✈️ Tourist Visa Packages (B1/B2)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {touristPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular ? "border-secondary border-2 shadow-xl" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{pkg.name}</CardTitle>
                  <p className="text-3xl sm:text-4xl font-bold text-primary mt-3 sm:mt-4">{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium" className="w-full mt-4 sm:mt-6">
                    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            📄 Add-On Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <p className="font-semibold mb-2 text-sm sm:text-base">{addon.service}</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">{addon.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Choose Your Package?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Contact us today to discuss which package is right for you.
          </p>
          <Button size="lg" variant="secondary" className="shadow-lg">
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
              Contact Us Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
