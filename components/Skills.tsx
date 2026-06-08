"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Languages: "◈",
  Backend: "⬡",
  "Cloud & DevOps": "◉",
  AI: "◎",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em] mb-3">
            02 — Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.09,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-white/20 text-sm font-mono">
                  {categoryIcons[category] ?? "○"}
                </span>
                <h3 className="text-[11px] font-mono text-white/30 uppercase tracking-[0.15em]">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.09 + j * 0.04,
                    }}
                    className="text-xs px-2.5 py-1 rounded-lg border border-white/[0.07] text-white/50 bg-white/[0.02] hover:border-white/[0.15] hover:text-white/80 hover:bg-white/[0.04] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
