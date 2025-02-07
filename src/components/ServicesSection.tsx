
import { Bot, BarChart3, Calendar, CreditCard } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Streamline your operations with intelligent automation that learns and adapts to your business needs.",
  },
  {
    icon: BarChart3,
    title: "Smart Funnels",
    description:
      "Convert more leads with AI-powered sales funnels that optimize themselves in real-time.",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description:
      "Eliminate scheduling hassles with our intelligent booking system that manages appointments effortlessly.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Process payments smoothly with our AI-enhanced payment systems that maximize conversion rates.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business With Our{" "}
            <span className="text-gradient">AI Solutions</span>
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
              className="glass-card p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="text-primary" size={24} />
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
