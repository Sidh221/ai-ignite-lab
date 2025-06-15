import { useState } from "react";
import { ChevronDown, ChevronUp, Bot, Workflow, Mic, Share2 } from "lucide-react";
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

        {/* Solutions Grid - Updated with new AI solutions */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Autonomous AI Agents */}
          <div className="group relative hover-lift">
            <div 
              className="glass-card card-float rounded-3xl p-10 h-full border-2 border-[#00D4FF]/30 shadow-2xl hover:shadow-[#00D4FF]/40 transition-all duration-500 hover:scale-105 hover:border-[#00D4FF]/50 backdrop-blur-xl bg-gray-900/30 cursor-pointer"
              onClick={() => toggleCard('autonomous')}
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-2xl flex items-center justify-center opacity-90 shadow-lg shadow-[#00D4FF]/30">
                <Bot className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-4xl font-black text-white tracking-wide font-inter">
                  Autonomous AI Agents
                </h3>
                <div className="text-[#00D4FF]">
                  {expandedCard === 'autonomous' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-500 overflow-hidden ${expandedCard === 'autonomous' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="glass border-2 border-[#00D4FF]/40 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/60 hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#00D4FF] text-lg font-bold mb-2 font-inter">Intelligent Decision Making</h4>
                  <p className="text-gray-300 text-sm">AI agents that analyze complex data, learn from patterns, and make autonomous decisions to optimize business operations 24/7.</p>
                </div>
                
                <div className="glass border-2 border-[#00D4FF]/40 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/60 hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#00D4FF] text-lg font-bold mb-2 font-inter">Self-Learning Systems</h4>
                  <p className="text-gray-300 text-sm">Adaptive agents that continuously improve performance through machine learning and real-time feedback loops.</p>
                </div>
                
                <div className="glass border-2 border-[#00D4FF]/40 rounded-2xl px-6 py-4 hover:bg-[#00D4FF]/15 hover:border-[#00D4FF]/60 hover:shadow-lg hover:shadow-[#00D4FF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#00D4FF] text-lg font-bold mb-2 font-inter">Multi-Platform Integration</h4>
                  <p className="text-gray-300 text-sm">Seamlessly connect and coordinate across all your business platforms for unified autonomous operations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Automations */}
          <div className="group relative">
            <div 
              className="glass-card rounded-3xl p-10 h-full border-2 border-[#39FF14]/30 shadow-2xl hover:shadow-[#39FF14]/40 transition-all duration-500 hover:scale-105 hover:border-[#39FF14]/50 backdrop-blur-xl bg-gray-900/30 cursor-pointer"
              onClick={() => toggleCard('workflow')}
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-2xl flex items-center justify-center opacity-90 shadow-lg shadow-[#39FF14]/30">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-4xl font-black text-white tracking-wide font-inter">
                  Workflow Automations
                </h3>
                <div className="text-[#39FF14]">
                  {expandedCard === 'workflow' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-500 overflow-hidden ${expandedCard === 'workflow' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="glass border-2 border-[#39FF14]/40 rounded-2xl px-6 py-4 hover:bg-[#39FF14]/15 hover:border-[#39FF14]/60 hover:shadow-lg hover:shadow-[#39FF14]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#39FF14] text-lg font-bold mb-2 font-inter">Smart Process Design</h4>
                  <p className="text-gray-300 text-sm">Automatically design and optimize workflows that eliminate bottlenecks and maximize team productivity.</p>
                </div>
                
                <div className="glass border-2 border-[#39FF14]/40 rounded-2xl px-6 py-4 hover:bg-[#39FF14]/15 hover:border-[#39FF14]/60 hover:shadow-lg hover:shadow-[#39FF14]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#39FF14] text-lg font-bold mb-2 font-inter">Real-Time Optimization</h4>
                  <p className="text-gray-300 text-sm">Continuously monitor and adjust workflows in real-time based on performance metrics and changing business needs.</p>
                </div>
                
                <div className="glass border-2 border-[#39FF14]/40 rounded-2xl px-6 py-4 hover:bg-[#39FF14]/15 hover:border-[#39FF14]/60 hover:shadow-lg hover:shadow-[#39FF14]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#39FF14] text-lg font-bold mb-2 font-inter">Cross-Department Coordination</h4>
                  <p className="text-gray-300 text-sm">Seamlessly connect teams and departments with automated handoffs and intelligent task routing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Voice Agents */}
          <div className="group relative">
            <div 
              className="glass-card rounded-3xl p-10 h-full border-2 border-[#C147E9]/30 shadow-2xl hover:shadow-[#C147E9]/40 transition-all duration-500 hover:scale-105 hover:border-[#C147E9]/50 backdrop-blur-xl bg-gray-900/30 cursor-pointer"
              onClick={() => toggleCard('voice')}
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-2xl flex items-center justify-center opacity-90 shadow-lg shadow-[#C147E9]/30">
                <Mic className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-4xl font-black text-white tracking-wide font-inter">
                  AI Voice Agents
                </h3>
                <div className="text-[#C147E9]">
                  {expandedCard === 'voice' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-500 overflow-hidden ${expandedCard === 'voice' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="glass border-2 border-[#C147E9]/40 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/15 hover:border-[#C147E9]/60 hover:shadow-lg hover:shadow-[#C147E9]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#C147E9] text-lg font-bold mb-2 font-inter">Natural Conversation AI</h4>
                  <p className="text-gray-300 text-sm">Advanced voice agents that understand context, emotion, and intent for human-like customer interactions.</p>
                </div>
                
                <div className="glass border-2 border-[#C147E9]/40 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/15 hover:border-[#C147E9]/60 hover:shadow-lg hover:shadow-[#C147E9]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#C147E9] text-lg font-bold mb-2 font-inter">Multi-Language Support</h4>
                  <p className="text-gray-300 text-sm">Communicate with customers worldwide using AI voice agents fluent in multiple languages and dialects.</p>
                </div>
                
                <div className="glass border-2 border-[#C147E9]/40 rounded-2xl px-6 py-4 hover:bg-[#C147E9]/15 hover:border-[#C147E9]/60 hover:shadow-lg hover:shadow-[#C147E9]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#C147E9] text-lg font-bold mb-2 font-inter">24/7 Customer Support</h4>
                  <p className="text-gray-300 text-sm">Never miss a customer call with intelligent voice agents that provide instant, accurate support around the clock.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media AI Systems */}
          <div className="group relative">
            <div 
              className="glass-card rounded-3xl p-10 h-full border-2 border-[#8B5FBF]/30 shadow-2xl hover:shadow-[#8B5FBF]/40 transition-all duration-500 hover:scale-105 hover:border-[#8B5FBF]/50 backdrop-blur-xl bg-gray-900/30 cursor-pointer"
              onClick={() => toggleCard('social')}
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#C147E9] to-[#8B5FBF] rounded-2xl flex items-center justify-center opacity-90 shadow-lg shadow-[#8B5FBF]/30">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-4xl font-black text-white tracking-wide font-inter">
                  Social Media AI Systems
                </h3>
                <div className="text-[#8B5FBF]">
                  {expandedCard === 'social' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              
              <div className={`space-y-6 transition-all duration-500 overflow-hidden ${expandedCard === 'social' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="glass border-2 border-[#8B5FBF]/40 rounded-2xl px-6 py-4 hover:bg-[#8B5FBF]/15 hover:border-[#8B5FBF]/60 hover:shadow-lg hover:shadow-[#8B5FBF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#8B5FBF] text-lg font-bold mb-2 font-inter">Intelligent Content Creation</h4>
                  <p className="text-gray-300 text-sm">AI-powered systems that create engaging, brand-consistent content across all social media platforms automatically.</p>
                </div>
                
                <div className="glass border-2 border-[#8B5FBF]/40 rounded-2xl px-6 py-4 hover:bg-[#8B5FBF]/15 hover:border-[#8B5FBF]/60 hover:shadow-lg hover:shadow-[#8B5FBF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#8B5FBF] text-lg font-bold mb-2 font-inter">Audience Analytics & Targeting</h4>
                  <p className="text-gray-300 text-sm">Deep audience insights and automated targeting that maximize engagement and conversion rates across social platforms.</p>
                </div>
                
                <div className="glass border-2 border-[#8B5FBF]/40 rounded-2xl px-6 py-4 hover:bg-[#8B5FBF]/15 hover:border-[#8B5FBF]/60 hover:shadow-lg hover:shadow-[#8B5FBF]/20 transition-all duration-300 hover:scale-105">
                  <h4 className="text-[#8B5FBF] text-lg font-bold mb-2 font-inter">Real-Time Engagement Management</h4>
                  <p className="text-gray-300 text-sm">Automated responses, community management, and trend monitoring that keeps your brand active and responsive 24/7.</p>
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