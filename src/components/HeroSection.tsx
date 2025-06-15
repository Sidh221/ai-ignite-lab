

const HeroSection = () => {

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#00D4FF] to-[#39FF14] rounded-full filter blur-[120px] opacity-15 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="flex items-center mb-8">
              <img src="/lovable-uploads/3dd70e90-927f-4504-840a-a044bc9c7860.png" alt="NextSynthAI Logo" className="h-16 w-16 mr-4" />
              <div className="text-3xl font-bold tracking-tight text-white">NextSynthAI</div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] via-[#8B5FBF] to-[#C147E9] animate-gradient-text">
                Artificial Intelligence
              </span>
              <br />
              <span className="text-white">meets</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#00D4FF]">
                limitless possibility
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed">
              We craft autonomous agents and intelligent automation systems that don't just work for your business, they evolve with it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-semibold rounded-xl px-8 py-4 hover:shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10">Experience Intelligent Automation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="glass border border-[#00D4FF]/30 text-white font-semibold rounded-xl px-8 py-4 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1">
                Deploy Your AI Agent Today
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00D4FF] mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Intelligent Systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#39FF14] mb-2">∞</div>
                <div className="text-gray-400 text-sm">Scalable Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C147E9] mb-2">AI</div>
                <div className="text-gray-400 text-sm">Next-Gen Technology</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
