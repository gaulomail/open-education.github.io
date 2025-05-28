
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
