
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import PerformantParticles from "@/components/PerformantParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <PerformantParticles />
      <NavBar />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <HeroSection />
      <WhatWeDoSection />
      <Footer />
    </div>
  );
};

export default Index;
