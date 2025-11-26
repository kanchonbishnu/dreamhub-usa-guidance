import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/dreamhub-logo-3d.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src={logo} alt="DreamHubUSA Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              <h3 className="text-lg sm:text-xl font-bold">DreamHubUSA</h3>
            </div>
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              Your Gateway to the United States. Professional visa support and guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/privacy" className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-center space-x-2 text-xs sm:text-sm opacity-90">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <a href="mailto:support@dreamhubusa.com" className="hover:opacity-100 transition-opacity break-all">
                  support@dreamhubusa.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-xs sm:text-sm opacity-90">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm opacity-90">
            © 2025 DreamHubUSA. All Rights Reserved.
          </p>
          <p className="text-[10px] sm:text-xs opacity-75 mt-2 px-4 leading-relaxed">
            Disclaimer: DreamHubUSA is not affiliated with any government agency. We do not guarantee visa approval. All services are guidance and consultation only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
