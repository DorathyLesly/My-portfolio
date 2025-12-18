import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#experience",
    label: "Experience"
  }, {
    href: "#skills",
    label: "Skills"
  }, {
    href: "#services",
    label: "Services"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#certifications",
    label: "Certifications"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-panel py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gradient">Dorathy

        </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-lg font-bold text-foreground/90 px-3 py-1 transition-colors duration-200 focus:outline-none"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="transition-all duration-200 rounded-full bg-primary/20 scale-0 group-hover:scale-100 group-focus:scale-100" style={{width:'2.2em',height:'2.2em',display:'inline-block'}}></span>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 glass-panel p-4 space-y-3">
            {navLinks.map(link => <a key={link.href} href={link.href} className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;