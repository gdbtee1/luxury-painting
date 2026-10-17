import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import ProjectInquiry from "../components/contact/ProjectInquiry";
import Footer from "../components/layout/Footer";
import "../components/contact/contact.css";

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <main className="inquire-page overflow-hidden">
      <section className="paint-canvas relative flex min-h-[750px] flex-col justify-center pt-40 pb-20 md:min-h-[880px]">
        <div className="paint-stroke -left-[20%] top-[30%]" />
        <div className="paint-stroke -right-[28%] bottom-[-12%] rotate-[-35deg] opacity-25" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-[1300px] text-center"
          >
            <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8d765c]">
              An Invitation to Create
            </p>

            <h1 className="font-display text-[clamp(75px,12vw,185px)] leading-[0.78] tracking-[-0.06em]">
              Your vision,
              <br />
              <span className="italic text-[#a58d6a]">
                our canvas.
              </span>
            </h1>

            <p className="mx-auto mt-12 max-w-[490px] text-[14px] leading-8 text-[#6e675e] md:mt-16">
              Some spaces are simply lived in. Others become
              part of who we are. Tell us what you imagine,
              and begin shaping something extraordinary.
            </p>

            <a
              href="#project-brief"
              className="mt-12 inline-flex items-center gap-6 border-b border-[#24231f] pb-4 text-[11px] font-semibold uppercase tracking-[0.16em]"
            >
              Begin Your Project <ArrowDownRight size={20} />
            </a>
          </motion.div>

          <div className="mt-20 flex items-end justify-between border-t border-[#24231f]/20 pt-6 md:mt-28">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#887c6b]">
              Atelier & Co.
            </p>
            <p className="text-right text-[10px] uppercase tracking-[0.18em] text-[#887c6b]">
              Thoughtfully Considered
              <br />
              Beautifully Realized
            </p>
          </div>
        </div>
      </section>

      <ProjectInquiry />

      <section className="relative overflow-hidden bg-[#727767] px-6 py-28 text-[#f7f4ed] md:py-40">
        <div className="container-wide">
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
            <h2 className="font-display text-[clamp(61px,9vw,145px)] leading-[0.85] tracking-[-0.05em]">
              Every beautiful
              <br />
              space begins
              <br />
              <span className="italic text-[#e1d5bf]">
                somewhere.
              </span>
            </h2>

            <div className="border-t border-white/35 pt-8">
              <p className="max-w-[370px] text-[14px] leading-8 text-white/85">
                An exceptional finish is never just about the
                final color. It begins with listening, understanding,
                and approaching every detail with intention.
              </p>

              <a
                href="#project-brief"
                className="mt-9 inline-flex items-center gap-5 border-b border-white/75 pb-3 text-[11px] font-semibold uppercase tracking-[0.15em]"
              >
                Share Your Vision <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
