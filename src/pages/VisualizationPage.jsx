import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import heroImg from "../assets/3dbgimg.png";
import icon1 from "../assets/icon1-3d.png";
import icon2 from "../assets/icon2-3d.png";
import icon3 from "../assets/icon3-3d.png";
import smallLogo from "../assets/solid_icon.png";
import SectorSection from "../components/Home/Built3d";
import img from "../assets/img-3d.png";
import img2 from "../assets/img02-3d.png";
import img3 from "../assets/img03-3d.png";
import img4 from "../assets/img04-3d.png";
import img5 from "../assets/img05-3d.png";
import img6 from "../assets/img06-3d.png";
import img7 from "../assets/img07-3d.png";
import SectionHeader from "../components/SectionHeader";

// Premium Motion Configurations for Locked Smoothness
const premiumSpring = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.5,
};
const cardGridSpring = {
  type: "spring",
  stiffness: 90,
  damping: 24,
  mass: 0.6,
};

const GridItem = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={ref}
      className="relative aspect-square group border-[0.5px] border-gray-100 overflow-hidden bg-black text-white p-8 flex flex-col justify-end"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full group-hover:opacity-90 transition duration-700 ease-out scale-105 group-hover:scale-100 will-change-transform"
      >
        <img
          src={item.img}
          className="w-full h-full object-cover"
          alt={item.title}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content Layout Slide-Reveal */}
      <div className="relative z-10 space-y-3">
        <span className="text-4xl font-serif text-white/20 group-hover:text-white/40 font-light block leading-none">
          {item.id}
        </span>
        <h3 className="text-xl font-medium tracking-tight transition-colors duration-300">
          {item.title}
        </h3>

        <p className="text-md text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out overflow-hidden">
          {item.desc}
        </p>

        {/* TAGS PILOTS */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-mono tracking-wider border border-white/20 bg-white/5 backdrop-blur-sm px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function VisualizationSection() {
  const items = [
    {
      id: "01",
      title: "Exterior Rendering",
      desc: "Photorealistic visuals of your building exteriors from any angle — day, dusk, night lighting.",
      img: img2,
      tags: ["RESIDENTIAL", "COMMERCIAL", "FACADE"],
    },
    {
      id: "02",
      title: "Interior Rendering",
      desc: "Stunning interior visuals with lighting, furniture, and decor details.",
      img: img3,
      tags: ["LIVING ROOM", "OFFICE", "RETAIL"],
    },
    {
      id: "03",
      title: "Floor Plan Visualization",
      desc: "Convert 2D floor plans into beautiful 3D layouts with furniture, colors, and materials.",
      img: img4,
      tags: ["2D TO 3D", "TOP VIEW", "BLOCKPLAN"],
    },
    {
      id: "04",
      title: "3D Walkthrough Video",
      desc: "Cinematic animated walkthrough videos that showcase your property realistically.",
      img: img5,
      tags: ["ANIMATION", "VIDEO", "INTERIOR"],
    },
    {
      id: "05",
      title: "Aerial / Bird’s Eye View",
      desc: "Creative and detailed aerial views of large-scale projects.",
      img: img6,
      tags: ["MASTER PLAN", "DRONE VIEW", "TOWNSHIP"],
    },
    {
      id: "06",
      title: "Twilight / Mood Renders",
      desc: "Atmospheric lighting renders with dramatic sky and mood effects.",
      img: img7,
      tags: ["SUNSET", "DRAMATIC", "MOOD"],
    },
  ];

  return (
    <>
      <section className="bg-white min-h-screen font-sans text-[#1C1C1C]">
        {/* ================= HERO (Parallax Surface) ================= */}
        <div className="relative w-full h-[100vh] bg-gray-900 overflow-hidden flex items-center px-6 md:px-16">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <img
              src={heroImg}
              className="w-full h-full object-cover"
              alt="Hero Render"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>

          <div className="max-w-4xl relative z-10 text-white space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={premiumSpring}
              className="text-4xl md:text-6xl font-serif tracking-tight font-medium leading-tight"
            >
              Make Every Detail Visible Before <br /> It's Built.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...premiumSpring, delay: 0.12 }}
              className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed"
            >
              Photorealistic 3D visualizations that transform your architectural
              drawings and design plans into stunning, lifelike renders —
              helping clients visualize before it exists.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium tracking-wide text-xs hover:bg-[#0047B3] hover:text-white transition duration-300">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>

        {/* ================= CATEGORY BAR ================= */}
        <div className="w-full bg-white py-6 overflow-hidden select-none">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 text-md  tracking-widest text-[#606060]">
            <span>COMMERCIAL</span>
            <span>RESIDENTIAL</span>
            <span>HOSPITALITY</span>
            <span>INDUSTRIAL</span>
            <span>URBAN PLANNING</span>
            <span>COMMERCIAL</span>
          </div>
        </div>

        {/* ================= WHAT WE DO ================= */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          <SectionHeader title="What We Do" />

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* LEFT */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight text-black">
                Architecture that speaks before it's built
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                We take your 2D drawings, CAD files, or even rough sketches and
                convert them into photorealistic 3D renders, walkthroughs, and
                visual experiences that help you sell, approve, and build with
                confidence.
              </p>

              <motion.div
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
                className="w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-100"
              >
                <img
                  src={img}
                  className="w-full h-fullss duration-300 object-cover"
                  alt="Architectural Render Context"
                />
              </motion.div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12 lg:pl-12">
              <div className="flex flex-col gap-6 items-start">
                <div className="w-12 h-12 rounded border border-gray-700 flex  items-center justify-center text-[#0047B3] flex-shrink-0">
                  <img
                    src={icon1}
                    className="w-10 h-10 object-contain"
                    alt="Icon 1"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-md font-semibold tracking-tight text-gray-900">
                    Photo-Realistic Quality
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Every render is crafted with real-world lighting, material
                    textures, shadow, and environmental context.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 items-start">
                <div className="w-12 h-12 rounded border border-gray-700 flex items-center justify-center text-[#0047B3] flex-shrink-0">
                  <img
                    src={icon2}
                    className="w-10 h-10 object-contain"
                    alt="Icon 2"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-md font-semibold tracking-tight text-gray-900">
                    Fast, Reliable Delivery
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Standard projects delivered within 48–72 hours. Rush
                    delivery configurations available.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 items-start">
                <div className="w-12 h-12 rounded border border-gray-700 flex items-center justify-center text-[#0047B3] flex-shrink-0">
                  <img
                    src={icon3}
                    className="w-10 h-10 object-contain"
                    alt="Icon 3"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-md font-semibold tracking-tight text-gray-900">
                    Scalable for Any Project
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    From single villas to township developments — our workflow
                    adapts to your project size seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================  3D VISUALIZATION GRID MATRIX ================= */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <SectionHeader title="What We Offer" />

          <div className="mb-12 space-y-4">
            <h2 className="font-playfair text-4xl tracking-tight">
              Six types of <br /> 3D visualization
            </h2>
            <p className="text-gray-500 text-md max-w-2xl leading-relaxed">
              From single-frame stills to immersive animated walkthroughs — we
              cover every visual communication need of the modern property
              professional.
            </p>
          </div>

          {/* FLUID DESIGN LAYER GRID MATRIX */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 overflow-hidden">
            {items.map((item) => (
              <GridItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* ================= SECTION 4: SELECTED RENDERS SKELETON PLACEHOLDER MATRIX ================= */}
        {/* <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
          <h3 className="text-center text-3xl font-serif tracking-tight">
            Selected Renders
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(null)
              .map((_, gridIdx) => (
                <motion.div
                  key={gridIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    ...cardGridSpring,
                    delay: (gridIdx % 3) * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -6 }}
                  className="aspect-[4/5] bg-[#EDEDED] rounded-sm relative flex items-center justify-center group cursor-pointer transition-shadow hover:shadow-xl will-change-transform"
                >
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black opacity-80 group-hover:opacity-100 group-hover:bg-[#0047B3] group-hover:text-white transition duration-300 shadow-sm">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>

                  <div className="absolute bottom-5 left-5 opacity-30 text-[8px] uppercase tracking-widest font-mono font-bold">
                    Render Asset Matrix #{gridIdx + 1}
                  </div>
                </motion.div>
              ))}
          </div>
        </section> */}

        {/* Dynamic bottom sector component target alignment */}
        <SectorSection />
      </section>
    </>
  );
}
