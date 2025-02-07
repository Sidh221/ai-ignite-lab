
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "The AI solutions provided by this agency have transformed our business operations. Our efficiency has increased by 300% since implementation.",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content:
      "Their AI-powered booking system has eliminated all our scheduling headaches. It's like having a smart assistant working 24/7.",
  },
  {
    name: "Emma Davis",
    role: "Marketing Director, InnovateCo",
    content:
      "The smart funnels have revolutionized our lead generation process. We're seeing conversion rates we never thought possible.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-gray-400">
            See what our clients say about their experience with our AI solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative">
            <Quote className="text-primary/20 absolute top-8 left-8" size={48} />
            <div className="relative z-10">
              <p className="text-lg md:text-xl mb-6 text-gray-300">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex flex-col items-center">
                <h4 className="font-semibold text-xl mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 glass-card rounded-full hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-2 glass-card rounded-full hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
