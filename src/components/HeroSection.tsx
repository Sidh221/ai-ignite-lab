
import { ArrowRight, Bot } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-blue-600/20 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm backdrop-blur-xl animate-fade-in">
              <Bot className="inline-block mr-2 h-4 w-4" />
              AI-Powered Solutions for Modern Businesses
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Transform Your Business With{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Intelligent AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up">
              We help businesses scale by integrating cutting-edge AI solutions into their
              workflows, revolutionizing how you operate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 rounded-full transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center shadow-lg shadow-violet-500/25"
              >
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 glass hover:bg-white/10 rounded-full transition-all duration-300 w-full sm:w-auto text-center border border-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "500+", label: "Active Users" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
              { number: "100+", label: "AI Models" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
