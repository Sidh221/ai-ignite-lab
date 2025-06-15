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
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-black/90 shadow-md backdrop-blur-lg"
          : "py-5 bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lovable-uploads/3dd70e90-927f-4504-840a-a044bc9c7860.png" alt="NextSynthAI Logo" className="h-8 w-8" />
            <span className="ml-3 text-xl tracking-tight">NextSynthAI</span>
          </div>

          <div className="hidden md:flex space-x-10 text-sm text-gray-300">
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
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:block">
            <a href="#contact" className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 mt-4 rounded-lg p-4 animate-fade-in">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;