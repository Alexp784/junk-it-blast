import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-texture">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10"
        >
          {/* Portrait placeholder */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full border-2 border-primary/30 overflow-hidden relative" style={{ boxShadow: "0 0 40px rgba(57,255,20,0.15)" }}>
              <div className="w-full h-full bg-card flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl">👤</span>
                  <p className="text-xs text-muted-foreground mt-1">Owner Photo</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary mb-4 neon-text-glow">
              About the Owner
            </h2>
            <p className="text-foreground text-lg leading-relaxed">
              Raised by an entrepreneurial family, I realize the importance of excellent service and hard work.
              I look forward to connecting with you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
