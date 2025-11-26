import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">DreamHubUSA</h3>
            <p className="text-sm opacity-90">
              Your Gateway to the United States. Professional visa support and guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@dreamhubusa.com" className="hover:opacity-100 transition-opacity">
                  support@dreamhubusa.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/" className="hover:opacity-100 transition-opacity">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 DreamHubUSA. All Rights Reserved.
          </p>
          <p className="text-xs opacity-75 mt-2">
            Disclaimer: DreamHubUSA is not affiliated with any government agency. We do not guarantee visa approval. All services are guidance and consultation only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
