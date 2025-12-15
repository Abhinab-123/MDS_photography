import { motion } from "framer-motion";
import lituImage from "@assets/litu_1765795335856.jpg";

export default function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Team</h2>
          <div className="h-1 w-20 bg-black mx-auto" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full md:w-1/2 aspect-[3/4] relative overflow-hidden bg-gray-100 max-w-sm mx-auto">
            <img 
              src={lituImage} 
              alt="Litu - Proprietor" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <div>
              <h3 className="text-3xl font-heading font-bold">Litu</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">Proprietor & Lead Photographer</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              With years of experience in capturing life's most precious moments, Litu brings a unique artistic vision to every shoot. Leading Mahalaxmi Digital Studio with a passion for excellence and visual storytelling.
            </p>

            <div className="pt-4">
              <span className="inline-block border-b border-black pb-1 font-medium">
                @mds_photography
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
