import { useState } from "react";
import { Phone, MessageSquare, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-heading text-2xl md:text-3xl font-bold tracking-wider uppercase text-primary">
          JUNK IT V5
        </a>

        <nav className="hidden md:flex items-center gap-3">
          <Button asChild className="font-heading uppercase tracking-wide hover:brightness-90 transition-all">
            <a href="tel:9403730322" aria-label="Call JUNK IT V5 at 940-373-0322">
              <Phone className="w-4 h-4" /> CALL 940-373-0322
            </a>
          </Button>
          <Button asChild variant="secondary" className="font-heading uppercase tracking-wide hover:brightness-90 transition-all">
            <a href="sms:9403730322" aria-label="Text JUNK IT V5 at 940-373-0322">
              <MessageSquare className="w-4 h-4" /> TEXT 940-373-0322
            </a>
          </Button>
          <Button asChild variant="secondary" className="font-heading uppercase tracking-wide hover:brightness-90 transition-all">
            <a href="#quote">
              <FileText className="w-4 h-4" /> GET A QUOTE
            </a>
          </Button>
        </nav>

        <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3">
          <Button asChild className="w-full font-heading uppercase tracking-wide">
            <a href="tel:9403730322" aria-label="Call JUNK IT V5"><Phone className="w-4 h-4" /> CALL 940-373-0322</a>
          </Button>
          <Button asChild variant="secondary" className="w-full font-heading uppercase tracking-wide">
            <a href="sms:9403730322" aria-label="Text JUNK IT V5"><MessageSquare className="w-4 h-4" /> TEXT 940-373-0322</a>
          </Button>
          <Button asChild variant="secondary" className="w-full font-heading uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
            <a href="#quote"><FileText className="w-4 h-4" /> GET A QUOTE</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
