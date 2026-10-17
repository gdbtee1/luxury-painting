import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Introduction() {
  const reduced = useReducedMotion();

  return (
    <section
      id="introduction"
      className="overflow-hidden bg-[#f7f4ed] py-24 md:py-36 lg:py-44"
    >
      <div className="container-wide">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 flex items-center gap-4">
            <span className="h-px w-10 bg-[#a58d6a]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#8d795e]">
              The Atelier Philosophy
            </p>
          </div>

          <h2 className="font-display max-w-[1250px] text-[clamp(53px,8.2vw,136px)] leading-[0.94] tracking-[-0.045em]">
            Beautiful spaces
            <br />
            begin with{" "}
            <span className="italic text-[#a58d6a]">
              intention.
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid items-end gap-10 md:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
              alt="Architecturally refined luxury living room"
              className="aspect-[5/4] w-full object-cover"
            />
          </motion.div>

          <div className="pb-2 lg:pb-12">
            <div className="mb-9 h-px w-full bg-[#24231f]/20" />

            <p className="max-w-[440px] text-[15px] leading-[2] text-[#67645e] md:text-[17px]">
              A wall is never simply a wall. It is a canvas
              for light, atmosphere, and the architecture
              surrounding it. We approach every surface
              with the care of an artist and the precision
              of a craftsman.
            </p>

            <Link
              to="/about"
              className="group mt-12 inline-flex items-center gap-8 border-b border-[#24231f] pb-4 text-[11px] font-semibold uppercase tracking-[0.16em]"
            >
              Discover Our Approach
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
