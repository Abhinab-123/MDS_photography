import { motion } from "framer-motion";

const services = [
  "Wedding Photography",
  "Pre-Wedding Shoots",
  "Event Coverage",
  "Portraiture",
  "Commercial",
  "Product Photography",
  "Cinematography",
  "Photo Editing",
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Services</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              We provide a comprehensive range of visual solutions tailored to meet professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-white/20 p-6 hover:bg-white hover:text-black transition-colors duration-300 group"
              >
                <h3 className="text-lg font-medium">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
