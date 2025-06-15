const WhatWeDoSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-[#8B5FBF]/20 to-[#C147E9]/20 rounded-full filter blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-[#00D4FF]/20 to-[#39FF14]/20 rounded-full filter blur-[120px] animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF]">AI Solutions</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            Pioneering the next generation of AI automation with solutions that transform your business operations and drive unprecedented growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Intelligent Automation Systems */}
          <div className="group relative">
            <div className="glass-card rounded-3xl p-10 h-full border border-[#00D4FF]/20 shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-500 hover:scale-105 hover:border-[#00D4FF]/40">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-2xl flex items-center justify-center opacity-80">
                <div className="w-8 h-8 border-2 border-white rounded-lg relative">
                  <div className="absolute inset-1 bg-white rounded opacity-60"></div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-8 tracking-wide">
                Intelligent Automation Systems
              </h3>
              
              <div className="space-y-6">
                <div className="glass border border-[#00D4FF]/30 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/10 transition-all duration-300">
                  <h4 className="text-[#00D4FF] text-lg font-semibold mb-2">Smart Process Optimization</h4>
                  <p className="text-gray-300 text-sm">AI-driven process analysis and optimization for maximum efficiency</p>
                </div>
                
                <div className="glass border border-[#00D4FF]/30 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/10 transition-all duration-300">
                  <h4 className="text-[#00D4FF] text-lg font-semibold mb-2">Predictive Analytics Integration</h4>
                  <p className="text-gray-300 text-sm">Advanced forecasting and trend analysis for strategic decision making</p>
                </div>
                
                <div className="glass border border-[#00D4FF]/30 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/10 transition-all duration-300">
                  <h4 className="text-[#00D4FF] text-lg font-semibold mb-2">Adaptive Workflow Management</h4>
                  <p className="text-gray-300 text-sm">Self-evolving workflows that adapt to changing business needs</p>
                </div>
                
                <div className="glass border border-[#00D4FF]/30 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/10 transition-all duration-300">
                  <h4 className="text-[#00D4FF] text-lg font-semibold mb-2">Real-time Performance Monitoring</h4>
                  <p className="text-gray-300 text-sm">Continuous monitoring and optimization of system performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autonomous Marketing Agents */}
          <div className="group relative">
            <div className="glass-card rounded-3xl p-10 h-full border border-[#C147E9]/20 shadow-2xl hover:shadow-[#C147E9]/30 transition-all duration-500 hover:scale-105 hover:border-[#C147E9]/40">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-2xl flex items-center justify-center opacity-80">
                <div className="w-8 h-8 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 bg-white rounded-full opacity-60"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-[#C147E9] rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-8 tracking-wide">
                Autonomous Marketing Agents
              </h3>
              
              <div className="space-y-6">
                <div className="glass border border-[#C147E9]/30 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/10 transition-all duration-300">
                  <h4 className="text-[#C147E9] text-lg font-semibold mb-2">Intelligent Customer Interaction</h4>
                  <p className="text-gray-300 text-sm">AI agents that understand and respond to customer needs naturally</p>
                </div>
                
                <div className="glass border border-[#C147E9]/30 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/10 transition-all duration-300">
                  <h4 className="text-[#C147E9] text-lg font-semibold mb-2">Data-Driven Strategic Marketing</h4>
                  <p className="text-gray-300 text-sm">Comprehensive market analysis for strategic campaign development</p>
                </div>
                
                <div className="glass border border-[#C147E9]/30 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/10 transition-all duration-300">
                  <h4 className="text-[#C147E9] text-lg font-semibold mb-2">Scalable Marketing Solutions</h4>
                  <p className="text-gray-300 text-sm">Campaigns that automatically scale with your business growth</p>
                </div>
                
                <div className="glass border border-[#C147E9]/30 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/10 transition-all duration-300">
                  <h4 className="text-[#C147E9] text-lg font-semibold mb-2">Personalized Customer Experiences</h4>
                  <p className="text-gray-300 text-sm">Tailored interactions that build lasting customer relationships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media AI Systems */}
          <div className="group relative">
            <div className="glass-card rounded-3xl p-10 h-full border border-[#39FF14]/20 shadow-2xl hover:shadow-[#39FF14]/30 transition-all duration-500 hover:scale-105 hover:border-[#39FF14]/40">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-2xl flex items-center justify-center opacity-80">
                <div className="w-8 h-8 border-2 border-white rounded-xl relative">
                  <div className="absolute inset-1 bg-white rounded opacity-60"></div>
                  <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#39FF14] rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-8 tracking-wide">
                Social Media AI Systems
              </h3>
              
              <div className="space-y-6">
                <div className="glass border border-[#39FF14]/30 rounded-2xl px-6 py-4 hover:bg-[#39FF14]/10 transition-all duration-300">
                  <h4 className="text-[#39FF14] text-lg font-semibold mb-2">Content Generation & Scheduling</h4>
                  <p className="text-gray-300 text-sm">AI-powered content creation and optimal posting schedules</p>
                </div>
                
                <div className="glass border border-[#39FF14]/30 rounded-2xl px-6 py-4 hover:bg-[#39FF14]/10 transition-all duration-300">
                  <h4 className="text-[#39FF14] text-lg font-semibold mb-2">Engagement Automation</h4>
                  <p className="text-gray-300 text-sm">Intelligent response systems and community management</p>
                </div>
                
                <div className="glass border border-[#39FF14]/30 rounded-2xl px-6 py-4 hover:bg-[#39FF14]/10 transition-all duration-300">
                  <h4 className="text-[#39FF14] text-lg font-semibold mb-2">Performance Analytics</h4>
                  <p className="text-gray-300 text-sm">Advanced social media metrics and ROI tracking</p>
                </div>
                
                <div className="glass border border-[#39FF14]/30 rounded-2xl px-6 py-4 hover:bg-[#39FF14]/10 transition-all duration-300">
                  <h4 className="text-[#39FF14] text-lg font-semibold mb-2">Cross-Platform Management</h4>
                  <p className="text-gray-300 text-sm">Unified management across all social media channels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Messaging */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div className="glass rounded-2xl p-6 border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all duration-300">
            <div className="text-2xl font-bold text-[#00D4FF] mb-3">Innovation Leader</div>
            <div className="text-gray-400 text-sm">Pioneering next-gen AI automation</div>
          </div>
          
          <div className="glass rounded-2xl p-6 border border-[#39FF14]/20 hover:border-[#39FF14]/40 transition-all duration-300">
            <div className="text-2xl font-bold text-[#39FF14] mb-3">24/7 Reliability</div>
            <div className="text-gray-400 text-sm">Systems that never stop optimizing</div>
          </div>
          
          <div className="glass rounded-2xl p-6 border border-[#C147E9]/20 hover:border-[#C147E9]/40 transition-all duration-300">
            <div className="text-2xl font-bold text-[#C147E9] mb-3">Infinite Scale</div>
            <div className="text-gray-400 text-sm">Solutions that grow with your ambitions</div>
          </div>
          
          <div className="glass rounded-2xl p-6 border border-[#8B5FBF]/20 hover:border-[#8B5FBF]/40 transition-all duration-300">
            <div className="text-2xl font-bold text-[#8B5FBF] mb-3">Results-Driven</div>
            <div className="text-gray-400 text-sm">Measurable impact through AI</div>
          </div>
          
          <div className="glass rounded-2xl p-6 border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all duration-300">
            <div className="text-2xl font-bold text-[#00D4FF] mb-3">Future-Ready</div>
            <div className="text-gray-400 text-sm">Building tomorrow's solutions today</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;