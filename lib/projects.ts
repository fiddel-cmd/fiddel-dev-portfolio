export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  repository?: string;
  article?: ArticleSection[];
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
    article: [
      {
        heading: "Overview",
        paragraphs: [
          "CityFix is a JavaFX desktop application that empowers citizens to report and track public infrastructure issues—from potholes and broken streetlights to graffiti and illegal dumping. Built with a clean MVC architecture, the system bridges the gap between citizens and local government by providing a transparent, centralized platform for issue submission, tracking, and resolution.",
        ],
      },
      {
        heading: "The Problem",
        paragraphs: [
          "Communities face a persistent challenge: infrastructure problems go unnoticed or unreported because citizens lack a direct, easy channel to communicate with local authorities. Phone calls get lost, emails go unanswered, and there is no visibility into whether a reported issue is being addressed. This disconnect erodes trust and leaves neighborhoods deteriorating.",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "CityFix provides a complete workflow: citizens register, submit issues with photos and location details, and monitor their status in real time. Administrators can filter, prioritize, and update issue statuses. An interactive map view gives geographic context to reported problems, while CSV export enables data sharing with stakeholders.",
        ],
      },
      {
        heading: "Technical Highlights",
        paragraphs: [
          "Layered Architecture — The application follows a strict separation of concerns across six layers: Application, Controllers, Services, DAOs, Models, and Interfaces. Every dependency flows through interfaces, making the system testable and maintainable.",
          "Interface-Driven Design — Eight core interfaces (IUserDAO, IIssueDAO, INavigationService, IExportService, IFilterService, IMapService, IStatusStyleProvider, Navigable) define contracts that decouple implementation from usage. Swapping a database or map provider requires zero changes to controllers.",
          "JavaFX with FXML — The UI leverages FXML for declarative layout definition, CSS for theming, and JavaFX properties for reactive data binding. FilteredList and Predicate chains power real-time search and filtering across the issue table.",
          "JDBC with Connection Management — A singleton DBConnection class manages MySQL connectivity, with DAOs handling row mapping and prepared statements to prevent SQL injection.",
          "Service Layer Separation — Business logic lives in dedicated services: IssueFilterService builds composable predicates, CsvExportService handles RFC-compliant escaping, and StatusStyleProvider centralizes status-to-color mappings.",
        ],
      },
      {
        heading: "Key Features",
        list: [
          "User Authentication — Secure login and registration with role-based access (citizen/admin)",
          "Issue Submission — Rich form with photo attachment via drag-and-drop, category selection, and location entry",
          "Advanced Filtering — Multi-criteria filtering by category, date range, status, and free-text search",
          "Dual View Modes — Toggle between a sortable data table and an interactive map with categorized markers",
          "CSV Export — One-click export of filtered issues for reporting and analysis",
          "Status Tracking — Visual status indicators with color-coded styling for at-a-glance updates",
        ],
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "This project reinforced the value of designing interfaces first—defining contracts before writing a single implementation forced me to think about dependencies and data flow upfront. It also deepened my understanding of JavaFX's reactive model: binding FilteredList to a TableView while chaining predicates demonstrated how declarative UI can eliminate imperative refresh logic. Finally, building a proper service layer taught me that separating business logic from controllers isn't just architectural purity—it makes every piece independently testable and replaceable.",
        ],
      },
      {
        heading: "Tech Stack",
        paragraphs: [
          "Java 17 • JavaFX • FXML • CSS • MySQL • JDBC • MVC • DAO Pattern • Maven",
        ],
      },
    ],
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
