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
    { label: "Projects Delivered", value: "6", suffix: "+", decimals: 0 },
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
    description: "Translating business needs into clear requirements, process maps, and actionable solutions.",
  },
  {
    title: "Supply Chain & Logistics",
    description: "Coordinating procurement, inventory control, and distribution networks to keep value chains flowing.",
  },
  {
    title: "Project Management & PMO",
    description: "Planning delivery milestones, coordinating cross-functional teams, and standardising governance.",
  },
  {
    title: "Product & Technology Operations",
    description: "Operationalising technology and AI deployments with workflows, data, and cross-team alignment.",
  },
  {
    title: "Strategy & Process Improvement",
    description: "Mapping, measuring, and redesigning workflows to remove waste and improve organizational throughput.",
  },
  {
    title: "Operations Analytics",
    description: "Turning raw operational signals into dashboards, KPIs, and evidence-based decision support.",
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
    blurb: "The core operating disciplines that keep teams aligned and delivering.",
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
    blurb: "Using AI and workflow automation to remove friction and scale effort.",
    skills: [
      "n8n Workflow Automation",
      "AI Process Integration",
      "Prompt Engineering",
      "AI Monitoring Dashboards",
      "REST APIs & Webhooks",
      "Cognitive Waste Indexing",
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
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export interface Project {
  title: string;
  tagline: string;
  description: string;
  focus: string[];
  outcome: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "CertiSure",
    tagline: "Credential verification platform",
    description:
      "Led the planning and delivery of a platform that verifies and manages digital credentials, coordinating stakeholders and translating business needs into a clear technical plan.",
    focus: [
      "Led end-to-end delivery planning, sprint cycles, and milestone tracking",
      "Conducted stakeholder requirement gathering and scope definition",
      "Authored technical specifications, architecture diagrams, and API documentation",
      "Coordinated cross-functional execution between technical and business teams",
    ],
    outcome:
      "Shipped a structured, well-documented product by aligning stakeholders on requirements and keeping delivery on schedule.",
    tags: ["Project Leadership", "Requirements", "APIs", "Documentation", "Coordination"],
  },
  {
    title: "Monitr-AI",
    tagline: "AI monitoring & operational dashboards",
    description:
      "Built operations analytics and monitoring dashboards that surface KPIs and support operational decisions, centred on a Cognitive Waste Index framework.",
    focus: [
      "Designed a Cognitive Waste Index framework to measure operational inefficiency",
      "Built interactive monitoring dashboards for real-time KPI visibility",
      "Engineered data pipelines to turn raw operational signals into actionable metrics",
      "Provided structured reporting to support leadership decision-making",
    ],
    outcome:
      "Turned raw operational signals into visible KPIs that help teams spot inefficiency and act on it.",
    tags: ["Operations Analytics", "Dashboards", "KPIs", "AI Monitoring", "Decision Support"],
  },
  {
    title: "Psymap",
    tagline: "Content intelligence & strategy",
    description:
      "A strategic planning project combining requirements engineering and content intelligence with interactive visualisation to support better decisions.",
    focus: [
      "Engineered strategic planning models for complex information architectures",
      "Translated qualitative stakeholder needs into structured requirements",
      "Developed interactive data visualisations to clarify strategic tradeoffs",
      "Integrated content intelligence to streamline strategic planning workflows",
    ],
    outcome:
      "Provided a clear, visual decision-support layer for planning teams navigating complex information.",
    tags: ["Strategy", "Requirements", "Visualization", "Decision Support"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Certifications                                                            */
/* -------------------------------------------------------------------------- */

export const certifications = [
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    description: "Foundations of cloud concepts, core AWS services, security, and architecture.",
  },
  {
    title: "IBM Data & Database Fundamentals",
    issuer: "IBM",
    description: "Core data and database concepts, SQL, and data management fundamentals.",
  },
  {
    title: "Verizon Cloud Platform Job Simulation",
    issuer: "Forage",
    description: "Realistic cloud platform tasks simulating an operations-oriented work environment.",
  },
  {
    title: "Data Analytics (SQL, Excel & Python)",
    issuer: "Certification",
    description: "Practical analytics workflow combining SQL, Excel, and Python for insight.",
  },
  {
    title: "Data Analytics & AI",
    issuer: "Proov",
    description: "Applying analytics and AI techniques to real business and data problems.",
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
