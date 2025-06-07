
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import BookingCalendar from "@/components/BookingCalendar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />
      <HeroSection />
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SplineSceneBasic />
        </div>
      </section>
      <BookingCalendar />
      <Footer />
    </div>
  );
};

export default Index;
