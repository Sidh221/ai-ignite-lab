
import { UtensilsCrossed, Building2, Stethoscope, ArrowRight, Sparkles } from "lucide-react";

const niches = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Our AI Voice agents handle reservations, answer menu questions, take orders, and provide personalized recommendations based on customer preferences.",
    benefits: [
      "Reduce wait times for reservations",
      "Handle peak call volumes efficiently",
      "Provide consistent service 24/7",
      "Multi-language support for international guests"
    ],
    gradient: "from-cyclamen to-steel",
  },
  {
    icon: Building2,
    title: "Hotels",
    description:
      "Enhance guest experience with AI agents that manage bookings, answer property questions, and provide concierge services without keeping customers waiting.",
    benefits: [
      "Streamline check-in/check-out processes",
      "Provide instant room information",
      "Handle special requests efficiently",
      "Offer local recommendations and services"
    ],
    gradient: "from-steel to-violet",
  },
  {
    icon: Stethoscope,
    title: "Medical Facilities",
    description:
      "Our HIPAA-compliant AI agents schedule appointments, provide general health information, and offer post-visit support with empathy and precision.",
    benefits: [
      "Reduce administrative burden on staff",
      "Decrease appointment no-shows",
      "Provide after-hours support",
      "Handle routine inquiries professionally"
    ],
    gradient: "from-violet to-cyclamen",
  },
];

const NichesSection = () => {
  return (
    <section id="industries" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/50 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-steel" />
            Our Specializations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tailored Solutions for{" "}
            <span className="text-gradient-steel-violet">
              Specific Industries
            </span>
          </h2>
          <p className="text-white/80">
            Our AI Voice agents are customized to meet the unique needs and challenges of different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {niches.map((niche, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 h-full"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${niche.gradient} flex items-center justify-center mb-6`}>
                <niche.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{niche.title}</h3>
              <p className="text-white/80 mb-6">{niche.description}</p>
              
              <h4 className="font-medium mb-3 text-white">Key Benefits:</h4>
              <ul className="space-y-2 mb-6">
                {niche.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="h-5 w-5 text-white/80 mr-2 mt-0.5">•</div>
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center text-white hover:text-cyclamen transition-colors mt-auto">
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NichesSection;
