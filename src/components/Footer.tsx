import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import kaaifeestenLogo from "@/assets/kaaifeesten-logo.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Praktisch", path: "/praktisch" },
    { name: "Rommelmarkt", path: "/rommelmarkt" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <img 
              src={kaaifeestenLogo} 
              alt="De Kaaifeesten" 
              className="h-12 w-auto"
            />
            <p className="text-background/60 leading-relaxed font-light">
              De grootste rommelmarkt van Vlaanderen. Een traditioneel buurtfeest 
              waar jong en oud samenkomt in het hartje van Eeklo.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold">
              Navigatie
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-background/40 mt-1 flex-shrink-0" />
                <span className="text-background/60 text-sm">
                  Gebr. Van De Woestyneplein<br />
                  9900 Eeklo
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-background/40 flex-shrink-0" />
                <a
                  href="mailto:dirkmussche7@telenet.be"
                  className="text-background/60 hover:text-background transition-colors text-sm"
                >
                  dirkmussche7@telenet.be
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-xs uppercase tracking-[0.1em]">
              © {new Date().getFullYear()} De Kaaifeesten Eeklo
            </p>
            <p className="text-background/40 text-xs italic">
              Eerste weekend van oktober, sinds 1927
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;