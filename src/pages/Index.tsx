
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import BookingCalendar from "@/components/BookingCalendar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />
      <HeroSection />
      <WhatWeDoSection />
      <BookingCalendar />
      <Footer />
    </div>
  );
};

export default Index;
