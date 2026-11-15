import type { IconBaseProps, IconType } from "react-icons";
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLinear,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SectionTitle } from "./ui";
import { Reveal, StaggerItem, StaggerList } from "./motion";

type Skill = { name: string; Icon: IconType; color: string };

/** Simple Icons has no Plane logo, so draw a neutral stacked-blocks mark. */
function PlaneMark(props: IconBaseProps) {
  const { className, style } = props;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <rect x="2" y="2" width="9" height="9" rx="1.5" opacity="0.45" />
      <rect x="7.5" y="7.5" width="9" height="9" rx="1.5" opacity="0.7" />
      <rect x="13" y="13" width="9" height="9" rx="1.5" />
    </svg>
  );
}

function UkFlag() {
  return (
    <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
      <clipPath id="uk-c">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#uk-c)">
        <rect width="60" height="60" fill="#012169" />
        <path d="M0 0l60 60M60 0L0 60" stroke="#fff" strokeWidth="10" />
        <path d="M0 0l60 60M60 0L0 60" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v60M0 30h60" stroke="#fff" strokeWidth="16" />
        <path d="M30 0v60M0 30h60" stroke="#C8102E" strokeWidth="9" />
      </g>
    </svg>
  );
}

function GhanaFlag() {
  return (
    <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
      <clipPath id="gh-c">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#gh-c)">
        <rect width="60" height="20" fill="#CE1126" />
        <rect y="20" width="60" height="20" fill="#FCD116" />
        <rect y="40" width="60" height="20" fill="#006B3F" />
        <path
          d="M30 21.5l2.1 6.4h6.7l-5.4 4 2 6.4-5.4-4-5.4 4 2-6.4-5.4-4h6.7z"
          fill="#000"
        />
      </g>
    </svg>
  );
}

const groups: { heading: string; skills: Skill[] }[] = [
  {
    heading: "Using now:",
    skills: [
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#E8C900" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#149ECA" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer", Icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    heading: "Back end:",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Zod", Icon: SiZod, color: "#3E67B1" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Django", Icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    heading: "Tools:",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Jira", Icon: SiJira, color: "#0052CC" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Linux", Icon: SiLinux, color: "#000000" },
      { name: "Railway", Icon: SiRailway, color: "#0B0D0E" },
      { name: "Linear", Icon: SiLinear, color: "#5E6AD2" },
      { name: "Plane", Icon: PlaneMark, color: "#3F76FF" },
    ],
  },
];

const languages = [
  { name: "English", Flag: UkFlag },
  { name: "Ewe", Flag: GhanaFlag },
];

function GroupHeading({ children }: { children: string }) {
  return (
    <Reveal direction="right">
      <h3 className="text-center font-display text-sm font-bold uppercase tracking-[0.25em] md:text-left md:text-xs">
        {children}
      </h3>
    </Reveal>
  );
}

const gridClasses =
  "mt-8 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-y-8";
const labelClasses =
  "mt-3 transition-colors duration-300 group-hover:text-ink font-display text-[11px] uppercase tracking-[0.15em] text-ink/80 md:text-[10px]";

export default function Skills() {
  return (
    <section id="skills" className="px-6 pt-20 sm:px-8 md:pt-24">
      <div className="text-center">
        <SectionTitle>Skills</SectionTitle>
      </div>

      <div className="mx-auto mt-12 max-w-2xl space-y-14 pb-20 md:pb-24">
        {groups.map((g) => (
          <div key={g.heading}>
            <GroupHeading>{g.heading}</GroupHeading>
            <StaggerList className={gridClasses}>
              {g.skills.map(({ name, Icon, color }) => (
                <StaggerItem key={name} className="group flex flex-col items-center">
                  <Icon
                    aria-hidden="true"
                    className="h-12 w-12 drop-shadow-none transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:drop-shadow-[0_6px_8px_rgba(0,0,0,0.2)] md:h-10 md:w-10"
                    style={{ color }}
                  />
                  <span className={labelClasses}>{name}</span>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        ))}

        <div>
          <GroupHeading>Languages:</GroupHeading>
          <StaggerList className={gridClasses}>
            {languages.map(({ name, Flag }) => (
              <StaggerItem key={name} className="group flex flex-col items-center">
                <span className="h-11 w-11 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 md:h-10 md:w-10">
                  <Flag />
                </span>
                <span className={labelClasses}>{name}</span>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  );
}
