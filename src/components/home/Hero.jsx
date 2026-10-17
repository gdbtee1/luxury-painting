import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[720px] h-[100svh] max-h-[1200px] items-end overflow-hidden bg-[#555148] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${import.meta.env.BASE_URL}images/hero-poster.jpg`}
        aria-hidden="true"
      >
        <source src={`${import.meta.env.BASE_URL}videos/hero.mp4`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

      <div className="container-wide relative z-10 flex w-full flex-col pb-8 pt-36 sm:pb-12 lg:pb-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-5 flex items-center gap-4"
        >
          <span className="h-px w-9 bg-[#d1b992]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-[11px]">
            A Higher Standard of Finish
          </p>
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.12 }}
          className="font-display max-w-[1100px] text-[clamp(70px,11vw,175px)] leading-[0.78] tracking-[-0.055em]"
        >
          The art of
          <br />
          <span className="italic font-normal text-[#e7ddca]">
            living beautifully.
          </span>
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 flex max-w-[600px] flex-col gap-8 sm:mt-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-[360px] text-[13px] leading-7 text-white/85 sm:text-[14px]">
            Transformative painting and architectural finishes
            for spaces that deserve nothing ordinary.
          </p>

          <Link
            to="/work"
            className="group flex w-fit items-center gap-5 border-b border-white/70 pb-3 text-[10px] font-semibold uppercase tracking-[0.18em]"
          >
            Explore Our Work
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        <div className="mt-12 flex items-end justify-between border-t border-white/35 pt-5 sm:mt-20">
          <span className="text-[10px] uppercase tracking-[0.17em] text-white/75">
            Architectural Painting & Finishes
          </span>

          <a
            href="#introduction"
            className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.17em]"
          >
            Scroll to Discover
            <ArrowDownRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
