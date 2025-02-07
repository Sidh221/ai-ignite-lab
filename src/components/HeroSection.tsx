
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 animate-fade-in">
            Transform Your Business With AI
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Supercharge Your Growth With{" "}
            <span className="text-gradient">Intelligent Automation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in-up">
            We help businesses scale by integrating cutting-edge AI solutions into their
            workflows, from automated funnels to smart payment systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary hover:bg-primary-hover rounded-full transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-3 glass-card rounded-full transition-all duration-300 w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
