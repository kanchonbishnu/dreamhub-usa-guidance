import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import UniversityPlacement from "./pages/services/UniversityPlacement";
import DS160Service from "./pages/services/DS160Service";
import InterviewPrep from "./pages/services/InterviewPrep";
import TravelStrategy from "./pages/services/TravelStrategy";
import DocumentVerification from "./pages/services/DocumentVerification";
import SuccessOptimization from "./pages/services/SuccessOptimization";
import F1Student from "./pages/visas/F1Student";
import B1B2Visitor from "./pages/visas/B1B2Visitor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/university-placement" element={<UniversityPlacement />} />
          <Route path="/services/ds-160" element={<DS160Service />} />
          <Route path="/services/interview-prep" element={<InterviewPrep />} />
          <Route path="/services/travel-strategy" element={<TravelStrategy />} />
          <Route path="/services/document-verification" element={<DocumentVerification />} />
          <Route path="/services/success-optimization" element={<SuccessOptimization />} />
          <Route path="/visas/f1-student" element={<F1Student />} />
          <Route path="/visas/b1b2-visitor" element={<B1B2Visitor />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
