
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

const BookingSection = () => {
  const { ref, inView } = useScrollAnimation();

  const handleBookConsultation = () => {
    window.open('https://cal.com/sudhanshu-rai/free-consultation', '_blank');
  };

  const features = [
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "30-minute strategy session"
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Get started in 24 hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated AI specialists"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "100% satisfaction guarantee"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-[#1a1f3a] to-[#0A0E27] relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animate">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Book a free consultation and discover how HyperXai can revolutionize your operations with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass rounded-lg p-6 text-center transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-pink rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`text-center transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={handleBookConsultation}
            className="group relative bg-gradient-to-r from-blue to-pink text-white font-bold rounded-2xl px-12 py-6 text-lg hover:shadow-2xl hover:shadow-blue/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg shadow-blue/30"
          >
            <span className="relative z-10 font-inter">Book Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet to-pink rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue to-pink rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
