export const identity = {
  name: "Nischith R",
  location: "Bengaluru, India",
  email: "nischith.7102005@gmail.com",
  linkedin: "https://linkedin.com/in/nischith-r-857669296",
  github: "https://github.com/Nischith7102005",
  availability: "Open to internships and full-time roles for 2026",
};

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
      "Requirements engineering",
      "Process mapping",
      "Workflow optimization",
      "Gap and root-cause analysis",
      "KPI design",
      "Stakeholder alignment",
      "Risk and resource management",
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
      "ETL pipelines",
      "Data visualization",
      "Statistical reporting",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "CI/CD pipelines",
      "GitHub Actions",
      "Jenkins",
      "Vercel / Render / Railway",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      "n8n automation",
      "Git & GitHub",
      "Jira & Notion",
      "Figma",
      "Postman",
      "Prompt engineering",
      "Web scraping",
    ],
  },
];

export const experience = [
  {
    role: "Technology Intern",
    company: "Humans Care Foundation",
    location: "Remote",
    period: "2024",
    summary:
      "Supported a social-impact organisation by keeping programs coordinated, documented, and on schedule across distributed teams.",
    highlights: [
      "Coordinated work across technology, program, and operations teams",
      "Documented workflows, handoffs, and decision logs that reduced rework",
      "Automated repetitive processes, cutting manual effort in weekly operations",
      "Tracked milestones for active initiatives and prepared updates for leadership",
    ],
  },
];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  outcome: string;
  tags: string[];
  github?: string;
  year?: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "CertiSure",
    tagline: "Credential verification platform",
    description:
      "A platform for issuing and instantly verifying academic and corporate credentials, with QR-based validation and a tamper-evident audit trail.",
    outcome: "Verification went from days to seconds, with an immutable record of every check.",
    tags: ["Next.js", "Cryptography", "OCR", "QR validation"],
    github: "https://github.com/Nischith7102005/certisure",
    year: "2024",
    featured: true,
    image: "/images/certisure.jpg",
  },
  {
    title: "Monitr-AI",
    tagline: "LLM observability and cost tracking",
    description:
      "Dashboards and automated pipelines that surface how much LLM inference actually costs — in tokens, latency, and wasted output.",
    outcome: "Teams got a single view of inference efficiency and a clear list of where to act.",
    tags: ["Observability", "PostgreSQL", "dbt", "ETL"],
    github: "https://github.com/Nischith7102005/aicwd",
    year: "2024",
    featured: true,
    image: "/images/monitr-ai.jpg",
  },
  {
    title: "PsyMap",
    tagline: "Content intelligence, visualized",
    description:
      "A local-first app that turns URLs and PDFs into interactive maps of interests, themes, and psychological traits, using force-directed graphs.",
    outcome: "Made large amounts of text scannable for planning and research teams.",
    tags: ["D3.js", "NLP", "Visualization"],
    github: "https://github.com/Nischith7102005/psymap",
    year: "2024",
    featured: true,
    image: "/images/psymap.jpg",
  },
  {
    title: "GreenMind",
    tagline: "Smart greenhouse management",
    description:
      "Full-stack platform that simulates IoT sensor data and gives AI-based grow recommendations, with authenticated access and persistent sessions.",
    outcome: "A working, auth-gated product with a clear monitor-to-optimize flow.",
    tags: ["React", "TypeScript", "Firebase", "IoT"],
    github: "https://github.com/Nischith7102005/Greenmind",
    year: "2024",
  },
  {
    title: "LaTeX Plagiarism Suite",
    tagline: "Audit and rewrite LaTeX in the browser",
    description:
      "A browser-only workflow to check and rewrite LaTeX prose while preserving commands, math, and citations, with sentence-level risk scoring.",
    outcome: "Academics could clean up documents without breaking compilation.",
    tags: ["JavaScript", "LaTeX", "NLP"],
    github: "https://github.com/Nischith7102005/latexplagiarism",
    year: "2024",
  },
  {
    title: "Living Dataset",
    tagline: "Synthetic data generation",
    description:
      "A notebook-based engine that expands small datasets through mutation, crossover, and classifier feedback to improve downstream model accuracy.",
    outcome: "Consistently better hold-out accuracy and rare-class recall on benchmark data.",
    tags: ["Python", "Jupyter", "Synthetic data"],
    github: "https://github.com/Nischith7102005/living-dataset",
    year: "2023",
  },
];

export const certifications = [
  { title: "AWS Cloud Foundations", issuer: "AWS Academy" },
  { title: "Data & Database Fundamentals", issuer: "IBM" },
  { title: "Cloud Platform Job Simulation", issuer: "Verizon (Forage)" },
  { title: "Data Analytics & AI", issuer: "Proov" },
  { title: "Data Analytics (SQL, Excel, Python)", issuer: "Certified" },
  { title: "MongoDB", issuer: "MongoDB University" },
];

export const education = {
  degree: "B.Tech in Computer Science and Technology",
  university: "Dayananda Sagar University",
  location: "Bengaluru, Karnataka, India",
  period: "2023 – 2027",
  cgpa: "8.13 / 10",
  coursework:
    "Database Management Systems, Data Structures, Cloud Computing, Operations & Systems Analysis",
};
