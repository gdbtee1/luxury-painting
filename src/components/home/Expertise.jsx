import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Interior Painting",
    subtitle: "The spaces within",
    description:
      "Thoughtfully executed interiors, elevated through rich color, considered texture, and flawless application.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Exterior Finishes",
    subtitle: "A lasting impression",
    description:
      "Distinctive finishes designed to complement the architecture, character, and surroundings of your home.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Decorative Finishes",
    subtitle: "An artistic expression",
    description:
      "From subtle mineral textures to statement surfaces, we create finishes with depth, individuality, and soul.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85",
  },
];

export default function Expertise() {
  const reduced = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#e9e3d7] py-24 md:py-36">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8d795e]">
              What We Do
            </p>

            <h2 className="font-display text-[clamp(64px,8vw,130px)] leading-[0.85] tracking-[-0.045em]">
              The art of
              <br />
              <span className="italic text-[#93816b]">
                transformation.
              </span>
            </h2>
          </div>

          <p className="max-w-[280px] text-[13px] leading-7 text-[#686159]">
            An elevated approach to every surface,
            from the quietest interior to the grandest estate.
          </p>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-2 lg:mt-28 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={reduced ? false : { opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85 }}
              className={`group ${
                index === 1 ? "md:mt-32" : ""
              } ${index === 2 ? "md:col-span-2 md:mx-auto md:w-[65%] lg:mt-[-60px]" : ""}`}
            >
              <Link to="/expertise" className="block">
                <div className="relative overflow-hidden bg-[#cfc5b5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.055] ${
                      index === 2 ? "aspect-[5/3]" : "aspect-[4/5]"
                    }`}
                  />

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-[#f7f4ed] text-[#24231f] transition-colors group-hover:bg-[#a58d6a] group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="mt-7 flex items-start justify-between gap-5 border-t border-[#24231f]/20 pt-5">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.17em] text-[#8d795e]">
                      {service.subtitle}
                    </p>

                    <h3 className="font-display text-[clamp(38px,4vw,62px)] leading-none">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[440px] text-[13px] leading-7 text-[#686159]">
                      {service.description}
                    </p>
                  </div>

                  <ArrowUpRight size={19} className="shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
