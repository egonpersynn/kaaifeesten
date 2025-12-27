import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Praktisch", path: "/praktisch" },
    { name: "Rommelmarkt", path: "/rommelmarkt" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold text-primary">
              De Kaaifeesten
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              De grootste rommelmarkt van Vlaanderen. Een traditioneel buurtfeest 
              waar jong en oud samenkomt in het hartje van Eeklo.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-semibold text-primary-foreground">
              Navigatie
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-semibold text-primary-foreground">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Gebr. Van De Woestyneplein<br />
                  9900 Eeklo
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:dirkmussche7@telenet.be"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  dirkmussche7@telenet.be
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} De Kaaifeesten Eeklo. Alle rechten voorbehouden.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Eerste weekend van oktober, sinds 1927
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
