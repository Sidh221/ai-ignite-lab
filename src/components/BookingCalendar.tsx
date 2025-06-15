import { useState } from "react";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      alert(`Thank you! We'll contact you soon at ${email}`);
      setEmail("");
      setCompany("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00D4FF]/10 via-[#8B5FBF]/10 to-[#C147E9]/10 rounded-full filter blur-[200px] animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] via-[#8B5FBF] to-[#C147E9] animate-gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Join the AI revolution. Deploy intelligent automation systems that work 24/7 to optimize your operations and unlock unprecedented growth.
            </p>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="glass-card rounded-3xl p-8 border border-[#00D4FF]/20">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 bg-black/20 border border-[#00D4FF]/30 rounded-xl text-white placeholder-gray-400 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full p-4 bg-black/20 border border-[#00D4FF]/30 rounded-xl text-white placeholder-gray-400 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <span>Transform Your Business Now</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </form>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group glass-card rounded-3xl p-8 border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Deployment</h3>
              <p className="text-gray-400 leading-relaxed">
                Get your AI agents up and running in minutes, not months. Our plug-and-play solutions integrate seamlessly with your existing systems.
              </p>
            </div>
            
            <div className="group glass-card rounded-3xl p-8 border border-[#39FF14]/20 hover:border-[#39FF14]/40 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision Targeting</h3>
              <p className="text-gray-400 leading-relaxed">
                AI-powered analytics identify opportunities and optimize processes with surgical precision, delivering measurable ROI from day one.
              </p>
            </div>
            
            <div className="group glass-card rounded-3xl p-8 border border-[#C147E9]/20 hover:border-[#C147E9]/40 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exponential Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                Scale beyond traditional limits with AI systems that evolve, learn, and optimize continuously to accelerate your business growth.
              </p>
            </div>
          </div>
          
          {/* Secondary CTAs */}
          <div className="mt-20 text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-[#8B5FBF] to-[#C147E9] text-white font-semibold rounded-xl px-8 py-4 hover:shadow-2xl hover:shadow-[#C147E9]/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
                <span>Schedule AI Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
              
              <button className="glass border border-[#00D4FF]/30 text-white font-semibold rounded-xl px-8 py-4 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1">
                Download AI Strategy Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;