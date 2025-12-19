import { motion } from "framer-motion";
import img1 from "@assets/459bf489-cda9-4e4e-9fef-70afaaab3b7a_1766153590549.jpg";
import img2 from "@assets/Screenshot_2025-12-19_193758_1766153868475.png";
import img3 from "@assets/Screenshot_2025-12-19_193838_1766153946244.png";
import img4 from "@assets/1867b36e-1437-4117-ad5a-56d11c738d88_1766153984655.jpg";
import img5 from "@assets/48cf1417-3599-4439-b8c1-3dc9131b1220_1766154024949.jpg";
import img6 from "@assets/cb522f27-8e12-4291-8bb6-dbda831732ee_1766154070294.jpg";
import img7 from "@assets/ab141f0d-648f-4961-b6db-995e88fc3e80_1766154122793.jpg";
import img8 from "@assets/00cfcafc-7ba9-4fb3-a3a4-f882adcb70c6_1766154162754.jpg";
import img9 from "@assets/e0d94f18-ebf2-4228-b761-5d584e51adce_1766154274190.jpg";
import img10 from "@assets/8cb57c82-3e21-4c13-98e9-23fbc539b4e0_1766154335761.jpg";

const teamMembers = [
  { name: "Prasant ku. Sahoo", profession: "Editor, Cinematographer", image: img1 },
  { name: "Soumya ranjan tripathy", profession: "Editor, Cinematographer", image: img2 },
  { name: "Somya ranjan pradhan", profession: "Cinematographer", image: img3 },
  { name: "Ashutosh panda", profession: "Cinematographer", image: img4 },
  { name: "Jyoti ranjan tripathy", profession: "Designer, Cinematographer", image: img5 },
  { name: "Mukesh das", profession: "Cinematographer", image: img6 },
  { name: "Lingaraj behera", profession: "Cinematographer", image: img7 },
  { name: "Jaganath sahoo", profession: "Managing Director", image: img8 },
  { name: "Debi prasad sinha", profession: "Cinematographer", image: img9 },
  { name: "Abhijit sahoo", profession: "Designer, Cinematographer", image: img10 },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3 block">Our Creative Team</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-stone-900">
            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Experts</span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A talented team of cinematographers, editors, and designers dedicated to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 aspect-square mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">{member.profession}</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-heading font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mt-1">
                  {member.profession}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-center">
          <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">Join Our Creative Family</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for talented professionals to join our growing team. If you share our passion for excellence, reach out to us.
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-amber-700 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
