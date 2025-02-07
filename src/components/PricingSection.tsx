
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "999",
    features: [
      "Basic AI Automation",
      "Simple Booking System",
      "Standard Analytics",
      "Email Support",
      "1 Team Member",
    ],
  },
  {
    name: "Professional",
    price: "1,999",
    features: [
      "Advanced AI Automation",
      "Custom Booking System",
      "Detailed Analytics",
      "Priority Support",
      "5 Team Members",
      "Custom Integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "3,999",
    features: [
      "Full AI Suite",
      "Enterprise Booking System",
      "Advanced Analytics & Reports",
      "24/7 Dedicated Support",
      "Unlimited Team Members",
      "Custom Development",
      "API Access",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-gray-400">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl relative ${
                plan.popular
                  ? "border-primary/50 transform scale-105 md:-translate-y-4"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="text-primary" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full transition-colors ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-hover"
                    : "glass hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
