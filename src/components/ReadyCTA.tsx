import { motion } from "framer-motion";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReadyCTA = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl md:text-6xl uppercase text-primary-foreground mb-8">
            Ready to Get Rid of Your Junk?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-heading uppercase tracking-wide text-base h-14 px-8 hover:scale-[1.03] transition-transform">
              <a href="tel:9403730322" aria-label="Call JUNK IT V5 now">
                <Phone className="w-5 h-5" /> CALL NOW
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-heading uppercase tracking-wide text-base h-14 px-8 hover:scale-[1.03] transition-transform">
              <a href="sms:9403730322" aria-label="Text JUNK IT V5 now">
                <MessageSquare className="w-5 h-5" /> TEXT NOW
              </a>
            </Button>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-heading uppercase tracking-wide text-base h-14 px-8 hover:scale-[1.03] transition-transform">
              <a href="#quote">
                <FileText className="w-5 h-5" /> GET FREE QUOTE
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyCTA;
