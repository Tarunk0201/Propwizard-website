import { useState } from "react";
import "./Ourwork.css";
import bottombanner from "../../assets/new1.jpg";
import solidicon from "../../assets/solid_icon.png";
import logobuild from "../../assets/logo2.png";
import arrow from "../../assets/arrow.png";
import left from "../../assets/leftarrow.png";
import right from "../../assets/rightarrow.png";
import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  textRevealVariant,
  scaleIn,
} from "../../utils/animation";
export default function OurWork() {
  const [activeTab, setActiveTab] = useState("walkthroughs");
  const [slide, setSlide] = useState(0);

  const data = {
    renders: {
      title: "Crafting spaces you can see before you build",
      desc: "From photorealistic 3D renders to immersive virtual walkthroughs — every project we deliver is built to impress.",
      slides: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      ],
      cardTitle: "Commercial Complex — 360° Virtual Walkthrough",
      cardtext:
        "An interactive web-based virtual walkthrough of a multi-floor commercial complex — allowing potential buyers and investors to explore every floor remotely.",
    },
    walkthroughs: {
      title: "Crafting spaces you can see before you build",
      desc: "From photorealistic 3D renders to immersive virtual walkthroughs — every project we deliver is built to impress.",
      slides: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      ],
      cardTitle: "Commercial Complex — 360° Virtual Walkthrough",
      cardtext:
        "An interactive web-based virtual walkthrough of a multi-floor commercial complex — allowing potential buyers and investors to explore every floor remotely.",
    },
    architecture: {
      title: "Precision in every architectural detail",
      desc: "We bring architectural concepts to life with precision drawings and modern visualization tools.",
      slides: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      ],
      cardTitle: "Architecture Design Showcase",
      cardtext:
        "Detailed architectural presentations showcasing planning, structure, and design accuracy.",
    },
  };

  const current = data[activeTab];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % current.slides.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? current.slides.length - 1 : prev - 1));
  };

  return (
    <motion.section
      className="bg-white py-16 px-4"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Our Work" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <motion.h2
              className="font-playfair font-semibold text-6xl leading-[1.2] text-[rgba(28,28,28,1)]"
              variants={textRevealVariant}
            >
              Bringing Properties <br />
              to Life —{" "}
              <span className="text-[rgba(0,71,179,1)]">Visually</span>
            </motion.h2>

            {/* Tabs */}
            <motion.div
              className="flex gap-3 mt-6"
              variants={slideIn("up", 20)}
            >
              {["renders", "walkthroughs", "architecture"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSlide(0);
                  }}
                  className={`px-4 py-1 rounded-full text-sm capitalize transition
                    ${
                      activeTab === tab
                        ? "bg-[rgba(49,181,230,1)] text-white"
                        : "bg-white text-black border border-[rgba(103,103,103,1)]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Dynamic Content */}
            <motion.div
              className="mt-10 max-w-xl"
              key={activeTab} // Add key to re-trigger animation on tab change
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h3
                variants={textRevealVariant}
                className="text-3xl md:text-4xl font-medium text-black leading-snug"
              >
                Crafting <span className="text-[rgba(0,71,179,1)]">spaces</span>{" "}
                you can see before you build
              </motion.h3>

              <motion.p
                variants={fadeIn}
                className="text-[rgba(102,102,102,1)] text-sm md:text-base mt-4 leading-relaxed"
              >
                {current.desc}
              </motion.p>
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            className="bg-[rgba(0,71,179,1)] p-6 rounded-3xl relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* HEADER */}
            <div className="flex items-start justify-between mb-4">
              <motion.div className="pr-10" variants={staggerContainer}>
                <motion.h3
                  variants={slideIn("down", 20)}
                  className="text-3xl text-white font-medium leading-snug"
                >
                  {current.cardTitle}
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  className="text-[rgba(223,223,223,1)] text-sm mt-2 leading-relaxed"
                >
                  {current.cardtext}
                </motion.p>
              </motion.div>

              {/* Arrows */}
              <motion.div
                className="flex gap-2 shrink-0"
                variants={staggerContainer}
              >
                <motion.button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center"
                  variants={scaleIn}
                >
                  <img src={left} alt="arrow" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center"
                  variants={scaleIn}
                >
                  <img src={right} alt="arrow" />
                </motion.button>
              </motion.div>
            </div>

            {/* Image Slider */}
            <div className="mt-4 overflow-hidden rounded-xl">
              <motion.img
                key={slide}
                src={current.slides[slide]}
                className="w-full h-[220px] object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-16 relative rounded-xl overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.img
            src={bottombanner}
            alt="Bottom Banner"
            className="w-full h-[483px] object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
          />

          <motion.div
            className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={slideIn("down", 20)}
              className="text-4xl flex items-end font-playfair  font-semibold"
            >
              Built for Those Who
              <img src={logobuild} alt="logo" className="ml-2" />
              Build
            </motion.h3>

            <motion.p
              variants={fadeIn}
              className="text-sm my-3 max-w-2xl leading-[1.5] "
            >
              PropWizard Studio is a dedicated property visualization studio —
              combining architectural expertise with cutting-edge 3D technology
              to deliver results that speak for themselves..
            </motion.p>

            <motion.button
              variants={scaleIn}
              className="work-together-btn mt-4 bg-white text-black pl-7 pr-1 py-1 rounded-full flex items-center gap-2 text-xl"
            >
              <span className="btn-text">Let's Work Together</span>
              <div className="btn-icon-wrapper bg-[rgba(0,71,179,1)] rounded-full w-12 h-12">
                <img src={arrow} alt="icon" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
