import { experienceFacts, faqs, profile, socials } from "./content";
import { seo, siteUrl } from "./site";

/**
 * schema.org JSON-LD: tells Google and AI answer engines, in machine-readable
 * form, who this page is about (Person), what the page is (ProfilePage /
 * WebSite) and the answers to common questions (FAQPage).
 */
export default function StructuredData() {
  const personId = `${siteUrl}/#person`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: "Zonyra Hubert",
        givenName: profile.firstName,
        familyName: "Zonyra",
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        email: `mailto:${profile.email}`,
        jobTitle: "Frontend Engineer",
        description: seo.description,
        worksFor: { "@type": "Organization", name: experienceFacts.employer },
        // Currently a Computer Science student (not yet an alumnus).
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "University of Ghana",
          sameAs: "https://www.ug.edu.gh",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Accra",
          addressCountry: "GH",
        },
        knowsLanguage: ["English", "Ewe"],
        knowsAbout: experienceFacts.skills,
        sameAs: [socials.github, socials.linkedin, socials.x],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: "en",
        mainEntity: { "@id": personId },
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: seo.shortTitle,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; "<" is escaped to avoid </script> breakouts.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
