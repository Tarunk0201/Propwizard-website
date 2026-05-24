import { useNavigate } from "react-router-dom";
import solidicon from "../../assets/solid_icon.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import image3d from "../../assets/3dimg.png";
import feature from "../../assets/feature.jpg";
import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader";
import {
  staggerContainer,
  textRevealVariant,
  slideIn,
  scaleIn,
  fadeIn,
} from "../../utils/animation";

export default function Features() {
  const navigate = useNavigate();

  const services = [
    {
      title: "3D Visualization",
      desc: "See your property in stunning photorealistic detail like the real thing.",
      image: image3d,
      path: "/services/3d-visualization",
      icon: icon1,
    },
    {
      title: "Virtual Reality",
      desc: "Let clients explore your space from anywhere in the world — fully immersive.",
      path: "/services/virtual-experience",
      icon: icon2,
    },
    {
      title: "Architecture Drawings",
      desc: "Precision technical drawings that architects, builders, and approvals need.",
      path: "/services/architecture",
      icon: icon4,
      bgColor: "bg-[#0047B3]",
      textColor: "text-white",
      descColor: "text-gray-200",
    },
    {
      title: "Interior Design",
      desc: "Transform interiors on paper first — plan every detail before spending a rupee.",
      path: "/services/interior",
      icon: icon5,
    },
  ];

  const line1 = Array.from("End-to-End");
  const line2_1 = Array.from("Visualization");
  const line2_2 = Array.from("Solutions");

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Services" />

          {/* Grid */}
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6">
            {/* LEFT BIG BLOCK */}
            <div className="p-8 rounded-lg flex flex-col justify-between">
              <div>
                <motion.h2
                  className="font-playfair text-5xl font-semibold leading-[1.3] text-[rgba(28,28,28,1)]"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {line1.map((char, index) => (
                    <motion.span
                      className="inline-block"
                      key={index}
                      variants={textRevealVariant}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <br />
                  <span className="text-[rgba(0,71,179,1)]">
                    {line2_1.map((char, index) => (
                      <motion.span
                        className="inline-block"
                        key={index}
                        variants={textRevealVariant}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>{" "}
                  {line2_2.map((char, index) => (
                    <motion.span
                      className="inline-block"
                      key={index}
                      variants={textRevealVariant}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>
                <motion.p
                  className="text-gray-800 mt-3 text-sm"
                  variants={slideIn("up", 40)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  From concept to completion — we cover every visual need your
                  property project demands.
                </motion.p>
              </div>
            </div>

            {/* Service Card 1 */}
            <div
              onClick={() => navigate(services[0].path)}
              className="bg-[#EDEDED] p-6 cursor-pointer hover:shadow-md transition group"
            >
              <motion.div
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-20 h-20 flex items-center justify-center bg-white rounded-full text-lg mb-20"
              >
                <img
                  src={services[0].icon}
                  alt="icon"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                />
              </motion.div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <motion.h3
                    className="text-black font-medium group-hover:text-[#0047B3] transition"
                    variants={slideIn("up", 30)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {services[0].title}
                  </motion.h3>
                  <motion.p
                    className="text-[#696969] text-sm mt-2"
                    variants={slideIn("up", 30)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {services[0].desc}
                  </motion.p>
                </div>
                {services[0].image && (
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                )}
              </div>
            </div>

            {/* Big Image */}
            <div className="md:row-span-1  overflow-hidden">
              <img
                src={feature}
                alt="Feature"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Other services */}
            {services.slice(1).map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.path)}
                className={`
                  ${item.bgColor || "bg-[#EDEDED]"} 
                  p-6 cursor-pointer hover:shadow-md transition group
                `}
              >
                <motion.div
                  variants={scaleIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="w-20 h-20 flex items-center justify-center bg-white rounded-full text-lg mb-20"
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <motion.h3
                      className={`${
                        item.textColor || "text-black"
                      } font-medium ${
                        !item.textColor ? "group-hover:text-[#0047B3]" : ""
                      } transition`}
                      variants={slideIn("up", 30)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className={`${
                        item.descColor || "text-[#696969]"
                      } text-sm mt-2`}
                      variants={slideIn("up", 30)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-contain flex-shrink-0"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
