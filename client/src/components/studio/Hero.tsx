import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-[url('/font-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Mahalaxmi Digital Studio
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.9] text-white drop-shadow-lg">
            CAPTURE <br />
            THE MAGIC
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-medium drop-shadow-md">
            We turn fleeting moments into vibrant, colorful memories. Experience photography that speaks the language of emotion.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-black/20"
            >
              View Packages
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              See Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
