import { Code2, PenTool, Wrench } from "lucide-react";
import { BarLink, SectionTitle, ZigzagDivider } from "./ui";
import { Reveal } from "./motion";
import { profile } from "./content";

const services = [
  {
    title: "Design",
    Icon: PenTool,
    text: "I turn ideas and mockups into pixel-accurate, responsive interfaces — or design them with you from scratch, keeping you in the loop the whole way.",
  },
  {
    title: "Development",
    Icon: Code2,
    text: "From a single landing page to a full-stack app with auth, payments and a database, I build products that are fast, accessible and fully functional.",
  },
  {
    title: "Maintenance",
    Icon: Wrench,
    text: "When something breaks or needs to grow, I can fix issues, refactor, and add new features and integrations to keep your product healthy.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 pt-20 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle>About me</SectionTitle>
        <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-xl text-justify text-xs leading-relaxed text-muted sm:text-center sm:text-[13px]">
          {profile.summary}
        </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <BarLink href={profile.resume} external>
            Explore my CV
          </BarLink>
        </Reveal>
        <ZigzagDivider className="mt-14" />
      </div>

      <ul className="mx-auto mt-14 grid max-w-3xl gap-x-16 gap-y-12 md:grid-cols-2">
        {services.map(({ title, Icon, text }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={(i % 2) * 0.15}
            direction={i === 2 ? "up" : i === 0 ? "right" : "left"}
            className={`group relative pl-2 ${
              i === 2 ? "md:col-span-2 md:mx-auto md:max-w-sm" : ""
            }`}
          >
            <Icon
              aria-hidden="true"
              strokeWidth={1.25}
              className="absolute -left-4 -top-4 h-9 w-9 text-ink/20 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-ink/40"
            />
            <h3 className="relative font-display text-[11px] font-bold uppercase tracking-[0.2em]">
              {title}
            </h3>
            <p className="mt-3 text-[11px] leading-relaxed text-muted">
              {text}
            </p>
          </Reveal>
        ))}
      </ul>

      <ZigzagDivider className="mt-16" />
    </section>
  );
}
