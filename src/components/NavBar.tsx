import { useState, useEffect } from "react";
import { Menu, X, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

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
          ? "py-3 bg-black/90 shadow-md backdrop-blur-lg"
          : "py-5 bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lovable-uploads/3dd70e90-927f-4504-840a-a044bc9c7860.png" alt="NextSynnThai Logo" className="h-8 w-8" />
            <span className="ml-3 text-xl tracking-tight font-inter font-bold">NextSynnThai</span>
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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className={cn(
                    "text-sm bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] text-white font-semibold rounded-lg px-6 py-2 hover:shadow-lg hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:-translate-y-1",
                    !selectedDate && "text-white"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Book a Call"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-gray-900/95 backdrop-blur-lg border border-[#00D4FF]/30" align="end">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className={cn("p-3 pointer-events-auto text-white")}
                />
                {selectedDate && (
                  <div className="p-3 border-t border-[#00D4FF]/20">
                    <p className="text-sm text-gray-300 mb-2">Selected: {format(selectedDate, "PPP")}</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5FBF] hover:opacity-90"
                      onClick={() => {
                        // Here you would typically integrate with a booking system
                        alert(`Booking confirmed for ${format(selectedDate, "PPP")}`);
                      }}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                )}
              </PopoverContent>
            </Popover>
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