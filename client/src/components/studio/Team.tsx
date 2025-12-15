import { motion } from "framer-motion";
import lituImage from "@assets/litu_1765795335856.jpg";
import { Instagram } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-white border-t border-stone-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3 block">The Creative Lead</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-stone-900">Our Team</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
        >
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-amber-200 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200 shadow-xl">
              <img 
                src={lituImage} 
                alt="Litu - Proprietor" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
            <div>
              <h3 className="text-4xl font-heading font-bold text-stone-900 mb-2">Litu</h3>
              <p className="text-amber-600 uppercase tracking-widest text-xs font-bold">Proprietor & Lead Photographer</p>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-lg font-medium">
              "We don't just capture photos; we preserve emotions. Every click is a story waiting to be told, and every frame is a memory etched in time."
            </p>

            <div className="space-y-4 text-stone-500 leading-relaxed text-sm">
              <p>
                With over a decade of experience in luxury weddings and cinematic storytelling, Litu has established Mahalaxmi Digital Studio as a premier name in visual arts.
              </p>
            </div>

            <div className="pt-6">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-stone-900 font-bold uppercase tracking-widest text-xs hover:text-amber-600 transition-colors border-b-2 border-amber-500 pb-1"
              >
                <Instagram className="w-4 h-4" />
                @mds_photography
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
