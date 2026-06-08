"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const links = [
  {
    label: "h.kakadiya@sfsu.edu",
    href: "mailto:h.kakadiya@sfsu.edu",
    icon: Mail,
    primary: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/yaeger211202",
    icon: GithubIcon,
    primary: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/harry-kakadiya",
    icon: LinkedinIcon,
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em] mb-3">
            05 — Contact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Heading + text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Let&apos;s build<br />
              <span className="text-gradient">something together.</span>
            </h2>
            <p className="text-white/45 text-base leading-[1.75] max-w-md">
              Open to backend engineering roles, AI/ML projects, and internship
              opportunities for Summer and Fall 2026. Always happy to connect.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col gap-3"
          >
            {links.map(({ label, href, icon: Icon, primary }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className={`group inline-flex items-center gap-3 px-6 py-4 rounded-xl transition-all text-sm font-medium ${
                  primary
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/[0.03] text-white/60 border border-white/[0.07] hover:bg-white/[0.07] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                <span className="flex-1">{label}</span>
                <ArrowUpRight
                  size={14}
                  className={`shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${
                    primary ? "text-black/40" : "text-white/40"
                  }`}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
