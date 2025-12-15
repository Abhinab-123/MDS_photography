import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-white">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] opacity-50 animate-pulse" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-pink-200 rounded-full blur-[100px] opacity-50 animate-pulse delay-700" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-200 rounded-full blur-[100px] opacity-40 animate-pulse delay-1000" />

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
            className="inline-block px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Mahalaxmi Digital Studio
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">CAPTURE</span> <br />
            <span className="text-black">THE MAGIC</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            We turn fleeting moments into vibrant, colorful memories. Experience photography that speaks the language of emotion.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-purple-500/20"
            >
              View Packages
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              See Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
