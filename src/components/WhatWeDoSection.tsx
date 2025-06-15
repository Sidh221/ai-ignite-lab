import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhatWeDoSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const { ref, inView } = useScrollAnimation();
  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black relative overflow-hidden" ref={ref}>
      {/* Enhanced background effects with floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-[#8B5FBF]/20 to-[#C147E9]/20 rounded-full filter blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-[#00D4FF]/20 to-[#39FF14]/20 rounded-full filter blur-[120px] animate-float"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-40 left-10 w-6 h-6 border-2 border-[#00D4FF]/30 rotate-45 animate-geometric-spin"></div>
        <div className="absolute top-60 right-20 w-8 h-8 border border-[#39FF14]/40 animate-geometric-spin" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-[#C147E9]/50 animate-particle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-[#8B5FBF]/30 rounded-full animate-geometric-spin" style={{animationDelay: '3s'}}></div>
        
        {/* Additional floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bg-particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-particle-float"
            style={{
              background: `${['#00D4FF', '#8B5FBF', '#C147E9', '#39FF14'][i % 4]}`,
              left: `${10 + (i % 5) * 20}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + (i % 3)}s`,
              opacity: '0.6'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="services">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight font-inter">
            Our <span className="gradient-text-animate">AI Solutions</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            Pioneering the next generation of AI automation with solutions that transform your business operations and drive unprecedented growth.
          </p>
        </div>

        {/* Services Grid with enhanced 3D effects */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Intelligent Automation Systems */}
          <div className="group relative hover-lift">
            <div 
              className="glass-card card-float rounded-3xl p-10 h-full border-2 border-[#00D4FF]/30 shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-500 hover:scale-105 hover:border-[#00D4FF]/50 backdrop-blur-xl bg-gray-900/30 cursor-pointer"
              onClick={() => toggleCard('automation')}
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-2xl flex items-center justify-center opacity-90 shadow-lg shadow-[#00D4FF]/30">
                <div className="w-8 h-8 border-2 border-white rounded-lg relative">
                  <div className="absolute inset-1 bg-white rounded opacity-70"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-[#00D4FF] rounded animate-pulse-slow"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-4xl font-black text-white tracking-wide font-inter">
                  Intelligent Automation Systems
                </h3>
                <div className="text-[#00D4FF]">
                  {expandedCard === 'automation' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-500 overflow-hidden ${expandedCard === 'automation' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="glass border-2 border-[#00D4FF]/40 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/60 hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#00D4FF] text-lg font-bold mb-2 font-inter">Smart Process Optimization</h4>
                  <p className="text-gray-300 text-sm">AI-driven systems that continuously analyze and optimize your business processes, eliminating bottlenecks and maximizing efficiency through intelligent automation.</p>
                </div>
                
                <div className="glass border-2 border-[#00D4FF]/40 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/60 hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#00D4FF] text-lg font-bold mb-2 font-inter">Predictive Analytics Integration</h4>
                  <p className="text-gray-300 text-sm">Advanced machine learning models that forecast trends, predict outcomes, and provide actionable insights to drive strategic decision-making.</p>
                </div>
                
                <div className="glass border-2 border-[#00D4FF]/40 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/60 hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#00D4FF] text-lg font-bold mb-2 font-inter">Adaptive Workflow Management</h4>
                  <p className="text-gray-300 text-sm">Self-evolving workflow systems that learn from your team's patterns and automatically adapt to changing business requirements for seamless operations.</p>
                </div>
                
                <div className="glass border-2 border-[#00D4FF]/40 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/60 hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#00D4FF] text-lg font-bold mb-2 font-inter">Real-time Performance Monitoring</h4>
                  <p className="text-gray-300 text-sm">Continuous monitoring and optimization of system performance with instant alerts, automated adjustments, and comprehensive analytics dashboards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autonomous Marketing Agents */}
          <div className="group relative">
            <div 
              className="glass-card rounded-3xl p-10 h-full border-2 border-[#C147E9]/30 shadow-2xl hover:shadow-[#C147E9]/40 transition-all duration-500 hover:scale-105 hover:border-[#C147E9]/50 backdrop-blur-xl bg-gray-900/30 cursor-pointer"
              onClick={() => toggleCard('marketing')}
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-2xl flex items-center justify-center opacity-90 shadow-lg shadow-[#C147E9]/30">
                <div className="w-8 h-8 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 bg-white rounded-full opacity-70"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-[#C147E9] rounded-full animate-pulse-slow"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#8B5FBF] rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-4xl font-black text-white tracking-wide font-inter">
                  Autonomous Marketing Agents
                </h3>
                <div className="text-[#C147E9]">
                  {expandedCard === 'marketing' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-500 overflow-hidden ${expandedCard === 'marketing' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="glass border-2 border-[#C147E9]/40 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/15 hover:border-[#C147E9]/60 hover:shadow-lg hover:shadow-[#C147E9]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#C147E9] text-lg font-bold mb-2 font-inter">Intelligent Customer Interaction</h4>
                  <p className="text-gray-300 text-sm">AI-powered agents that understand context, emotions, and intent to deliver personalized customer experiences that build loyalty and drive conversions.</p>
                </div>
                
                <div className="glass border-2 border-[#C147E9]/40 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/15 hover:border-[#C147E9]/60 hover:shadow-lg hover:shadow-[#C147E9]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#C147E9] text-lg font-bold mb-2 font-inter">Data-Driven Marketing Insights</h4>
                  <p className="text-gray-300 text-sm">Comprehensive market analysis and customer behavior patterns that inform strategic campaign development and maximize marketing ROI across all channels.</p>
                </div>
                
                <div className="glass border-2 border-[#C147E9]/40 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/15 hover:border-[#C147E9]/60 hover:shadow-lg hover:shadow-[#C147E9]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#C147E9] text-lg font-bold mb-2 font-inter">Scalable Marketing Automation</h4>
                  <p className="text-gray-300 text-sm">Multi-channel marketing campaigns that automatically scale with your business growth, adapting messaging and targeting for optimal performance at any size.</p>
                </div>
                
                <div className="glass border-2 border-[#C147E9]/40 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/15 hover:border-[#C147E9]/60 hover:shadow-lg hover:shadow-[#C147E9]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#C147E9] text-lg font-bold mb-2 font-inter">Personalized Customer Experiences</h4>
                  <p className="text-gray-300 text-sm">Dynamic personalization engines that create unique, tailored interactions for each customer, increasing engagement and building lasting relationships that drive lifetime value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Key Messaging with 3D effects */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-6 border-2 border-[#00D4FF]/30 hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 hover:shadow-xl hover:shadow-[#00D4FF]/25 transition-all duration-300 hover:scale-105 backdrop-blur-lg bg-gray-900/20">
            <div className="text-3xl font-black text-[#00D4FF] mb-3 font-inter animate-pulse-slow">Innovation Leader</div>
            <div className="text-gray-400 text-sm font-medium">Pioneering next-gen AI automation</div>
          </div>
          
          <div className="glass rounded-2xl p-6 border-2 border-[#39FF14]/30 hover:border-[#39FF14]/50 hover:bg-[#39FF14]/10 hover:shadow-xl hover:shadow-[#39FF14]/25 transition-all duration-300 hover:scale-105 backdrop-blur-lg bg-gray-900/20">
            <div className="text-3xl font-black text-[#39FF14] mb-3 font-inter animate-pulse-slow" style={{animationDelay: '0.5s'}}>24/7 Reliability</div>
            <div className="text-gray-400 text-sm font-medium">Systems that never stop optimizing</div>
          </div>
          
          <div className="glass rounded-2xl p-6 border-2 border-[#C147E9]/30 hover:border-[#C147E9]/50 hover:bg-[#C147E9]/10 hover:shadow-xl hover:shadow-[#C147E9]/25 transition-all duration-300 hover:scale-105 backdrop-blur-lg bg-gray-900/20">
            <div className="text-3xl font-black text-[#C147E9] mb-3 font-inter animate-pulse-slow" style={{animationDelay: '1s'}}>Infinite Scale</div>
            <div className="text-gray-400 text-sm font-medium">Solutions that grow with your ambitions</div>
          </div>
          
          <div className="glass rounded-2xl p-6 border-2 border-[#8B5FBF]/30 hover:border-[#8B5FBF]/50 hover:bg-[#8B5FBF]/10 hover:shadow-xl hover:shadow-[#8B5FBF]/25 transition-all duration-300 hover:scale-105 backdrop-blur-lg bg-gray-900/20">
            <div className="text-3xl font-black text-[#8B5FBF] mb-3 font-inter animate-pulse-slow" style={{animationDelay: '1.5s'}}>Results-Driven</div>
            <div className="text-gray-400 text-sm font-medium">Measurable impact through AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;