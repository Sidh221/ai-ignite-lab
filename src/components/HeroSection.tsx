
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Suspense } from "react";
import OrbitalSystemDashboard from "./OrbitalSystemDashboard";

const HeroSection = () => {
  const { ref, inView } = useScrollAnimation();

  console.log('HeroSection component rendering, inView:', inView);

  const handleExploreServices = () => {
    // Scroll to the WhatWeDoSection which contains our services
    const whatWeDoSection = document.querySelector('#what-we-do');
    if (whatWeDoSection) {
      whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    // Open cal.com booking directly
    window.open('https://cal.com/sudhanshu-rai/free-consultation', '_blank');
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black" ref={ref}>
      {/* Animated background particles and geometric shapes */}
      <div className="absolute inset-0">
        {/* Large background gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#4F46E5]/30 to-[#8B5CF6]/30 rounded-full filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#8B5CF6]/25 to-[#EC4899]/25 rounded-full filter blur-[150px] animate-float"></div>
        
        {/* Floating glass morphism elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-[#4F46E5]/20 backdrop-blur-sm border border-[#4F46E5]/40 rounded-lg animate-glass-morph"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-[#8B5CF6]/30 backdrop-blur-sm border border-[#8B5CF6]/50 rounded-full animate-float-gentle"></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 bg-[#EC4899]/20 backdrop-blur-sm border border-[#EC4899]/40 rounded-lg animate-glass-morph" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-60 w-4 h-4 bg-[#4F46E5]/40 backdrop-blur-sm border border-[#4F46E5]/60 rounded-full animate-float-gentle" style={{animationDelay: '1s'}}></div>
        
        {/* Glass particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`glass-particle-${i}`}
            className="absolute w-1 h-1 bg-[#4F46E5]/70 rounded-full animate-particle-float backdrop-blur-sm"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
              boxShadow: '0 0 10px rgba(79, 70, 229, 0.5)'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left content */}
          <div className={`lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 leading-tight font-inter">
              <span className="gradient-text-animate">
                NextsynthAi
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 max-w-2xl font-medium leading-relaxed tracking-wide">
              Automate What Slows You Down. Scale What Moves You Forward
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleExploreServices}
                className="group relative bg-gradient-to-r from-blue to-pink text-white font-bold rounded-2xl px-8 py-4 hover:shadow-2xl hover:shadow-blue/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg shadow-blue/30"
              >
                <span className="relative z-10 font-inter">Explore Our Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet to-pink rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue to-pink rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={handleGetStarted}
                className="group glass border-2 border-blue/60 text-white font-bold rounded-2xl px-8 py-4 hover:bg-blue/20 hover:border-blue/100 hover:shadow-2xl hover:shadow-blue/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg shadow-blue/20"
              >
                <span className="font-inter">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-pink/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
          </div>
          
          {/* Right side - Enhanced Orbital System Dashboard */}
          <div className={`lg:w-1/2 lg:pl-12 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px] lg:h-[600px]">
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-orange-400/20 to-yellow-500/20 animate-pulse"></div>
                </div>
              }>
                <div className="w-full h-full">
                  <OrbitalSystemDashboard />
                </div>
              </Suspense>
              
              {/* Enhanced floating particles around the animation */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`orbital-particle-${i}`}
                    className="absolute w-1.5 h-1.5 bg-blue/60 rounded-full animate-float-gentle backdrop-blur-sm"
                    style={{
                      left: `${15 + (i % 4) * 20}%`,
                      top: `${10 + (i % 5) * 18}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${5 + (i % 3)}s`,
                      boxShadow: '0 0 12px #4F46E5'
                    }}
                  ></div>
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`orbital-sparkle-${i}`}
                    className="absolute w-1 h-1 bg-orange-400/80 rounded-full animate-glass-morph backdrop-blur-sm"
                    style={{
                      left: `${25 + (i % 3) * 25}%`,
                      top: `${20 + (i % 4) * 20}%`,
                      animationDelay: `${i * 1.2}s`,
                      animationDuration: `${7 + (i % 2)}s`,
                      boxShadow: '0 0 8px #FB923C'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
