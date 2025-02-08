
import { Bot, Heart, Brain, Shield, Sparkles, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Smart Learning",
    description:
      "Our AI learns and adapts to your personality, creating a truly personalized experience.",
    gradient: "from-accent to-accent/70",
  },
  {
    icon: Heart,
    title: "Emotional Support",
    description:
      "24/7 companionship with empathetic responses and emotional understanding.",
    gradient: "from-lavender to-lavender/70",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your conversations and data are fully encrypted and protected at all times.",
    gradient: "from-navy to-navy/70",
  },
  {
    icon: MessageSquare,
    title: "Natural Chat",
    description:
      "Engage in flowing, natural conversations that feel genuine and meaningful.",
    gradient: "from-accent/80 to-lavender/70",
  },
];

const ServicesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-accent" />
            Our Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience the Power of{" "}
            <span className="text-gradient">
              AI Companionship
            </span>
          </h2>
          <p className="text-lavender/80">
            Discover how our AI partner enhances your daily life with smart,
            empathetic, and secure interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-lavender/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
