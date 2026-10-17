import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import Footer from "../components/layout/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];
  const reduced = useReducedMotion();

  if (!project) {
    return (
      <main className="min-h-screen bg-[#f7f4ed] pt-44 text-center">
        <h1 className="font-display text-7xl">Project not found.</h1>
        <Link to="/work" className="mt-10 inline-block underline">
          Return to Collection
        </Link>
      </main>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="bg-[#f7f4ed]">
      <section className="container-wide pb-16 pt-40 md:pb-24 md:pt-52">
        <Link
          to="/work"
          className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d795e]"
        >
          <ArrowLeft size={17} /> Back to Collection
        </Link>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="mt-16"
        >
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a8363]">
            {project.category} / {project.setting}
          </p>

          <h1 className="font-display max-w-[1300px] text-[clamp(70px,12vw,190px)] leading-[0.78] tracking-[-0.055em]">
            {project.name}
          </h1>
        </motion.div>
      </section>

      <div className="h-[65svh] min-h-[400px] max-h-[950px] overflow-hidden bg-[#d8d0c3]">
        <img
          src={project.images[0]}
          alt={project.name}
          className="h-full w-full object-cover"
        />
      </div>

      <section className="container-wide grid gap-12 py-24 md:py-36 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a58d6a]">
            An Architectural Study
          </p>

          <p className="mt-10 text-[12px] leading-7 text-[#777166]">
            {project.setting}
            <br />
            Concept Collection — {project.year}
          </p>
        </div>

        <div>
          <h2 className="font-display text-[clamp(48px,6vw,92px)] leading-[0.95]">
            {project.subtitle}
          </h2>

          <p className="mt-10 max-w-[570px] text-[15px] leading-[2] text-[#686159]">
            {project.description}
          </p>
        </div>
      </section>

      <section className="container-wide pb-24 md:pb-40">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="overflow-hidden bg-[#d8d0c3]">
            <img
              src={project.images[1]}
              alt={`${project.name} architectural detail`}
              loading="lazy"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-end gap-8">
            <p className="font-display max-w-[450px] text-[clamp(46px,5vw,80px)] leading-[0.95] italic text-[#a58d6a]">
              Thoughtful in every detail.
            </p>

            <div className="h-px w-full bg-[#24231f]/20" />

            <p className="max-w-[420px] text-[13px] leading-8 text-[#70695f]">
              Architecture becomes memorable when color,
              material, and light are considered as one.
            </p>
          </div>
        </div>
      </section>

      <Link
        to={`/work/${nextProject.id}`}
        className="group block bg-[#24231f] px-6 py-24 text-[#f7f4ed] md:py-36"
      >
        <div className="container-wide">
          <p className="mb-10 text-[10px] uppercase tracking-[0.2em] text-[#c6b18f]">
            Discover Another Space
          </p>

          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(55px,9vw,145px)] leading-[0.85] tracking-[-0.05em]">
              {nextProject.name}
            </h2>

            <ArrowUpRight
              size={32}
              className="shrink-0 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </div>
        </div>
      </Link>

      <Footer />
    </main>
  );
}
