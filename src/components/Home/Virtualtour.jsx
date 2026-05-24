import { useState } from "react";
import { X } from "lucide-react";
import virtualtour from "../../assets/virtualtour.png";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  textRevealVariant,
} from "../../utils/animation";

export default function VirtualTourSection() {
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
      <div className="max-w-7xl pb-10 mx-auto grid md:grid-cols-2 gap-3 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={slideIn("left", 80)}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h2
            className="text-6xl font-playfair font-bold mb-4"
            variants={textRevealVariant}
            style={{ willChange: "transform, opacity" }}
          >
            Virtual Tour
          </motion.h2>

          <motion.p
            className="text-[rgba(61,61,61,1)] text-xl mb-4 max-w-lg"
            variants={fadeIn}
            style={{ willChange: "transform, opacity" }}
          >
            Let your buyers explore every room, every corner — from anywhere in
            the world. We capture your property through real on-site 360°
            photography and deliver a fully interactive virtual tour, ready to
            share in a single link.
          </motion.p>

          <motion.a
            href="https://drushika.propwizardstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl font-normal underline hover:text-blue-800"
            variants={fadeIn}
            style={{ willChange: "transform, opacity" }}
          >
            View Sample Tour
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative cursor-pointer group"
          onClick={() => setOpen(false)}
          variants={slideIn("right", 80)}
          style={{ willChange: "transform, opacity" }}
        >
          <img
            src={virtualtour}
            alt="Virtual Tour Preview"
            className="rounded-[9px]  w-full"
          />

          {/* Overlay effect */}
          {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition rounded-2xl flex items-center justify-center">
            <span className=" px-4 py-2 rounded-full text-sm font-medium">
              ▶
            </span>
          </div> */}
        </motion.div>
      </div>

      {/* VIDEO MODAL */}
      {open && (
        <div className=" fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[100%] md:w-[700px]">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white"
            >
              <X size={30} />
            </button>

            {/* VIDEO */}
            <iframe
              className="w-full h-[500px] md:h-[450px] rounded-xl"
              src="https://www.youtube.com/embed/zS9y0bXy4MU?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </motion.section>
  );
}
