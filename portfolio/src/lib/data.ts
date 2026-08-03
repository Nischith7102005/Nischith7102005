/* -------------------------------------------------------------------------- */
/*  Identity                                                                  */
/* -------------------------------------------------------------------------- */

export const identity = {
  name: "Nischith R",
  initials: "NR",
  headline: "Business Operations · Supply Chain · Technology Management",
  tagline:
    "I solve business problems with technology, automation, analytics, and AI.",
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
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I intentionally chose to study Computer Science and Technology because it sits at the intersection of deep technical knowledge and business, management, entrepreneurship, and operations. My ambition was never traditional software development — it is using technology to solve business problems.",
    "I care about the systems behind organisations: how processes flow, how information moves between teams, and where automation, analytics, and AI can remove friction and drive measurable efficiency. I enjoy bridging technical and business teams, translating requirements into clear plans, and building the workflows that let companies operate with clarity and speed.",
    "Today I bring together business analysis, operations, supply chain thinking, project coordination, and operations analytics to improve how work gets done — and I am always learning how new technology can make business outcomes better.",
  ],
  stats: [
    { label: "CGPA", value: "8.13", suffix: "/10", decimals: 2 },
    { label: "Graduation Year", value: "2027", suffix: "", decimals: 0 },
    { label: "Projects Delivered", value: "12", suffix: "+", decimals: 0 },
    { label: "Certifications", value: "6", suffix: "+", decimals: 0 },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Career Interests                                                          */
/* -------------------------------------------------------------------------- */

export interface CareerInterest {
  title: string;
  description: string;
}

export const careerInterests: CareerInterest[] = [
  {
    title: "Business & Operations Analysis",
    description:
      "Translating business needs into clear requirements, process maps, and actionable solutions.",
  },
  {
    title: "Supply Chain & Logistics",
    description:
      "Coordinating procurement, inventory control, and distribution networks to keep value chains flowing.",
  },
  {
    title: "Project Management & PMO",
    description:
      "Planning delivery milestones, coordinating cross-functional teams, and standardising governance.",
  },
  {
    title: "Product & Technology Operations",
    description:
      "Operationalising technology and AI deployments with workflows, data, and cross-team alignment.",
  },
  {
    title: "Strategy & Process Improvement",
    description:
      "Mapping, measuring, and redesigning workflows to remove waste and improve organizational throughput.",
  },
  {
    title: "Operations Analytics",
    description:
      "Turning raw operational signals into dashboards, KPIs, and evidence-based decision support.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export interface SkillCategory {
  id: string;
  label: string;
  blurb: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "business",
    label: "Business & Operations",
    blurb:
      "The core operating disciplines that keep teams aligned and delivering.",
    skills: [
      "Requirements Engineering",
      "Process Mapping & BPMN",
      "Workflow Optimization",
      "Gap & Root Cause Analysis",
      "KPI & Metrics Benchmarking",
      "Sprint & Milestone Planning",
      "Stakeholder Alignment",
      "Risk & Resource Management",
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    blurb: "Turning raw information into reporting, insight, and decisions.",
    skills: [
      "SQL",
      "Python",
      "Excel & VBA",
      "Pandas & NumPy",
      "dbt Core",
      "MongoDB",
      "ETL Pipelines",
      "Data Visualization",
      "Statistical Reporting",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Deployment",
    blurb: "Shipping, hosting, and operating technology reliably and securely.",
    skills: [
      "AWS Services",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Jenkins",
      "Vercel & Render",
      "Railway",
      "Environment Management",
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    blurb:
      "Using AI and workflow automation to remove friction and scale effort.",
    skills: [
      "n8n Workflow Automation",
      "AI Process Integration",
      "Prompt Engineering",
      "AI Monitoring Dashboards",
      "REST APIs & Webhooks",
      "Cognitive Waste Indexing",
      "LLM Observability",
      "RAG & Embeddings",
    ],
  },
  {
    id: "research",
    label: "Research & Strategy",
    blurb: "Synthesising information to inform strategy and decisions.",
    skills: [
      "Technical Documentation",
      "Market & Industry Research",
      "Information Synthesis",
      "Executive Reporting",
      "Web Scraping",
      "Competitive Analysis",
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
    period: "Internship",
    summary:
      "Interned with a social-impact organisation, applying technology and process skills to keep projects coordinated, documented, and on track across distributed teams.",
    highlights: [
      "Cross-functional coordination across technology, program, and operations teams",
      "Documentation of workflows, processes, and technical handoffs",
      "Workflow optimization to reduce manual effort and repetition",
      "Task management, prioritisation, and milestone tracking for ongoing initiatives",
      "Stakeholder reporting and status communication to keep leadership informed",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects - Merged from all GitHub repos                                   */
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
    tagline: "Secure digital certificate verification",
    description:
      "Secure, scalable credential verification platform eliminating academic forgery and manual verification inefficiencies. Tamper-proof issuance with instant cryptographic validation.",
    focus: [
      "Led end-to-end delivery planning, sprint cycles, and milestone tracking",
      "Designed QR + hash-based authenticity checks with metadata verification",
      "Built AI verification engine: OCR via Tesseract.js, layout tampering analysis, trust score 0-100",
      "Coordinated cross-functional execution between technical and business teams",
    ],
    outcome:
      "Shipped a structured, well-documented product reducing verification time from days to seconds with immutable audit trails.",
    tags: ["Project Leadership", "Cryptography", "OCR", "QR Auth", "Next.js"],
    github: "https://github.com/Nischith7102005/certisure",
    year: "2024",
    featured: true,
    category: "Security / Product",
  },
  {
    title: "GreenMind",
    tagline: "Smart greenhouse management",
    description:
      "Full-stack smart agriculture platform with parallax greenhouse storytelling, IoT sensor simulation, and AI-driven grow recommendations. Firebase Auth enabled.",
    focus: [
      "Built responsive hero with parallax greenhouse images and sticky stacking cards",
      "Implemented Firebase Auth (email/password) with persistent sessions",
      "Designed How-It-Works: Connect → Monitor → Optimize flow",
      "Production build: single-file optimized dist with inlined assets",
    ],
    outcome:
      "Delivered a visually rich, authenticated product experience showing Smart Sensing, AI Insights, Predictive Guard, and AI Companion modules.",
    tags: ["TypeScript", "React", "Firebase", "Parallax", "IoT"],
    github: "https://github.com/Nischith7102005/Greenmind",
    year: "2024",
    featured: true,
    category: "IoT / AI",
  },
  {
    title: "Monitr-AI",
    tagline: "LLM observability & cognitive waste",
    description:
      "Static-first LLM observability platform with real-time dashboards, adversarial testing, and automated ETL pipelines. Proprietary Cognitive Waste Index framework.",
    focus: [
      "Designed Cognitive Waste Index combining semantic drift, efficiency, and quality",
      "Built interactive monitoring dashboards for token efficiency, latency, costs, success rates",
      "Engineered Convex → Webhook → Postgres → dbt Core ETL with GitHub Actions cron",
      "Probed models with uncensored local LLMs for bias and censorship detection",
    ],
    outcome:
      "Turned raw LLM signals into visible KPIs that help teams spot inefficiency and act on it across inference lifecycles.",
    tags: ["LLMs", "Observability", "dbt", "Convex", "Postgres", "ETL"],
    github: "https://github.com/Nischith7102005/aicwd",
    year: "2024",
    featured: true,
    category: "AI / Data Ops",
  },
  {
    title: "Séance Search",
    tagline: "Desktop necromancer for dead internet",
    description:
      "Excavates the dead web: searches Wayback Machine CDX for real 404 URLs, then uses AI to channel the voice of each dead site. Electron desktop + web app.",
    focus: [
      "Queried Internet Archive CDX API across multi-strategy dead URL discovery",
      "Built era detector: GeoCities, LiveJournal, Flash Portal, Failed Startup classification",
      "Implemented AI channeling via OpenRouter (gemma-3-12b + fallback) with persistent Grimoire",
      "Created GSAP + Canvas ink brush intro animation and ectoplasm rating system",
    ],
    outcome:
      "Transformed archival search into narrative experience where ghosts remember prior summonings with Wayback deep links.",
    tags: ["Electron", "Wayback", "OpenRouter", "SQLite", "GSAP"],
    github: "https://github.com/Nischith7102005/seance-search",
    year: "2024",
    featured: true,
    category: "AI / Creative Tech",
  },
  {
    title: "PsyMap — Mind Brain Map",
    tagline: "Content intelligence & psychological patterns",
    description:
      "Local-first app converting web URLs and PDFs into interactive brain map visualizations. D3.js force-directed graph showing interests, themes, and personality traits.",
    focus: [
      "Engineered strategic planning models for complex information architectures",
      "Implemented word frequency, 6-theme detection (Tech, Science, Business, Health, Arts, Society)",
      "Built psychological profiling: Analytical, Creative, Practical, Social, Ambitious, Curious",
      "100% local processing, no data storage, draggable nodes, zoom & pan export",
    ],
    outcome:
      "Provided a clear, visual decision-support layer for planning teams navigating complex information.",
    tags: ["D3.js", "NLP", "Privacy-First", "Visualization", "Strategy"],
    github: "https://github.com/Nischith7102005/psymap",
    year: "2024",
    featured: true,
    category: "Data Viz / Strategy",
  },
  {
    title: "AbyssLink",
    tagline: "Ephemeral encrypted chat",
    description:
      "Zero-persistence, invite-only, end-to-end encrypted chat. No accounts, no tracking, 24h auto-destruct rooms. Browser-encrypted via AES-GCM + PBKDF2.",
    focus: [
      "Architected in-memory only backend: secrets exist only during runtime",
      "Implemented client-side E2E encryption, bcrypt room password hash never plaintext",
      "Hardened with rate limiting, input sanitization, strict CSP, zero logs",
      "Hosted-only design: Vercel frontend + Render Docker backend, no local mode by intent",
    ],
    outcome:
      "Delivered absolute anonymity baseline where server never sees plaintext and rooms vanish permanently after expiry.",
    tags: ["Security", "E2E Encryption", "Zero-Trust", "Vercel", "Render"],
    github: "https://github.com/Nischith7102005/abysslink",
    year: "2024",
    featured: true,
    category: "Security / Privacy",
  },
  {
    title: "KeyHound 2.0",
    tagline: "AI-powered security scanner",
    description:
      "Enterprise security scanning platform: credential leaks, PII, vulnerabilities, misconfig detection. Subscription tiers, Stripe, Supabase RLS, compliance mapping.",
    focus: [
      "Designed 9-table PostgreSQL schema with RLS policies, triggers, and compliance frameworks pre-loaded",
      "Integrated Stripe checkout, billing portal, webhooks, JWT + Firebase Admin auth",
      "Built Groq AI integration for severity classification, remediation generation, compliance mapping",
      "Implemented tier enforcement: Free 10 scans, Pro unlimited, Enterprise SSO/SIEM/on-prem",
    ],
    outcome:
      "Shipped foundation covering DB, payments, auth, AI analysis with 85% test pass, ready for deep crawling and team collaboration.",
    tags: ["TypeScript", "Groq AI", "Supabase", "Stripe", "Security"],
    github: "https://github.com/Nischith7102005/keyhound",
    year: "2024",
    featured: false,
    category: "Security / SaaS",
  },
  {
    title: "LaTeX Plagiarism Suite",
    tagline: "Checker & remover — browser only",
    description:
      "Browser-only workflow for checking and safely rewriting LaTeX while preserving commands, math, citations, labels. Strict risk scoring for academic phrasing.",
    focus: [
      "Validated LaTeX, protected spans for commands, math, verbatim, lstlisting, citations",
      "Extracted natural-language sentences and scored plagiarism risk per sentence",
      "Rewrites only unprotected prose while preserving \\cite, \\ref, math intact",
      "Deployed to GitHub Pages via Actions on every push to master",
    ],
    outcome:
      "Enabled academics to audit and remediate LaTeX without breaking compilation or losing protected semantics.",
    tags: ["JavaScript", "LaTeX", "NLP", "GitHub Pages"],
    github: "https://github.com/Nischith7102005/latexplagiarism",
    year: "2024",
    featured: false,
    category: "Tooling / NLP",
  },
  {
    title: "Living Dataset",
    tagline: "Evolutionary synthetic data engine",
    description:
      "Single notebook that breeds new synthetic images/text by mutation, crossover and fitness-based selection. Generates high-value training data adapting to downstream weak spots.",
    focus: [
      "Implemented Gaussian noise + crossover + classifier feedback loop",
      "Swap any CSV: evolution cell stays identical, mutation scale 0.05, gens 5, pop_size = row count",
      "Outputs evolved.csv, before_after.png scatter, accuracy.txt before vs after",
      "Benchmark: Iris 120→120 synthetic +4% hold-out accuracy, +8% rare-class recall",
    ],
    outcome:
      "Grew fresh training rows locally with no uploads, reproducible via np.random.seed(42), reducing re-identification risk.",
    tags: ["Jupyter", "Synthetic Data", "Evolutionary", "Python"],
    github: "https://github.com/Nischith7102005/living-dataset",
    year: "2023",
    featured: false,
    category: "AI / Data",
  },
  {
    title: "Excel File Validator",
    tagline: "Streamlit validation pipeline",
    description:
      "Streamlit-based web app built in Python: uploads Excel files, validates data, returns downloadable file with validation results. CLI + web run.",
    focus: [
      "Core validation logic separate from Streamlit UI for testability",
      "Upload and validate Excel files with detailed per-row error reporting",
      "Download validated results with clear pass/fail markers",
      "Sample data + requirements included for zero-friction onboarding",
    ],
    outcome:
      "Reduced manual Excel QA effort by automating collection, validation, and reporting in a simple UI.",
    tags: ["Python", "Streamlit", "Data QA", "Excel"],
    github: "https://github.com/Nischith7102005/excelfilevalidator",
    year: "2023",
    featured: false,
    category: "Data / Automation",
  },
];

/* -------------------------------------------------------------------------- */
/*  Certifications                                                            */
/* -------------------------------------------------------------------------- */

export const certifications = [
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    description:
      "Foundations of cloud concepts, core AWS services, security, and architecture.",
  },
  {
    title: "IBM Data & Database Fundamentals",
    issuer: "IBM",
    description:
      "Core data and database concepts, SQL, and data management fundamentals.",
  },
  {
    title: "Verizon Cloud Platform Job Simulation",
    issuer: "Forage",
    description:
      "Realistic cloud platform tasks simulating an operations-oriented work environment.",
  },
  {
    title: "Data Analytics (SQL, Excel & Python)",
    issuer: "Certification",
    description:
      "Practical analytics workflow combining SQL, Excel, and Python for insight.",
  },
  {
    title: "Data Analytics & AI",
    issuer: "Proov",
    description:
      "Applying analytics and AI techniques to real business and data problems.",
  },
  {
    title: "MongoDB",
    issuer: "MongoDB University",
    description: "Document database design, modeling, and querying with MongoDB.",
  },
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
    "Core Coursework: Database Management Systems, Data Structures, Cloud Computing, Operations & Systems Analysis",
    "Specialized focus on process optimization, supply chain analytics, and technical project management",
    "Engaged in hands-on technical simulations, hackathons, and industry certification tracks",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Navigation & Contact                                                      */
/* -------------------------------------------------------------------------- */

export const nav = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = {
  social: [
    { label: "GitHub", href: "https://github.com/Nischith7102005" },
    { label: "LinkedIn", href: "https://linkedin.com/in/nischith-r-857669296" },
    { label: "Email", href: "mailto:nischith.7102005@gmail.com" },
  ],
};
