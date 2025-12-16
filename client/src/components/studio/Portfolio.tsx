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
  { id: 5, src: img1, title: "Portrait", category: "Fashion" }, // Duplicating for grid demo
  { id: 6, src: img3, title: "Moments", category: "Wedding" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
            <div className="h-1 w-20 bg-amber-500" />
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-right hidden md:block">
            A curated collection of our most recent studio and on-location projects.
          </p>
        </div>

        {/* Square Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/90 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-white text-xl md:text-2xl font-heading font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
