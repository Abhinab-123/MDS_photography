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
import img11 from "@assets/62b9db5e-7eb2-4bfc-8a31-fc54c6ddbde8_1766154565463.jpg";
import img12 from "@assets/3b2d35f8-ab73-4106-9c45-7e3a3b70ba4c_1766154599022.jpg";
import img13 from "@assets/55198e15-6bd9-4a8b-82ee-ea63ff04e4c9_1766154635403.jpg";
import img14 from "@assets/8f6274bb-215f-4738-9fb7-980b6f3d6f6e_1766154660482.jpg";

const leadership = {
  name: "Biswaketan Sahoo",
  role: "Founder & Creative Director",
  deputy: {
    name: "Jaganath Sahoo",
    profession: "Managing Director",
    image: img8
  }
};

const teamMembers = [
  { name: "Prasant ku. Sahoo", profession: "Editor, Cinematographer", image: img1 },
  { name: "Soumya ranjan tripathy", profession: "Editor, Cinematographer", image: img2 },
  { name: "Somya ranjan pradhan", profession: "Cinematographer", image: img3 },
  { name: "Ashutosh panda", profession: "Cinematographer", image: img4 },
  { name: "Jyoti ranjan tripathy", profession: "Designer, Cinematographer", image: img5 },
  { name: "Mukesh das", profession: "Cinematographer", image: img6 },
  { name: "Lingaraj behera", profession: "Cinematographer", image: img7 },
  { name: "Debi prasad sinha", profession: "Cinematographer", image: img9 },
  { name: "Abhijit sahoo", profession: "Designer, Cinematographer", image: img10 },
  { name: "Debendra sahoo", profession: "Cinematographer", image: img11 },
  { name: "Anil kumar", profession: "Editor, Cinematographer", image: img12 },
  { name: "Mr. Papi", profession: "Cinematographer", image: img13 },
  { name: "Dipak kumar", profession: "Cinematographer", image: img14 },
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

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 border-2 border-amber-300 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-heading font-bold text-stone-900 mb-2">{leadership.name}</h3>
              <p className="text-amber-700 font-bold uppercase tracking-widest text-sm">{leadership.role}</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="flex flex-col items-center">
                  <div className="relative overflow-hidden rounded-xl shadow-md aspect-square w-48 h-48 mb-6">
                    <img
                      src={leadership.deputy.image}
                      alt={leadership.deputy.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Managing Director</p>
                    <h4 className="text-2xl font-heading font-bold text-stone-900">{leadership.deputy.name}</h4>
                    <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mt-2">{leadership.deputy.profession}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <h3 className="text-2xl font-heading font-bold text-center text-stone-900 mb-12">Creative Team</h3>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase tracking-widest text-center w-full">{member.profession}</p>
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

        {/* CTA Section */}
        <div className="mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-center">
          <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">Join Our Creative Family</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for talented professionals to join our growing team. If you share our passion for excellence, reach out to us.
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white font-bold uppercase tracking-widest rounded-full hover:bg-amber-700 transition-colors shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
