import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Footer from "../components/layout/Footer";
import AtelierExperience from "../components/about/AtelierExperience";

const imagery = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
  story: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  detail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85",
};

function Reveal({ children, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const reduced = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#f7f4ed]">
      {/* Editorial photographic opening */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#24231f] text-white md:min-h-[900px]">
        <img
          src={imagery.hero}
          alt="Architecturally refined interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24231f]/80 via-[#24231f]/20 to-black/30" />

        <div className="container-wide relative z-10 flex min-h-[760px] flex-col justify-end pb-12 pt-40 md:min-h-[900px] md:pb-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e5d2b4]">
              Behind the Atelier
            </p>

            <h1 className="font-display max-w-[1300px] text-[clamp(75px,12vw,190px)] leading-[0.78] tracking-[-0.055em]">
              A devotion
              <br />
              to <span className="italic text-[#ead8ba]">detail.</span>
            </h1>
          </motion.div>

          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/40 pt-6 sm:flex-row sm:items-end">
            <p className="max-w-[340px] text-[13px] leading-7 text-white/85">
              An approach to painting shaped by art,
              architecture, and the belief that every
              surface deserves intention.
            </p>

            <a
              href="#our-story"
              className="inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.17em]"
            >
              Discover Our Philosophy <ArrowDown size={19} />
            </a>
          </div>
        </div>
      </section>

      <AtelierExperience />

      <Footer />
    </main>
  );
}
