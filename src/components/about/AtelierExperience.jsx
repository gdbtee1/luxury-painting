import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";

const photos = {
  architecture: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  material: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1300&q=85",
  detail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
};

const materials = [
  {
    name: "Chalk",
    type: "Soft Mineral",
    color: "#D8CDBA",
    description: "An understated foundation that allows architecture and natural light to take precedence.",
  },
  {
    name: "Terracotta",
    type: "Earthen Pigment",
    color: "#BA8C72",
    description: "Warm, grounded character inspired by natural pigments and historic interiors.",
  },
  {
    name: "Olive Stone",
    type: "Muted Botanical",
    color: "#8C927A",
    description: "An organic tone that brings subtle depth and a connection to the landscape.",
  },
  {
    name: "Deep Umber",
    type: "Rich Earth",
    color: "#66584E",
    description: "A dramatic, enveloping color that emphasizes materiality and contrast.",
  },
];

const stages = [
  {
    title: "Observation",
    subtitle: "Understand the space.",
    copy: "We begin with the architecture itself: the proportions, the natural light, the existing materials, and the atmosphere a room should create.",
    image: photos.architecture,
  },
  {
    title: "Preparation",
    subtitle: "The foundation of excellence.",
    copy: "The most considered results begin beneath the finish. Surface evaluation, protection, and preparation inform the quality of what follows.",
    image: photos.detail,
  },
  {
    title: "Application",
    subtitle: "A considered hand.",
    copy: "Every layer is guided by the desired color, depth, and character of the surface. The finish becomes part of the architecture.",
    image: photos.material,
  },
  {
    title: "Refinement",
    subtitle: "Until everything feels right.",
    copy: "The final consideration is the relationship between light, surface, and space. Small details establish the overall impression.",
    image: photos.architecture,
  },
];

function Appear({ children, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Manifesto() {
  return (
    <section id="our-story" className="overflow-hidden bg-[#F7F4ED] py-20 md:py-32">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Appear className="relative z-10">
            <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#967F61]">
              An Atelier State of Mind
            </p>

            <h2 className="font-display text-[clamp(66px,8.5vw,145px)] leading-[0.82] tracking-[-0.055em]">
              We don't
              <br />
              simply
              <br />
              <span className="italic text-[#A58D6A]">paint.</span>
            </h2>

            <div className="mt-10 max-w-[410px] border-l border-[#A58D6A] pl-6">
              <p className="font-display text-[clamp(26px,3vw,43px)] leading-[1.12]">
                We shape how a space feels.
              </p>
              <p className="mt-6 text-[14px] leading-8 text-[#6C665E]">
                At the intersection of pigment, architecture, and
                craftsmanship, even the quietest surface can become
                something extraordinary.
              </p>
            </div>
          </Appear>

          <Appear className="relative pb-12 pl-0 sm:pl-12 lg:pb-20">
            <div className="overflow-hidden bg-[#D5CABE]">
              <img
                src={photos.architecture}
                alt="Natural light illuminating refined interior surfaces"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[50%] border-[10px] border-[#F7F4ED] bg-[#D3C7B5] sm:border-[15px]">
              <img
                src={photos.material}
                alt="Architectural surface and finish study"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <span className="absolute bottom-3 right-0 text-[9px] uppercase tracking-[0.17em] text-[#867C6F]">
              Light / Surface / Form
            </span>
          </Appear>
        </div>
      </div>
    </section>
  );
}

function MaterialLibrary() {
  const [selected, setSelected] = useState(0);
  const active = materials[selected];
  const reduced = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#E9E3D7] py-20 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <Appear>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#917A5E]">
              From the Material Library
            </p>
            <h2 className="font-display text-[clamp(60px,8vw,130px)] leading-[0.83] tracking-[-0.05em]">
              Pigment,
              <br />
              <span className="italic text-[#A58D6A]">with purpose.</span>
            </h2>
          </Appear>

          <p className="max-w-[300px] text-[13px] leading-7 text-[#6B645B]">
            Explore a curated palette inspired by the natural world.
            Select a pigment to discover its character.
          </p>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {materials.map((material, index) => (
            <button
              key={material.name}
              type="button"
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              className="group text-left"
            >
              <div
                style={{ backgroundColor: material.color }}
                className={`relative aspect-[4/5] overflow-hidden transition-all duration-500 ${
                  selected === index ? "outline outline-2 outline-offset-4 outline-[#24231F]" : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 20% 30%,rgba(255,255,255,.45),transparent 55%),repeating-linear-gradient(115deg,transparent 0px,rgba(0,0,0,.035) 3px,transparent 11px)",
                  }}
                />
                <span className="absolute bottom-5 left-5 font-display text-[clamp(28px,3vw,48px)] italic text-[#24231F]/80">
                  {material.name}
                </span>
                <ArrowUpRight className="absolute right-5 top-5 text-[#24231F]/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[#24231F]/20 pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                  {material.type}
                </span>
                <span className="text-[11px] text-[#746B60]">{material.color}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-[#24231F]/20 pt-8 lg:grid-cols-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.19em] text-[#917A5E]">
              Selected Pigment
            </span>
            <AnimatePresence mode="wait">
              <motion.h3
                key={active.name}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? {} : { opacity: 0, y: -12 }}
                className="font-display mt-4 text-[clamp(45px,6vw,90px)] italic leading-none"
              >
                {active.name}.
              </motion.h3>
            </AnimatePresence>
          </div>
          <p className="max-w-[520px] text-[15px] leading-8 text-[#6B645B]" aria-live="polite">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessJournal() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const active = stages[index];

  function move(amount) {
    setIndex((current) => (current + amount + stages.length) % stages.length);
  }

  return (
    <section className="overflow-hidden bg-[#25241F] py-20 text-[#F7F4ED] md:py-32">
      <div className="container-wide">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9B18C]">
              Inside the Process
            </p>
            <h2 className="font-display mt-7 text-[clamp(59px,7vw,120px)] leading-[0.85]">
              The work <span className="italic text-[#C9B18C]">behind</span>
              <br />the beauty.
            </h2>
          </div>
          <p className="max-w-[270px] text-[13px] leading-7 text-[#C8C1B5]">
            A closer look at the thinking and care behind a considered finish.
          </p>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[380px] overflow-hidden bg-[#666054] sm:min-h-[540px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image + index}
                src={active.image}
                alt={`${active.title} architectural concept imagery`}
                initial={reduced ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? {} : { opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <span className="absolute bottom-5 left-5 bg-[#F7F4ED] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#24231F]">
              Studio Journal
            </span>
          </div>

          <div className="flex min-h-[400px] flex-col justify-between bg-[#33312B] p-7 sm:p-12 lg:p-16">
            <div>
              <div className="mb-12 flex flex-wrap gap-3">
                {stages.map((stage, i) => (
                  <button
                    key={stage.title}
                    onClick={() => setIndex(i)}
                    type="button"
                    aria-label={`View ${stage.title}`}
                    aria-pressed={index === i}
                    className={`h-[3px] min-w-8 flex-1 transition-colors ${
                      index === i ? "bg-[#D0B990]" : "bg-white/25"
                    }`}
                  />
                ))}
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9B18C]">
                {active.subtitle}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display mt-7 text-[clamp(50px,5.5vw,85px)] leading-[0.9]">
                    {active.title}.
                  </h3>
                  <p className="mt-8 max-w-[450px] text-[14px] leading-8 text-[#D1CBC1]">
                    {active.copy}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-7">
              <span className="text-[11px] tracking-[0.1em] text-[#C9B18C]">
                THE PROCESS
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous process"
                  className="flex h-12 w-12 items-center justify-center border border-white/30 hover:bg-white hover:text-[#24231F]"
                >
                  <ArrowLeft size={19} />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next process"
                  className="flex h-12 w-12 items-center justify-center border border-white/30 hover:bg-white hover:text-[#24231F]"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalSignature() {
  return (
    <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#B9AE9C] px-5 py-28 text-center text-white md:min-h-[850px]">
      <img
        src={photos.detail}
        alt="Architectural interior with carefully composed surfaces"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#24231F]/55" />

      <Appear className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E6D8C1]">
          The Atelier Signature
        </p>
        <h2 className="font-display mx-auto mt-10 max-w-[1150px] text-[clamp(60px,10vw,160px)] leading-[0.84] tracking-[-0.05em]">
          A lasting
          <br />
          <span className="italic text-[#E6D8C1]">impression.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-[470px] text-[14px] leading-8 text-white/85">
          Thoughtful details. Beautifully considered spaces.
          A finish that feels entirely your own.
        </p>
        <Link
          to="/contact"
          className="mt-12 inline-flex items-center gap-7 border-b border-white/70 pb-4 text-[11px] font-semibold uppercase tracking-[0.17em]"
        >
          Begin a Conversation <ArrowUpRight size={19} />
        </Link>
      </Appear>
    </section>
  );
}

export default function AtelierExperience() {
  return (
    <>
      <Manifesto />
      <MaterialLibrary />
      <ProcessJournal />
      <FinalSignature />
    </>
  );
}
