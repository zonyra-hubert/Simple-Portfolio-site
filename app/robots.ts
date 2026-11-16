import type { MetadataRoute } from "next";
import { siteUrl } from "@/components/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Open to every crawler, including AI answer engines (GPTBot,
    // OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended), so the site
    // can be cited in AI answers. Only the form-handling API is excluded.
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
