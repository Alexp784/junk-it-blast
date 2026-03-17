import { useState } from "react";
import { Phone, MessageSquare, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20" style={{ backgroundColor: "rgba(11,13,10,0.92)", boxShadow: "0 2px 20px rgba(57,255,20,0.08)" }}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="font-heading text-2xl md:text-3xl font-bold tracking-wider uppercase text-primary neon-text-glow">
          JUNK IT V5
        </a>

        {/* Desktop CTA cluster */}
        <nav className="hidden md:flex items-center gap-3">
          <Button asChild className="neon-glow hover:scale-[1.03] transition-transform font-heading uppercase tracking-wide">
            <a href="tel:9403730322" aria-label="Call JUNK IT V5 at 940-373-0322">
              <Phone className="w-4 h-4" /> CALL 940-373-0322
            </a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-glow hover:scale-[1.03] transition-transform font-heading uppercase tracking-wide">
            <a href="sms:9403730322" aria-label="Text JUNK IT V5 at 940-373-0322">
              <MessageSquare className="w-4 h-4" /> TEXT 940-373-0322
            </a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] transition-transform font-heading uppercase tracking-wide">
            <a href="#quote">
              <FileText className="w-4 h-4" /> GET A QUOTE
            </a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-primary p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 border-t border-primary/20 px-4 py-4 flex flex-col gap-3">
          <Button asChild className="w-full neon-glow font-heading uppercase tracking-wide">
            <a href="tel:9403730322" aria-label="Call JUNK IT V5"><Phone className="w-4 h-4" /> CALL 940-373-0322</a>
          </Button>
          <Button asChild variant="outline" className="w-full border-primary text-primary font-heading uppercase tracking-wide">
            <a href="sms:9403730322" aria-label="Text JUNK IT V5"><MessageSquare className="w-4 h-4" /> TEXT 940-373-0322</a>
          </Button>
          <Button asChild variant="outline" className="w-full border-primary text-primary font-heading uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
            <a href="#quote"><FileText className="w-4 h-4" /> GET A QUOTE</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
