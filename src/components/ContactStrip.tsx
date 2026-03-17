import { Phone, Mail } from "lucide-react";

const ContactStrip = () => {
  return (
    <section className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 font-heading uppercase tracking-wide text-sm md:text-base">
        <a href="tel:9403730322" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="Call 940-373-0322">
          <Phone className="w-4 h-4" /> 940-373-0322
        </a>
        <span className="hidden sm:inline text-primary-foreground/40">•</span>
        <a href="mailto:junkitv5@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="Email junkitv5@gmail.com">
          <Mail className="w-4 h-4" /> junkitv5@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactStrip;
