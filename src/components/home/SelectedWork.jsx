import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const works = [
  {
    name: "The Solstice Residence",
    type: "Interior Finishes",
    location: "Private Residence",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "Villa Serene",
    type: "Architectural Painting",
    location: "Contemporary Estate",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function SelectedWork() {
  const reduced = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#f7f4ed] py-24 md:py-36">
      <div className="container-wide">
        <div className="mb-16 flex flex-col justify-between gap-10 md:mb-24 lg:flex-row lg:items-end">
          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a8363]">
              A Curated Collection
            </p>

            <h2 className="font-display text-[clamp(72px,10vw,170px)] leading-[0.75] tracking-[-0.055em]">
              Selected
              <br />
              <span className="italic text-[#a58d6a]">
                spaces.
              </span>
            </h2>
          </div>

          <div className="max-w-[325px]">
            <p className="text-[14px] leading-8 text-[#6c6860]">
              Every space has a character of its own.
              Our work is guided by the architecture,
              atmosphere, and the people who inhabit it.
            </p>
          </div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.9 }}
        >
          <Link to="/work" className="group block">
            <div className="relative h-[65vh] min-h-[420px] max-h-[850px] overflow-hidden bg-[#d4cec2]">
              <img
                src={works[0].image}
                alt="Elegant contemporary interior"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between text-white md:bottom-12 md:left-12 md:right-12">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    {works[0].type}
                  </p>
                  <h3 className="font-display text-[clamp(40px,5vw,85px)] leading-none">
                    {works[0].name}
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/60 transition-all group-hover:bg-white group-hover:text-[#24231f] md:h-16 md:w-16">
                  <ArrowUpRight size={23} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="mt-20 grid items-center gap-12 lg:mt-36 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="order-2 lg:order-1"
          >
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8363]">
              An Architectural Perspective
            </p>

            <h3 className="font-display text-[clamp(56px,6vw,100px)] leading-[0.9] tracking-[-0.04em]">
              Villa
              <br />
              <span className="italic text-[#a58d6a]">
                Serene.
              </span>
            </h3>

            <p className="mt-8 max-w-[360px] text-[14px] leading-8 text-[#6c6860]">
              A study in light, composition, and the quiet
              beauty of considered architectural finishes.
            </p>

            <Link
              to="/work"
              className="group mt-12 inline-flex items-center gap-9 border-b border-[#24231f] pb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
            >
              Explore the Collection
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="order-1 overflow-hidden bg-[#d4cec2] lg:order-2"
          >
            <img
              src={works[1].image}
              alt="Contemporary architectural estate"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover lg:aspect-[5/5]"
            />
          </motion.div>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-[#24231f]/20 pt-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#81796c]">
            Spaces of Distinction
          </p>

          <Link
            to="/work"
            className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.12em]"
          >
            View Our Work <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
