import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

// Premium Spring Mechanics for High-End Motion Fidelity
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

// Mock Data arrays directly from your Figma layout blueprint definitions
const heroMarqueeImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
];

const valuesList = [
  {
    num: "01",
    badge: "01. PURPOSE",
    title: "Walk Through It Online",
    img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "02",
    badge: "02. VISION",
    title: "Step Inside, Virtually",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "03",
    title: "Pick Your Unit, Live",
    badge: "03. INNOVATION",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
  },
  {
    num: "04",
    badge: "04. INTENT",
    title: "See It Before It's Built",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
  },
];

const reasonsList = [
  {
    metric: "360°",
    title: "Immersion",
    desc: "Virtual tours built with on-site capture for unmatched authenticity.",
    icon: null,
  },
  {
    metric: "3D",
    title: "Web-Ready",
    desc: "No app. No download. Just share a link and let the magic begin.",
    icon: null,
  },
  {
    metric: "Buyer-First",
    title: "Buyer-First",
    desc: "Every visualization is crafted for emotional impact and conversion.",
    icon: (
      <svg
        className="w-12 h-12 text-gray-800"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
];

const teamImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
];

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen font-sans text-[#1C1C1C] overflow-hidden">
      {/* SECTION 1: HERO CONTAINER ACCENT COPIES */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center space-y-6">
        <span className="text-sm uppercase font-mono tracking-widest text-gray-400 font-bold block">
          About Us
        </span>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={premiumSpring}
          className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.15]"
        >
          <span className="font-Playfair text-gray-600">
            We Don't Just Show Properties.{" "}
          </span>
          <br />
          We Make People{" "}
          <span className="text-[#0047B3] font-Playfair font-medium relative inline-flex items-center gap-2">
            <span className="w-14 sm:w-20 h-7 sm:h-10 rounded-full inline-block overflow-hidden relative translate-y-1 bg-gray-100 border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=150&q=80"
                className="w-full h-full object-cover scale-110"
                alt="Inline micro"
              />
            </span>
            Feel
          </span>{" "}
          Them.
        </motion.h1>

        <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed pt-2">
          PropWizard Studio designs immersive, behavior-led virtual experiences
          and asset architectural drawings dedicated to showcase real estate
          realities across the world.
        </p>

        {/* Reusable Masked Call to Action Button */}
        <div className="pt-4 flex justify-center">
          <button className="bg-[#0047B3] text-white pl-6 pr-2 py-2 rounded-full text-sm font-semibold flex items-center gap-4 group transition-all duration-300 hover:bg-[#003a9a]">
            <span>Watch Sample</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg
                className="w-4 h-4 text-[#0047B3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* 5-Column High-End Imagery Grid Array Row Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-16">
          {heroMarqueeImages.map((imgUrl, mIdx) => (
            <motion.div
              key={mIdx}
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1],
                delay: mIdx * 0.1,
              }}
              className={`aspect-[3/4] bg-gray-50 rounded-sm overflow-hidden border border-gray-100 ${mIdx >= 2 ? "hidden sm:block" : ""} ${mIdx >= 3 ? "hidden lg:block" : ""}`}
            >
              <img
                src={imgUrl}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                alt="SaaS Real Estate Portfolio Asset"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <SectionHeader title="Our Story" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-16">
          {/* Left Grid Panel Item Side Block */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={premiumSpring}
              viewport={{ once: true }}
              className="w-full aspect-[4/3] rounded-sm bg-gray-100 overflow-hidden relative shadow-sm border border-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                alt="Modern Interior Space"
              />
            </motion.div>

            <div className="bg-[#0047B3] text-white p-6 rounded-md flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-sm flex-shrink-0" />
              <div className="space-y-1">
                <h4 className="text-base font-semibold">Founded In India</h4>
                <p className="text-xs text-blue-100/80 leading-relaxed">
                  Built for the future of real estate — intuitive, seamless, and
                  intelligent
                </p>
              </div>
            </div>
          </div>

          {/* Right Descriptive Texts Headers Columns */}
          <div className="lg:col-span-7 lg:pl-8 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-serif leading-tight">
              From Frustration with Flat Plans, A{" "}
              <span className="text-[#0047B3] italic">
                Cinematic Revolution
              </span>{" "}
              Was Born.
            </h2>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed max-w-xl">
              <p>
                Born from a frustration with flat floor plans and misleading
                brochures, PropWizard Studio was founded to give every real
                estate project the cinematic presentation it deserves — before a
                single brick is laid.
              </p>
              <p>
                We saw buyers struggle to imagine their homes from
                black-and-white sketches, and developers lose deals over
                miscommunication. So we built the bridge — pixel by pixel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE DESIGN PHILOSOPHY VALUES */}
      <section className="bg-white w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Our Expertise" />

          <p className="text-lg sm:text-2xl text-gray-800 max-w-2xl leading-relaxed mb-16 font-serif">
            Driven by{" "}
            <span className="text-[#0047B3] font-medium">purpose</span>. Guided
            by <span className="text-[#0047B3] font-medium">vision</span>.
            Building the future of real estate with clarity, innovation, and
            intent.
          </p>

          {/* 4-Column Core Cards Matrix Array with Background Image Maps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...cardGridSpring, delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg group will-change-transform relative aspect-[4/5]"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                <div className="p-5 flex-grow flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full" />
                    <span className="text-[10px] font-mono tracking-widest text-white border border-white bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {card.badge.split(". ")[1].toLowerCase()}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h4 className="text-xl font-semibold tracking-tight text-white">
                      {card.title}
                    </h4>
                    {idx === 2 && (
                      <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                        An interactive SVG floor map that allows buyers to check
                        real-time availability, select units effortlessly, and
                        explore detailed layouts with complete clarity.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY BUILDERS & DEVELOPERS CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center space-y-16">
        <div>
          <SectionHeader title="Our Story" />
        </div>
        <div className="space-y-4 max-w-xl mx-auto">
          <h2 className="text-4xl tracking-tight">
            Why Builders & Developers Choose Us
          </h2>
        </div>

        {/* 3-Column Metrics Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {reasonsList.map((reason, rIdx) => (
            <motion.div
              key={rIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...premiumSpring, delay: rIdx * 0.1 }}
              viewport={{ once: true }}
              className={`space-y-4 p-6 md:border-l md:border-gray-200 ${
                rIdx === 0 ? "md:border-l-0" : ""
              } flex flex-col items-center md:items-start`}
            >
              {reason.icon ? (
                <div className="h-16  flex items-center">{reason.icon}</div>
              ) : (
                <span className="text-6xl font-serif text-gray-500 tracking-tight block leading-none h-16">
                  {reason.metric}
                </span>
              )}
              <h4 className="text-xl font-bold tracking-tight text-gray-900 pt-4">
                {reason.title === "Buyer-First" ? "Buyer-First" : reason.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto md:mx-0">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: THE STUDIO TEAM BACKDROP GALLERY PROFILE */}
      <section className="w-full bg-[#E3EFF7] py-24 border-t border-gray-200/30">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#0047B3] font-bold block">
                Human Capital
              </span>
              <h3 className="text-3xl font-serif tracking-tight">
                The PropWizard Studio <br /> Behind the Work
              </h3>
            </div>
            <div className="w-6 h-6 text-[#0047B3] hidden sm:block">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* 3-Column Studio Member Image Blocks replaces blank skeletons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamImages.map((memberUrl, tIdx) => (
              <motion.div
                key={tIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={premiumSpring}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -6 }}
                className="aspect-[4/5] bg-white rounded-sm overflow-hidden p-2 shadow-sm relative group cursor-pointer transition-shadow hover:shadow-xl will-change-transform"
              >
                <div className="w-full h-full bg-gray-50 rounded-sm overflow-hidden relative">
                  <img
                    src={memberUrl}
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-500 filter grayscale group-hover:grayscale-0"
                    alt="Studio Core Specialist"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Dynamic Corner Indicator Text Accent overlays */}
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 space-y-0.5">
                    <h5 className="text-xs font-semibold tracking-wide">
                      Studio Engine Specialist
                    </h5>
                    <p className="text-[9px] font-mono text-blue-200">
                      PropWizard Technical Core Team
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Global scope shadow animation definitions helper token mapping
const cardGridSpring = {
  type: "spring",
  stiffness: 90,
  damping: 24,
  mass: 0.6,
};
