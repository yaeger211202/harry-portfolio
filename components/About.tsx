"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Projects Built", value: "4+" },
  { label: "Years Coding", value: "3+" },
  { label: "Team Size Led", value: "5" },
  { label: "Cloud Deploys", value: "3+" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  };
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <p className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em] mb-3">
            01 — About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Bio text */}
          <motion.div {...fadeUp(0.1)} className="md:col-span-3 space-y-5">
            <p className="text-white/55 leading-[1.8] text-base">
              I&apos;m a Computer Science student at{" "}
              <span className="text-white font-medium">
                San Francisco State University
              </span>{" "}
              graduating in 2026, with a focus on{" "}
              <span className="text-white font-medium">backend engineering</span>,
              distributed systems, and cloud infrastructure.
            </p>
            <p className="text-white/55 leading-[1.8] text-base">
              I enjoy building systems that scale — from real-time APIs backed by
              Socket.io and geospatial databases with PostGIS, to AI-powered
              applications using multi-agent architectures and LLMs. I care deeply
              about reliability, performance, and clean system design.
            </p>
            <p className="text-white/55 leading-[1.8] text-base">
              Outside of engineering, I lead the ISA Events team at SFSU and serve
              as an Orientation Leader — building community and helping students find
              their footing on campus.
            </p>

            {/* Tech highlights */}
            <div className="pt-2 flex flex-wrap gap-2">
              {["Node.js", "TypeScript", "PostgreSQL", "AWS", "Socket.io", "LLMs"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded border border-white/[0.07] text-white/35 bg-white/[0.02]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.2)}
            className="md:col-span-2 grid grid-cols-2 gap-3"
            ref={ref}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
              >
                <p className="text-3xl font-bold text-white mb-1 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-white/35 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
