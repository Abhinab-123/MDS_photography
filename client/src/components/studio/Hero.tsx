import { motion } from "framer-motion";
import backgroundImage from "@assets/image_1766422152307.png";

export default function Hero() {
  return (
    <section 
      className="min-h-[90vh] flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient-to-edge from-transparent via-transparent to-black/30" style={{
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
            className="inline-block px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Mahalaxmi Digital Studio
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wide leading-[0.95]" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, letterSpacing: '0.05em', color: '#F5E6D3', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <span style={{ background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 50%, #F4D03F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}>CAPTURE</span> <br />
            <span style={{ color: '#F5E6D3', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>THE MAGIC</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium" style={{ color: '#E8DCC8', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            We turn fleeting moments into vibrant, colorful memories. Experience photography that speaks the language of emotion.
          </p>
          
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
              style={{ backgroundColor: '#D4AF37', color: '#1a1a1a', textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
            >
              View Packages
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-colors backdrop-blur-sm"
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
