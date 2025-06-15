const HeroSection = () => {

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black">
      {/* Animated background particles and geometric shapes */}
      <div className="absolute inset-0">
        {/* Large background gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#8B5FBF]/30 to-[#C147E9]/30 rounded-full filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00D4FF]/25 to-[#39FF14]/25 rounded-full filter blur-[150px] animate-float"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-[#00D4FF]/50 rotate-45 animate-geometric-spin"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-[#39FF14]/40 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 border border-[#8B5FBF]/60 animate-geometric-spin" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-60 w-4 h-4 bg-[#C147E9]/50 animate-particle-float" style={{animationDelay: '1s'}}></div>
        
        {/* Animated particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#00D4FF]/60 rounded-full animate-particle-float"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight font-inter">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] via-[#8B5FBF] to-[#C147E9] animate-gradient-text">
                NextSynnThai
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed">
              Where artificial intelligence meets limitless possibility. We craft autonomous agents and intelligent automation systems that don't just work for your business, they evolve with it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-bold rounded-2xl px-8 py-4 hover:shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <span className="relative z-10 font-inter">Explore Our Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group glass border-2 border-[#39FF14]/40 text-white font-bold rounded-2xl px-8 py-4 hover:bg-[#39FF14]/20 hover:border-[#39FF14]/70 hover:shadow-xl hover:shadow-[#39FF14]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <span className="font-inter">Get Started Today</span>
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-[#00D4FF] mb-2 font-inter animate-pulse-slow">24/7</div>
                <div className="text-gray-400 text-sm font-medium">Intelligent Systems</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-[#39FF14] mb-2 font-inter animate-pulse-slow" style={{animationDelay: '1s'}}>∞</div>
                <div className="text-gray-400 text-sm font-medium">Scalable Solutions</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-[#C147E9] mb-2 font-inter animate-pulse-slow" style={{animationDelay: '2s'}}>AI</div>
                <div className="text-gray-400 text-sm font-medium">Next-Gen Technology</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Enhanced 3D Neural Network Visualization */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative h-[600px] lg:h-[700px]">
              {/* 3D Neural Network Animation with enhanced depth */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg perspective-1000">
                  {/* Neural Network Nodes with 3D effect */}
                  <div className="absolute inset-0 transform-gpu">
                    {/* Input Layer */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-16">
                      {[...Array(4)].map((_, i) => (
                        <div key={`input-${i}`} className="relative group">
                          <div className="w-5 h-5 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-full animate-pulse-slow shadow-2xl shadow-[#00D4FF]/60 hover:scale-125 transition-transform duration-300"></div>
                          <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-full filter blur-sm opacity-50 animate-pulse-slow"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Hidden Layer 1 */}
                    <div className="absolute left-1/3 top-1/2 -translate-y-1/2 space-y-12">
                      {[...Array(6)].map((_, i) => (
                        <div key={`hidden1-${i}`} className="relative group">
                          <div className="w-4 h-4 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-full animate-pulse-slow shadow-xl shadow-[#8B5FBF]/50 hover:scale-125 transition-transform duration-300" style={{animationDelay: `${i * 0.3}s`}}></div>
                          <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-full filter blur-sm opacity-40 animate-pulse-slow" style={{animationDelay: `${i * 0.3}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Hidden Layer 2 */}
                    <div className="absolute left-2/3 top-1/2 -translate-y-1/2 space-y-12">
                      {[...Array(6)].map((_, i) => (
                        <div key={`hidden2-${i}`} className="relative group">
                          <div className="w-4 h-4 bg-gradient-to-r from-[#C147E9] to-[#39FF14] rounded-full animate-pulse-slow shadow-xl shadow-[#C147E9]/50 hover:scale-125 transition-transform duration-300" style={{animationDelay: `${i * 0.4}s`}}></div>
                          <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-[#C147E9] to-[#39FF14] rounded-full filter blur-sm opacity-40 animate-pulse-slow" style={{animationDelay: `${i * 0.4}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Output Layer */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-20">
                      {[...Array(3)].map((_, i) => (
                        <div key={`output-${i}`} className="relative group">
                          <div className="w-5 h-5 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-full animate-pulse-slow shadow-2xl shadow-[#39FF14]/60 hover:scale-125 transition-transform duration-300" style={{animationDelay: `${i * 0.5}s`}}></div>
                          <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-full filter blur-sm opacity-50 animate-pulse-slow" style={{animationDelay: `${i * 0.5}s`}}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Enhanced Animated Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8"/>
                          <stop offset="50%" stopColor="#8B5FBF" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#C147E9" stopOpacity="0.8"/>
                        </linearGradient>
                        <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5FBF" stopOpacity="0.8"/>
                          <stop offset="50%" stopColor="#C147E9" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#39FF14" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Connection lines with enhanced animation */}
                      {[...Array(25)].map((_, i) => (
                        <line
                          key={`connection-${i}`}
                          x1={`${15 + (i % 3) * 20}%`}
                          y1={`${25 + (i % 4) * 15}%`}
                          x2={`${35 + (i % 3) * 25}%`}
                          y2={`${20 + (i % 5) * 20}%`}
                          stroke={i % 2 === 0 ? "url(#connectionGradient1)" : "url(#connectionGradient2)"}
                          strokeWidth="2"
                          opacity="0.8"
                          className="animate-pulse-slow"
                          style={{animationDelay: `${i * 0.15}s`}}
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* Enhanced floating particles with 3D effect */}
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={`neural-particle-${i}`}
                        className="absolute rounded-full animate-particle-float"
                        style={{
                          width: `${2 + (i % 3)}px`,
                          height: `${2 + (i % 3)}px`,
                          background: `${['#00D4FF', '#8B5FBF', '#C147E9', '#39FF14'][i % 4]}`,
                          left: `${15 + (i % 5) * 15}%`,
                          top: `${10 + (i % 4) * 20}%`,
                          animationDelay: `${i * 0.4}s`,
                          animationDuration: `${5 + (i % 4)}s`,
                          boxShadow: `0 0 10px ${['#00D4FF', '#8B5FBF', '#C147E9', '#39FF14'][i % 4]}40`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;