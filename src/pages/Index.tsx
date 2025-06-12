
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import BookingCalendar from "@/components/BookingCalendar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <NavBar />
      <HeroSection />
      <BookingCalendar />
      <Footer />
    </div>
  );
};

export default Index;
