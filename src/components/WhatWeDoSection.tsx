
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, Workflow, Phone, Share2, Sparkles, ArrowRight } from "lucide-react";

const WhatWeDoSection = () => {
  const { ref, inView } = useScrollAnimation();

  const services = [
    {
      icon: Bot,
      title: "Autonomous AI Agents",
      description: "Intelligent agents that work independently to handle customer inquiries, bookings, and support tasks 24/7.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Workflow,
      title: "Workflow Automations",
      description: "Streamline your business processes with custom automation solutions that reduce manual work and increase efficiency.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Natural conversation AI that handles phone calls, appointments, and customer service with human-like interaction.",
      gradient: "from-pink-500 to-red-600"
    },
    {
      icon: Share2,
      title: "Social Media AI Systems",
      description: "Automated social media management, content creation, and engagement powered by advanced AI algorithms.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 relative bg-gradient-to-br from-black via-[#0A0E27] to-[#1a1f3a]" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-cyan-500/15 rounded-full filter blur-[120px] animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-blue-400" />
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-animate">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating intelligent AI solutions that revolutionize how businesses 
            interact with customers and manage operations across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button 
                  onClick={() => window.open('https://cal.com/sudhanshu-rai/free-consultation', '_blank')}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/btn"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => window.open('https://cal.com/sudhanshu-rai/free-consultation', '_blank')}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl px-8 py-4 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <span className="font-inter">Book a Free Consultation</span>
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
