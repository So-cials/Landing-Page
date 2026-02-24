import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsSocials from "@/components/WhatIsSocials";
import Features from "@/components/Features";
import WhySocials from "@/components/WhySocials";
import BetaSignup from "@/components/BetaSignup";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatIsSocials />
      <Features />
      <WhySocials />
      <BetaSignup />
      <Footer />
    </div>
  );
};

export default Index;
