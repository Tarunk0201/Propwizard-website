import { useState } from "react";
import { X } from "lucide-react";
import img from "../../assets/new6.jpeg";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  textRevealVariant,
} from "../../utils/animation";

export default function Saletool() {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      className="bg-white py-4 px-4"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-3 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          className="relative cursor-pointer group"
          onClick={() => setOpen(false)}
          variants={slideIn("right", 80)}
          style={{ willChange: "transform, opacity" }}
        >
          <img src={img} alt="Virtual Tour Preview" className=" w-full" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="w-full flex flex-col items-end bg-[#E5F2FF] h-full w-full p-3 justify-center"
          variants={slideIn("left", 80)}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h2
            className="text-6xl font-playfair text-end font-bold mb-4"
            variants={textRevealVariant}
            style={{ willChange: "transform, opacity" }}
          >
            Weblite
          </motion.h2>

          <motion.p
            className="text-[rgba(61,61,61,1)] text-end text-xl mb-4 max-w-lg"
            variants={fadeIn}
            style={{ willChange: "transform, opacity" }}
          >
            Imagine every tower, every floor, every unit available to explore on
            a single link. With our{" "}
            <span className="text-lg font-bold">built-in Sales Tool</span>,
            clients can click any unit to see availability, pricing and details
            instantly. No App download.
          </motion.p>

          <motion.a
            href="https://drushika.propwizardstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl font-normal underline text-end hover:text-blue-800"
            variants={fadeIn}
            style={{ willChange: "transform, opacity" }}
          >
            View Sample Tour
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
