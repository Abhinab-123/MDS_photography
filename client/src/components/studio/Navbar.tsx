import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@assets/MDS_1765795318912.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Portfolio", id: "portfolio" },
    { name: "Packages", id: "packages" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="MDS Logo" className="h-10 w-auto object-contain" />
          <span className="font-heading font-bold text-xl tracking-tighter">MDS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo("contact")}
            className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors rounded-none"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-medium py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo("contact")}
            className="bg-black text-white px-6 py-3 text-center text-sm font-medium hover:bg-gray-800 transition-colors mt-2"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
