import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's Talk</h2>
              <p className="text-gray-600 text-lg">
                Ready to start your project? Book a session or ask a question.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm mb-1">Studio</h4>
                  <p className="text-gray-600">Main Street, City Center<br />Odisha, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm mb-1">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm mb-1">Email</h4>
                  <p className="text-gray-600">contact@mdsphotography.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-bold uppercase tracking-wide text-sm mb-4">Follow Us</h4>
              <div className="flex gap-6">
                <a href="#" className="p-3 bg-white border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-heading font-bold mb-6">Book Now</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wide text-gray-500">Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wide text-gray-500">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wide text-gray-500">Service Interest</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent">
                  <option>Wedding Photography</option>
                  <option>Portrait Session</option>
                  <option>Event Coverage</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="pt-4">
                <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
                  Send Request
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
