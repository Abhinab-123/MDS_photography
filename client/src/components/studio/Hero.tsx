import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-gray-500">
            Mahalaxmi Digital Studio
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter leading-[0.9]">
            VISUAL <br className="hidden md:block" />
            <span className="text-gray-400">STORY</span>TELLING
          </h1>
          <p className="max-w-xl text-lg text-gray-600 md:ml-2 leading-relaxed">
            Professional photography studio capturing moments with precision, art, and timeless style.
          </p>
          
          <div className="pt-8 md:ml-2">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              View Portfolio
              <span className="block w-8 h-[1px] bg-black group-hover:w-12 transition-all" />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gray-50 rounded-full blur-3xl -z-10" />
    </section>
  );
}
