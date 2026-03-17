import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl uppercase text-primary neon-text-glow mb-3">JUNK IT V5</h3>
            <p className="text-muted-foreground text-sm">Fast, affordable junk removal you can count on.</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading uppercase text-foreground mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</a>
              <a href="#quote" className="text-muted-foreground hover:text-primary text-sm transition-colors">Get a Quote</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading uppercase text-foreground mb-3">Contact</h4>
            <div className="space-y-2">
              <a href="tel:9403730322" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors" aria-label="Call 940-373-0322">
                <Phone className="w-4 h-4" /> 940-373-0322
              </a>
              <a href="mailto:junkitv5@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors" aria-label="Email junkitv5@gmail.com">
                <Mail className="w-4 h-4" /> junkitv5@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-6 text-center text-muted-foreground text-xs">
          © {year} JUNK IT V5. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
