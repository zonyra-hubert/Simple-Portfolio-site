"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "framer-motion";

/** Shared easing: quick start, long soft landing. */
export const ease = [0.22, 1, 0.36, 1] as const;

/** Respect the OS "reduce motion" setting for every animation below it. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const offsets = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 36 },
  right: { x: -36 },
  none: {},
} as const;

type Direction = keyof typeof offsets;

/** Fades + slides its children in once, when they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  as?: "div" | "li" | "p" | "span";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </Tag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

/** A <ul> whose <StaggerItem> children pop in one after another. */
export function StaggerList({
  children,
  className,
  stagger = 0.07,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  "aria-label"?: string;
}) {
  return (
    <motion.ul
      className={className}
      aria-label={ariaLabel}
      variants={staggerParent}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li className={className} variants={staggerChild}>
      {children}
    </motion.li>
  );
}

/** Hero entrance: children animate in on page load (not on scroll). */
export function HeroIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Black diagonal panel that wipes in from the right on load. */
export function DiagonalPanel() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 bg-ink"
      initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
      animate={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 41% 100%)" }}
      transition={{ duration: 1.1, ease }}
    />
  );
}

/** Section titles: the boxed heading scales open from its centre. */
export function TitleReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, scaleX: 0.55 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.9, ease }}
    >
      {children}
    </motion.div>
  );
}

/** ———— \/\/\/ ———— ornament: lines grow out, then the zigzag draws itself. */
export function ZigzagDivider({ className = "" }: { className?: string }) {
  const view = { once: true, margin: "0px 0px -40px 0px" } as const;
  return (
    <div
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-hidden="true"
    >
      <motion.span
        className="h-0.5 w-12 origin-right bg-current sm:w-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={view}
        transition={{ duration: 0.7, ease }}
      />
      <svg
        width="34"
        height="8"
        viewBox="0 0 34 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <motion.path
          d="M1 1l4 6 4-6 4 6 4-6 4 6 4-6 4 6 4-6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={view}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeInOut" }}
        />
      </svg>
      <motion.span
        className="h-0.5 w-12 origin-left bg-current sm:w-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={view}
        transition={{ duration: 0.7, ease }}
      />
    </div>
  );
}
