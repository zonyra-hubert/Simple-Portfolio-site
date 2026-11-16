/**
 * Absolute site URL, used for canonical links, the sitemap, Open Graph and
 * structured data. Set NEXT_PUBLIC_SITE_URL (e.g. https://hubertzonyra.com)
 * in Vercel once the custom domain is live; until then Vercel's production
 * URL is used automatically.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const seo = {
  title: "Hubert Zonyra — Frontend Engineer & Full-Stack Developer in Ghana",
  shortTitle: "Hubert Zonyra",
  description:
    "Hubert Zonyra is a Frontend Engineer at Jampolls and full-stack developer in Accra, Ghana, building fast web apps with React, Next.js, TypeScript, Node.js and Django.",
  keywords: [
    "Hubert Zonyra",
    "Zonyra Hubert",
    "frontend engineer Ghana",
    "full-stack developer Accra",
    "React developer Ghana",
    "Next.js developer",
    "TypeScript developer",
    "web developer Accra",
    "University of Ghana computer science",
    "portfolio",
  ],
};
