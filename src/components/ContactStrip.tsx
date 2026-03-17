import { Phone, Mail } from "lucide-react";

const ContactStrip = () => {
  return (
    <section className="bg-card border-y border-border py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 font-heading uppercase tracking-wide text-sm md:text-base text-foreground">
        <a href="tel:9403730322" className="flex items-center gap-2 hover:text-primary transition-colors" aria-label="Call 940-373-0322">
          <Phone className="w-4 h-4 text-primary" /> 940-373-0322
        </a>
        <span className="hidden sm:inline text-muted-foreground">•</span>
        <a href="mailto:junkitv5@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors" aria-label="Email junkitv5@gmail.com">
          <Mail className="w-4 h-4 text-primary" /> junkitv5@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactStrip;
