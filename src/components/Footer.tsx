import { Facebook, Twitter, Linkedin, Instagram, Bot, Send, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 relative bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-steel to-violet bg-clip-text text-transparent mb-4">
              <img 
                src="/lovable-uploads/1bc8889e-a10c-4871-a599-1439a4d03d9d.png" 
                alt="Innovara AI Logo" 
                className="h-8 w-auto" 
              />
              Innovara AI
            </div>
            <p className="text-white/70">
              Transforming customer interactions with intelligent AI Voice agents 
              for restaurants, hotels, and medical facilities.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5 text-white">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#industries"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>Restaurant Voice AI
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>Hotel Voice AI
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>Medical Voice AI
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>Custom Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>About Us
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-cyclamen flex-shrink-0 mt-0.5" />
                <span>info@voiceai.agency</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-steel flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-violet flex-shrink-0 mt-0.5" />
                <span>123 AI Boulevard, Tech City, CA 94043</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Subscribe to newsletter" 
                  className="px-4 py-2 bg-transparent border border-white/20 rounded-l-lg focus:outline-none focus:border-violet text-white flex-grow"
                />
                <button className="bg-gradient-steel-violet px-4 rounded-r-lg">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Innovara AI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
