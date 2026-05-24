import { useState } from "react";
import { motion } from "framer-motion";
import Precise from "../assets/Precise.png";
import Blueprinting from "../assets/Blueprinting.png";
import Studio1 from "../assets/Studio1.png";
import Studio2 from "../assets/Studio2.png";
import Studio3 from "../assets/Studio3.png";
import Studio4 from "../assets/Studio4.png";
import Studio5 from "../assets/Studio5.png";
import Studio6 from "../assets/Studio6.png";

// Premium Spring Mechanics
const premiumSpring = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.5,
};
const slowSpring = { type: "spring", stiffness: 60, damping: 20, mass: 0.8 };

// Drawing Type Datasets mapped exactly from your blueprints
const drawingRowLeftToRight = [
  {
    num: "01",
    title: "Floor Plans",
    desc: "Detailed layout drawings showing room arrangements, wall positions, openings, and spatial relationships at every level.",
    img: Studio1,
  },
  {
    num: "02",
    title: "Elevations",
    desc: "Front, rear, and side elevation drawings that document the external appearance of a structure with height references and material notes.",
    img: Studio2,
  },
  {
    num: "03",
    title: "Sections",
    desc: "Sectional views that reveal internal floor-to-floor heights, structural elements, staircase details, and construction layering.",
    img: Studio3,
  },
];

const drawingRowRightToLeft = [
  {
    num: "04",
    title: "Site Plans",
    desc: "Aerial overview drawings showing building footprints, plot boundaries, setbacks, approach roads, and landscape features.",
    img: Studio4,
  },
  {
    num: "05",
    title: "Detail Drawings",
    desc: "Close-up construction details for junctions, joinery, fenestrations, stair treads, and any custom architectural elements at larger scales.",
    img: Studio5,
  },
  {
    num: "06",
    title: "Working Drawings",
    desc: "Complete construction drawing sets including all views, schedules, annotations, and notes ready for municipal approval and site use.",
    img: Studio6,
  },
];

export default function ArchitecturalDrawings() {
  // State elements to toggle ticker pause states independently on cursor hover
  const [isRow1Paused, setIsRow1Paused] = useState(false);
  const [isRow2Paused, setIsRow2Paused] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans text-[#1C1C1C] overflow-hidden">
      {/* SECTION 1: HERO CONTAINER TEXT SPLIT */}
      <section className="max-w-7xl h-screen mx-auto px-6 pt-24 pb-16 bg-[#F9F9F9] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={premiumSpring}
            className="text-5xl md:text-6xl font-serif tracking-tight font-medium leading-[1.1]"
          >
            Every Line, <br />A{" "}
            <span className="text-[#0047B3] italic font-normal">Precise</span>{" "}
            Vision.
          </motion.h1>
          <p className="text-md text-gray-500 max-w-md leading-relaxed">
            From concept schematic drafts to construction-ready working sets —
            we transform architecture into flawless, builder-approved technical
            documentation.
          </p>
        </div>

        <motion.div
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-6 bg-gray-50 rounded-sm overflow-hidden shadow-sm"
        >
          <img
            src={Precise}
            alt="Minimal clean white structural building rendering isometric view"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* SECTION 2: TECHNICAL PRECISION BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 border border-[#0047B3]/30 rounded-sm bg-blue-50/20 aspect-[4/3] flex flex-col justify-center relative">
          <div className="rounded relative flex flex-col justify-between">
            <img src={Blueprinting} alt="" className="w-fit object-cover" />
          </div>
        </div>

        <div className="lg:col-span-6 max-w-md justify-end space-y-6 lg:pl-6">
          <h2 className="text-2xl lg:text-5xl font-playfair text-end tracking-tight">
            <span className="text-[#0047B3]">Technical precision</span> meets
            design intent.
          </h2>
          <p className="text-sm text-gray-800 text-end leading-relaxed">
            An accurate drawing set bridges the gap between vision and
            execution. At our studio, we detail structural elements down to the
            millimeter, preventing on-site errors and streamlining builder
            workflows.
          </p>
          <p className="text-sm text-gray-800 text-end leading-relaxed">
            Whether for municipal submission, contractor procurement, or
            physical building milestones, our drawings maintain flawless asset
            organization standards.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE DOUBLE ROW INFINITE HOVER-PAUSABLE SLIDER */}
      <section className="w-full py-24 bg-gray-50/50 border-y border-gray-100 overflow-hidden space-y-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end">
          <div className="space-y-3">
            <h3 className="text-3xl font-serif">
              Six Types Of Drawings.
              <br />
              <span className="text-[#0047B3]">One</span> Studio.
            </h3>
          </div>
          <span className="text-md font-mono tracking-wider text-gray-400 max-w-lg text-right hidden md:block">
            Hover individual cards to lock loop positions and read documentation
            data structural guidelines.
          </span>
        </div>

        {/* ROW 1: LEFT TO RIGHT AUTOPLAY LOOP */}
        <div
          className="w-full flex relative overflow-hidden py-4"
          onMouseEnter={() => setIsRow1Paused(true)}
          onMouseLeave={() => setIsRow1Paused(false)}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap will-change-transform flex-shrink-0"
            animate={isRow1Paused ? {} : { x: [0, -1400] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
          >
            {/* Render items twice to build absolute seamless loop continuity underlays */}
            {[
              ...drawingRowLeftToRight,
              ...drawingRowLeftToRight,
              ...drawingRowLeftToRight,
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-[480px] h-[50vh] bg-white border border-gray-100 rounded-sm inline-grid grid-cols-12 overflow-hidden shadow-sm flex-shrink-0 group hover:border-gray-300 transition duration-300"
              >
                <div className="col-span-5 border border-[#0047B3] bg-gray-100 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-7 border border-[#0047B3] bg-white p-8 flex flex-col justify-center items-center text-center whitespace-normal">
                  <div className="space-y-4">
                    <span className="text-6xl font-serif text-gray-200 font-light block">
                      {item.num}
                    </span>
                    <h4 className="text-2xl font-serif tracking-tight text-gray-800 group-hover:text-[#0047B3] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: RIGHT TO LEFT AUTOPLAY LOOP */}
        <div
          className="w-full flex relative overflow-hidden py-4"
          onMouseEnter={() => setIsRow2Paused(true)}
          onMouseLeave={() => setIsRow2Paused(false)}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap will-change-transform flex-shrink-0"
            animate={isRow2Paused ? {} : { x: [-1400, 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
          >
            {[
              ...drawingRowRightToLeft,
              ...drawingRowRightToLeft,
              ...drawingRowRightToLeft,
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-[480px] h-[50vh]  bg-white border border-gray-100 rounded-sm inline-grid grid-cols-12 overflow-hidden shadow-sm flex-shrink-0 group hover:border-gray-300 transition duration-300"
              >
                <div className="col-span-7 border border-[#0047B3] bg-white p-8 flex flex-col justify-center items-center text-center whitespace-normal">
                  <div className="space-y-4">
                    <span className="text-6xl font-serif text-gray-200 font-light block">
                      {item.num}
                    </span>
                    <h4 className="text-2xl font-serif tracking-tight text-gray-800 group-hover:text-[#0047B3] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="col-span-5 border border-[#0047B3]  bg-gray-100 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: DRAWING SETS SKELETON GRID PLACEHOLDERS */}
      {/* <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono block">
              • Case Studies
            </span>
            <h3 className="text-3xl font-serif tracking-tight">
              Drawing Sets <br />
              We're{" "}
              <span className="text-[#0047B3] italic font-normal">
                Proud
              </span>{" "}
              Of.
            </h3>
          </div>

          <div className="flex gap-2 text-[10px] font-mono tracking-wider text-gray-500 uppercase">
            <span className="px-3 py-1.5 bg-white border border-black rounded-sm text-black font-bold cursor-pointer">
              Residential
            </span>
            <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-sm cursor-pointer hover:border-gray-400">
              Commercial & Industrial
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            className="md:col-span-7 aspect-[4/3] bg-[#EDEDED] rounded-sm p-8 relative flex flex-col justify-between group cursor-pointer transition-shadow hover:shadow-xl"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-sm group-hover:bg-[#0047B3] group-hover:text-white transition duration-300">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-4 h-4 transform group-hover:rotate-45 transition duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                Residential Model
              </span>
              <h4 className="text-base font-serif font-semibold">
                The Meridian Villa Blueprint Set
              </h4>
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#EDEDED] rounded-sm p-6 flex flex-col justify-between group cursor-pointer transition-shadow hover:shadow-lg"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black shadow-sm group-hover:bg-[#0047B3] group-hover:text-white transition duration-300 self-end">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-3 h-3 transform group-hover:rotate-45 transition duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                  Corporate
                </span>
                <h4 className="text-sm font-serif font-medium">
                  Alpha Corporate Workspace Elevation
                </h4>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#EDEDED] rounded-sm p-6 flex flex-col justify-between group cursor-pointer transition-shadow hover:shadow-lg"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black shadow-sm group-hover:bg-[#0047B3] group-hover:text-white transition duration-300 self-end">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-3 h-3 transform group-hover:rotate-45 transition duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                  Urban Layout
                </span>
                <h4 className="text-sm font-serif font-medium">
                  Indore Commercial Tower Sections
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
