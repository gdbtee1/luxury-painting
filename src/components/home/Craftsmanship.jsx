import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Craftsmanship() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#24231f] py-24 text-[#f7f4ed] md:py-36">
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="overflow-hidden bg-[#575247]">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
                alt="Carefully detailed luxury interior"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-2 bg-[#a58d6a] px-7 py-8 text-[#24231f] sm:right-[-25px] sm:px-10 sm:py-11">
              <span className="font-display text-[36px] italic sm:text-[47px]">
                Made to endure.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="pt-6 lg:pt-0"
          >
            <p className="mb-9 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c3ab85]">
              The Pursuit of Perfection
            </p>

            <h2 className="font-display text-[clamp(64px,8vw,135px)] leading-[0.85] tracking-[-0.045em]">
              Beauty is
              <br />
              in the
              <br />
              <span className="italic text-[#c3ab85]">
                details.
              </span>
            </h2>

            <div className="mt-12 max-w-[450px] border-t border-white/20 pt-8">
              <p className="text-[15px] leading-[2] text-[#cdc8bf]">
                True craftsmanship is often found in what
                you don't immediately notice. The preparation.
                The precision. The patience to refine every
                detail until a space feels complete.
              </p>
            </div>

            <Link
              to="/about"
              className="group mt-12 inline-flex items-center gap-8 border-b border-[#c3ab85] pb-4 text-[11px] font-semibold uppercase tracking-[0.16em]"
            >
              Inside the Atelier
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
