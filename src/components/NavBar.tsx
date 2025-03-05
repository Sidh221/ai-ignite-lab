
import { useState, useEffect } from "react";
import { Menu, X, Headphones, Bot } from "lucide-react";

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
    { text: "About", href: "#about" },
    { text: "Industries", href: "#industries" },
    { text: "Features", href: "#features" },
    { text: "Demo", href: "#demo" },
    { text: "Blog", href: "#blog" },
    { text: "FAQ", href: "#faq" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-xl bg-black/30 border-b border-white/10"
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-steel to-violet bg-clip-text text-transparent"
          >
            <Bot className="text-violet" size={28} />
            INNOVARA·AI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-gradient-steel-violet rounded-full transition-all hover:shadow-lg hover:shadow-steel/20 hover:-translate-y-1 flex items-center gap-2"
            >
              <Headphones size={16} />
              <span>Contact Us</span>
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
          <div className="md:hidden backdrop-blur-xl bg-black/80 mt-4 rounded-lg p-4 animate-fade-in border border-white/10">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 px-5 py-2 bg-gradient-steel-violet rounded-full text-center"
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
