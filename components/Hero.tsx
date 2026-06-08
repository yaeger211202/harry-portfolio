"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.21, 0.47, 0.32, 0.98], duration: 0.65 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid" />

      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.04),transparent)]" />

      {/* Subtle center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(255,255,255,0.015),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Status badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-white/35 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item} className="space-y-1">
            <p className="text-xs font-mono text-white/25 uppercase tracking-[0.2em] mb-4">
              Hello, I&apos;m
            </p>
            <h1 className="text-[clamp(3.5rem,12vw,7.5rem)] font-bold tracking-tight leading-[0.9] text-white">
              Harry
            </h1>
            <h1 className="text-[clamp(3.5rem,12vw,7.5rem)] font-bold tracking-tight leading-[0.9] text-gradient">
              Kakadiya
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-white/40 font-light tracking-wide max-w-md"
          >
            CS @ SFSU&nbsp;&apos;26&nbsp;&nbsp;·&nbsp;&nbsp;Backend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AI Developer
          </motion.p>

          {/* Quote */}
          <motion.div variants={item} className="max-w-sm mx-auto">
            <p className="text-sm text-white/25 italic leading-relaxed">
              &ldquo;Somewhere, something incredible is waiting to be known.&rdquo;
            </p>
            <p className="text-xs text-white/15 mt-1.5 font-mono tracking-widest">
              — CARL SAGAN
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-xl hover:bg-white/90 transition-all active:scale-95"
            >
              <FileText size={14} />
              Resume
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
            <a
              href="https://github.com/yaeger211202"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] text-white/70 text-sm font-medium rounded-xl border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/harry-kakadiya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] text-white/70 text-sm font-medium rounded-xl border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
            >
              <LinkedinIcon size={14} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-white/15 uppercase tracking-[0.25em]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/15 to-transparent"
        />
      </motion.div>
    </section>
  );
}
