import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Clock, Users } from "lucide-react";

const BookingSection = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="booking" className="py-32 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black relative overflow-hidden" ref={ref}>
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#8B5FBF]/20 to-[#C147E9]/20 rounded-full filter blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#00D4FF]/20 to-[#39FF14]/20 rounded-full filter blur-[120px] animate-float"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-40 left-10 w-6 h-6 border-2 border-[#00D4FF]/30 rotate-45 animate-geometric-spin"></div>
        <div className="absolute top-60 right-20 w-8 h-8 border border-[#39FF14]/40 animate-geometric-spin" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-[#C147E9]/50 animate-particle-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl md:text-7xl font-black leading-tight tracking-tight font-inter mb-8">
            <span className="gradient-text-animate">Book Your Consultation</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            Ready to revolutionize your operations with AI? Book a personalized consultation and discover how NextSynnThai can automate your workflows and scale your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Benefits */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card card-float rounded-3xl p-8 border-2 border-[#00D4FF]/30 hover:border-[#00D4FF]/50 transition-all duration-500 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-inter">30-Minute Strategy Session</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Get personalized insights on how AI automation can streamline your specific business processes and boost efficiency by up to 300%.
              </p>
            </div>

            <div className="glass-card card-float rounded-3xl p-8 border-2 border-[#C147E9]/30 hover:border-[#C147E9]/50 transition-all duration-500 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-inter">Custom AI Solutions</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Discover tailored automation strategies designed specifically for your industry, workflow, and growth objectives.
              </p>
            </div>

            <div className="glass-card card-float rounded-3xl p-8 border-2 border-[#39FF14]/30 hover:border-[#39FF14]/50 transition-all duration-500 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-inter">ROI Assessment</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Get a detailed analysis of potential cost savings and revenue increases from implementing our AI automation systems.
              </p>
            </div>
          </div>

          {/* Right side - Cal.com Integration */}
          <div className={`flex flex-col items-center transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card card-float rounded-3xl p-10 border-2 border-[#8B5FBF]/30 hover:border-[#8B5FBF]/50 transition-all duration-500 backdrop-blur-xl bg-gray-900/40 w-full max-w-md">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-white mb-4 font-inter">Schedule Your Call</h3>
                <p className="text-gray-300">Book your personalized AI consultation</p>
              </div>

              {/* Cal.com embed container */}
              <div className="w-full h-96 rounded-xl overflow-hidden border border-[#8B5FBF]/30">
                <iframe
                  src="https://cal.com/your-username/30min"
                  className="w-full h-full"
                  style={{
                    border: 'none',
                    background: 'transparent'
                  }}
                  title="Schedule a consultation"
                />
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs text-gray-400">
                  Free consultation • No commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;