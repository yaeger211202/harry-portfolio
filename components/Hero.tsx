"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
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

      {/* Indigo/purple spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />

      {/* Center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(129,140,248,0.05),transparent)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070b14] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left — text */}
          <div className="flex flex-col items-center lg:items-start gap-6 flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-white/50 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="space-y-0">
              <p className="text-xs font-mono text-white/35 uppercase tracking-[0.2em] mb-3">
                Hello, I&apos;m
              </p>
              <h1 className="text-[clamp(2.4rem,8vw,5.5rem)] font-bold tracking-tight leading-[1] text-white pb-1">
                Harekrishna
              </h1>
              <h1 className="text-[clamp(2.4rem,8vw,5.5rem)] font-bold tracking-tight leading-[1.1] text-gradient pb-2">
                Kakadiya
              </h1>
              <p className="text-lg md:text-xl text-white/40 font-light mt-1">(Harry)</p>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="text-base md:text-lg text-white/65 font-light tracking-wide max-w-md"
            >
              CS @ SFSU &apos;26 | Backend &amp; AI 🚀
            </motion.p>

            {/* Quote */}
            <motion.div variants={item} className="max-w-sm">
              <p className="text-sm text-white/30 italic leading-relaxed">
                &ldquo;Somewhere, something incredible is waiting to be known.&rdquo;
              </p>
              <p className="text-xs text-white/20 mt-1.5 font-mono tracking-widest">
                — CARL SAGAN
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium rounded-xl hover:bg-indigo-400 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                <FileText size={14} />
                Resume
                <ArrowUpRight size={13} className="opacity-80" />
              </a>
              <a
                href="https://github.com/yaeger211202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] text-white/80 text-sm font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all active:scale-95"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/harry-kakadiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] text-white/80 text-sm font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all active:scale-95"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            variants={item}
            className="relative shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/10 blur-xl scale-110" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Harekrishna Kakadiya"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                  priority
                />
              </div>
            </div>
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
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.25em]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-indigo-400/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
