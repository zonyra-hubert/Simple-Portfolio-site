import { BarLink } from "./ui";
import { Reveal } from "./motion";

/** Dark strip under the hero — the reference's "IT BERRIES" band. */
export default function Banner() {
  return (
    <section
      aria-labelledby="now-heading"
      className="relative overflow-hidden bg-charcoal text-white"
    >
      {/* Oversized outlined badge, clipped by the section edge */}
      <div
        aria-hidden="true"
        className="animate-float-badge pointer-events-none absolute -bottom-16 -right-24 flex h-72 w-72 rotate-[-28deg] items-center justify-center rounded-[3rem] border-[14px] border-black/70 font-display text-[8rem] font-bold leading-none text-transparent [-webkit-text-stroke:10px_rgba(0,0,0,0.7)] opacity-60 md:-bottom-10 md:right-6 md:opacity-100"
      >
        ZH
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:px-8 md:py-12">
        <Reveal>
        <h2
          id="now-heading"
          className="text-center font-display text-sm font-bold uppercase tracking-[0.3em] md:text-left"
        >
          Currently at Jampolls
        </h2>
        </Reveal>
        <Reveal delay={0.12}>
        <p className="mt-5 max-w-2xl text-justify text-[13px] leading-relaxed text-white/85 md:text-left md:text-xs">
          I&apos;m a Frontend Engineer at Jampolls, building quiz and poll
          experiences used by a growing community: onboarding flows,
          leaderboards, instant results feedback and share-ready social
          previews — all with React, Next.js, TypeScript and Tailwind CSS.
          Before that I interned at Fihankra Comtech, shipping accessible,
          animated interfaces with Framer Motion and Zod.
        </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-8 text-center md:text-left">
          <BarLink href="#experience" hoverText="hover:[&>span]:text-charcoal">
            Read more
          </BarLink>
        </Reveal>
      </div>
    </section>
  );
}
