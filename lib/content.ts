/**
 * ─────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to update your information.
 *  Everything the site renders (name, bio, projects, links) lives here so you
 *  never have to touch the components.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Asad Ahmed",
  role: "Website Designer & Developer",
  tagline:
    "I design and build stunning, fast websites and the ads that bring them traffic.",
  // Used for the About section.
  bio: [
    "I'm a 20-year-old, self-taught web designer and developer based in Leeds. I build complete websites end-to-end, from the first design decision to the live, polished product, with a focus on sites that look stunning and actually convert.",
    "I work hand in hand with cutting-edge AI tools to ship faster and push further than a solo builder normally could. As an AI entrepreneur, I'm fascinated by where design, code, and advertising meet, and I'm always experimenting at that edge.",
  ],
  // Where the hero CTA and contact buttons point.
  email: "therealasadahmed@gmail.com",
  location: "Leeds, West Yorkshire",
  // Small badge text shown in the hero. Set to "" to hide it.
  availability: "Available for client work",
};

export type SocialLink = {
  label: string;
  href: string;
  // icon key — see components/Icons.tsx
  icon: "github" | "linkedin" | "email" | "x";
};

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:therealasadahmed@gmail.com", icon: "email" },
  // Add these once you have them — just fill in the href and uncomment:
  // { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  // { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  // { label: "X", href: "https://x.com/yourusername", icon: "x" },
];

export type Project = {
  title: string;
  description: string;
  href: string;
  // short tags shown on the card
  image: string;
  imageAlt: string;
  tags: string[];
  // accent year/label in the corner
  year: string;
};

export const projects: Project[] = [
  {
    title: "Aurelion Codex",
    description:
      "An immersive concept storefront that brings a fantasy world to life through cinematic visuals, interactive storytelling, and a clear path to purchase.",
    href: "https://aurelion.netlify.app/",
    image: "/projects/aurelion.png",
    imageAlt:
      "Aurelion’s cinematic mountain landscape and Where Myth Becomes Matter headline",
    tags: ["Web Design", "E-commerce", "Concept"],
    year: "2025",
  },
  {
    title: "Makki Masjid",
    description:
      "A website built for charity work, providing a warm, accessible home for a community organisation to share its mission and reach supporters.",
    href: "https://makkimasjid.netlify.app/",
    image: "/projects/makki.png",
    imageAlt:
      "Makki Masjid website with a community welcome and daily prayer times",
    tags: ["Charity", "Web Design", "Community"],
    year: "2025",
  },
  {
    title: "Black Hole simulator",
    description:
      "A physics simulation I built as a hobby project. An interactive exploration of motion and forces, made for the joy of figuring it out.",
    href: "https://blsimulation.netlify.app/",
    image: "/projects/black-hole-simulator.png",
    imageAlt:
      "Event Horizon black hole simulator with a glowing golden accretion disk and interactive viewing controls",
    tags: ["Physics", "Simulation", "Interactive"],
    year: "2025",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Web Design",
    items: [
      "UI Design",
      "Responsive Layout",
      "Visual Identity",
      "Landing Pages",
    ],
  },
  {
    title: "Web Development",
    items: ["HTML & CSS", "JavaScript", "Modern Web Apps", "Netlify Deploys"],
  },
  {
    title: "Advertising",
    items: ["Ad Creatives", "Copywriting", "Conversion Focus", "Campaigns"],
  },
  {
    title: "AI Tools",
    items: ["AI-Assisted Build", "Rapid Prototyping", "Automation"],
  },
];

// Used in <title>, meta description, and the footer.
export const site = {
  title: "Asad Ahmed | Website Designer & Developer",
  description:
    "Portfolio of Asad Ahmed, a self-taught website designer and developer in Leeds building stunning, fast websites with cutting-edge AI.",
  // Set this to your deployed URL for correct OG/social metadata.
  url: "https://example.com",
};
