import { motion } from "framer-motion";
import { Sofa, Refrigerator, Monitor, Warehouse, HardHat, Home } from "lucide-react";

const services = [
  { icon: Sofa, title: "Furniture Removal", desc: "Couches, tables, mattresses — we haul it all away fast." },
  { icon: Refrigerator, title: "Appliance Removal", desc: "Fridges, washers, dryers removed and disposed of properly." },
  { icon: Monitor, title: "Electronics Disposal", desc: "TVs, computers, and e-waste handled responsibly." },
  { icon: Warehouse, title: "Garage Cleanouts", desc: "Full garage cleanouts — we clear the clutter for you." },
  { icon: HardHat, title: "Construction Debris", desc: "Lumber, drywall, and renovation waste hauled away." },
  { icon: Home, title: "Full Property Cleanouts", desc: "Complete property cleanouts for moves, estates & more." },
];

const Services = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl uppercase text-center text-foreground mb-14"
        >
          Our Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-background border border-border rounded-lg p-8 text-center hover:border-muted-foreground/30 hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl uppercase text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
              <a href="#quote" className="text-primary font-heading uppercase text-sm tracking-wide hover:underline">
                Get a Quote →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
