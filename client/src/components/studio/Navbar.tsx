import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react";
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

  const SocialLinks = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-4", className)}>
      <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm" : "bg-white/50 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="MDS Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-sm" />
          <span className="font-heading font-black text-2xl tracking-tighter hidden sm:block">MDS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-bold hover:text-purple-600 transition-colors uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-gray-200 mx-2" />
          
          <SocialLinks />

          <button 
            onClick={() => scrollTo("contact")}
            className="bg-black text-white px-6 py-2.5 text-sm font-bold hover:bg-purple-600 transition-colors rounded-full shadow-lg hover:shadow-purple-500/20"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 lg:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-medium py-3 border-b border-gray-50 last:border-0 hover:text-purple-600 transition-colors"
            >
              {link.name}
            </button>
          ))}
          
          <div className="py-4 flex justify-center border-b border-gray-50">
            <SocialLinks />
          </div>

          <button 
            onClick={() => scrollTo("contact")}
            className="bg-black text-white px-6 py-4 text-center text-sm font-bold hover:bg-gray-800 transition-colors mt-2 rounded-xl uppercase tracking-widest"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
