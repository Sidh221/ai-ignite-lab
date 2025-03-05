
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NichesSection from "@/components/NichesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DemoSection from "@/components/DemoSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <NichesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <DemoSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
