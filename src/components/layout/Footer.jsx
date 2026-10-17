import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  ["Home", "/"],
  ["Our Work", "/work"],
  ["Expertise", "/expertise"],
  ["The Atelier", "/about"],
  ["Inquire", "/contact"],
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#f7f4ed] pb-8 pt-20 text-[#24231f] md:pt-28">
      <div className="container-wide">
        <div className="grid gap-16 border-b border-[#24231f]/20 pb-20 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8363]">
              Architectural Painting & Finishes
            </p>

            <p className="font-display max-w-[500px] text-[clamp(35px,4vw,60px)] leading-[1.02]">
              A thoughtful approach to
              <span className="italic text-[#a58d6a]">
                {" "}beautiful living.
              </span>
            </p>
          </div>

          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8363]">
              Explore
            </p>

            <div className="flex flex-col gap-4">
              {navigation.map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="w-fit text-[13px] transition-colors hover:text-[#a58d6a]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a8363]">
              Connect
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[13px] hover:text-[#a58d6a]"
            >
              Project Inquiries <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden border-b border-[#24231f]/20 py-12 md:py-20">
          <p className="font-display whitespace-nowrap text-[clamp(75px,16vw,280px)] leading-[0.75] tracking-[-0.075em]">
            Atelier <span className="italic">&</span> Co.
          </p>
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.15em] text-[#827b70] sm:flex-row">
          <span>© {new Date().getFullYear()} Atelier & Co.</span>
          <span>A Study in Exceptional Finishes</span>
          <span>Concept Website by Techuvo</span>
        </div>
      </div>
    </footer>
  );
}
