
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RecommendationsSection from "@/components/RecommendationsSection";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
