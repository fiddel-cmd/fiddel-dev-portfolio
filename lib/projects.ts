export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  repository?: string;
};

export const projects: Project[] = [
  {
    slug: "aquasense",
    name: "AquaSense",
    category: "Mobile · React Native",
    summary:
      "A water quality monitoring app for Nairobi, Mombasa, and Kisumu, with AI-driven alerts. Built at the Build 24 Hackathon.",
    stack: ["React Native", "Expo", "Zustand", "TanStack Query"],
  },
  {
    slug: "apush-research-care",
    name: "APUSH Research & Care",
    category: "Web · Freelance",
    summary:
      "A client website for a Nairobi-based research services firm, with a contact form, email delivery, file logging, and PostgreSQL storage.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    slug: "cityfix",
    name: "CityFix",
    category: "Desktop · Java",
    summary:
      "An urban infrastructure reporting system for logging issues such as potholes, broken lights, and water problems for city review.",
    stack: ["JavaFX", "PostgreSQL", "JDBC", "SOLID"],
    repository:
      "https://github.com/fiddel-cmd/UrbanInfrastructureReportingSystem",
  },
  {
    slug: "network-captain",
    name: "Network Captain",
    category: "Web · Educational",
    summary:
      "An interactive learning site covering networking concepts including the OSI model, protocols, and IP addressing.",
    stack: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
  },
  {
    slug: "fidel-dev-portfolio",
    name: "Fidel Dev Portfolio",
    category: "Web · Personal",
    summary:
      "A personal developer portfolio, now being rebuilt with Next.js, TypeScript, and a custom design system.",
    stack: ["Next.js", "TypeScript", "CSS"],
    repository: "https://github.com/fiddel-cmd/fidel-dev-portfolio",
  },
  {
    slug: "sales-analytics-dashboard",
    name: "Sales Analytics Dashboard",
    category: "Web · Data Visualization",
    summary:
      "A sales data dashboard with interactive visualizations, filtering, and export capabilities.",
    stack: ["Python", "Pandas", "Plotly", "Dash"],
  },
];
