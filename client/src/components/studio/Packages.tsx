import { motion } from "framer-motion";
import { Check, Star, Crown, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Silver Package",
    price: "₹50,000",
    subtitle: "The Essentials",
    features: [
      "1 Traditional Photo & Video Shoot",
      "2 Days Coverage",
      "20 Page Premium Photobook",
      "Wedding Invitation Included",
      "2 Hour Video Output"
    ],
    note: "*Extra day shoots available",
    icon: ShieldCheck,
    theme: "silver",
    gradient: "from-gray-100 to-gray-300",
    accent: "text-gray-600",
    border: "border-gray-200",
    shadow: "shadow-gray-200/50",
    button: "bg-gray-900 hover:bg-gray-800",
    highlight: false
  },
  {
    name: "Gold Package",
    price: "₹1,00,000",
    subtitle: "Premium Experience",
    features: [
      "Traditional & Cinematic Video",
      "Candid Photoshoot",
      "2 Days Traditional Shoot",
      "30 Page Premium Photobook",
      "Wedding Invitation Included",
      "LED Wall & Drone (Reception)"
    ],
    note: "*Extra day shoots available",
    icon: Star,
    theme: "gold",
    gradient: "from-amber-100 to-orange-100",
    accent: "text-amber-600",
    border: "border-amber-200",
    shadow: "shadow-amber-500/30",
    button: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700",
    highlight: true
  },
  {
    name: "Diamond Package",
    price: "₹1,50,000",
    subtitle: "Ultimate Luxury",
    features: [
      "2 Days Cinematic Video",
      "Complete 2 Days Coverage",
      "50 Pg Book + Mini Book + Calendar",
      "Wedding Invitation Included",
      "2 LED Walls + Drone (Full Event)",
      "Treasure Film + Highlight Reel"
    ],
    note: "*Extra day shoots available",
    icon: Crown,
    theme: "diamond",
    gradient: "from-cyan-50 to-blue-100",
    accent: "text-cyan-600",
    border: "border-cyan-200",
    shadow: "shadow-cyan-500/30",
    button: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
    highlight: false
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 relative overflow-hidden bg-white -mt-px">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            Pricing Plans
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-stone-900">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collection</span>
          </h2>
          <p className="max-w-xl mx-auto text-stone-500 font-medium">
            Transparent pricing with no hidden fees. Select the package that fits your celebration perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={cn(
                "relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300",
                "w-full max-w-md mx-auto md:max-w-none", // Mobile optimization
                pkg.highlight ? "shadow-2xl ring-4 ring-amber-400/20 md:scale-110 z-10 my-4 md:my-0" : "shadow-xl border bg-white my-4 md:my-0"
              )}
            >
              {/* Header Card */}
              <div className={cn("p-8 relative overflow-hidden", pkg.highlight ? "bg-gradient-to-br from-amber-50 to-orange-50" : "bg-white")}>
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg">
                    POPULAR
                  </div>
                )}
                
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-inner", pkg.highlight ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-600", pkg.theme === 'diamond' && "bg-cyan-100 text-cyan-600")}>
                  <pkg.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">{pkg.subtitle}</p>
                
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-4xl font-black tracking-tight", pkg.accent)}>
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-8 bg-white flex-1 flex flex-col border-t border-gray-100">
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                      <div className={cn("mt-0.5 p-0.5 rounded-full flex-shrink-0", pkg.theme === 'gold' ? "bg-amber-100 text-amber-600" : pkg.theme === 'diamond' ? "bg-cyan-100 text-cyan-600" : "bg-gray-100 text-gray-600")}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-center text-gray-400 mb-6 italic">{pkg.note}</p>

                <a href={`https://wa.me/918917328397?text=Hi%20I%20want%20to%20book%20the%20${pkg.name.toLowerCase()}%20package`} target="_blank" rel="noopener noreferrer" className={cn(
                  "w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-sm shadow-lg transition-all active:scale-95 inline-flex items-center justify-center",
                  pkg.button
                )}>
                  Book Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
