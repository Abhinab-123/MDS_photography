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
import img10New from "@assets/image_1766155390379.png";
import img11New from "@assets/image_1766155387064.png";
import img12 from "@assets/55198e15-6bd9-4a8b-82ee-ea63ff04e4c9_1766154635403.jpg";
import img13 from "@assets/8f6274bb-215f-4738-9fb7-980b6f3d6f6e_1766154660482.jpg";
import imgBiswaketan from "@assets/litu_1766155068841.jpg";

const proprietor = {
  name: "Biswaketan Sahoo",
  profession: "Proprietor",
  image: imgBiswaketan
};

const managingDirector = {
  name: "Jaganath Sahoo",
  profession: "Managing Director",
  image: img8
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
  { name: "Abhijit sahoo", profession: "Designer, Cinematographer", image: img10New },
  { name: "Debendra sahoo", profession: "Cinematographer", image: img11New },
  { name: "Anil kumar", profession: "Editor, Cinematographer", image: img12 },
  { name: "Mr. Papi", profession: "Cinematographer", image: img13 },
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

        {/* Proprietor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex justify-center"
        >
          <div className="max-w-sm w-full">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border-2 border-amber-300 shadow-xl">
              <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8">
                <div className="relative overflow-hidden rounded-xl shadow-md aspect-square w-48 h-48 mx-auto mb-6">
                  <img
                    src={proprietor.image}
                    alt={proprietor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-amber-700 uppercase tracking-widest font-bold mb-2">{proprietor.profession}</p>
                  <h3 className="text-2xl font-heading font-bold text-stone-900">{proprietor.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <h3 className="text-2xl font-heading font-bold text-center text-stone-900 mb-12">Creative Team</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-20">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-2">
                  <p className="text-white text-xs font-bold uppercase tracking-tight text-right line-clamp-2">{member.profession}</p>
                  <p className="text-white text-xs font-bold uppercase tracking-tight text-right line-clamp-2 mt-1">{member.name}</p>
                </div>
              </div>
              <div className="mt-2 text-center hidden sm:block">
                <h3 className="text-xs font-heading font-bold text-stone-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-tight mt-0.5 line-clamp-2">
                  {member.profession}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Managing Director Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="max-w-sm w-full">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 border-2 border-purple-300 shadow-xl">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8">
                <div className="relative overflow-hidden rounded-xl shadow-md aspect-square w-48 h-48 mx-auto mb-6">
                  <img
                    src={managingDirector.image}
                    alt={managingDirector.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-purple-700 uppercase tracking-widest font-bold mb-2">{managingDirector.profession}</p>
                  <h3 className="text-2xl font-heading font-bold text-stone-900">{managingDirector.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
