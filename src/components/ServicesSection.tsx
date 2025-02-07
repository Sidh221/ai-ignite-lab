
import { Bot, BarChart3, Calendar, CreditCard, Zap, Shield, Cloud, Database } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Streamline your operations with intelligent automation that learns and adapts to your business needs.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Seamlessly integrate AI solutions with your existing cloud infrastructure for maximum efficiency.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Secure Systems",
    description:
      "Enterprise-grade security measures to protect your data and AI operations at all times.",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Database,
    title: "Smart Analytics",
    description:
      "Gain valuable insights from your data with our advanced AI-powered analytics systems.",
    gradient: "from-orange-500 to-red-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transform Your Business With Our{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-gray-400">
            Comprehensive suite of AI-powered tools designed to automate and optimize
            your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-white/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
