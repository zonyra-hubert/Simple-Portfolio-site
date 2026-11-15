import type { ReactNode } from "react";
import { TitleReveal } from "./motion";

/** Boxed, letter-spaced section heading ("ABOUT ME", "SKILLS", ...). */
export function SectionTitle({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <TitleReveal>
    <h2
      id={id}
      className="inline-block border-[3px] border-current bg-transparent py-2.5 pl-[calc(2rem+0.5em)] pr-8 font-display text-xs font-bold uppercase tracking-[0.5em] sm:py-3 sm:pl-[calc(3rem+0.5em)] sm:pr-12 sm:text-sm"
    >
      {children}
    </h2>
    </TitleReveal>
  );
}

const barClasses =
  "inline-flex items-center justify-center border-x-2 border-current px-7 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-200 hover:bg-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

/**
 * Text framed by two vertical bars: | EXPLORE |
 * The hover fill uses currentColor, so the label is re-coloured via `hoverText`.
 */
export function BarLink({
  href,
  children,
  hoverText = "hover:[&>span]:text-white",
  external = false,
}: {
  href: string;
  children: ReactNode;
  hoverText?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`${barClasses} ${hoverText}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
    </a>
  );
}

export function BarButton({
  children,
  type = "button",
  disabled,
  onClick,
  hoverText = "hover:[&>span]:text-white",
}: {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  hoverText?: string;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${barClasses} ${hoverText} cursor-pointer disabled:cursor-wait disabled:opacity-60`}
    >
      <span>{children}</span>
    </button>
  );
}

export { ZigzagDivider } from "./motion";

/** ZH monogram, drawn in the angular style of the reference logo. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      {/* Z */}
      <path d="M4 5h17L6 27h17" />
      {/* H, slanted to match the Z */}
      <path d="M24 5l-6 22M36 5l-6 22M22 16h11" />
    </svg>
  );
}

/**
 * Layered mountain landscape drawn in SVG, standing in for the reference's
 * photography. "dusk" = misty purple hero, "day" = cool blue-green banner.
 */
export function MountainScene({
  variant,
  className = "",
}: {
  variant: "dusk" | "day";
  className?: string;
}) {
  const p =
    variant === "dusk"
      ? {
          sky: ["#3a2b2e", "#7b5a4e", "#b48a6c"],
          far: "#5d4746",
          mid: "#3b2d30",
          near: "#211a1d",
          fog: ["#b9a9bd", "#8d7f99"],
        }
      : {
          sky: ["#9fb3bd", "#c3d0d4", "#e3e8e6"],
          far: "#8ea0a6",
          mid: "#5f7468",
          near: "#3c4c3f",
          fog: ["#dfe6e6", "#c9d3d4"],
        };
  const id = `ms-${variant}`;

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky[0]} />
          <stop offset="0.55" stopColor={p.sky[1]} />
          <stop offset="1" stopColor={p.sky[2]} />
        </linearGradient>
        <linearGradient id={`${id}-fog`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.fog[0]} stopOpacity="0" />
          <stop offset="0.35" stopColor={p.fog[0]} stopOpacity="0.85" />
          <stop offset="1" stopColor={p.fog[1]} />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill={`url(#${id}-sky)`} />
      <g className="animate-drift-slow">
      <path
        fill={p.far}
        d="M0 470 L120 400 L230 440 L380 330 L520 420 L640 360 L760 410 L900 300 L1040 390 L1180 340 L1300 400 L1440 350 V900 H0Z"
      />
      </g>
      <g className="animate-drift">
      <path
        fill={p.mid}
        d="M0 540 L90 500 L200 530 L330 450 L470 520 L600 470 L720 540 L860 460 L1000 530 L1130 480 L1270 540 L1440 470 V900 H0Z"
      />
      </g>
      <path
        fill={p.near}
        d="M0 600 L60 585 L110 600 L150 560 L190 600 L260 590 L330 610 L420 575 L520 615 L640 590 L760 620 L880 585 L990 615 L1100 580 L1210 612 L1320 588 L1440 605 V900 H0Z"
      />
      <rect
        x="-120"
        y="560"
        width="1680"
        height="340"
        fill={`url(#${id}-fog)`}
        className="animate-fog"
      />
    </svg>
  );
}
