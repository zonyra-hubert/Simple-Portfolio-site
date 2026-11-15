import { ChevronUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { profile, socials } from "./content";
import { Reveal, StaggerItem, StaggerList } from "./motion";

const links = [
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.x, label: "X (Twitter)", Icon: FaXTwitter },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pb-6 pt-10 text-white">
      <a
        href="#top"
        className="group mx-auto flex w-fit flex-col items-center font-display text-[10px] font-bold uppercase tracking-[0.25em]"
      >
        <ChevronUp
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:-translate-y-1"
        />
        Back to top
      </a>

      <StaggerList className="mt-8 flex justify-center gap-4" stagger={0.08}>
        {links.map(({ href, label, Icon }) => (
          <StaggerItem key={label}>
            <a
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-7 w-7 items-center justify-center border-2 border-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-charcoal"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          </StaggerItem>
        ))}
      </StaggerList>

      <Reveal as="p" delay={0.3} className="mt-8 text-center text-[10px] text-white/80">
        <span className="font-bold">
          ©{new Date().getFullYear()} {profile.name}
        </span>{" "}
        All Rights Reserved.
      </Reveal>
    </footer>
  );
}
