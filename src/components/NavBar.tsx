
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
    { text: "Home", href: "#" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-navy/90 shadow-md backdrop-blur-lg"
          : "py-5 bg-navy"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-white"
          >
            <div className="bg-gradient-to-br from-purple/40 to-cyclamen/40 rounded-full p-1.5 backdrop-blur-sm animate-pulse-slow">
              <img 
                src="/lovable-uploads/03c35b9e-6e1b-4c45-8c26-28aa8bc436a1.png" 
                alt="FutureFormAi Logo" 
                className="h-9 w-auto brightness-110 contrast-110" 
              />
            </div>
            <span className="animate-gradient-text">FutureFormAi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-white/80 transition-colors text-2xl font-bold relative group"
              >
                <span className="animate-gradient-text">{link.text}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-steel-violet group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-dark mt-4 rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white hover:text-white/80 transition-colors py-2 text-2xl font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="animate-gradient-text">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
