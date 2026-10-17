import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Copy,
  Mail,
} from "lucide-react";

import "./contact.css";

const types = [
  "Interior Painting",
  "Estate Exterior",
  "Decorative Finishes",
  "Complete Transformation",
];

const pigments = [
  { name: "Chalk", color: "#D9D0BF" },
  { name: "Terracotta", color: "#BA8C72" },
  { name: "Olive Stone", color: "#8C927A" },
  { name: "Deep Umber", color: "#66584E" },
];

const initial = {
  name: "",
  email: "",
  location: "",
  type: "Interior Painting",
  pigment: "Chalk",
  timeline: "",
  message: "",
};

export default function ProjectInquiry() {
  const [form, setForm] = useState(initial);
  const [preview, setPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  const summary = [
    "ATELIER & CO. — PROJECT INQUIRY",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Location: ${form.location || "Not specified"}`,
    `Project: ${form.type}`,
    `Color direction: ${form.pigment}`,
    `Timeline: ${form.timeline || "Not specified"}`,
    "",
    "PROJECT VISION",
    form.message || "To be discussed",
  ].join("\n");

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
    } catch {
      setCopied(false);
      window.prompt("Copy your project brief:", summary);
    }
  }

  function openEmail() {
    const subject = encodeURIComponent(
      `Atelier & Co. Project Inquiry — ${form.name}`
    );
    const body = encodeURIComponent(summary);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setCopied(false);
    setPreview(true);
  }

  return (
    <section id="project-brief" className="bg-[#f7f4ed] py-20 md:py-32">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#967f61]">
              The Private Consultation
            </p>

            <h2 className="font-display mt-8 text-[clamp(57px,6vw,105px)] leading-[0.87] tracking-[-0.05em]">
              Tell us
              <br />
              what you
              <br />
              <span className="italic text-[#a58d6a]">
                imagine.
              </span>
            </h2>

            <p className="mt-9 max-w-[340px] text-[14px] leading-8 text-[#756e64]">
              Every remarkable space begins with an idea.
              Share yours through a considered project brief.
            </p>

            <div className="mt-12 hidden lg:block">
              <div className="h-px w-full bg-[#24231f]/20" />
              <p className="mt-5 font-display text-[32px] italic text-[#9c876b]">
                A personal approach to every detail.
              </p>
            </div>
          </div>

          <div className="border-t border-[#24231f]/25 pt-8">
            <AnimatePresence mode="wait">
              {!preview ? (
                <motion.form
                  key="form"
                  initial={reduced ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -15 }}
                  onSubmit={handleSubmit}
                >
                  <p className="mb-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967f61]">
                    Your Details
                  </p>

                  <div className="grid gap-x-9 gap-y-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[11px] font-semibold">Your Name *</span>
                      <input
                        className="atelier-field"
                        placeholder="How should we address you?"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                    </label>

                    <label className="block">
                      <span className="text-[11px] font-semibold">Email Address *</span>
                      <input
                        className="atelier-field"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="mt-9 block">
                    <span className="text-[11px] font-semibold">
                      Project Location
                    </span>
                    <input
                      className="atelier-field"
                      placeholder="City or general area"
                      autoComplete="address-level2"
                      value={form.location}
                      onChange={(e) => update("location", e.target.value)}
                    />
                  </label>

                  <div className="mt-16">
                    <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967f61]">
                      The Nature of Your Project
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {types.map((type) => (
                        <button
                          key={type}
                          type="button"
                          aria-pressed={form.type === type}
                          onClick={() => update("type", type)}
                          className="atelier-choice flex items-center justify-between gap-4 text-[12px] font-semibold"
                        >
                          {type}
                          {form.type === type ? (
                            <Check size={16} />
                          ) : (
                            <ArrowUpRight size={16} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <fieldset className="mt-16">
                    <legend className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967f61]">
                      A Color Direction
                    </legend>

                    <div className="grid grid-cols-4 gap-3 sm:gap-5">
                      {pigments.map((pigment) => (
                        <button
                          key={pigment.name}
                          type="button"
                          aria-label={`Choose ${pigment.name}`}
                          aria-pressed={form.pigment === pigment.name}
                          onClick={() => update("pigment", pigment.name)}
                          className="pigment-option text-left"
                        >
                          <span
                            style={{ background: pigment.color }}
                            className={`relative block aspect-[3/4] w-full max-h-[165px] ${
                              form.pigment === pigment.name
                                ? "outline outline-2 outline-offset-4 outline-[#24231f]"
                                : ""
                            }`}
                          >
                            {form.pigment === pigment.name && (
                              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-white/80">
                                <Check size={16} />
                              </span>
                            )}
                          </span>
                          <span className="mt-4 block text-[11px] font-semibold">
                            {pigment.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-16">
                    <label className="block">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967f61]">
                        Preferred Timeline
                      </span>
                      <select
                        className="atelier-field mt-3"
                        value={form.timeline}
                        onChange={(e) => update("timeline", e.target.value)}
                      >
                        <option value="">Select a timeframe</option>
                        <option value="As soon as possible">As soon as possible</option>
                        <option value="Within 1–3 months">Within 1–3 months</option>
                        <option value="Within 3–6 months">Within 3–6 months</option>
                        <option value="Still exploring">Still exploring</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-12">
                    <label className="block">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967f61]">
                        Your Vision
                      </span>
                      <textarea
                        className="atelier-field mt-5 min-h-[150px] resize-y py-4"
                        placeholder="Tell us about the space, its character, and what you envision..."
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="mt-14 flex flex-col justify-between gap-6 border-t border-[#24231f]/20 pt-8 sm:flex-row sm:items-center">
                    <p className="max-w-[290px] text-[11px] leading-6 text-[#777064]">
                      Preview your project brief before preparing an email.
                      No information is submitted to a server.
                    </p>

                    <button type="submit" className="inquire-submit text-[11px] font-semibold uppercase tracking-[0.15em]">
                      Review Your Vision
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="preview"
                  initial={reduced ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0 }}
                  className="bg-[#e9e3d7] p-6 sm:p-12"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#967f61]">
                    Your Project Brief
                  </p>

                  <h3 className="font-display mt-7 text-[clamp(46px,5vw,78px)] leading-[0.92]">
                    A vision worth
                    <br />
                    <span className="italic text-[#a58d6a]">realizing.</span>
                  </h3>

                  <div className="mt-12 space-y-5 border-t border-[#24231f]/20 pt-8 text-[13px]">
                    {[
                      ["Name", form.name],
                      ["Email", form.email],
                      ["Location", form.location || "Not specified"],
                      ["Project", form.type],
                      ["Pigment", form.pigment],
                      ["Timeline", form.timeline || "Not specified"],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[105px_1fr] gap-5">
                        <span className="text-[#8c7a64]">{label}</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 border-t border-[#24231f]/20 pt-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8c7a64]">
                      Project Vision
                    </p>
                    <p className="mt-4 whitespace-pre-wrap break-words text-[13px] leading-7">
                      {form.message || "To be discussed"}
                    </p>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={openEmail}
                      className="inquire-submit text-[10px] font-semibold uppercase tracking-[0.12em]"
                    >
                      Open Email Draft <Mail size={19} />
                    </button>

                    <button
                      type="button"
                      onClick={copyBrief}
                      className="flex min-h-14 items-center gap-3 border-b border-[#24231f] text-[10px] font-semibold uppercase tracking-[0.12em]"
                    >
                      {copied ? "Brief Copied" : "Copy Brief"}
                      {copied ? <Check size={17} /> : <Copy size={17} />}
                    </button>
                  </div>

                  <p className="mt-6 text-[11px] leading-6 text-[#756b5e]">
                    This concept demo opens an email draft without a recipient.
                    No inquiry is sent automatically.
                  </p>

                  <button
                    type="button"
                    onClick={() => setPreview(false)}
                    className="mt-8 inline-flex items-center gap-3 text-[11px] underline underline-offset-4"
                  >
                    <ArrowLeft size={16} /> Edit Your Details
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
