"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const; // gentle, no overshoot

/**
 * Reveal — fades + slides its children in when scrolled into view.
 * Wrap a `Reveal` around a group and use `RevealItem` for each child to get a
 * subtle stagger. Respects prefers-reduced-motion (renders instantly, no shift).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "section" | "ul" | "li" | "header" | "footer";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "p" | "h2" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: EASE },
    },
  };

  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
