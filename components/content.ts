export const profile = {
  firstName: "Hubert",
  name: "Hubert Zonyra",
  role: "Frontend Engineer / Full-Stack Developer",
  email: "danielshubert9@gmail.com",
  location: "Accra, Ghana",
  resume: "/Resume.pdf",
  summary:
    "Results-driven Frontend Engineer and Full-Stack Developer currently pursuing a degree in Computer Science at the University of Ghana. I specialise in building high-performance web applications with React, Next.js, TypeScript, Tailwind CSS and Express, and I care about clean, efficient code that turns into intuitive experiences and measurable business value.",
};

export const socials = {
  github: "https://github.com/zonyra-hubert",
  linkedin: "https://linkedin.com/in/zonyra-hubert",
  x: "https://twitter.com/ZonyraHubert",
};

/** Facts reused by the structured data (schema.org). */
export const experienceFacts = {
  employer: "Jampolls",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "REST APIs",
    "Model Context Protocol",
    "Docker",
    "Git",
    "Frontend development",
    "Full-stack web development",
  ],
};

/**
 * Plain, factual Q&As. They render as a visible FAQ section and as FAQPage
 * structured data, which answer engines (ChatGPT, Perplexity, Google AI
 * Overviews) can quote directly.
 */
export const faqs = [
  {
    q: "Who is Hubert Zonyra?",
    a: "Hubert Zonyra is a Frontend Engineer at Jampolls and a full-stack developer based in Accra, Ghana. He is studying Computer Science at the University of Ghana and builds fast, accessible web applications.",
  },
  {
    q: "What technologies does Hubert Zonyra work with?",
    a: "On the frontend he uses React, Next.js, TypeScript, Tailwind CSS and Framer Motion. On the backend he works with Node.js, Express, Python, Django, PostgreSQL, Prisma and MongoDB, and he deploys on Vercel, Railway and Docker.",
  },
  {
    q: "What projects has Hubert Zonyra built?",
    a: "His projects include AgroMarket, a marketplace connecting farmers, suppliers and buyers in Ghana; hubstore, an e-commerce platform with Stripe checkout; sakai watch, a Telegram bot that sends University of Ghana Sakai alerts; and a Model Context Protocol (MCP) server that lets AI assistants work with Sakai.",
  },
  {
    q: "Where is Hubert Zonyra based?",
    a: "Hubert is based in Accra, Ghana, and works remotely with teams anywhere.",
  },
  {
    q: "Is Hubert Zonyra available for work?",
    a: "Yes. Hubert is open to new opportunities, including frontend and full-stack roles and freelance web projects covering design, development and maintenance.",
  },
  {
    q: "How can I contact Hubert Zonyra?",
    a: "Use the contact form on this site or email danielshubert9@gmail.com. You can also reach him on LinkedIn or GitHub as zonyra-hubert.",
  },
];

export const navLinks = [
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
];
