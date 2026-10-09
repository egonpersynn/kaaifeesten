import { useState, useCallback, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Welcome from "./pages/Welcome";
import KaaiFestival from "./pages/KaaiFestival";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Praktisch from "./pages/Praktisch";
import Rommelmarkt from "./pages/Rommelmarkt";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <Preloader onComplete={finishLoading} />}
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollReset />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/kaaifeesten" element={<Index />} />
              <Route path="/kaai-festival" element={<KaaiFestival />} />
              <Route path="/praktisch" element={<Praktisch />} />
              <Route path="/rommelmarkt" element={<Rommelmarkt />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
