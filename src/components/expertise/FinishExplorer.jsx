import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const finishes = [
  {
    id: "limewash",
    name: "Limewash",
    description: "Soft movement. Organic depth. A quietly expressive surface.",
    texture: "radial-gradient(ellipse at 25% 30%, rgba(255,255,255,.35), transparent 48%), repeating-linear-gradient(115deg, transparent 0px, rgba(75,65,50,.045) 2px, transparent 6px, rgba(255,255,255,.08) 13px)",
    label: "Mineral / Clouded",
  },
  {
    id: "venetian",
    name: "Venetian Plaster",
    description: "Subtle luminosity and layered depth, with a polished architectural character.",
    texture: "radial-gradient(ellipse at 80% 15%, rgba(255,255,255,.45), transparent 55%), linear-gradient(140deg, rgba(255,255,255,.2), transparent 40%, rgba(50,40,30,.16) 80%, rgba(255,255,255,.24))",
    label: "Polished / Layered",
  },
  {
    id: "matte",
    name: "Heritage Matte",
    description: "An understated, velvety surface designed for timeless interiors.",
    texture: "linear-gradient(130deg, rgba(255,255,255,.11), transparent 60%, rgba(0,0,0,.045))",
    label: "Soft / Refined",
  },
];

const colors = [
  { name: "Chalk", hex: "#D9D0BF", ink: "#393630" },
  { name: "Clay", hex: "#B69A83", ink: "#342920" },
  { name: "Olive", hex: "#878D76", ink: "#242A21" },
  { name: "Umber", hex: "#716359", ink: "#FAF3E8" },
];

export default function FinishExplorer() {
  const [finishId, setFinishId] = useState("limewash");
  const [colorName, setColorName] = useState("Chalk");
  const reduced = useReducedMotion();

  const finish = finishes.find((item) => item.id === finishId);
  const color = colors.find((item) => item.name === colorName);

  return (
    <section id="finish-explorer" className="bg-[#e9e3d7] py-20 md:py-32">
      <div className="container-wide">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#24231f]/20 pb-7 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8D795E]">
              The Finish Atelier
            </p>
            <h2 className="font-display mt-5 text-[clamp(53px,6vw,105px)] leading-[0.88] tracking-[-0.045em]">
              A study in <span className="italic text-[#988268]">surface.</span>
            </h2>
          </div>
          <p className="max-w-[270px] text-[12px] leading-7 text-[#70695F]">
            Explore how finish, pigment, and light shape the atmosphere of a space.
          </p>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden p-6 sm:min-h-[560px] sm:p-10 lg:min-h-[680px]"
            style={{ backgroundColor: color.hex }}
          >
            <motion.div
              key={`${finish.id}-${color.name}`}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55 }}
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: finish.texture }}
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg,transparent 45%,rgba(0,0,0,.18) 100%)",
              }}
              aria-hidden="true"
            />

            <div className="pointer-events-none absolute -right-[12%] top-[-25%] h-[100%] w-[65%] rotate-[18deg] rounded-[50%] bg-white/15 blur-[60px]" />

            <div className="relative z-10 flex justify-between gap-4" style={{ color: color.ink }}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Material Study
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em]">
                {finish.label}
              </span>
            </div>

            <div className="relative z-10" style={{ color: color.ink }}>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em]">
                {color.name} / {finish.name}
              </p>
              <p className="font-display max-w-[450px] text-[clamp(65px,8vw,135px)] leading-[0.8] tracking-[-0.05em]">
                Feel the
                <br />
                <span className="italic">finish.</span>
              </p>
              <p className="mt-8 max-w-[300px] text-[12px] leading-6 opacity-80">
                An artistic impression of surface and tone. Actual samples will vary.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#f7f4ed] p-6 sm:p-10 lg:p-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#917C61]">
              Curate Your Finish
            </p>

            <h3 className="font-display mt-5 text-[clamp(42px,4.5vw,74px)] leading-[0.92]">
              Find your
              <br />
              <span className="italic text-[#a58d6a]">expression.</span>
            </h3>

            <fieldset className="mt-12">
              <legend className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#726B61]">
                Select a Surface
              </legend>
              <div className="flex flex-col border-t border-[#24231f]/20">
                {finishes.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setFinishId(item.id)}
                    aria-pressed={finishId === item.id}
                    className={`flex min-h-14 items-center justify-between gap-3 border-b border-[#24231f]/15 py-4 text-left text-[14px] transition-colors ${
                      finishId === item.id
                        ? "font-semibold text-[#24231f]"
                        : "text-[#81796D] hover:text-[#24231f]"
                    }`}
                  >
                    {item.name}
                    <span className={`h-2 w-2 rounded-full ${
                      finishId === item.id ? "bg-[#a58d6a]" : "border border-[#a58d6a]"
                    }`} />
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-10">
              <legend className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#726B61]">
                Select a Pigment
              </legend>

              <div className="flex flex-wrap gap-4">
                {colors.map((item) => (
                  <button
                    type="button"
                    key={item.name}
                    aria-label={`Select ${item.name}`}
                    aria-pressed={colorName === item.name}
                    title={item.name}
                    onClick={() => setColorName(item.name)}
                    className={`h-12 w-12 border-4 transition-transform hover:scale-105 ${
                      colorName === item.name
                        ? "border-[#24231f]"
                        : "border-[#f7f4ed] ring-1 ring-[#24231f]/20"
                    }`}
                    style={{ backgroundColor: item.hex }}
                  />
                ))}
              </div>
              <p className="mt-4 text-[12px] text-[#716A60]">{color.name}</p>
            </fieldset>

            <div className="mt-10 border-t border-[#24231f]/20 pt-6 lg:mt-auto">
              <p className="min-h-[70px] text-[13px] leading-7 text-[#6C655B]" aria-live="polite">
                {finish.description}
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-5 border-b border-[#24231f] pb-3 text-[10px] font-semibold uppercase tracking-[0.16em]"
              >
                Discuss Your Vision <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
