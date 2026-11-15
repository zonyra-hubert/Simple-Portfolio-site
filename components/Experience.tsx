"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle, ZigzagDivider } from "./ui";
import { ease } from "./motion";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  periodText: string;
  /** Set for the current role; its duration is computed on the client. */
  startDate?: Date;
  staticDuration?: string;
  technologies: string[];
  highlights: string[];
}

const JAMPOLLS_START = new Date(2026, 1, 2); // February 2, 2026

const experiences: ExperienceItem[] = [
  {
    id: "jampolls",
    role: "Frontend Engineer",
    company: "Jampolls",
    location: "Ghana",
    periodText: "Feb 2026 – Present",
    startDate: JAMPOLLS_START,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Built responsive quiz landing and onboarding flows with contextual login prompts and interactive entry journeys.",
      "Engineered quiz results views with instant answer feedback, missed-option review and seamless dashboard navigation.",
      "Shipped paginated leaderboards (10 rows per view) with docked rank bars and load-more for poll participants.",
      "Handled cache invalidation on mutations to keep every view in sync, and streamlined Open Graph images and metadata for high-fidelity share previews.",
      "Maintained reusable UI components and design tokens, integrated REST APIs with validation and error boundaries, and implemented route middleware for anonymous vs. authenticated users.",
    ],
  },
  {
    id: "fihankra",
    role: "Frontend Engineer Intern",
    company: "Fihankra Comtech LLC",
    location: "Ghana (Remote)",
    periodText: "Mar 2024 – May 2024",
    staticDuration: "3 mos",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod"],
    highlights: [
      "Built responsive, accessible interfaces with a component-driven architecture.",
      "Implemented client-side validation with Zod and interactive animations with Framer Motion.",
      "Worked with backend engineers and designers to integrate REST endpoints and keep the design consistent.",
    ],
  },
];

function calculateDuration(startDate: Date): string {
  const now = new Date();
  let totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  if (now.getDate() >= startDate.getDate()) totalMonths += 1;
  if (totalMonths <= 0) return "1 mo";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const y = years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "";
  const m = months ? `${months} ${months === 1 ? "mo" : "mos"}` : "";
  return [y, m].filter(Boolean).join(" ");
}

export default function Experience() {
  // Computed after mount so server and client render the same markup.
  const [currentDuration, setCurrentDuration] = useState("");
  useEffect(() => setCurrentDuration(calculateDuration(JAMPOLLS_START)), []);

  return (
    <section id="experience" className="px-6 pt-16 sm:px-8">
      <div className="text-center">
        <SectionTitle>Experience</SectionTitle>
      </div>

      <ol className="mx-auto mt-14 max-w-3xl space-y-12">
        {experiences.map((exp, i) => {
          const duration = exp.startDate ? currentDuration : exp.staticDuration;
          return (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease }}
              className="grid gap-4 border-l-2 border-ink pl-5 md:grid-cols-[11rem_1fr] md:gap-10 md:border-l-0 md:pl-0"
            >
              <div className="md:border-r-2 md:border-ink md:pr-6 md:text-right">
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.15em]">
                  {exp.periodText}
                </p>
                {duration && (
                  <p className="mt-1 text-[11px] text-muted">{duration}</p>
                )}
                <p className="mt-1 text-[11px] text-muted">{exp.location}</p>
                {exp.startDate && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    Present
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em]">
                  {exp.role}
                </h3>
                <p className="mt-1 font-name text-sm font-semibold text-muted">
                  {exp.company}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + j * 0.07, duration: 0.5, ease }}
                      className="relative pl-4 text-xs leading-relaxed text-ink/80 before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2 before:bg-ink"
                    >
                      {h}
                    </motion.li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {exp.technologies.map((t) => (
                    <li
                      key={t}
                      className="border border-ink/40 px-2 py-0.5 font-display text-[9px] font-semibold uppercase tracking-wider text-ink/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <ZigzagDivider className="mt-16" />
    </section>
  );
}
