"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { profile } from "@/lib/content";
import { ArrowDownIcon, ArrowUpRightIcon } from "./Icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: EASE },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] items-center overflow-hidden"
    >
      {/* Soft glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px] animate-glow-pulse"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-content"
      >
        {profile.availability && (
          <motion.p
            variants={item}
            className="mb-5 flex items-center gap-2 text-sm font-medium text-zinc-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.p>
        )}

        <motion.h1
          variants={item}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 font-display text-2xl font-medium text-accent-soft sm:text-3xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-accent-soft hover:shadow-[0_0_30px_-6px] hover:shadow-accent/60"
          >
            View my work
            <ArrowDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-zinc-200 hairline transition-colors duration-200 hover:bg-white/5"
          >
            Get in touch
            <ArrowUpRightIcon className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
