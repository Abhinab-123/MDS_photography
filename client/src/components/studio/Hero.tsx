import { motion } from "framer-motion";
import backgroundImage from "@assets/image_1766422238620.png";

export default function Hero() {
  return (
    <section 
      id="hero"
      className="h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] min-h-[500px] sm:min-h-[600px] flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform'
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/60" />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient-to-edge from-transparent via-transparent to-black/30 z-[1]" style={{
        backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
      }} />

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
            className="inline-block px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-gradient-to-r from-amber-500/10 to-transparent"
          >
            Mahalaxmi Digital Studio
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wide leading-[1.1] md:leading-[1.05]" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, letterSpacing: '0.05em', color: '#F5E6D3', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <span style={{ background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 50%, #F4D03F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}>CAPTURE</span> <br />
            <span style={{ color: '#F5E6D3', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>THE MAGIC</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-medium px-4 sm:px-0" style={{ color: '#E8DCC8', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            We turn fleeting moments into vibrant, colorful memories. Experience photography that speaks the language of emotion.
          </p>
          
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6 sm:px-0">
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
              style={{ backgroundColor: '#D4AF37', color: '#1a1a1a', textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
            >
              View Packages
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 border-2 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-colors backdrop-blur-sm"
              style={{ borderColor: '#F5E6D3', color: '#F5E6D3', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
            >
              See Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
