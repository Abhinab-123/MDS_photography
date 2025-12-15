import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Silver Package",
    price: "₹50,000",
    subtitle: "Essential Package",
    features: [
      "1 Traditional photo and video shoot",
      "2 Days photo and video shoot",
      "20 Page wedding photo book (Premium quality)",
      "Wedding Invitation Included",
      "2 Hour video output"
    ],
    note: "*Consultant available for extra day shoot",
    color: "text-gray-500",
    borderColor: "border-gray-200",
    btnColor: "bg-gray-900",
    highlight: false
  },
  {
    name: "Gold Package",
    price: "₹1,00,000",
    subtitle: "Premium Choice",
    features: [
      "1 Videograph (Traditional and Cinematic)",
      "1 Candid photoshoot",
      "2 Days traditional photoshoot",
      "30 Page wedding photo book (Premium quality)",
      "Wedding Invitation Included",
      "1 LED and Drone for Reception"
    ],
    note: "*Consultant available for extra day shoot",
    color: "text-yellow-600",
    borderColor: "border-yellow-400",
    btnColor: "bg-yellow-600",
    highlight: true
  },
  {
    name: "Diamond Package",
    price: "₹1,50,000",
    subtitle: "Luxury Package",
    features: [
      "2 Days cinematic video shoot",
      "2 Days shoot",
      "50 Page photo book + Mini photo book + Calendar",
      "Wedding Invitation Included",
      "2 LED and Drone for Reception and Wedding",
      "Treasure + Highlight"
    ],
    note: "*Consultant available for extra day shoot",
    color: "text-cyan-600",
    borderColor: "border-cyan-400",
    btnColor: "bg-cyan-600",
    highlight: false
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Packages</h2>
          <div className="h-1 w-20 bg-black mx-auto md:mx-0" />
          <p className="mt-4 text-gray-500">Choose the perfect collection for your special moments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative p-6 md:p-8 border-2 rounded-2xl flex flex-col h-full bg-white transition-all duration-300",
                pkg.highlight ? "shadow-2xl scale-100 md:scale-105 z-10 border-yellow-400" : "border-gray-100 hover:border-gray-300 shadow-lg"
              )}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                <div className={cn("text-4xl md:text-5xl font-bold mb-2 tracking-tight", pkg.color)}>
                  {pkg.price}
                </div>
                <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">{pkg.subtitle}</p>
              </div>
              
              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-600 leading-relaxed">
                      <div className={cn("mt-1 p-0.5 rounded-full flex-shrink-0", pkg.color.replace('text-', 'bg-').replace('600', '100'))}>
                        <Check className={cn("w-3 h-3", pkg.color)} strokeWidth={3} />
                      </div>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-gray-400 italic text-center">{pkg.note}</p>
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md",
                pkg.btnColor
              )}>
                Book {pkg.name.split(' ')[0]}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
