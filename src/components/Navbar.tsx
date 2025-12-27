import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import kaaifeestenLogo from "@/assets/kaaifeesten-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages with dark hero sections where navbar should start light
  const darkHeroPages = ["/", "/praktisch", "/rommelmarkt", "/partners", "/contact"];
  const hasDarkHero = darkHeroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Praktisch", path: "/praktisch" },
    { name: "Rommelmarkt", path: "/rommelmarkt" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Determine if we should show light or dark text
  const showLightText = hasDarkHero && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={kaaifeestenLogo} 
              alt="De Kaaifeesten" 
              className={`h-10 w-auto ${showLightText ? '' : 'invert'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-[0.1em] transition-colors duration-200 ${
                  isActive(link.path)
                    ? showLightText ? "text-background font-semibold" : "text-foreground font-semibold"
                    : showLightText ? "text-background/70 hover:text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://tickets.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={isScrolled ? "default" : "outline"} size="sm" className={`uppercase tracking-[0.15em] text-xs px-6 ${showLightText && 'border-background text-background hover:bg-background hover:text-foreground'}`}>
                Tickets
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${showLightText ? 'text-background' : 'text-foreground'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in border-t border-border/20 pt-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-[0.1em] py-2 transition-colors ${
                    isActive(link.path)
                      ? showLightText ? "text-background font-semibold" : "text-foreground font-semibold"
                      : showLightText ? "text-background/70" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://tickets.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button variant="default" className="w-full uppercase tracking-[0.15em] text-xs">
                  Tickets
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;