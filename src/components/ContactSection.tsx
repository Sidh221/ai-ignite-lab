
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, Send, MapPin, Sparkles } from "lucide-react";
import BookingCalendar from "./BookingCalendar";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "restaurant",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "restaurant",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="blob bg-steel/30 top-20 left-20"></div>
      <div className="blob bg-violet/30 bottom-20 right-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full glass inline-block mb-6 text-sm">
            <Sparkles className="inline-block mr-2 h-4 w-4 text-steel" />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your
            <span className="text-gradient-steel-violet block mt-2">
              Customer Experience?
            </span>
          </h2>
          <p className="text-white/80 mt-6">
            Contact us today to discuss how our AI Voice agents can revolutionize 
            your customer interactions and streamline your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-white/80">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="industry" className="block text-sm font-medium mb-2 text-white/80">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10 bg-transparent"
                >
                  <option value="restaurant" className="bg-black">Restaurant</option>
                  <option value="hotel" className="bg-black">Hotel</option>
                  <option value="medical" className="bg-black">Medical</option>
                  <option value="realestate" className="bg-black">Real Estate</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-violet border border-white/10"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full md:w-auto px-8 py-3 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
            
            {/* Add Booking Calendar Component */}
            <BookingCalendar />
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-gradient-steel-violet flex items-center justify-center mb-4">
                <Mail className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 mb-4">Our friendly team is here to help.</p>
              <a href="mailto:info@voiceai.agency" className="text-gradient-steel-violet">
                info@voiceai.agency
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-gradient-steel-cyclamen flex items-center justify-center mb-4">
                <Phone className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 mb-4">Mon-Fri from 8am to 6pm.</p>
              <a href="tel:+15551234567" className="text-gradient-steel-cyclamen">
                +1 (555) 123-4567
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-gradient-violet-cyclamen flex items-center justify-center mb-4">
                <MapPin className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-white/80 mb-4">Come say hello at our office.</p>
              <address className="not-italic text-gradient-violet-cyclamen">
                123 AI Boulevard,<br />Tech City, CA 94043
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
