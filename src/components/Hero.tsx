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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-heading text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Clean Up & Junk Removal
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase text-foreground leading-[0.95] mb-8">
              Need Junk<br />Removal?
            </h1>

            <ul className="space-y-2.5 mb-8">
              {checklist.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex items-center gap-3 text-foreground text-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <p className="text-muted-foreground italic mb-8 text-sm md:text-base">
              Raised by an entrepreneurial family — excellent service & hard work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="font-heading uppercase tracking-wide text-base h-14 px-8 hover:brightness-90 transition-all">
                <a href="tel:9403730322" aria-label="Call JUNK IT V5 now">
                  <Phone className="w-5 h-5" /> CALL NOW
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-heading uppercase tracking-wide text-base h-14 px-8 hover:brightness-90 transition-all">
                <a href="sms:9403730322" aria-label="Text JUNK IT V5">
                  <MessageSquare className="w-5 h-5" /> TEXT US
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-heading uppercase tracking-wide text-base h-14 px-8 hover:brightness-90 transition-all">
                <a href="#quote">
                  <FileText className="w-5 h-5" /> GET FREE QUOTE
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-card flex items-center justify-center border border-border rounded-lg">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-4xl">🚛</span>
                  </div>
                  <p className="font-heading text-xl text-foreground uppercase">Trailer Image</p>
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
