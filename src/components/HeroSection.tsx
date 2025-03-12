
import { ArrowRight, Mic, Globe, Bot, Shield, BarChart3, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] py-32 flex items-center justify-center relative overflow-hidden bg-lavender">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/50 to-lavender/80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Top icon cards */}
          <div className="flex justify-between mb-10">
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block animate-float">
              <Globe className="h-12 w-12 text-navy" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block animate-float" style={{ animationDelay: "0.5s" }}>
              <Mic className="h-12 w-12 text-navy" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
          </div>
          
          {/* Middle row with side icons and main heading */}
          <div className="flex items-center justify-between">
            <div className="bg-white p-6 rounded-lg shadow-md hidden sm:block animate-float" style={{ animationDelay: "1s" }}>
              <Bot className="h-12 w-12 text-navy" />
            </div>
            
            <div className="mx-auto text-center px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-navy leading-tight">
                Elevate Your Business<br />Beyond Limits
              </h1>
              <p className="text-lg md:text-xl text-navy/80 mb-10">
                Precision meets progress through intelligent efficiency
              </p>
              <a
                href="#contact"
                className="bg-navy text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-navy-dark transition-colors inline-block"
              >
                Get Started Today
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hidden sm:block animate-float" style={{ animationDelay: "1.5s" }}>
              <BarChart3 className="h-12 w-12 text-navy" />
            </div>
          </div>
          
          {/* Bottom icon cards */}
          <div className="flex justify-between mt-10">
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block animate-float" style={{ animationDelay: "2s" }}>
              <Shield className="h-12 w-12 text-navy" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block animate-float" style={{ animationDelay: "2.5s" }}>
              <MessageSquare className="h-12 w-12 text-navy" />
            </div>
            <div className="invisible sm:visible">
              {/* Placeholder for layout */}
            </div>
          </div>
          
          {/* Mobile-only icons that appear below heading on small screens */}
          <div className="grid grid-cols-2 gap-4 mt-8 sm:hidden">
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
              <Bot className="h-12 w-12 text-navy" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
              <BarChart3 className="h-12 w-12 text-navy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
