"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  // Glassy background once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view to highlight the nav link
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <nav
        aria-label="Primary"
        className={`container-content mt-3 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "bg-ink-900/70 backdrop-blur-md hairline shadow-lg shadow-black/20"
            : "border border-transparent"
        }`}
      >
        <a
          href="#"
          className="rounded-sm px-1 font-display text-sm font-semibold tracking-tight text-zinc-100"
        >
          {profile.name}
        </a>

        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href} className="hidden sm:block">
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={`relative rounded-full px-3 py-1.5 transition-colors duration-200 hover:text-zinc-100 ${
                  active === l.href ? "text-zinc-100" : "text-zinc-400"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/5"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-1 rounded-full bg-accent/15 px-3.5 py-1.5 text-accent-soft transition-colors duration-200 hover:bg-accent/25"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
