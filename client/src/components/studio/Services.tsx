import { motion } from "framer-motion";
import { Camera, Film, Calendar, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Luxury Wedding Photography",
    description: "Timeless wedding photography that captures the essence of your love story with artistic elegance.",
    features: [
      "Pre-wedding consultation",
      "Full day coverage",
      "Professional editing",
      "Online gallery",
      "Print package"
    ]
  },
  {
    icon: Film,
    title: "Cinematic Videography",
    description: "Cinematic wedding films that transform your special day into a breathtaking visual narrative.",
    features: [
      "4K video production",
      "Drone coverage",
      "Same-day highlights",
      "Full ceremony recording",
      "Custom music"
    ]
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "End-to-end wedding planning and coordination for a seamless and stress-free celebration.",
    features: [
      "Vendor coordination",
      "Timeline management",
      "Venue decoration",
      "Guest management",
      "Day-of coordination"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50 text-stone-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stone-900 mb-6">
            Services We Offer
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-stone-100 flex flex-col hover:shadow-xl transition-all duration-300 w-full max-w-md mx-auto md:max-w-none"
            >
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8">
                <service.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4 text-stone-900 leading-tight">
                {service.title}
              </h3>

              <p className="text-stone-600 leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>

              <div className="flex-1">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-stone-600 font-medium">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-4 rounded-xl border border-stone-200 text-stone-900 font-bold uppercase tracking-widest text-xs hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">
                Book Consultation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
