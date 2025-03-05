
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How do AI Voice agents improve customer service?",
    answer: "AI Voice agents provide 24/7 availability, consistent service quality, multilingual support, and the ability to handle multiple inquiries simultaneously. This results in faster response times, reduced wait periods, and improved customer satisfaction."
  },
  {
    question: "How long does it take to implement an AI Voice agent?",
    answer: "Most implementations can be completed in 2-4 weeks, depending on complexity and customization requirements. Our team works closely with you to ensure a smooth integration with your existing systems."
  },
  {
    question: "Are the AI Voice agents multilingual?",
    answer: "Yes, our AI Voice agents support over 30 languages, making them ideal for businesses with a diverse customer base or international operations."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We employ end-to-end encryption, regular security audits, and compliance with GDPR, HIPAA, and other relevant regulations to ensure all customer data remains secure and private."
  },
  {
    question: "Can the AI Voice agent integrate with our existing systems?",
    answer: "Yes, our AI Voice agents are designed to integrate seamlessly with CRM systems, booking platforms, POS systems, EMR/EHR in healthcare, and other business software through secure APIs."
  },
  {
    question: "How do you train the AI for our specific industry?",
    answer: "We use a combination of industry-specific knowledge bases, custom training data relevant to your business, and continuous learning from interactions to ensure the AI understands your domain's terminology and customer needs."
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We offer comprehensive support including 24/7 technical assistance, regular updates and improvements, performance analytics, and ongoing optimization based on user interactions and feedback."
  },
  {
    question: "How do you measure the success of AI Voice agents?",
    answer: "We track key metrics including response accuracy, customer satisfaction scores, resolution rates, call handling times, conversion rates for sales inquiries, and ROI based on operational efficiencies gained."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-violet" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked
            <span className="text-gradient-violet-cyclamen block mt-2">
              Questions
            </span>
          </h2>
          <p className="text-white/80 mt-6">
            Find answers to common questions about our AI Voice agents and how they can benefit your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full p-5 text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium flex items-center">
                    <HelpCircle size={18} className="text-steel mr-2 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-white/70" />
                  ) : (
                    <ChevronDown size={20} className="text-white/70" />
                  )}
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "pb-5 max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center">
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
