
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RecommendationsSection from "@/components/RecommendationsSection";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-dark text-white overflow-hidden">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
