import { motion } from "framer-motion";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReadyCTA = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8">
            Ready to Get Rid of Your Junk?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-heading uppercase tracking-wide text-base h-14 px-8 hover:brightness-90 transition-all">
              <a href="tel:9403730322" aria-label="Call JUNK IT V5 now">
                <Phone className="w-5 h-5" /> CALL NOW
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-heading uppercase tracking-wide text-base h-14 px-8 hover:brightness-90 transition-all">
              <a href="sms:9403730322" aria-label="Text JUNK IT V5 now">
                <MessageSquare className="w-5 h-5" /> TEXT NOW
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-heading uppercase tracking-wide text-base h-14 px-8 hover:brightness-90 transition-all">
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
