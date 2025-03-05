
import { Bot, Award, Star, CheckCircle2, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background blobs */}
      <div className="blob bg-violet/40 top-0 left-0"></div>
      <div className="blob bg-steel/40 bottom-0 right-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-cyclamen" />
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Revolutionizing Customer Interactions with{" "}
            <span className="animate-gradient-text">
              AI Voice Agents
            </span>
          </h2>
          <p className="text-white/80 mt-6">
            We're a team of AI enthusiasts dedicated to transforming how businesses interact with their customers. 
            Our AI Voice agents provide natural, efficient, and personalized customer support 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-steel-violet rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-steel-violet">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/80 mb-6">
                To enhance customer experience through intelligent AI Voice agents that understand and respond to human needs with efficiency and empathy.
              </p>
              <div className="space-y-3">
                {["Natural Conversations", "24/7 Availability", "Continuous Learning"].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-cyclamen mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-steel-cyclamen rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-steel-cyclamen">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <p className="text-white/80 mb-6">
                Our AI Voice agents are built with industry-specific knowledge, ensuring relevant and accurate interactions in restaurants, hotels, and medical facilities.
              </p>
              <div className="space-y-3">
                {[
                  "Industry-Specific Knowledge",
                  "Multilingual Support",
                  "Seamless Integration"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-violet mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
