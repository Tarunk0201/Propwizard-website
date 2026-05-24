import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SectorSection() {
  const [active, setActive] = useState("Real Estate Developers");

  const sectors = [
    "Residential Builders",
    "Real Estate Developers",
    "Architecture Firms",
    "Interior Designers",
    "Hospitality & Hotels",
    "Commercial Offices",
    "Government & Smart Cities",
    "Retail & Showrooms",
    "Educational Institutions",
    "Healthcare Projects",
    "Urban & Township Planning",
    "Luxury Villas & Resorts",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="bg-[#EEF3F8] py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* SMALL TEXT */}
        <motion.p
          className="text-sm text-gray-500 mb-3"
          variants={itemVariants}
        >
          Who we Serve
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="font-playfair text-3xl md:text-4xl leading-snug text-black"
          variants={itemVariants}
        >
          Built for every <br />
          sector of <span className="text-[rgba(0,71,179,1)]">property </span>&
          <span className="text-[rgba(0,71,179,1)]"> design</span>
        </motion.h2>

        {/* TAGS */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          variants={containerVariants}
        >
          {sectors.map((item) => (
            <motion.button
              key={item}
              onClick={() => setActive(item)}
              variants={itemVariants}
              className={`
                px-4 py-2 text-sm  border transition
                ${
                  active === item
                    ? "bg-[rgba(0,71,179,1)] text-white border-[rgba(0,71,179,1)]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }
              `}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
