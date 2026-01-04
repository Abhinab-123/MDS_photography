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
      <a href="https://www.instagram.com/mds_photography_8917?igsh=MXB2d2E0c3l4aDlwbw==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-700 transition-colors duration-200">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="https://www.facebook.com/share/1Jb3JbxR3w/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-700 transition-colors duration-200">
        <Facebook className="w-5 h-5" />
      </a>
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-amber-100/50 py-3 shadow-[0_2px_20px_-5px_rgba(212,175,55,0.1)]" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-3 sm:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-1 sm:gap-2 cursor-pointer py-1 sm:py-2 px-2 sm:px-3 rounded-xl hover:bg-white/20 transition-colors" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="MDS Logo" className="h-12 sm:h-14 w-auto object-contain drop-shadow-lg" loading="eager" />
          <span className="font-heading font-black text-lg sm:text-2xl tracking-tighter hidden sm:block bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">MDS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-gray-200 mx-2" />
          
          <SocialLinks />

          <button 
            onClick={() => scrollTo("contact")}
            className="bg-black text-white px-6 py-2.5 text-sm font-bold hover:bg-amber-700 transition-colors duration-200 rounded-full shadow-lg hover:shadow-amber-700/20"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 sm:p-6 lg:hidden flex flex-col gap-3 sm:gap-4 shadow-xl animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-left text-base sm:text-lg font-medium py-2 sm:py-3 border-b border-gray-50 last:border-0 text-gray-700 hover:text-amber-700 transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          
          <div className="py-3 sm:py-4 flex justify-center border-b border-gray-50">
            <SocialLinks />
          </div>

          <button 
            onClick={() => scrollTo("contact")}
            className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold hover:bg-amber-700 transition-colors duration-200 mt-2 rounded-xl uppercase tracking-widest"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
