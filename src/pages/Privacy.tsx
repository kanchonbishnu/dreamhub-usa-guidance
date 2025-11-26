const Privacy = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your privacy and data security are our priorities
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              DreamHubUSA values your privacy. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Name, email, phone number</li>
              <li>Application and travel details</li>
              <li>Documents you voluntarily provide</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide visa guidance services</li>
              <li>To communicate with you</li>
              <li>To improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Sharing of Information</h2>
            <p className="text-muted-foreground mb-4">
              We do not share, sell, or distribute your personal information with any third parties except:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>When required by law</li>
              <li>When necessary to deliver our services (e.g., university applications)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="text-muted-foreground">
              We store your data securely using encrypted tools and restrict access to authorized staff only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">You may request:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access to your data</li>
              <li>Correction or deletion</li>
              <li>To stop receiving emails or messages</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              For privacy questions, email:{" "}
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

export default Privacy;
