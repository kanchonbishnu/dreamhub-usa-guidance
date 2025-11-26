const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              By using our services, you agree to the following terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">1. Nature of Services</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>DreamHubUSA provides consultation and guidance only.</li>
              <li>We do not guarantee visa approval or influence government decisions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Payments</h2>
            <p className="text-muted-foreground">
              All payments are non-refundable once services begin.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide accurate information</li>
              <li>Follow immigration laws</li>
              <li>Attend scheduled calls/interviews on time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Document Use</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We do not create fake or illegal documents.</li>
              <li>Providing false information may lead to termination of service.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">DreamHubUSA is not responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Visa denials</li>
              <li>Embassy delays</li>
              <li>Incorrect information submitted by clients</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update terms at any time. Continued use of services means acceptance.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about these terms, please contact us at:{" "}
              <a href="mailto:support@dreamhubusa.com" className="text-primary hover:underline">
                support@dreamhubusa.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
