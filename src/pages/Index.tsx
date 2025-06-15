
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TransformBusinessSection from "@/components/TransformBusinessSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/BookingCalendar";
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
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
