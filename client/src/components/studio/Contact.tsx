import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Wedding Photography",
    message: ""
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendRequest = () => {
    const messageText = `Hello! I would like to send a request:%0A%0AName: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918917328397?text=${messageText}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-2 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Let's Create <br/>Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Beautiful</span></h2>
              <p className="text-gray-600 text-lg max-w-md">
                Ready to start your project? Book a session or ask a question. We're here to help you capture your best moments.
              </p>
            </div>

            <div className="space-y-6">
              <a href="https://www.google.com/maps/place/20%C2%B022'09.2%22N+86%C2%B005'46.8%22E/@20.3692111,86.0955836,19z/data=!4m4!3m3!8m2!3d20.36923!4d86.09634?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Studio</h4>
                  <p className="text-gray-500">Nanpur, Odisha</p>
                </div>
              </a>

              <a href="tel:+918917328397" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-500">+91 89173 28397 <br/> +91 94397 48104</p>
                </div>
              </a>

              <a href="mailto:mahalaxmistudio143@gmail.com" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-500 break-all">mahalaxmistudio143@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-8">
              <h4 className="font-bold uppercase tracking-wide text-sm mb-4 text-gray-400">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/mds_photography_8917?igsh=MXB2d2E0c3l4aDlwbw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 hover:text-pink-600 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/share/1Jb3JbxR3w/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 hover:text-blue-600 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-[100px] -z-0 opacity-50" />
            
            <h3 className="text-2xl font-heading font-black mb-6 relative z-10">Send a Message</h3>
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-500">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Service Needed</label>
                <select name="service" value={formData.service} onChange={handleFormChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all appearance-none cursor-pointer">
                  <option>Wedding Photography</option>
                  <option>Portrait Session</option>
                  <option>Event Coverage</option>
                  <option>Commercial</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Message</label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleFormChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none" placeholder="Tell us about your event..." />
              </div>

              <button onClick={handleSendRequest} className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-800 transition-all hover:shadow-lg flex items-center justify-center gap-2 group mt-2">
                Send Request
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
