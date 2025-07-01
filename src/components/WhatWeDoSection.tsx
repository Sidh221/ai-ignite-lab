
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, Zap, BarChart3, Users } from "lucide-react";

const WhatWeDoSection = () => {
  const { ref, inView } = useScrollAnimation();

  const services = [
    {
      icon: Bot,
      title: "AI Voice Agents",
      description: "Intelligent voice assistants that handle customer interactions 24/7 with natural conversation flow."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and processes to increase efficiency and reduce operational costs."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with AI-powered analytics and reporting."
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Enhance customer satisfaction with personalized AI-driven interactions and support."
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animate">
            What We Do
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            We specialize in AI-powered solutions that transform how businesses operate and interact with their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`glass rounded-xl p-6 hover:glass-card transition-all duration-500 hover:-translate-y-2 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-pink rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
