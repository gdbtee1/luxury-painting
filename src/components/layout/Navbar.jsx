import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "The Atelier", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 60);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const light = !scrolled && (pathname === "/" || pathname === "/about") && !open;

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled || !["/", "/about"].includes(pathname) ? "rgba(247,244,237,0.97)" : "rgba(247,244,237,0)",
        }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 z-50 w-full border-b ${
          scrolled || !["/", "/about"].includes(pathname) ? "border-[#24231f]/10" : "border-white/20"
        }`}
      >
        <div className="container-wide flex h-[82px] items-center justify-between lg:h-[100px]">
          <Link
            to="/"
            className={`relative z-[70] flex flex-col leading-none ${light ? "text-white" : "text-[#24231f]"}`}
          >
            <span className="font-display text-[33px] tracking-[-0.045em] sm:text-[39px]">
              Atelier <i className="font-normal">&</i> Co.
            </span>
            <span className="mt-1 text-[8px] font-semibold tracking-[0.22em] uppercase">
              Architectural Painting & Finishes
            </span>
          </Link>

          <nav className={`hidden items-center gap-9 lg:flex ${light ? "text-white" : "text-[#24231f]"}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden items-center gap-3 border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-[#a58d6a] hover:text-white md:flex ${
                light ? "border-white/60 text-white" : "border-[#24231f]/40 text-[#24231f]"
              }`}
            >
              Start a Project <ArrowUpRight size={15} />
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className={`relative z-[70] flex h-11 w-11 items-center justify-center lg:hidden ${
                light ? "text-white" : "text-[#24231f]"
              }`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#f7f4ed] px-7 pt-24"
          >
            <nav className="flex flex-col">
              {[...links, { label: "Inquire", href: "/contact" }].map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[#24231f]/15 py-3"
                >
                  <span className="font-display text-[clamp(43px,11vw,68px)]">
                    {link.label}
                  </span>
                  <span className="text-xs text-[#a58d6a]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-[#727767]">
              The art of the finish.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
