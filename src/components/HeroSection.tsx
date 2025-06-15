

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
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
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
                className="group relative bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-semibold rounded-xl px-8 py-4 hover:shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">Explore Our Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass border border-[#39FF14]/30 text-white font-semibold rounded-xl px-8 py-4 hover:bg-[#39FF14]/10 hover:border-[#39FF14]/50 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Today
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
          
          {/* Right side - 3D Neural Network Visualization */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative h-[600px] lg:h-[700px]">
              {/* 3D Neural Network Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg">
                  {/* Neural Network Nodes */}
                  <div className="absolute inset-0">
                    {/* Input Layer */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-16">
                      {[...Array(4)].map((_, i) => (
                        <div key={`input-${i}`} className="w-4 h-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-full animate-pulse-slow shadow-lg shadow-[#00D4FF]/50"></div>
                      ))}
                    </div>
                    
                    {/* Hidden Layer 1 */}
                    <div className="absolute left-1/3 top-1/2 -translate-y-1/2 space-y-12">
                      {[...Array(6)].map((_, i) => (
                        <div key={`hidden1-${i}`} className="w-3 h-3 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-full animate-pulse-slow shadow-lg shadow-[#8B5FBF]/50" style={{animationDelay: `${i * 0.2}s`}}></div>
                      ))}
                    </div>
                    
                    {/* Hidden Layer 2 */}
                    <div className="absolute left-2/3 top-1/2 -translate-y-1/2 space-y-12">
                      {[...Array(6)].map((_, i) => (
                        <div key={`hidden2-${i}`} className="w-3 h-3 bg-gradient-to-r from-[#C147E9] to-[#39FF14] rounded-full animate-pulse-slow shadow-lg shadow-[#C147E9]/50" style={{animationDelay: `${i * 0.3}s`}}></div>
                      ))}
                    </div>
                    
                    {/* Output Layer */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-20">
                      {[...Array(3)].map((_, i) => (
                        <div key={`output-${i}`} className="w-4 h-4 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-full animate-pulse-slow shadow-lg shadow-[#39FF14]/50" style={{animationDelay: `${i * 0.4}s`}}></div>
                      ))}
                    </div>
                    
                    {/* Animated Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.6"/>
                          <stop offset="50%" stopColor="#8B5FBF" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#C147E9" stopOpacity="0.6"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Connection lines with animation */}
                      {[...Array(20)].map((_, i) => (
                        <line
                          key={`connection-${i}`}
                          x1={`${20 + (i % 3) * 15}%`}
                          y1={`${30 + (i % 4) * 15}%`}
                          x2={`${40 + (i % 3) * 20}%`}
                          y2={`${25 + (i % 5) * 15}%`}
                          stroke="url(#connectionGradient)"
                          strokeWidth="1"
                          opacity="0.7"
                          className="animate-pulse-slow"
                          style={{animationDelay: `${i * 0.1}s`}}
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-[#00D4FF] rounded-full animate-float opacity-60"
                        style={{
                          left: `${20 + (i % 4) * 20}%`,
                          top: `${20 + (i % 3) * 25}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${4 + (i % 3)}s`
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
