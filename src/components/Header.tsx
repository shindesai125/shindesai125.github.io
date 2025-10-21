import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative flex items-center gap-2">
              {/* Chip icon before logo */}
              <svg width="20" height="20" viewBox="0 0 20 20" className="opacity-70">
                <rect x="5" y="5" width="10" height="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
                <rect x="7" y="7" width="6" height="6" fill="hsl(var(--primary))" opacity="0.3"/>
                <line x1="0" y1="7" x2="5" y2="7" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                <line x1="0" y1="13" x2="5" y2="13" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                <line x1="15" y1="7" x2="20" y2="7" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                <line x1="15" y1="13" x2="20" y2="13" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              </svg>
              
              <span className="text-2xl font-mono font-bold text-primary text-glow transition-all hover:scale-110 relative">
                &lt;S_Ai/&gt;
                {/* Scan line effect */}
                <span className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, hsl(var(--primary) / 0.2) 1px, hsl(var(--primary) / 0.2) 2px)' }} />
              </span>
              <div className="absolute inset-0 bg-primary/20 blur-xl" />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start text-foreground/80 hover:text-primary hover:bg-primary/10"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
