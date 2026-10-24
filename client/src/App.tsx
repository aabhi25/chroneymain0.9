import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import ChroneyAssist from "@/pages/chroney-assist";
import AIVista from "@/pages/ai-vista";
import WhatsAppAgent from "@/pages/whatsapp-agent";
import InstagramAgent from "@/pages/instagram-agent";
import AICallingAgent from "@/pages/ai-calling-agent";
import JaroCaseStudy from "@/pages/case-study-jaro";
import CustomAISolutions from "@/pages/custom-ai-solutions";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsAndConditions from "@/pages/terms-and-conditions";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/playground"><Redirect to="/" /></Route>
      <Route path="/products/chroney-assist" component={ChroneyAssist} />
      <Route path="/products/ai-vista" component={AIVista} />
      <Route path="/products/whatsapp-agent" component={WhatsAppAgent} />
      <Route path="/products/instagram-agent" component={InstagramAgent} />
      <Route path="/products/ai-calling-agent" component={AICallingAgent} />
      <Route path="/case-studies/jaro-education" component={JaroCaseStudy} />
      <Route path="/custom-ai-solutions" component={CustomAISolutions} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
