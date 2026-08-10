/* -------------------------------------------------------------------------- */
/*  Identity                                                                  */
/* -------------------------------------------------------------------------- */

export const identity = {
  name: "Nischith R",
  initials: "NR",
  headline: "Business Operations · Supply Chain · Technology Management",
  tagline:
    "I solve business problems with technology, automation, analytics, and AI — bridging operations, supply chain, and engineering to make systems flow.",
  location: "Bengaluru, Karnataka, India",
  email: "nischith.7102005@gmail.com",
  linkedin: "https://linkedin.com/in/nischith-r-857669296",
  github: "https://github.com/Nischith7102005",
  degree: "B.Tech in Computer Science and Technology",
  university: "Dayananda Sagar University",
  graduationYear: "2027",
  cgpa: "8.13",
};

/* -------------------------------------------------------------------------- */
/*  Skills — requested grouping: Programming / Data / Business / Cloud / Tools */
/* -------------------------------------------------------------------------- */

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "business",
    label: "Business",
    skills: [
      "Requirements Engineering",
      "Process Mapping (BPMN)",
      "Workflow Optimization",
      "Gap & Root Cause Analysis",
      "KPI & Metrics Design",
      "Sprint & Milestone Planning",
      "Stakeholder Alignment",
      "Risk & Resource Management",
    ],
  },
  {
    id: "programming",
    label: "Programming",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML / CSS",
      "REST APIs",
    ],
  },
  {
    id: "data",
    label: "Data",
    skills: [
      "Pandas & NumPy",
      "Excel & VBA",
      "MongoDB",
      "PostgreSQL",
      "dbt Core",
      "ETL Pipelines",
      "Data Visualization",
      "Statistical Reporting",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    skills: [
      "AWS Services",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Jenkins",
      "Vercel / Render / Railway",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      "n8n Automation",
      "Git & GitHub",
      "Jira & Notion",
      "Figma",
      "Postman",
      "LLM Observability",
      "Prompt Engineering",
      "Web Scraping",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience                                                                */
/* -------------------------------------------------------------------------- */

export const experience = [
  {
    role: "Technology Intern",
    company: "Humans Care Foundation",
    location: "Remote",
    period: "2024",
    type: "Internship",
    summary:
      "Applied technology and process design to keep programs coordinated, documented, and on track across distributed teams in a social-impact organisation.",
    highlights: [
      "Coordinated delivery across technology, program, and operations stakeholders",
      "Documented workflows, handoffs, and decision logs to reduce rework",
      "Optimized repetitive workflows, cutting manual effort in weekly operations",
      "Owned task prioritization and milestone tracking for active initiatives",
      "Delivered concise stakeholder reporting for leadership review",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export interface Project {
  title: string;
  tagline: string;
  description: string;
  focus: string[];
  outcome: string;
  tags: string[];
  github?: string;
  demo?: string;
  year?: string;
  featured?: boolean;
  category?: string;
}

export const projects: Project[] = [
  {
    title: "CertiSure",
    tagline: "Tamper-proof credential verification",
    description:
      "Scalable platform for issuing and instantly validating academic and corporate credentials with cryptographic assurance.",
    focus: [
      "Led sprint planning, milestone tracking, and cross-functional execution",
      "Designed QR + hash verification with metadata and audit trails",
      "Built AI verification engine using Tesseract.js OCR and layout analysis with 0–100 trust scoring",
    ],
    outcome: "Reduced verification from days to seconds with immutable audit history.",
    tags: ["Next.js", "Cryptography", "OCR", "QR Auth", "Project Leadership"],
    github: "https://github.com/Nischith7102005/certisure",
    year: "2024",
    featured: true,
    category: "Security · Product",
  },
  {
    title: "Monitr-AI",
    tagline: "LLM observability and cognitive waste",
    description:
      "Static-first observability for LLM inference — dashboards, adversarial probes, and automated ETL to surface inefficiency.",
    focus: [
      "Authored Cognitive Waste Index (semantic drift × efficiency × quality)",
      "Built dashboards for token use, latency, cost, and success rate",
      "Shipped Convex → Webhook → Postgres → dbt ETL with GitHub Actions cron",
    ],
    outcome: "Gave teams a single KPI surface to detect and act on inference waste.",
    tags: ["Observability", "Postgres", "dbt", "Convex", "ETL"],
    github: "https://github.com/Nischith7102005/aicwd",
    year: "2024",
    featured: true,
    category: "AI · Data Ops",
  },
  {
    title: "PsyMap — Mind Brain Map",
    tagline: "Content intelligence, visualized",
    description:
      "Local-first app that turns URLs and PDFs into interactive brain maps of interests, themes, and psychological traits.",
    focus: [
      "Force-directed graph in D3.js — draggable, zoomable, exportable",
      "Theme engine across 6 domains plus 6-dimension psychological profile",
      "100% on-device processing — no uploads, no storage",
    ],
    outcome: "Made complex information scannable for planning and research teams.",
    tags: ["D3.js", "NLP", "Visualization", "Privacy-First"],
    github: "https://github.com/Nischith7102005/psymap",
    year: "2024",
    featured: true,
    category: "Visualization · Strategy",
  },
  {
    title: "GreenMind",
    tagline: "Smart greenhouse management",
    description:
      "Full-stack platform simulating IoT sensor data and delivering AI grow recommendations with authenticated access.",
    focus: [
      "Dashboard for greenhouse metrics and plant health",
      "Firebase Auth with persistent sessions and protected routes",
      "Optimized single-file production build with inlined assets",
    ],
    outcome: "Shipped a polished, auth-gated product with clear Connect → Monitor → Optimize flow.",
    tags: ["React", "TypeScript", "Firebase", "IoT"],
    github: "https://github.com/Nischith7102005/Greenmind",
    year: "2024",
    featured: false,
    category: "IoT · AI",
  },
  {
    title: "LaTeX Plagiarism Suite",
    tagline: "Checker & remover — browser only",
    description:
      "Browser workflow to audit and rewrite LaTeX prose while perfectly preserving commands, math, and citations.",
    focus: [
      "Protected spans for commands, math, verbatim, lstlisting, citations",
      "Sentence-level risk scoring for AI-generated and repetitive phrasing",
      "Deployed to GitHub Pages via Actions on push to master",
    ],
    outcome: "Let academics remediate documents without breaking compilation.",
    tags: ["JavaScript", "LaTeX", "NLP"],
    github: "https://github.com/Nischith7102005/latexplagiarism",
    year: "2024",
    featured: false,
    category: "Tooling · NLP",
  },
  {
    title: "Living Dataset",
    tagline: "Evolutionary synthetic data engine",
    description:
      "Single-notebook engine that breeds synthetic rows by mutation, crossover, and classifier feedback to strengthen downstream models.",
    focus: [
      "Gaussian noise + crossover + fitness selection loop",
      "Drop-in for any CSV — pop_size = row count, 5 generations",
      "Benchmark: Iris +4% hold-out accuracy, +8% rare-class recall",
    ],
    outcome: "Generated useful training rows locally — reproducible with seed 42.",
    tags: ["Python", "Jupyter", "Synthetic Data"],
    github: "https://github.com/Nischith7102005/living-dataset",
    year: "2023",
    featured: false,
    category: "AI · Data",
  },
];

/* -------------------------------------------------------------------------- */
/*  Certifications — merged into Education in UI, kept as data               */
/* -------------------------------------------------------------------------- */

export const certifications = [
  { title: "AWS Cloud Foundations", issuer: "AWS Academy" },
  { title: "IBM Data & Database Fundamentals", issuer: "IBM" },
  {
    title: "Verizon Cloud Platform Job Simulation",
    issuer: "Forage",
  },
  { title: "Data Analytics (SQL, Excel & Python)", issuer: "Certified" },
  { title: "Data Analytics & AI", issuer: "Proov" },
  { title: "MongoDB", issuer: "MongoDB University" },
];

/* -------------------------------------------------------------------------- */
/*  Education                                                                 */
/* -------------------------------------------------------------------------- */

export const education = {
  degree: "B.Tech in Computer Science and Technology",
  university: "Dayananda Sagar University",
  location: "Bengaluru, Karnataka, India",
  period: "2023 – 2027",
  cgpa: "8.13 / 10",
  details: [
    "Database Management Systems, Data Structures, Cloud Computing, Operations & Systems Analysis",
    "Focus on process optimization, supply chain analytics, and technical project management",
    "Simulations, hackathons, and industry certification tracks completed alongside coursework",
  ],
};
