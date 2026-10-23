"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Code2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ContributionGroup {
  category: string;
  contributions: string[];
}

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate?: Date;
  periodText: string;
  isCurrent?: boolean;
  websiteUrl?: string;
  technologies: string[];
  groups: ContributionGroup[];
}

interface ProjectItem {
  id: string;
  title: string;
  period?: string;
  description: string;
  liveUrl?: string;
  technologies: string[];
}

// Dynamic duration calculation: Start Date -> Present
function calculateDuration(startDate: Date): string {
  const now = new Date();
  let totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  if (now.getDate() >= startDate.getDate()) {
    totalMonths += 1;
  }

  if (totalMonths <= 0) return "1 month";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? "month" : "months"}`;
  }
  if (months === 0) {
    return `${years} ${years === 1 ? "year" : "years"}`;
  }
  return `${years} ${years === 1 ? "yr" : "yrs"} ${months} ${
    months === 1 ? "mo" : "mos"
  }`;
}

const experiences: ExperienceItem[] = [
  {
    id: "jampolls",
    role: "Frontend Engineer",
    company: "Jampolls",
    location: "Ghana",
    startDate: new Date(2026, 1, 2), // February 2, 2026
    periodText: "February 2026 – Present",
    isCurrent: true,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RESTful APIs",
      "Git & GitHub",
    ],
    groups: [
      {
        category: "Features Personally Implemented",
        contributions: [
          "Developed responsive quiz landing and onboarding interfaces featuring contextual login prompts and interactive entry flows.",
          "Engineered quiz results views with immediate visual answer feedback, correct/incorrect indicators, missed options review, and seamless dashboard navigation.",
          "Built paginated response leaderboards (10 rows per view) with docked rank bars and dynamic load-more functionality for poll participants.",
          "Handled client-side cache invalidation on mutations to eliminate stale queries and maintain synchronized UI states across application views.",
          "Streamlined Open Graph image handling and dynamic metadata structure to ensure high-fidelity social share previews for community polls and events.",
        ],
      },
      {
        category: "Collaborative & Platform Contributions",
        contributions: [
          "Developed and maintained reusable UI components with React, Next.js, and TypeScript, standardizing design tokens and dark mode styling with Tailwind CSS.",
          "Integrated frontend components with backend REST APIs, handling form validations, asynchronous loading states, and robust error boundaries.",
          "Implemented client-side route middleware to manage navigation flows and join journeys for anonymous versus authenticated users.",
          "Collaborated actively via Git and GitHub workflows, contributing through structured feature branches, pull requests, and peer code reviews.",
        ],
      },
    ],
  },
  {
    id: "fihankra",
    role: "Frontend Engineer Intern",
    company: "Fihankra Comtech LLC",
    location: "Ghana (Remote)",
    periodText: "March 2024 – May 2024",
    isCurrent: false,
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zod",
      "REST APIs",
    ],
    groups: [
      {
        category: "Technical Contributions",
        contributions: [
          "Built responsive, accessible user interfaces using React.js, TypeScript, and Tailwind CSS with a component-driven architecture.",
          "Implemented robust client-side validation using Zod and crafted interactive UI animations utilizing Framer Motion.",
          "Collaborated with backend engineers and UI designers to integrate RESTful API endpoints and maintain design consistency.",
        ],
      },
    ],
  },
];

const notableProjects: ProjectItem[] = [
  {
    id: "agri-marketplace",
    title: "Agricultural Marketplace",
    description:
      "Full-stack marketplace connecting farmers, suppliers, and buyers in Ghana. Built with REST API, JWT authentication, role-based access control, Paystack payment integration, Cloudinary image uploads, client-side state management, wishlist, and cart.",
    liveUrl: "https://agricultural-marketplace-nu.vercel.app/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Paystack",
    ],
  },
  {
    id: "hubstore",
    title: "Production E-Commerce Platform",
    description:
      "Modern full-stack e-commerce web application featuring secure payment processing via Stripe, Algolia search integration, NextAuth v5 authentication, Zustand state management, and an admin dashboard.",
    liveUrl: "https://hubstore.vercel.app/",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Stripe",
      "NextAuth",
      "Zustand",
      "Algolia",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const Experience: React.FC = () => {
  const [currentDuration, setCurrentDuration] = useState<string>("");
  const [showProjects, setShowProjects] = useState<boolean>(true);

  useEffect(() => {
    // Automatically calculate duration from February 2, 2026 to present
    setCurrentDuration(calculateDuration(new Date(2026, 1, 2)));
  }, []);

  return (
    <div className="w-full text-white pl-2 sm:pl-4 space-y-10">
      {/* Work Experience Timeline */}
      <div className="relative border-l-2 border-emerald-500/40 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
        {experiences.map((exp, index) => {
          const durationStr =
            exp.isCurrent && currentDuration
              ? ` · ${currentDuration}`
              : exp.id === "fihankra"
              ? " · 3 mos"
              : "";

          return (
            <motion.article
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <span
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-[#1c2b3a] transition-all duration-300 ${
                  exp.isCurrent
                    ? "bg-emerald-400 ring-4 ring-emerald-500/20"
                    : "bg-slate-400"
                }`}
                aria-hidden="true"
              />

              {/* Experience Card */}
              <div
                className={`bg-[#233547]/90 hover:bg-[#283c50] transition-colors duration-200 rounded-xl p-5 sm:p-7 border ${
                  exp.isCurrent
                    ? "border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                    : "border-slate-700/60"
                }`}
              >
                {/* Header: Role & Badges */}
                <header className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>{exp.role}</span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-base text-gray-200">
                      <span className="font-semibold text-emerald-400">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-xs text-gray-300">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/50 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Present
                    </span>
                  )}
                </header>

                {/* Period & Dynamic Duration */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-4">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {exp.periodText}
                    {durationStr && (
                      <span className="text-emerald-300 font-medium">
                        {durationStr}
                      </span>
                    )}
                  </span>
                </div>

                {/* Responsibilities & Contributions */}
                <div className="space-y-4 mb-5">
                  {exp.groups.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <h3 className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                        {group.category}
                      </h3>
                      <ul className="space-y-2">
                        {group.contributions.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-gray-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-gray-400" />
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-[#182635] text-emerald-200 border border-slate-600/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Notable Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="pt-4"
      >
        <button
          type="button"
          onClick={() => setShowProjects((prev) => !prev)}
          className="flex items-center justify-between w-full py-3 px-4 bg-[#233547]/50 hover:bg-[#233547] rounded-lg border border-slate-700/60 transition cursor-pointer text-left"
          aria-expanded={showProjects}
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-lg text-white">
              Selected Production & Full-Stack Projects
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-gray-300 border border-slate-700">
              {notableProjects.length}
            </span>
          </div>
          {showProjects ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {showProjects && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {notableProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#233547]/80 hover:bg-[#283c50] transition-colors rounded-xl p-5 border border-slate-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white text-base">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition p-1"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] rounded bg-[#182635] text-gray-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-medium"
                    >
                      <span>View Live Application</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Experience;
