
import { ArrowRight, Bot, Sparkles, MessageSquare, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy/20 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm backdrop-blur-xl animate-fade-in">
              <Sparkles className="inline-block mr-2 h-4 w-4 text-accent" />
              Experience AI-Powered Relationships
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Your Personal{" "}
              <span className="text-gradient">
                AI Partner
              </span>{" "}
              For Life
            </h1>
            <p className="text-lg md:text-xl text-lavender/80 mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Connect, learn, and grow with an AI companion that understands you.
              Experience meaningful conversations and emotional support 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
              <a
                href="#contact"
                className="px-8 py-4 bg-accent hover:bg-accent/90 rounded-full transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center shadow-lg shadow-accent/25"
              >
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 glass hover:bg-navy/20 rounded-full transition-all duration-300 w-full sm:w-auto text-center border border-lavender/10"
              >
                Explore Features
              </a>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Users, number: "1M+", label: "Active Users" },
              { icon: MessageSquare, number: "24/7", label: "AI Support" },
              { icon: Bot, number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gradient">
                  {stat.number}
                </h3>
                <p className="text-lavender/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
