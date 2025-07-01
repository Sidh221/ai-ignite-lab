
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Services", href: "#what-we-do" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold gradient-text-animate mb-4">NextSynthAI</h3>
            <p className="text-gray-300 mb-4">
              Automate What Slows You Down. Scale What Moves You Forward.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-r from-blue/20 to-pink/20 rounded-lg flex items-center justify-center hover:from-blue/40 hover:to-pink/40 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue" />
                <span className="text-gray-300">contact@nextsynthai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest AI insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue"
              />
              <button className="bg-gradient-to-r from-blue to-pink px-6 py-2 rounded-r-lg hover:shadow-lg hover:shadow-blue/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} NextSynthAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
