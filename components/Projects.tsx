"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.09] bg-white/[0.03] hover:bg-white/[0.055] hover:border-white/[0.15] transition-all duration-300 card-hover overflow-hidden"
    >
      {/* Accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)`,
        }}
      />

      {/* Cover image */}
      {project.imageUrl && (
        <div className="relative w-full h-44 overflow-hidden border-b border-white/[0.07] bg-white/[0.02]">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          {/* Overlay gradient so it blends into the card */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070b14]/60" />
          {/* Live link badge */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white/70 border border-white/10 hover:text-white transition-colors"
            >
              Live <ArrowUpRight size={10} />
            </a>
          )}
        </div>
      )}

      <div className="flex flex-col flex-1 gap-4 p-6 md:p-7">
        {/* Project index + accent dot */}
        <div className="flex items-center justify-between">
          <div
            className="w-2 h-2 rounded-full opacity-80"
            style={{ backgroundColor: project.accent }}
          />
          <span className="font-mono text-white/[0.08] text-3xl font-bold select-none leading-none group-hover:text-white/[0.13] transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/55 leading-[1.7] flex-1">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-xs text-white/40">
              <span
                className="mt-[5px] w-1 h-1 rounded-full shrink-0 opacity-70"
                style={{ backgroundColor: project.accent }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-md font-mono bg-white/[0.05] text-white/50 border border-white/[0.08]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-5 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors group/link"
              >
                Live Demo
                <ArrowUpRight
                  size={13}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Github size={13} />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-[11px] font-mono text-indigo-400/60 uppercase tracking-[0.2em] mb-3">
            03 — Projects
          </p>
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <span className="hidden sm:block text-xs font-mono text-white/30">
              {projects.length} projects
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
