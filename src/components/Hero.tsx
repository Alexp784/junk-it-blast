import { motion } from "framer-motion";
import { Phone, MessageSquare, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const checklist = [
  "Furniture",
  "Appliances",
  "Electronics",
  "Garage Cleanouts",
  "Construction Debris",
  "And More!",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-texture" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(57,255,20,0.15) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-2">
              Clean Up & Junk Removal
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-primary neon-text-glow leading-[0.95] mb-8">
              Need Junk Removal?
            </h1>

            <ul className="space-y-3 mb-8">
              {checklist.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-foreground text-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <p className="text-primary/80 italic mb-8 text-sm md:text-base">
              Raised by an entrepreneurial family — excellent service & hard work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="neon-glow hover:scale-[1.03] transition-transform font-heading uppercase tracking-wide text-base h-14 px-8">
                <a href="tel:9403730322" aria-label="Call JUNK IT V5 now">
                  <Phone className="w-5 h-5" /> CALL NOW
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-glow hover:scale-[1.03] transition-transform font-heading uppercase tracking-wide text-base h-14 px-8">
                <a href="sms:9403730322" aria-label="Text JUNK IT V5">
                  <MessageSquare className="w-5 h-5" /> TEXT US
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] transition-transform font-heading uppercase tracking-wide text-base h-14 px-8">
                <a href="#quote">
                  <FileText className="w-5 h-5" /> GET FREE QUOTE
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right column - trailer image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden neon-glow-strong">
              <div className="aspect-[4/3] bg-card flex items-center justify-center border border-primary/20 rounded-lg">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-4xl text-primary">🚛</span>
                  </div>
                  <p className="font-heading text-xl text-primary uppercase">Trailer Image</p>
                  <p className="text-muted-foreground text-sm mt-1">Replace with hero trailer photo</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-4">
              <a href="tel:9403730322" className="text-primary font-heading uppercase tracking-wide hover:underline" aria-label="Call or text 940-373-0322">
                CALL OR TEXT 940-373-0322
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
