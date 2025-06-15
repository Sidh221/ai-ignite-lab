import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Suspense } from "react";
import Volcano3D from "./Volcano3D";

const HeroSection = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0a0a] via-[#2d1515] to-black" ref={ref}>
      {/* Animated background particles and geometric shapes */}
      <div className="absolute inset-0">
        {/* Large volcanic glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF4500]/30 to-[#FF0000]/30 rounded-full filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#DC143C]/25 to-[#8B0000]/25 rounded-full filter blur-[150px] animate-float"></div>
        
        {/* Floating embers and volcanic particles */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-[#FF4500]/60 rounded-full animate-ember-rise"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-[#FF0000]/70 rounded-full animate-volcanic-eruption"></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 bg-[#DC143C]/50 rounded-full animate-ember-rise" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-60 w-4 h-4 bg-[#FF6347]/60 animate-volcanic-eruption" style={{animationDelay: '1s'}}></div>
        
        {/* Volcanic ash particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`ash-particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-[#FF4500]/70 rounded-full animate-ember-rise"
            style={{
              left: `${5 + (i % 5) * 20}%`,
              top: `${10 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
              boxShadow: '0 0 10px #FF4500'
            }}
          ></div>
        ))}
        
        {/* Lava flow effects */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`lava-${i}`}
            className="absolute w-3 h-8 bg-gradient-to-t from-[#FF0000]/80 to-transparent animate-lava-flow"
            style={{
              left: `${15 + (i % 3) * 30}%`,
              bottom: `${5 + (i % 2) * 10}%`,
              animationDelay: `${i * 0.7}s`,
              borderRadius: '0 0 50% 50%',
              filter: 'blur(1px)'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left content */}
          <div className={`lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 leading-tight font-inter">
              <span className="gradient-text-animate">Welcome to</span>
              <br />
              <span className="gradient-text-animate">
                NextsynthAi
              </span>
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl font-light leading-relaxed">
              Where artificial intelligence meets limitless possibility. We craft autonomous agents and intelligent automation systems that don't just work for your business, they evolve with it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-gradient-to-r from-blue to-pink text-white font-bold rounded-2xl px-8 py-4 hover:shadow-2xl hover:shadow-blue/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg shadow-blue/30"
              >
                <span className="relative z-10 font-inter">Explore Our Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet to-pink rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue to-pink rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="group glass border-2 border-blue/60 text-white font-bold rounded-2xl px-8 py-4 hover:bg-blue/20 hover:border-blue/100 hover:shadow-2xl hover:shadow-blue/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg shadow-blue/20"
              >
                <span className="font-inter">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-pink/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
          </div>
          
          {/* Right side - 3D Volcanic Eruption */}
          <div className={`lg:w-1/2 lg:pl-12 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px] lg:h-[600px]">
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-[#FF4500]/20 to-[#FF0000]/20 animate-pulse"></div>
                </div>
              }>
                <Volcano3D />
              </Suspense>
              
              {/* Floating volcanic particles around the volcano */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`volcano-ember-${i}`}
                    className="absolute w-2 h-2 bg-[#FF4500]/80 rounded-full animate-ember-rise"
                    style={{
                      left: `${20 + (i % 3) * 25}%`,
                      top: `${15 + (i % 4) * 20}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${4 + (i % 3)}s`,
                      boxShadow: '0 0 15px #FF4500'
                    }}
                  ></div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`volcano-spark-${i}`}
                    className="absolute w-1.5 h-1.5 bg-[#FF0000]/80 rounded-full animate-volcanic-eruption"
                    style={{
                      left: `${30 + (i % 4) * 20}%`,
                      top: `${25 + (i % 3) * 25}%`,
                      animationDelay: `${i * 1.2}s`,
                      animationDuration: `${3 + (i % 2)}s`,
                      boxShadow: '0 0 12px #FF0000'
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