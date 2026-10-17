import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function ClosingStatement() {
  const reduced = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#e9e3d7] py-28 md:py-44">
      <div className="container-wide">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8d795e]">
            Your Vision, Beautifully Realized
          </p>

          <h2 className="font-display max-w-[1350px] text-[clamp(62px,10vw,175px)] leading-[0.82] tracking-[-0.055em]">
            Let's create
            <br />
            something
            <br />
            <span className="italic text-[#a58d6a]">
              extraordinary.
            </span>
          </h2>

          <Link
            to="/contact"
            className="group mt-16 inline-flex items-center gap-14 border-b border-[#24231f] pb-5 text-[12px] font-semibold uppercase tracking-[0.16em] md:mt-24"
          >
            Begin Your Project
            <ArrowUpRight
              size={23}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
