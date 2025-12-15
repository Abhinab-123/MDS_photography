import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Standard",
    price: "Start",
    features: ["1 Hour Session", "10 Retouched Photos", "Online Gallery", "Print Release"],
  },
  {
    name: "Premium",
    price: "Pro",
    features: ["3 Hour Session", "30 Retouched Photos", "2 Locations", "Photo Album", "4K Video Highlight"],
    highlight: true,
  },
  {
    name: "Event",
    price: "Full",
    features: ["Full Day Coverage", "Unlimited Photos", "Second Shooter", "Drone Footage", "Same Day Edit"],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Packages</h2>
          <div className="h-1 w-20 bg-black" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "p-8 border flex flex-col h-full bg-white transition-shadow hover:shadow-xl",
                pkg.highlight ? "border-black shadow-lg relative" : "border-gray-200"
              )}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-8 bg-black text-white text-xs px-3 py-1 uppercase tracking-wider font-medium">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
              <div className="text-gray-500 font-medium mb-8 text-sm uppercase tracking-wider">{pkg.price}</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 mt-0.5 text-black" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-3 text-sm font-bold uppercase tracking-widest transition-colors",
                pkg.highlight 
                  ? "bg-black text-white hover:bg-gray-800" 
                  : "bg-white text-black border border-black hover:bg-gray-50"
              )}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper for conditional classes
import { cn } from "@/lib/utils";
