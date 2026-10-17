import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { projects } from "../data/projects";
import Footer from "../components/layout/Footer";

const categories = [
  "All Spaces",
  "Interiors",
  "Exteriors",
  "Decorative Finishes",
];

export default function Work() {
  const [active, setActive] = useState("All Spaces");
  const reduced = useReducedMotion();

  const visible = projects.filter(
    (project) =>
      active === "All Spaces" || project.category === active
  );

  return (
    <main className="overflow-hidden bg-[#f7f4ed]">
      <section className="relative overflow-hidden bg-[#f7f4ed] pt-32 pb-16 md:pt-44 md:pb-28">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#24231f]/15 pb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967f61]">
              The Atelier Collection
            </p>

            <p className="text-[10px] uppercase tracking-[0.18em] text-[#877c6d]">
              Form / Surface / Light
            </p>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 mx-auto mt-14 max-w-[1000px] text-center md:mt-20"
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#967f61]">
              An Exploration of Beautiful Spaces
            </p>

            <h1 className="font-display text-[clamp(67px,10vw,160px)] leading-[0.84] tracking-[-0.055em]">
              Architecture
              <br />
              <span className="italic text-[#a58d6a]">
                as canvas.
              </span>
            </h1>
          </motion.div>

          <div className="relative mt-14 grid grid-cols-3 items-start gap-3 md:mt-20 md:gap-8">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-14 overflow-hidden bg-[#d6cec0] md:mt-28"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
                alt="Architectural interior detail"
                className="aspect-[3/4] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="overflow-hidden bg-[#d6cec0]"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Luxury interior architecture"
                className="aspect-[3/5] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-24 overflow-hidden bg-[#d6cec0] md:mt-44"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                alt="Contemporary luxury residence"
                className="aspect-[3/4] w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#24231f]/15 pt-6 sm:flex-row sm:items-end md:mt-20">
            <p className="max-w-[350px] text-[13px] leading-7 text-[#716b62]">
              Spaces considered through material, atmosphere,
              and architectural character.
            </p>

            <a
              href="#collection"
              className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
            >
              Explore the Collection <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="collection" className="scroll-mt-24 pb-24 md:pb-32">
        <div className="container-wide">
          <div className="mb-12 flex flex-wrap gap-x-8 gap-y-4 border-b border-[#24231f]/20 pb-7">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`relative text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active === category
                    ? "text-[#24231f]"
                    : "text-[#948c80] hover:text-[#24231f]"
                }`}
              >
                {category}
                {active === category && (
                  <span className="absolute -bottom-[29px] left-0 h-[2px] w-full bg-[#a58d6a]" />
                )}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 items-start gap-x-12 gap-y-24 md:grid-cols-2 lg:gap-x-20 lg:gap-y-32"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={reduced ? false : { opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45 }}
                  className={
                    index % 2 === 1
                      ? "md:mt-32"
                      : ""
                  }
                >
                  <Link
                    to={`/work/${project.id}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden bg-[#d7d0c3]">
                      <img
                        src={project.cover}
                        alt={project.name}
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.06] ${
                          index % 3 === 0
                            ? "aspect-[4/5]"
                            : "aspect-[5/4]"
                        }`}
                      />

                      <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-[#f7f4ed] text-[#24231f] transition-colors duration-300 group-hover:bg-[#a58d6a] group-hover:text-white">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div className="mt-7 flex items-start justify-between gap-5 border-t border-[#24231f]/20 pt-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#9a8363]">
                          {project.category}
                        </p>

                        <h2 className="font-display mt-3 text-[clamp(42px,5vw,76px)] leading-[0.9] tracking-[-0.035em]">
                          {project.name}
                        </h2>

                        <p className="mt-4 text-[12px] text-[#81796d]">
                          {project.setting}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="mt-24 border-t border-[#24231f]/20 pt-6 text-[11px] leading-6 text-[#81796d]">
            Atelier & Co. is a fictional brand concept. Project imagery
            is illustrative and does not represent completed commissions.
          </p>
        </div>
      </section>

      <section className="bg-[#e9e3d7] px-6 py-28 text-center md:py-40">
        <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d795e]">
          Your Space, Reimagined
        </p>

        <h2 className="font-display text-[clamp(55px,9vw,130px)] leading-[0.9] tracking-[-0.05em]">
          The next beautiful
          <br />
          space could be <span className="italic text-[#a58d6a]">yours.</span>
        </h2>

        <Link
          to="/contact"
          className="mt-12 inline-flex items-center gap-6 border-b border-[#24231f] pb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
        >
          Begin a Conversation <ArrowUpRight size={19} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
