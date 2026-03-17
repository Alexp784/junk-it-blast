import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "They showed up same day and had everything cleared out in under an hour. Incredible service!", stars: 5 },
  { name: "James R.", text: "Best price in town and super professional. Will definitely use again for my next project.", stars: 5 },
  { name: "Linda K.", text: "Cleaned out my entire garage — old furniture, appliances, everything. Spotless when they left!", stars: 5 },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl uppercase text-center text-foreground mb-14"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border rounded-lg p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-foreground italic mb-4">"{review.text}"</p>
              <p className="font-heading uppercase text-sm text-muted-foreground">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
