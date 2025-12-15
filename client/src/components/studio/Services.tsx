import { motion } from "framer-motion";
import { Camera, Video, Edit, Image, Film, Users, Heart, Share2 } from "lucide-react";

const services = [
  { name: "Wedding Photography", icon: Heart, color: "bg-pink-100 text-pink-600" },
  { name: "Pre-Wedding Shoots", icon: Image, color: "bg-purple-100 text-purple-600" },
  { name: "Event Coverage", icon: Users, color: "bg-blue-100 text-blue-600" },
  { name: "Portraiture", icon: Camera, color: "bg-orange-100 text-orange-600" },
  { name: "Commercial", icon: Share2, color: "bg-green-100 text-green-600" },
  { name: "Cinematography", icon: Film, color: "bg-red-100 text-red-600" },
  { name: "Photo Editing", icon: Edit, color: "bg-indigo-100 text-indigo-600" },
  { name: "Drone Shots", icon: Video, color: "bg-cyan-100 text-cyan-600" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <span className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Services We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Offer</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed text-lg mb-8">
              From intimate portraits to grand celebrations, we provide a comprehensive range of visual solutions tailored to meet professional standards.
            </p>
            <button className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 font-bold uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-all">
              View Portfolio
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:bg-gray-800 hover:border-purple-500/50 transition-all duration-300 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color} transition-transform group-hover:scale-110`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
