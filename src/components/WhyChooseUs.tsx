import { motion } from "framer-motion";
import { Zap, Clock, DollarSign, Smile } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast & Reliable", desc: "We show up on time and get the job done quickly." },
  { icon: Clock, title: "Same-Day Service", desc: "Need it gone today? We offer same-day pickups." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates with no hidden fees." },
  { icon: Smile, title: "Professional & Friendly", desc: "Courteous crew that treats your property with respect." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl uppercase text-center text-foreground mb-14"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg uppercase text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
