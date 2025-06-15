
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TransformBusinessSection from "@/components/TransformBusinessSection";
import CTASection from "@/components/BookingCalendar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <HeroSection />
      <WhatWeDoSection />
      <TransformBusinessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
