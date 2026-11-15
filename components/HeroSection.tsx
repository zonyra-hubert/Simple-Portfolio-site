import Image from "next/image";
import { AtSign } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import hubert from "../assets/hubert-cutout.png";
import { BarLink, MountainScene, ZigzagDivider } from "./ui";
import { DiagonalPanel, HeroIn } from "./motion";
import { profile, socials } from "./content";

const heroSocials = [
  { href: `mailto:${profile.email}`, label: "Email", Icon: AtSign },
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
];

function external(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export default function HeroSection() {
  return (
    <section id="top" aria-label="Introduction" className="relative">
      {/* ---------- Mobile: landscape + centred intro ---------- */}
      <div className="relative flex min-h-[560px] h-[100svh] items-center justify-center overflow-hidden pt-14 md:hidden">
        <HeroIn direction="none" className="absolute inset-0">
          <MountainScene variant="dusk" className="h-full w-full" />
        </HeroIn>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-transparent" />
        <div className="relative px-6 text-center text-white">
          <HeroIn delay={0.2}>
            <p className="font-name text-lg font-light">
              my name is {profile.firstName}
            </p>
          </HeroIn>
          <HeroIn delay={0.35}>
            <h1 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide">
              I&apos;m a developer
            </h1>
          </HeroIn>
          <ZigzagDivider className="mt-4 [&>span]:w-8" />
          <HeroIn delay={0.55}>
          <ul className="mt-6 flex justify-center gap-4">
            {heroSocials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...external(href)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          </HeroIn>
          <HeroIn delay={0.7} className="mt-8">
            <BarLink
              href={profile.resume}
              external
              hoverText="hover:[&>span]:text-ink"
            >
              Download CV
            </BarLink>
          </HeroIn>
        </div>
      </div>

      {/* ---------- Desktop: split light / black diagonal ---------- */}
      <div className="relative hidden h-screen min-h-[620px] max-h-[920px] overflow-hidden bg-stone md:block">
        <DiagonalPanel />

        {/* Portrait sits in the black half, fading into it */}
        <HeroIn
          direction="left"
          delay={0.55}
          className="absolute bottom-0 right-[4%] h-[82%] w-[44%] max-w-[560px] lg:right-[9%]"
        >
          {/* Soft light behind the cut-out so it lifts off the black */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[10%] bottom-0 top-[12%] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent)]"
          />
          <Image
            src={hubert}
            alt="Portrait of Hubert Zonyra"
            fill
            priority
            sizes="(min-width: 768px) 44vw, 0px"
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
          <p className="absolute bottom-8 right-0 max-w-[11rem] text-right font-display text-[10px] leading-snug text-white/70">
            Based in {profile.location}.
            <br />
            Open to new opportunities.
          </p>
        </HeroIn>

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-8">
          <div className="max-w-[46%]">
            <HeroIn delay={0.3}>
              <p className="font-name text-xl font-semibold text-ink lg:text-2xl">
                Hi, I am
              </p>
            </HeroIn>
            <HeroIn delay={0.42}>
              <h1 className="mt-3 font-name text-5xl font-medium leading-tight text-ink lg:text-6xl">
                {profile.name}
              </h1>
            </HeroIn>
            <HeroIn delay={0.54}>
              <p className="mt-2 font-name text-sm font-semibold text-muted lg:text-base">
                {profile.role}
              </p>
            </HeroIn>

            <HeroIn delay={0.7}>
            <ul className="mt-14 flex gap-4">
              {heroSocials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...external(href)}
                    className="flex h-9 w-9 items-center justify-center bg-[#c4c4c4] shadow-[2px_3px_6px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            </HeroIn>

            <HeroIn delay={0.82} className="mt-10">
              <BarLink href={profile.resume} external>
                Download CV
              </BarLink>
            </HeroIn>
          </div>
        </div>
      </div>
    </section>
  );
}
