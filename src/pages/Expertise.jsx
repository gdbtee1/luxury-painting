import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import FinishExplorer from "../components/expertise/FinishExplorer";
import Footer from "../components/layout/Footer";

const services = [
  {
    title: "Interiors",
    eyebrow: "The Art of Living",
    detail: "Beautifully considered surfaces for spaces that feel unmistakably yours.",
    description:
      "From refined living spaces to private retreats, our approach emphasizes preparation, the character of color, and a finish that feels naturally integrated with the architecture.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Exteriors",
    eyebrow: "The Architecture of Arrival",
    detail: "An exceptional first impression, conceived to endure.",
    description:
      "Exterior painting is a conversation between structure, surroundings, and material. Every choice should strengthen the home's architectural character.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85",
  },
  {
    title: "Decorative",
    eyebrow: "The Beauty of Texture",
    detail: "Expressive finishes with depth and individuality.",
    description:
      "Mineral-inspired surfaces and decorative treatments introduce movement, tactility, and an elevated sense of atmosphere.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85",
  },
];

export default function Expertise() {
  const reduced = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#f7f4ed]">
      <section className="relative min-h-[700px] pt-[125px] md:min-h-[850px] md:pt-[160px]">
        <div className="container-wide relative grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 lg:pb-28"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#917C61]">
              Our Expertise
            </p>
            <h1 className="font-display mt-10 text-[clamp(70px,9vw,150px)] leading-[0.8] tracking-[-0.06em]">
              Beyond
              <br />
              <span className="italic text-[#a58d6a]">color.</span>
            </h1>
            <p className="mt-12 max-w-[330px] text-[14px] leading-8 text-[#70695F]">
              An exploration of material, craftsmanship, and the possibilities of a beautifully finished surface.
            </p>
            <a
              href="#finish-explorer"
              className="mt-10 inline-flex items-center gap-4 border-b border-[#24231f] pb-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
            >
              Discover the Finishes <ArrowDownRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:mb-16"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
              alt="Warm architectural interior with refined surfaces"
              className="aspect-[4/5] max-h-[760px] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute bottom-0 left-0 bg-[#24231f] px-6 py-6 text-[#f7f4ed] sm:px-10 sm:py-8 lg:-left-16">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#c6b18f]">
                Material Philosophy
              </p>
              <p className="font-display mt-2 text-3xl italic sm:text-4xl">
                Texture. Tone. Light.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FinishExplorer />

      <section className="bg-[#f7f4ed] py-24 md:py-36">
        <div className="container-wide">
          <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#24231f]/20 pb-8 md:mb-28 md:flex-row md:items-end">
            <h2 className="font-display text-[clamp(56px,7vw,112px)] leading-[0.9]">
              Considered from
              <br />
              <span className="italic text-[#a58d6a]">every angle.</span>
            </h2>
            <p className="max-w-[265px] text-[13px] leading-7 text-[#726A60]">
              Each discipline carries its own language, purpose, and character.
            </p>
          </div>

          <div className="space-y-24 md:space-y-36">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={reduced ? false : { opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
                className={`grid items-center gap-9 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden bg-[#d8cfc0]">
                  <img
                    src={service.image}
                    alt={`${service.title} architectural finish concept`}
                    loading="lazy"
                    className={`w-full object-cover ${
                      index === 1 ? "aspect-[5/4]" : "aspect-[4/5]"
                    }`}
                  />
                </div>

                <div className={`${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#988267]">
                    {service.eyebrow}
                  </p>
                  <h3 className="font-display mt-6 text-[clamp(65px,8vw,130px)] leading-[0.83] tracking-[-0.05em]">
                    {service.title}
                    <span className="text-[#a58d6a]">.</span>
                  </h3>
                  <p className="font-display mt-9 text-[clamp(27px,3vw,45px)] italic leading-[1.05] text-[#978168]">
                    {service.detail}
                  </p>
                  <p className={`mt-8 max-w-[490px] text-[14px] leading-8 text-[#70695F] ${
                    index % 2 === 1 ? "lg:ml-auto" : ""
                  }`}>
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-5 border-b border-[#24231f] pb-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
                  >
                    Discuss a Project <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#727767] px-5 py-24 text-center text-[#f7f4ed] md:py-36">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
          A More Personal Approach
        </p>
        <h2 className="font-display mx-auto mt-9 max-w-[1100px] text-[clamp(55px,9vw,145px)] leading-[0.85] tracking-[-0.05em]">
          The right finish
          <br />
          changes <span className="italic">everything.</span>
        </h2>
        <Link
          to="/contact"
          className="mt-14 inline-flex items-center gap-5 border-b border-white/70 pb-4 text-[11px] font-semibold uppercase tracking-[0.16em]"
        >
          Start a Conversation <ArrowUpRight size={19} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
