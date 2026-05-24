import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import virtualhero from "../assets/virtualhero.png";
import virtualhero1 from "../assets/virtualhero1.png";
import virtualhero2 from "../assets/virtualhero2.png";
import spaces from "../assets/spaces.png";
import sale from "../assets/sale.png";
import tour from "../assets/tour.png";
import web from "../assets/web.png";
import scan from "../assets/scan.jpeg";
import SectionHeader from "../components/SectionHeader";

const WebliteIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 7H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7V5h16v2" />
  </svg>
);

const TourIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <path d="M7 21L12 3" />
    <path d="M17 21L12 3" />
    <path d="M21 12L3 12" />
  </svg>
);

const ScanIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  </svg>
);

// Premium Motion Configurations
const premiumSpring = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.5,
};
const slowSpring = { type: "spring", stiffness: 60, damping: 20, mass: 0.8 };

export default function VirtualSection() {
  // Active state for the tabbed panel interactive feature showcase
  const [activeTab, setActiveTab] = useState(2);

  const featureTabs = [
    {
      id: 0,
      title: "3D Weblite + Sales Tool",
      desc: "Browser-based tours with live unit tracking.",
      icon: WebliteIcon,
    },
    {
      id: 1,
      title: "360° Virtual Tour",
      desc: "Browser-based tours with live unit tracking.",
      icon: TourIcon,
    },
    {
      id: 2,
      title: "Real-Time 3D + Scan",
      desc: "Live scanning & web-based 3D experience.",
      icon: ScanIcon,
      premium: true,
    },
  ];

  const statMetrics = [
    { value: "120+", label: "Interactive Components" },
    { value: "45+", label: "Real Estate Deployments" },
    { value: "24/7", label: "Cloud-Stream Access Availability" },
  ];

  const webliteFeatures = [
    {
      title: "Interactive 3D Browser Tour",
      desc: "Full property walkthrough — desktop or mobile.",
    },
    {
      title: "Live Unit Availability Map",
      desc: "Clickable SVG floor plans with real-time status.",
    },
    {
      title: "Sales-Ready Shareable Link",
      desc: "Share one URL — works on-site or remotely.",
    },
  ];

  const tourFeatures = [
    { title: "360° Photography", active: true },
    { title: "Real Site Capture" },
    { title: "Multi-Room Navigation" },
    { title: "Mobile Ready" },
  ];

  const webFeatures = [
    {
      title: "Full 3D Navigation",
      desc: "Walkthrough-style or fly-through.",
    },
    {
      title: "Modular/Material Swapping",
      desc: "Review quality options and variations.",
    },
    {
      title: "No-App Download",
      desc: "Accessible via a normal web browser.",
    },
    {
      title: "Embeddable Web-Host",
      desc: "Implement seamlessly into any live site.",
    },
  ];

  const scanFeatures = [
    { value: "1-2mm", label: "Point Accuracy" },
    { value: "4k", label: "Texture Resolution" },
    { value: "100%", label: "Web Compatible" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-[#1C1C1C] overflow-hidden">
      {/* SECTION 1: HERO DISPLAY OVERVIEW TITLE */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center space-y-6">
        <span className="text-sm uppercase font-mono tracking-widest text-gray-400 block font-bold">
          Virtual Experience
        </span>

        {/* Text Mask Reveal Animation Style */}
        <div className="overflow-hidden py-1">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={premiumSpring}
            className="text-4xl md:text-6xl font-serif tracking-tight font-medium"
            style={{ willChange: "transform, opacity" }}
          >
            Experience Before <br /> It's Built.
          </motion.h1>
        </div>

        {/* 3-Column Split Image Header Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...slowSpring, delay: 0.1 }}
            className="aspect-square bg-gray-50 rounded-sm overflow-hidden"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src={virtualhero}
              alt="3D Architectural Miniature Wire Model"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out hover:scale-100"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...slowSpring, delay: 0.2 }}
            className="aspect-square bg-gray-50 rounded-sm overflow-hidden"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src={virtualhero1}
              alt="Premium Modern Bright Living Room Area"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out hover:scale-100"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...slowSpring, delay: 0.3 }}
            className="aspect-square bg-gray-50 rounded-sm overflow-hidden"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src={virtualhero2}
              alt="Premium Modern Bright Living Room Area"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out hover:scale-100"
            />
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto pt-12 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...slowSpring, delay: 0.4 }}
            className="text-3xl text-gray-600 font-serif leading-relaxed italic"
            style={{ willChange: "transform, opacity" }}
          >
            PropWizard Studio brings your property to life virtually. Explore,
            feel, and sell spaces before a single brick is laid.
          </motion.p>
        </div>
        <div className="border-t-[0.5px] border-t-[rgba(102,102,102,1)] my-24"></div>
      </section>

      {/* SECTION 2: INTERACTIVE DEEP TAB LINK CONTROLLER PANEL */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-gray-100">
        {/* Left Interactive Selection List */}
        <div className="lg:col-span-4 space-y-4">
          {featureTabs.map((tab, index) => (
            <motion.div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...premiumSpring, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              className={`p-6 cursor-pointer transition-all duration-300 rounded-sm will-change-transform ${
                activeTab === tab.id
                  ? "bg-[#0047B3] text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <tab.icon
                className={`w-8 h-8 mb-4 transition-colors duration-300 ${
                  activeTab === tab.id ? "text-white" : "text-gray-600"
                }`}
              />
              <h4 className="text-lg font-serif font-medium">{tab.title}</h4>
              <p
                className={`text-sm mt-1 transition-colors duration-300 ${
                  activeTab === tab.id ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {tab.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Active State Visual Layout Display */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={premiumSpring}
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden shadow-sm will-change-transform"
          >
            <img
              src={spaces}
              alt="Modern apartment building"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10 p-4 rounded-md bg-black/40 backdrop-blur-sm text-white max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm font-medium">Live Demo</p>
              </div>
              <p className="mt-2 text-xl font-serif">
                Prestige Heights, Indore
              </p>
            </div>
          </motion.div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#000000" }}
              className="bg-[#333] text-white px-8 py-3 rounded-sm text-sm font-semibold hover:bg-black transition-colors will-change-transform"
            >
              Explore Our Work
            </motion.button>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader title="OUR PRODUCTS" />

        {/* Product Row 1: Weblite Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-16">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-4xl font-serif uppercase tracking-wider font-medium">
              3D Weblite + <br />
              Sales Tool
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A browser-based interactive property experience with a built-in
              Sales Tool — no app download, no friction. Buyers explore, click,
              and convert.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={slowSpring}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 flex justify-center will-change-transform"
          >
            <img
              src={sale}
              alt="Tablet showing property data"
              className="w-full object-contain max-h-[500px]"
            />
          </motion.div>

          <div className="lg:col-span-4 space-y-4">
            {webliteFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...premiumSpring, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="bg-gray-50 p-5 rounded-sm will-change-transform"
              >
                <h4 className="font-serif text-base font-medium text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t-[0.5px] border-t-[rgba(102,102,102,1)] my-24"></div>

        {/* Product Row 2: Virtual Tour 360 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-4xl font-serif uppercase tracking-wider font-medium">
              Virtual Tour
              <br />
              <span className="text-[#0047B3] font-sans font-normal">
                — 360°
              </span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Real on-site photography stitched into an immersive 360°
              experience. Ideal for completed properties, show-flats, or
              under-construction sites.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={slowSpring}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 flex justify-center will-change-transform"
          >
            <img
              src={tour}
              alt="Virtual tour interface"
              className="w-full object-contain max-h-[400px]"
            />
          </motion.div>

          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-wrap gap-3">
              {tourFeatures.map((feature, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ ...premiumSpring, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors will-change-transform ${
                    feature.active
                      ? "bg-[#0047B3] text-white border border-[#0047B3]"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {feature.title}
                </motion.button>
              ))}
            </div>

            {/* The Clip Mask Button Implementation Style */}
            <button className="bg-black text-white rounded-full flex items-center justify-between px-4 py-2 text-sm font-medium group self-start shadow-sm transition-colors hover:bg-[#0047B3]">
              <div className="overflow-hidden relative h-5 flex items-center">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={premiumSpring}
                  viewport={{ once: true }}
                  className="block"
                >
                  See Live Demo
                </motion.span>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center ml-4 transform transition-transform duration-500 group-hover:rotate-45">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="border-t-[0.5px] border-t-[rgba(102,102,102,1)] my-24"></div>

        {/* Web-Based Interactive 3D Tour Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-4xl font-serif uppercase tracking-wider font-medium">
              Web-Based
              <br />
              <span className="text-[#0047B3] font-sans font-normal">
                Interactive 3D
              </span>
              <br />
              Tour
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Navigate through a fully rendered 3D model — suitable, routes, and
              explore every detail in the browser.
            </p>
          </div>

          {/* FIX: Bulletproof Overlay Slide Mask */}
          <div className="lg:col-span-4 flex justify-center items-center">
            {/* Clean overflow bounding box wrapper */}
            <div className="w-full h-full max-h-[400px] overflow-hidden rounded-md relative bg-gray-50/50 flex items-center justify-center">
              {/* Dynamic Slide-Up Image */}
              <motion.img
                src={web}
                alt="Web-based 3D tour"
                initial={{ y: "40%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 45,
                  damping: 15,
                  mass: 0.8,
                }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full h-auto max-h-[400px] object-contain block select-none"
                style={{ willChange: "transform, opacity" }}
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            {webFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...premiumSpring, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="bg-gray-100 p-5 rounded-sm will-change-transform"
              >
                <h4 className="font-serif text-base font-medium text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t-[0.5px] border-t-[rgba(102,102,102,1)] my-24"></div>

        {/* Product Row 4: Real-Time Scan Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-4xl font-serif uppercase tracking-wider font-medium">
              Real-Time
              <br />
              <span className="text-[#0047B3] font-sans font-normal">Scan</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              High-precision scanning technology digitally captures physical
              spaces — creating accurate, to-scale 3D models of existing
              buildings and sites.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={premiumSpring}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 flex justify-center will-change-transform"
          >
            <img
              src={scan}
              alt="Real-Time Scan"
              className="w-full object-contain max-h-[400px] rounded-md"
            />
          </motion.div>

          <div className="lg:col-span-4 self-center space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {scanFeatures.slice(0, 2).map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ...premiumSpring, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-100 p-5 rounded-sm will-change-transform"
                >
                  <p className="text-2xl font-serif text-gray-800">
                    {feature.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{feature.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...premiumSpring, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="bg-gray-100 p-5 rounded-sm will-change-transform"
            >
              <p className="text-2xl font-serif text-gray-800">
                {scanFeatures[2].value}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {scanFeatures[2].label}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HORIZONTAL BOTTOM WALKTHROUGH CALL TO ACTION SECTION */}
      <section className="w-full bg-[#E3EFF7] py-24 border-t border-gray-200/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 aspect-[16/9] bg-[#EDEDED] rounded-sm relative flex items-center justify-center group shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-white text-black rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#0047B3] hover:text-white will-change-transform"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 ml-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
            <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-widest font-mono text-gray-400 font-bold">
              Immersive Architectural Walkthrough Clip Frame
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-12 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#0047B3] font-bold">
                Cinematic Engine
              </span>
              <h3 className="text-3xl font-serif tracking-tight uppercase leading-tight">
                Virtual <br />
                Walkthrough
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              Take complete cinematic command. Fly through your designed
              complexes, observe shadow behaviors based on seasonal shifts, and
              display developments beautifully.
            </p>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#1C1C1C" }}
              className="bg-[#0047B3] text-white text-xs font-mono tracking-widest uppercase px-6 py-3 rounded-sm flex items-center gap-3 shadow-md will-change-transform"
            >
              <span>Launch Controller</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
