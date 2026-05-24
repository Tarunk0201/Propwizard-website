// src/pages/InteriorDesignDirection.jsx
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import hero1 from "../assets/interioehero1.png";
import hero2 from "../assets/interioehero2.png";
import hero3 from "../assets/interioehero3.png";
import Approach from "../assets/Approach.png";
import reimagined from "../assets/reimagined.png";
import tone1 from "../assets/tine1.png";
import tone2 from "../assets/tine2.png";
import tone3 from "../assets/tine3.png";
import tone4 from "../assets/tine4.png";
import tone5 from "../assets/tine5.png";
import tone6 from "../assets/tine6.png";
import tone7 from "../assets/tine7.png";
import tone8 from "../assets/tine8.png";
import tone9 from "../assets/tine9.png";
import tone10 from "../assets/tine10.png";
import tone11 from "../assets/tine11.png";
import tone12 from "../assets/tine12.png";

// Reusable configurations matching your premium motion profile
const premiumSpring = {
  type: "spring",
  stiffness: 100,
  damping: 22,
  mass: 0.5,
};
const slowSpring = { type: "spring", stiffness: 50, damping: 20, mass: 0.8 };

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const textRevealVariant = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: premiumSpring },
};

export default function InteriorSection() {
  // Temporary placeholders for design system content mapping
  const navigationTabs = [
    "KITCHEN & DINING",
    "HOME OFFICE",
    "MASTER BEDROOM",
    "LIGHTING DESIGN",
    "MATERIAL SELECTION",
  ];

  const approachItems = [
    {
      num: "01",
      title: "Human-Centred Space Planning",
      desc: "We start by mapping how you move through your space — traffic flow, natural light, activity zones — before a single design decision is made. Good layouts feel effortless because they're built around real life.",
    },
    {
      num: "02",
      title: "Material Integrity",
      desc: "We source materials that age beautifully — solid wood, natural stone, quality textiles. A professional interior doesn't just look stunning on day one; it gets better with time and use.",
    },
    {
      num: "03",
      title: "Light as a Design Element",
      desc: "Lighting transforms rooms. We layer ambient, task, and accent lighting to create mood, drama, and functionality — often turning an ordinary room into something deeply atmospheric.",
    },
  ];

  const categories = [
    {
      name: "Living Room",
      attributes: ["SEATING", "LIGHTING", "FEATURE WALL"],
      text: "The heart of your home. We design spaces that are warm for family, impressive for guests, and beautiful always.",
    },
    {
      name: "Kitchen & Dining",
      attributes: ["MODULAR", "STORAGE", "COUNTERTOPS"],
      text: "Functional layouts, modular cabinetry, beautiful countertops. Where cooking becomes a joy, not a chore.",
    },
    {
      name: "Master Bedroom",
      attributes: ["WARDROBE", "UPHOLSTERY", "AMBIENT LIGHT"],
      text: "A sanctuary for rest. We layer texture, softness, and calm to create a room that restores you every night.",
    },
  ];

  const textureLibrary = [
    tone1,
    tone2,
    tone3,
    tone4,
    tone5,
    tone6,
    tone7,
    tone8,
    tone9,
    tone10,
    tone11,
    tone12,
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-[#1C1C1C] overflow-hidden">
      {/* SECTION 1: HERO DIRECTION */}
      <section className="w-full min-h-[90vh] bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-12 gap-0 pt-12">
        {/* Left Header Title Block */}
        <div className="md:col-span-4 px-8 md:px-16 flex flex-col justify-between py-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-2"
          >
            <div className="overflow-hidden">
              <motion.h1
                variants={textRevealVariant}
                className="text-6xl md:text-7xl font-serif tracking-tight font-light"
              >
                VISUAL <span className="font-sans italic font-normal">&</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={textRevealVariant}
                className="text-6xl md:text-7xl font-serif tracking-tight font-medium"
              >
                DIRECTION
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...premiumSpring, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xs space-y-4 mt-16 md:mt-0"
          >
            <span className="text-xs uppercase tracking-widest font-semibold border-b border-black pb-1">
              Design Approach
            </span>
            <p className="text-xs text-gray-600 leading-relaxed">
              Rooted in simplicity and warmth, this concept blends muted tones
              with soft materials to create a grounded, peaceful environment.
            </p>
          </motion.div>
        </div>

        {/* Center Main Feature Showcase Image */}
        <div className="md:col-span-5 relative md:min-h-auto overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="w-full h-full relative"
          >
            <img
              src={hero1}
              alt="Blue Interior Chair Accent"
              className=" object-cover scale-105"
            />
          </motion.div>
        </div>

        {/* Right Multi-stack Column Layout */}
        <div className="md:col-span-3 flex flex-col justify-between p-8 bg-gray-50/50">
          <div className="space-y-6">
            {/* Top Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={premiumSpring}
              viewport={{ once: true }}
              className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-200"
            >
              <img
                src={hero2}
                alt="Kitchen Space"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* Bottom Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ...premiumSpring, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-200"
            >
              <img
                src={hero3}
                alt="Dining Room Set"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mt-8 md:mt-0 ">
            A balance of structure and softness drives the experience, making
            the environment intuitive yet inviting.
          </p>
        </div>
      </section>

      {/* Sub-Navigation Strip Container */}
      <div className="w-full bg-white py-6 px-4 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto flex justify-between items-center space-x-8 text-xs font-medium tracking-widest text-gray-600 min-w-max">
          {navigationTabs.map((tab, idx) => (
            <motion.span
              whileHover={{ color: "#0047B3", y: -1 }}
              key={idx}
              className="cursor-pointer transition-colors"
            >
              {tab}
            </motion.span>
          ))}
        </div>
      </div>

      {/* SECTION 2: OUR APPROACH INTERACTIVE DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <SectionHeader title="Our Approach" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Section Column Left Side Panel */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">
              Design rooted in how you{" "}
              <span className="italic font-normal font-playfair text-[#0047B3]">
                actually live
              </span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Beautiful spaces don't happen by accident. Every project starts
              with a deep understanding of you — your routines, your aesthetics,
              your aspirations — and ends with an interior that feels
              completely, unmistakably yours.
            </p>

            <blockquote className="border-l-2 border-[#0047B3] pl-4 italic text-sm text-[#0047B3] max-w-sm py-1">
              "A space should be comfortable first, beautiful always."
            </blockquote>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={slowSpring}
              viewport={{ once: true }}
              className="w-full aspect-[16/10] overflow-hidden rounded-sm bg-gray-100"
            >
              <img
                src={Approach}
                alt="Studio Layout Design Processing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Section Column Right Side List Stacks */}
          <div className="lg:col-span-7 flex flex-col border-l pl-10 border-gray-400 justify-center space-y-12">
            {approachItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...premiumSpring, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className="grid grid-cols-12 gap-6 border-b border-gray-400 pb-8 last:border-0"
              >
                <span className="col-span-2 text-2xl font-serif text-gray-700 font-semibold tracking-wider">
                  {item.num}
                </span>
                <div className="col-span-10 space-y-2">
                  <h4 className="text-lg font-medium tracking-tight text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COVERAGE SCHEMA MATRIX */}
      <section className="bg-white w-full py-14">
        <div className="max-w-7xl md:h-[90vh] mx-auto px-6">
          <SectionHeader title="Coverage" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Text Grid Categories Layout Blocks */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex space-x-3">
                {["Residential", "Commercial", "Corporate"].map(
                  (badge, bIdx) => (
                    <span
                      key={bIdx}
                      className={`px-4 py-1 text-[10px] uppercase font-mono tracking-widest rounded-full border ${bIdx === 0 ? "bg-white text-gray-500 border-gray-400" : "border-gray-400 text-gray-500"}`}
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>

              <div className="space-y-12 divide-y divide-gray-200/80">
                {categories.map((cat, cIdx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={premiumSpring}
                    viewport={{ once: true }}
                    key={cIdx}
                    className="pt-8 flex first:pt-0 space-y-4"
                  >
                    <div className="flex flex-col gap-6 justify-between items-baseline">
                      <h3 className="text-xl font-medium tracking-tight">
                        {cat.name}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {cat.attributes.map((attr, aIdx) => (
                          <span
                            key={aIdx}
                            className="text-[8px] bg-white text-gray-600 px-2 py-0.5 rounded border border-gray-400 font-mono tracking-wider whitespace-nowrap"
                          >
                            {attr}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
                      {cat.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side Visual Showcase Image Matrix Overlay */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif">
                  Every room,{" "}
                  <span className="text-[#0047B3] italic font-normal">
                    reimagined
                  </span>
                </h2>
                <p className="text-xs text-gray-500 max-w-md leading-relaxed">
                  Layered textiles, earthy tones, handcrafted artifacts, and for
                  free-spirited, expressive living.
                </p>
              </div>

              <motion.div
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
                className="w-96 overflow-hidden rounded-sm  bg-gray-200 ml-auto"
              >
                <img
                  src={reimagined}
                  alt="Living Room Framework Showcase"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TEXTURE PROFILE LIBRARY MATRIX SWATCHES */}
      <section className="w-full bg-[#E3EFF7] py-14 border-t border-gray-200/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Swatch Sample Blocks Layout */}
          <div className="lg:col-span-7 grid grid-cols-4 gap-3">
            {textureLibrary.map((texture, sIdx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ...premiumSpring, delay: (sIdx % 4) * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, scale: 1.02 }}
                key={sIdx}
                className="aspect-square bg-white shadow-sm rounded-sm overflow-hidden p-1 cursor-pointer transition-shadow hover:shadow-md"
              >
                <div className="w-full h-full rounded-sm relative overflow-hidden">
                  <img
                    src={texture}
                    alt={`Texture ${sIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description Copy Deck Left */}
          <div className="lg:col-span-5 lg:pl-8 space-y-4 text-right lg:text-left flex flex-col items-end lg:items-start">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#0047B3] font-bold">
              Materials Library
            </span>
            <h3 className="text-3xl font-serif leading-tight max-w-sm">
              Texture, tone, and{" "}
              <span className="text-[#0047B3] italic font-normal">
                tactile richness
              </span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              We work with a curated selection of premium materials — sourced
              responsibly, specified thoughtfully, and combined with an expert
              eye for texture and contrast.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
