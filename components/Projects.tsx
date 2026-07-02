"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/Reveal";
import { ArrowUpRightIcon } from "./Icons";

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.6, ease: EASE },
        },
      }}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink-900/60 p-6 hairline transition-all duration-300 hover:-translate-y-1 hover:bg-ink-850 hover:shadow-xl hover:shadow-black/30"
      >
        {/* hover glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="mb-5 flex items-start justify-between">
          <span className="font-display text-sm font-medium text-zinc-500">
            {project.year}
          </span>
          <span className="text-zinc-500 transition-all duration-200 group-hover:text-accent-soft">
            <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-100 transition-colors duration-200 group-hover:text-white">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </a>
    </motion.li>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          description="A handful of things I've designed and built recently. Each one taught me something."
        />

        <Reveal
          as="ul"
          stagger={0.07}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
