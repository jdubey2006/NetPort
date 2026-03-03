import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Projects", "Skills", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map((item) => item.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <h1
        className="font-display text-3xl md:text-4xl text-primary tracking-wider cursor-pointer hover:scale-105 transition-transform"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        PORTFOLIO
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className={`text-sm font-medium transition-colors relative pb-1 ${
              activeSection === item.toLowerCase()
                ? "text-primary"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {item}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                activeSection === item.toLowerCase() ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border md:hidden animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`block w-full text-left px-6 py-4 text-base font-medium border-b border-border/50 transition-colors ${
                activeSection === item.toLowerCase()
                  ? "text-primary bg-primary/5"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
