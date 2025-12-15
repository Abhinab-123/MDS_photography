import { motion } from "framer-motion";
import img1 from "@assets/generated_images/minimalist_fashion_portrait_studio_lighting.png";
import img2 from "@assets/generated_images/product_photography_perfume_bottle.png";
import img3 from "@assets/generated_images/wedding_couple_candid_moment.png";
import img4 from "@assets/generated_images/corporate_headshot_modern_office.png";

const portfolioItems = [
  { id: 1, src: img1, title: "Editorial", category: "Fashion" },
  { id: 2, src: img3, title: "Union", category: "Wedding" },
  { id: 3, src: img2, title: "Essence", category: "Product" },
  { id: 4, src: img4, title: "Profile", category: "Corporate" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
            <div className="h-1 w-20 bg-black" />
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-right">
            A curated collection of our most recent studio and on-location projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white/80 text-xs uppercase tracking-widest mb-1 block">{item.category}</span>
                <h3 className="text-white text-2xl font-heading font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
