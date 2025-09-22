
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programmes from "./pages/Programmes"; // Renamed Certifications to Programmes
import Masterclasses from "./pages/Masterclasses"; // Added Masterclasses page
import CorporateTraining from "./pages/CorporateTraining"; // Added CorporateTraining page
import Qualifications from "./pages/Qualifications"; // Added Qualifications page
import Courses from "./pages/Courses"; // Added Courses page with PayFast integration
import PaymentSuccess from "./pages/PaymentSuccess"; // Added Payment Success page
import PaymentCancelled from "./pages/PaymentCancelled"; // Added Payment Cancelled page
import TestPage from "./pages/TestPage"; // Added Test page for debugging
import TestUpload from "./pages/TestUpload"; // Added TestUpload page for file upload testing
// import About from "./pages/About"; // Removed About page import
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GettingStarted from './pages/GettingStarted';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programmes" element={<Programmes />} /> {/* Renamed path and element */}
          <Route path="/masterclasses" element={<Masterclasses />} /> {/* Added Masterclasses route */}
          <Route path="/corporate-training" element={<CorporateTraining />} /> {/* Added CorporateTraining route */}
          <Route path="/qualifications" element={<Qualifications />} /> {/* Added Qualifications route */}
          <Route path="/courses" element={<Courses />} /> {/* Added Courses route with PayFast integration */}
          <Route path="/payment/success" element={<PaymentSuccess />} /> {/* Added Payment Success route */}
          <Route path="/payment/cancelled" element={<PaymentCancelled />} /> {/* Added Payment Cancelled route */}
          <Route path="/test" element={<TestPage />} /> {/* Added Test route for debugging */}
          <Route path="/test-upload" element={<TestUpload />} /> {/* Added route for file upload testing */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
