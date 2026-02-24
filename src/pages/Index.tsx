import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsSocials from "@/components/WhatIsSocials";
import MilestonesSection from "@/components/MilestonesSection";
import Features from "@/components/Features";
import WhySocials from "@/components/WhySocials";
import BetaSignup from "@/components/BetaSignup";
import Footer from "@/components/Footer";
import ParallaxGrid from "@/components/ParallaxGrid";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background relative">
      <ParallaxGrid />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhatIsSocials />
        <Features />
        <MilestonesSection />
        <WhySocials />
        <BetaSignup />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
