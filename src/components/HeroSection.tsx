
import { ArrowRight, Mic, Globe, Bot, Shield, BarChart3, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] py-32 flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-navy/30 to-black z-0"></div>
      <div className="blob bg-steel/30 top-[20%] left-[10%]"></div>
      <div className="blob bg-violet/30 bottom-[20%] right-[10%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Top icon cards with improved animations */}
          <div className="flex justify-between mb-10">
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-navy/30 p-6 rounded-lg shadow-md inline-block animate-float glass-card transform hover:scale-105 transition-all duration-300">
              <Globe className="h-12 w-12 text-violet" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-navy/30 p-6 rounded-lg shadow-md inline-block animate-float glass-card transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "0.5s" }}>
              <Mic className="h-12 w-12 text-steel" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
          </div>
          
          {/* Middle row with side icons and main heading */}
          <div className="flex items-center justify-between">
            <div className="bg-navy/30 p-6 rounded-lg shadow-md hidden sm:block animate-float glass-card transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "1s" }}>
              <Bot className="h-12 w-12 text-cyclamen" />
            </div>
            
            <div className="mx-auto text-center px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-gradient-text">
                Elevate Your Business<br />Beyond Limits
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 animate-fade-in-up">
                Precision meets progress through intelligent efficiency
              </p>
              <a
                href="#booking-calendar"
                className="bg-gradient-steel-violet px-8 py-4 rounded-md text-lg font-semibold hover:bg-gradient-steel-cyclamen transition-colors inline-block text-white hover:shadow-lg hover:shadow-violet/30 transform hover:-translate-y-1 duration-300"
              >
                Get Started Today
              </a>
            </div>
            
            <div className="bg-navy/30 p-6 rounded-lg shadow-md hidden sm:block animate-float glass-card transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "1.5s" }}>
              <BarChart3 className="h-12 w-12 text-steel" />
            </div>
          </div>
          
          {/* Bottom icon cards */}
          <div className="flex justify-between mt-10">
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-navy/30 p-6 rounded-lg shadow-md inline-block animate-float glass-card transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "2s" }}>
              <Shield className="h-12 w-12 text-violet" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-navy/30 p-6 rounded-lg shadow-md inline-block animate-float glass-card transform hover:scale-105 transition-all duration-300" style={{ animationDelay: "2.5s" }}>
              <MessageSquare className="h-12 w-12 text-cyclamen" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
          </div>
          
          {/* Mobile-only icons that appear below heading on small screens */}
          <div className="grid grid-cols-2 gap-4 mt-8 sm:hidden">
            <div className="bg-navy/30 p-6 rounded-lg shadow-md flex justify-center glass-card transform hover:scale-105 transition-all duration-300">
              <Bot className="h-12 w-12 text-cyclamen" />
            </div>
            <div className="bg-navy/30 p-6 rounded-lg shadow-md flex justify-center glass-card transform hover:scale-105 transition-all duration-300">
              <BarChart3 className="h-12 w-12 text-steel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
