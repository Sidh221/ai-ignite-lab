
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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 backdrop-blur-xl bg-black/10 border-b border-white/10"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
          >
            INNOVARA AI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-white/70 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-white/70 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#booking"
              className="text-white/70 hover:text-white transition-colors"
            >
              Book Demo
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-black/50 mt-4 rounded-lg p-4 animate-fade-in border border-white/10">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#booking"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Demo
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 rounded-full transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
