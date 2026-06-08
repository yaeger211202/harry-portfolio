"use client";

import { motion } from "framer-motion";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  };
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <p className="text-[11px] font-mono text-indigo-400/60 uppercase tracking-[0.2em] mb-3">
            01 — About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
            About Me
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="max-w-3xl space-y-5">
          <p className="text-white/65 leading-[1.85] text-base md:text-lg">
            I am a Computer Science student who enjoys learning and growing in the tech field.
            I have really enjoyed everything I have studied so far, and it has made me excited
            about the possibilities this field offers.
          </p>
          <p className="text-white/65 leading-[1.85] text-base md:text-lg">
            I believe that hard work and consistency are the keys to success, which is why I
            always try to give my best in everything I do. I like challenging myself and staying
            focused on improving both personally and academically.
          </p>
          <p className="text-white/65 leading-[1.85] text-base md:text-lg">
            I enjoy meeting new people and building meaningful connections with others who share
            the same drive and mindset.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
