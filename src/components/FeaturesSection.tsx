
import { Clock, Globe, MessageSquare, Shield, Sparkles, Brain, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our AI Voice agents work around the clock, ensuring your customers always receive immediate assistance.",
    gradient: "from-steel to-cyclamen",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate with customers in their preferred language with our agents that support over 30 languages.",
    gradient: "from-cyclamen to-violet",
  },
  {
    icon: Brain,
    title: "Smart Learning",
    description: "Our AI continuously learns from interactions to improve responses and better understand user needs.",
    gradient: "from-violet to-steel",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "HIPAA-compliant and secure technology to protect sensitive customer information.",
    gradient: "from-steel to-violet",
  },
  {
    icon: Headphones,
    title: "Personalized Experience",
    description: "Provide customized interactions based on customer history and preferences.",
    gradient: "from-cyclamen to-steel",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Advanced natural language processing creates human-like, engaging conversations.",
    gradient: "from-violet to-cyclamen",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Easily integrate with your existing systems, from CRM to booking platforms.",
    gradient: "from-steel to-cyclamen",
  },
  {
    icon: Sparkles,
    title: "Detailed Analytics",
    description: "Gain insights from customer interactions to improve service and business decisions.",
    gradient: "from-violet to-steel",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/20 via-transparent to-transparent z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-violet" />
            AI Voice Agent Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="text-gradient-violet-cyclamen block mt-2">
              Exceptional Customer Service
            </span>
          </h2>
          <p className="text-white/80 mt-6">
            Our AI Voice agents come equipped with a comprehensive set of features 
            designed to elevate customer experiences and streamline operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-5`}>
                <feature.icon className="text-white" size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
