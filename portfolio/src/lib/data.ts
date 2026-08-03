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
    title: "Business Analysis",
    description: "Turning business needs into clear requirements, process maps, and actionable solutions.",
  },
  {
    title: "Operations Management",
    description: "Running day-to-day operations so teams deliver predictably, efficiently, and at scale.",
  },
  {
    title: "Supply Chain & Logistics",
    description: "Coordinating procurement, inventory, and distribution to keep value chains flowing.",
  },
  {
    title: "Project & Program Management",
    description: "Planning milestones, coordinating cross-functional teams, and delivering on time.",
  },
  {
    title: "PMO",
    description: "Standardising governance, reporting, and portfolio visibility for program success.",
  },
  {
    title: "Product Operations",
    description: "Operationalising product decisions with data, workflows, and cross-team alignment.",
  },
  {
    title: "Procurement & Inventory",
    description: "Optimising sourcing, stock levels, and supplier performance to control cost and risk.",
  },
  {
    title: "Finance & Business Operations",
    description: "Aligning operational and financial metrics to improve planning and profitability.",
  },
  {
    title: "Strategy & Planning",
    description: "Shaping long-term direction, priorities, and roadmaps with structure and evidence.",
  },
  {
    title: "Process Improvement",
    description: "Mapping, measuring, and redesigning workflows to remove waste and boost throughput.",
  },
  {
    title: "Operations Analytics",
    description: "Turning operational data into dashboards, KPIs, and decisions that move outcomes.",
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
      "Business Analysis",
      "Operations Management",
      "Process Improvement",
      "Project Coordination",
      "Requirements Gathering",
      "Process Mapping",
      "Workflow Optimization",
      "Stakeholder Communication",
      "Gap Analysis",
      "Strategic Planning",
      "KPI Reporting",
      "Operations Analytics",
      "Inventory Tracking",
      "Business Communication",
      "Cross-functional Collaboration",
      "Technical Documentation",
      "Sprint Planning",
      "Milestone Tracking",
      "Task Management",
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    blurb: "Turning raw information into reporting, insight, and decisions.",
    skills: [
      "SQL",
      "Excel",
      "Python",
      "Pandas",
      "MongoDB",
      "dbt Core",
      "ETL",
      "Data Visualization",
      "Reporting",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Deployment",
    blurb: "Shipping, hosting, and operating technology reliably and securely.",
    skills: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Vercel",
      "Render",
      "Railway",
      "Convex",
      "CI/CD",
      "Environment Configuration",
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    blurb: "Using AI and workflow automation to remove friction and scale effort.",
    skills: [
      "Prompt Engineering",
      "AI-Assisted Research",
      "AI Workflow Optimization",
      "AI-Assisted Development",
      "AI Content Generation",
      "AI Data Analysis",
      "n8n",
      "REST APIs",
      "API Integration",
      "Process Automation",
    ],
  },
  {
    id: "research",
    label: "Research",
    blurb: "Synthesising information to inform strategy and decisions.",
    skills: [
      "Technical Research",
      "Internet Research",
      "Documentation",
      "Long-form Writing",
      "Information Synthesis",
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
      "Project leadership and delivery planning",
      "Sprint planning and milestone tracking",
      "Stakeholder requirement gathering",
      "Technical documentation and API specifications",
      "Architecture documentation",
      "Cross-functional coordination across teams",
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
      "Operations analytics and KPI reporting",
      "AI monitoring dashboards",
      "Business dashboards for decision support",
      "Cognitive Waste Index framework design",
      "Operational decision support",
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
      "Strategic planning",
      "Requirements engineering",
      "Content intelligence",
      "Interactive visualization",
      "Decision support",
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
    "Focused on applying computing to business, operations, and analytics",
    "Combined technical coursework with management, entrepreneurship, and operations thinking",
    "Built hands-on projects spanning analytics, automation, AI, and process improvement",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Navigation & Contact                                                      */
/* -------------------------------------------------------------------------- */

export const nav = [
  { label: "About", href: "#about" },
  { label: "Interests", href: "#interests" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
