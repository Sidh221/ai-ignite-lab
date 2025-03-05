
import { ArrowRight, Bot, Sparkles, MessageSquare, Users, Headphones, MicIcon, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] pt-28 pb-20 flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="blob bg-violet/30 top-20 right-20"></div>
      <div className="blob bg-steel/30 bottom-20 left-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm backdrop-blur-xl animate-fade-in">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-cyclamen" />
            AI Voice Agents for Business
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Revolutionize Customer Experience with{" "}
            <span className="animate-gradient-text">
              AI Voice Agents
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Enhance your customer interactions with intelligent, natural-sounding AI Voice agents 
            tailored for restaurants, hotels, and medical facilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <a
              href="#demo"
              className="btn-primary w-full sm:w-auto justify-center group"
            >
              <Headphones className="h-5 w-5" />
              Try Interactive Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#industries"
              className="btn-outline w-full sm:w-auto justify-center"
            >
              <MicIcon className="h-5 w-5" />
              Explore Solutions
            </a>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Users, number: "500+", label: "Businesses Empowered" },
              { icon: MessageSquare, number: "30+", label: "Languages Supported" },
              { icon: Bot, number: "99.7%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-cyclamen" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gradient-steel-violet">
                  {stat.number}
                </h3>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 animate-bounce">
            <a href="#about" className="text-white/60 hover:text-white transition-colors">
              <ChevronDown className="mx-auto h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
