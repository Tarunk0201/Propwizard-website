import React from "react";
import Heroimg from "../../assets/new3.jpeg";
import { motion } from "framer-motion";
import {
  premiumSpring,
  slowSpring,
  textRevealVariant,
  slideIn,
  staggerContainer,
} from "../../utils/animation";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Cinematic Scale Reveal */}
      <motion.img
        src={Heroimg}
        alt="buildings"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
        style={{ willChange: "transform, opacity" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Main Title Heading Reveal */}
          <div className="overflow-hidden py-1">
            <motion.h1
              className="text-white text-3xl md:text-5xl font-bold font-playfair"
              variants={textRevealVariant}
              style={{ willChange: "transform, opacity" }}
            >
              Visualise Before You Build
            </motion.h1>
          </div>

          {/* Subtitle Description Reveal with Staggered Delay */}
          <div className="overflow-hidden py-1">
            <motion.p
              className="text-gray-200 mt-4 max-w-2xl mx-auto text-sm md:text-lg"
              variants={slideIn("down", 30)}
              style={{ willChange: "transform, opacity" }}
            >
              End-to-end 3D visualization, architecture drawings & virtual
              experiences for architects, builders & developers.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
