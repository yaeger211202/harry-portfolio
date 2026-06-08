"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const typeColors: Record<string, string> = {
  project: "#4ade80",
  leadership: "#60a5fa",
  work: "#f97316",
};

const typeLabels: Record<string, string> = {
  project: "Engineering",
  leadership: "Leadership",
  work: "Work",
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em] mb-3">
            04 — Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/[0.05] to-transparent" />

          <div className="space-y-12 pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.organization}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[41px] top-1.5 w-2.5 h-2.5 rounded-full border border-white/20 bg-black"
                  style={{
                    boxShadow: `0 0 0 4px rgba(0,0,0,1), 0 0 8px ${typeColors[exp.type]}30`,
                  }}
                >
                  <div
                    className="absolute inset-0.5 rounded-full"
                    style={{ backgroundColor: typeColors[exp.type], opacity: 0.6 }}
                  />
                </div>

                <div className="space-y-2">
                  {/* Role + type badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: typeColors[exp.type],
                        borderColor: `${typeColors[exp.type]}30`,
                        backgroundColor: `${typeColors[exp.type]}08`,
                      }}
                    >
                      {typeLabels[exp.type]}
                    </span>
                  </div>

                  {/* Organization + period */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-white/40">{exp.organization}</span>
                    <span className="text-[11px] font-mono text-white/20">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/40 leading-[1.75] max-w-xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
