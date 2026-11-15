"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { MountainScene, SectionTitle } from "./ui";
import { ease } from "./motion";

type Category = "full-stack" | "frontend" | "automation";

interface Project {
  id: string;
  title: string;
  tags: string;
  description: string;
  category: Category;
  liveUrl?: string;
  codeUrl?: string;
  /** Screenshot in /public; without one the tile gets a generated backdrop. */
  image?: string;
  backdrop: string;
}

const projects: Project[] = [
  {
    id: "agromarket",
    title: "AgroMarket",
    tags: "full-stack · payments",
    description:
      "Marketplace connecting Ghana's farmers, suppliers and buyers — JWT auth, role-based access, Paystack, Cloudinary uploads, wishlist and cart.",
    category: "full-stack",
    liveUrl: "https://agricultural-marketplace-nu.vercel.app/",
    image: "/projects/agri.png",
    backdrop: "bg-[radial-gradient(circle_at_30%_30%,#1f6f3f,#0b1f12_70%)]",
  },
  {
    id: "hubstore",
    title: "hubstore.",
    tags: "full-stack · e-commerce",
    description:
      "Production e-commerce platform with Stripe checkout, Algolia search, NextAuth v5, Zustand state and an admin dashboard.",
    category: "full-stack",
    liveUrl: "https://hubstore.vercel.app/",
    backdrop:
      "bg-[radial-gradient(circle_at_50%_55%,transparent_28%,#ff3fd4_30%,#7b2cff_34%,transparent_40%),radial-gradient(ellipse_at_50%_100%,#3a0d6b,#0d0420_70%)]",
  },
  {
    id: "sakai-watch",
    title: "sakai watch.",
    tags: "automation · telegram bot",
    description:
      "Telegram bot that checks University of Ghana Sakai every 30 minutes via GitHub Actions — alerts for announcements, assignments, grades, quizzes and files, due-date reminders, a Monday digest, and /due, /status commands.",
    category: "automation",
    backdrop:
      "bg-[radial-gradient(circle_at_70%_25%,#37aee2,transparent_45%),radial-gradient(circle_at_20%_90%,#1e5f99,transparent_55%),linear-gradient(160deg,#0d2a45,#06121f)]",
  },
  {
    id: "sakai-mcp",
    title: "sakai mcp.",
    tags: "ai tooling · mcp server",
    description:
      "TypeScript Model Context Protocol server that lets AI assistants read Sakai courses, assignments, announcements, calendars and files, and submit assignments with explicit confirmation. Quizzes are read-only by design.",
    category: "automation",
    backdrop:
      "bg-[repeating-linear-gradient(0deg,rgba(217,119,87,0.18)_0_1px,transparent_1px_22px),repeating-linear-gradient(90deg,rgba(217,119,87,0.18)_0_1px,transparent_1px_22px),radial-gradient(circle_at_50%_45%,#5a2a1c,#140a07_75%)]",
  },
  {
    id: "portfolio",
    title: "this portfolio.",
    tags: "frontend · next.js",
    description:
      "The site you're on: Next.js App Router, Tailwind CSS v4, Framer Motion and a Nodemailer-backed contact API.",
    category: "frontend",
    codeUrl: "https://github.com/zonyra-hubert/Simple-Portfolio-site",
    backdrop:
      "bg-[repeating-linear-gradient(60deg,#2a0f4a_0_2px,transparent_2px_26px),repeating-linear-gradient(-60deg,#2a0f4a_0_2px,transparent_2px_26px),radial-gradient(circle_at_50%_50%,#5b1fa0,#12052a_75%)]",
  },
];

const tabs: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full-stack" },
  { id: "frontend", label: "Frontend" },
  { id: "automation", label: "Automation" },
];

const tileLink =
  "border-x-2 border-white px-4 py-1 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-ink";

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof tabs)[number]["id"]>("all");
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  // Landscape drifts slower than the page: a gentle parallax.
  const bannerY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const visible = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="portfolio" className="bg-charcoal">
      {/* Landscape banner with the boxed title */}
      <div
        ref={bannerRef}
        className="relative flex h-40 items-center justify-center overflow-hidden md:h-56"
      >
        <motion.div style={{ y: bannerY }} className="absolute -inset-y-[25%] inset-x-0">
          <MountainScene variant="day" className="h-full w-full" />
        </motion.div>
        <div className="relative bg-white/10 text-ink backdrop-blur-[1px]">
          <SectionTitle>Portfolio</SectionTitle>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="px-6 py-4">
        <div
          role="tablist"
          aria-label="Filter projects"
          className="mx-auto flex max-w-lg justify-between border-b border-white/40"
        >
          {tabs.map((t) => {
            const active = filter === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(t.id)}
                className={`relative flex-1 cursor-pointer px-1 py-2 font-display text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors sm:text-[10px] sm:tracking-[0.15em] ${
                  active ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                {t.label}
                {active && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-x-3 -bottom-px h-0.5 bg-white"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tiles */}
      <motion.ul layout className="grid sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease }}
              tabIndex={p.liveUrl || p.codeUrl ? undefined : 0}
              className={`group relative aspect-square overflow-hidden lg:aspect-[4/3] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white ${p.backdrop}`}
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
              )}

              {/* Resting caption so tiles read without hovering (desktop only) */}
              <p
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-10 font-display text-sm font-semibold tracking-[0.15em] text-white transition-opacity duration-300 md:block md:group-focus-within:opacity-0 md:group-hover:opacity-0"
              >
                {p.title}
              </p>

              {/* Info overlay — always shown on touch screens, on hover/focus elsewhere */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0420]/75 px-6 text-center text-white transition-all duration-500 ease-out md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100 md:group-hover:opacity-100">
                <p className="font-display text-[9px] tracking-[0.2em] text-white/70">
                  {p.tags}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-[0.15em]">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-6 max-w-xs text-[11px] leading-relaxed text-white/80 lg:text-[10px]">
                  {p.description}
                </p>
                <div className="mt-4 flex gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={tileLink}
                    >
                      Demo
                    </a>
                  )}
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={tileLink}
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
          {filter === "all" && (
            <motion.li
              key="next"
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              className="relative aspect-square bg-graphite lg:aspect-[4/3]"
            >
              <a
                href="#contact"
                className="group flex h-full flex-col items-center justify-center gap-3 border border-dashed border-white/25 text-white transition-colors hover:bg-white/5"
              >
                <span className="font-display text-[9px] tracking-[0.2em] text-white/60">
                  open to work
                </span>
                <span className="font-display text-xl font-semibold tracking-[0.15em]">
                  your project?
                </span>
                <span className={`${tileLink} mt-2 group-hover:bg-white group-hover:text-ink`}>
                  Let&apos;s talk
                </span>
              </a>
            </motion.li>
          )}
        </AnimatePresence>
      </motion.ul>

      <p className="py-5 text-center font-display text-[11px] font-semibold text-white">
        And many more to come!
      </p>
    </section>
  );
}
