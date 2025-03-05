
import { ArrowRight, BarChart, ChevronRight, Sparkles } from "lucide-react";

const caseStudies = [
  {
    title: "How The Grand Hotel Reduced Wait Times by 78%",
    category: "Hotel",
    description: "The Grand Hotel implemented our AI Voice agent to handle reservation inquiries and reduced customer wait times from 15 minutes to just 3 minutes on average.",
    stats: [
      { value: "78%", label: "Reduced Wait Times" },
      { value: "24/7", label: "Customer Support" },
      { value: "93%", label: "Customer Satisfaction" }
    ],
    gradient: "from-steel to-violet"
  },
  {
    title: "Bella Italia Restaurant Boosted Revenue by 32%",
    category: "Restaurant",
    description: "By implementing our AI Voice agent to handle bookings and takeaway orders, Bella Italia increased their capacity and saw a significant boost in overall revenue.",
    stats: [
      { value: "32%", label: "Revenue Increase" },
      { value: "45%", label: "More Bookings" },
      { value: "89%", label: "Order Accuracy" }
    ],
    gradient: "from-cyclamen to-steel"
  },
  {
    title: "Northside Medical Clinic Reduced No-Shows by 63%",
    category: "Medical",
    description: "Northside Medical Clinic's AI Voice agent sends appointment reminders and handles rescheduling, dramatically reducing their no-show rate.",
    stats: [
      { value: "63%", label: "Fewer Missed Appointments" },
      { value: "41%", label: "Staff Time Saved" },
      { value: "95%", label: "Patient Satisfaction" }
    ],
    gradient: "from-violet to-cyclamen"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-cyclamen" />
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Results with
            <span className="text-gradient-steel-cyclamen block mt-2">
              AI Voice Agents
            </span>
          </h2>
          <p className="text-white/80 mt-6">
            Discover how businesses in different industries have transformed their 
            customer service and operations with our AI Voice agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${study.gradient}`}></div>
              <div className="p-8">
                <div className="text-sm text-white/60 mb-3">{study.category}</div>
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-white/70 mb-6 text-sm">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <a href="#contact" className="inline-flex items-center text-white hover:text-steel transition-colors text-sm">
                  Read Full Case Study 
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline inline-flex items-center">
            <BarChart className="mr-2 h-5 w-5" />
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
