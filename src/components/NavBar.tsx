import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: "Services", href: "#services" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-blue-grey/90 shadow-md backdrop-blur-lg"
          : "py-5 bg-blue-grey"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lovable-uploads/52e4f364-016d-4a0a-9c9b-e4b4af56d743.png" alt="NextSynthAi Logo" className="h-8 w-8 bg-transparent" />
            <span className="ml-3 text-xl tracking-tight font-inter font-bold text-white">NextsynthAi</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-10 text-sm text-white/80">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <button
              onClick={() => window.open('https://cal.com/sudhanshu-rai', '_blank')}
              className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-semibold rounded-lg px-6 py-2 hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-grey-light mt-4 rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white hover:text-white/80 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
               ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://cal.com/sudhanshu-rai', '_blank');
                }}
                className="bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-semibold rounded-lg px-6 py-2 hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;