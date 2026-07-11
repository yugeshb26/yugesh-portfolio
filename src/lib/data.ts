// Single source of truth for portfolio content.
// Update this file to update the site — no component changes required.

export const profile = {
  name: "Yugesh B",
  role: "Data Engineer",
  tagline: "Data Engineer building automated pipelines, GenAI assistants, and large-scale scraping systems",
  location: "Chennai, Tamil Nadu, India",
  email: "yugeshb26@gmail.com",
  phone: "+91 77083 25738",
  github: "https://github.com/yugeshb26",
  linkedin: "https://www.linkedin.com/in/yugesh-b-331279230",
  resumeFile: "/resume.pdf",
  photo: "/photo.jpg",
  availability: "Open to new opportunities",
  yearsExperience: "4+",
  summary:
    "Data Engineer with 4+ years across web-scraping automation, ETL/data pipelines, and GenAI-powered applications. " +
    "Started in Perl-based publishing automation, moved through large-scale e-commerce scraping and Bloomberg financial " +
    "data engineering at TCS, and now builds data infrastructure and AI-assisted tooling at Thurro. Comfortable owning a " +
    "problem end-to-end — from a raw HTML page or PDF to a production pipeline or a working LLM-backed product.",
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "2", label: "Flagship Projects" },
  { value: "20+", label: "Technologies" },
];

export type ExperienceRole = {
  title: string;
  duration: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  totalDuration: string;
  roles: ExperienceRole[];
  techStack: string[];
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Thurro",
    location: "Chennai, India",
    totalDuration: "Dec 2025 — Present",
    current: true,
    roles: [
      {
        title: "Data Engineer",
        duration: "Dec 2025 — Present",
        bullets: [
          "Building and maintaining data engineering pipelines and analytics infrastructure across internal reporting and data-store systems.",
          "Working with database and reporting tooling spanning structured storage and analytical querying.",
        ],
      },
    ],
    techStack: ["Python", "SQL", "ETL", "Data Pipelines"],
  },
  {
    company: "Tata Consultancy Services",
    location: "Chennai, India",
    totalDuration: "Feb 2025 — Nov 2025",
    roles: [
      {
        title: "Senior Analyst (Python Data Analyst) — Key Client: Bloomberg",
        duration: "Feb 2025 — Nov 2025",
        bullets: [
          "Developed Power BI dashboards to visualize Bloomberg financial datasets, enabling data-driven decisions for stakeholders.",
          "Automated data cleaning (Python/pandas) and ETL pipelines for Bloomberg market data feeds, improving processing speed by 30%.",
          "Built Python ETL scripts to extract, transform, and load large-scale financial data into SQL/MongoDB databases.",
          "Collaborated with Bloomberg's analytics team to optimize data-retrieval queries, reducing report generation time by 25%.",
          "Designed a web scraping tool (Scrapy/Selenium) to collect supplementary financial data from public sources, improving dataset completeness.",
        ],
      },
    ],
    techStack: ["Python", "Pandas", "Power BI", "SQL", "MongoDB", "Scrapy", "Selenium"],
  },
  {
    company: "Lumina Datamatics",
    location: "Chennai, India",
    totalDuration: "May 2022 — Feb 2025 · 2 yrs 10 mos",
    roles: [
      {
        title: "Software Engineer",
        duration: "May 2024 — Feb 2025",
        bullets: [
          "eBay web scraping: designed end-to-end scraping pipelines (Scrapy, BeautifulSoup, Selenium) against JavaScript-heavy, AJAX-based e-commerce pages.",
          "Automated dynamic content handling with rate-limiting and retry mechanisms; cut scraping time by 40% via multi-threaded crawling.",
          "Processed scraped data into CSV/JSON/SQL and stored in MongoDB and MySQL for downstream analytics.",
          "E-commerce data processing: built Python validation/transformation scripts, resolved data anomalies, and integrated REST APIs for real-time sync.",
        ],
      },
      {
        title: "Junior Software Engineer",
        duration: "May 2023 — May 2024",
        bullets: [
          "JXpress automated publishing platform: automated XML/HTML transformations using Perl and regex-based text processing.",
          "Developed Python/MySQL automation for content-classification systems, improving workflow efficiency by 25% across 500+ daily manuscripts.",
        ],
      },
      {
        title: "Software Engineering Trainee",
        duration: "May 2022 — May 2023",
        bullets: [
          "Onboarded into production software engineering practices — agile delivery, code review, and on-call support for internal systems.",
        ],
      },
    ],
    techStack: ["Python", "Perl", "Scrapy", "Selenium", "BeautifulSoup", "MySQL", "MongoDB"],
  },
];

export const education = {
  degree: "BCA, Computer Programming & Applications",
  school: "Vel-Tech Ranga Sanku Arts College, Chennai",
  duration: "2018 — 2021",
};

export const certifications = [
  { name: "Salesforce Certified Administrator (SCA)", issuer: "Salesforce", verified: false },
  { name: "Python", issuer: "LinkedIn Learning", verified: false },
  { name: "Data Science (Machine Learning)", issuer: "LinkedIn Learning", verified: false },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  { category: "Languages", skills: ["Python", "Perl", "SQL"] },
  { category: "Web Scraping & Automation", skills: ["Selenium", "Playwright", "Scrapy", "BeautifulSoup", "urllib"] },
  { category: "Databases", skills: ["MySQL", "MongoDB", "SQLite", "ClickHouse"] },
  { category: "AI / GenAI", skills: ["LLM Integration (Gemini, Ollama)", "RAG-style Grounding", "Vector Databases", "GenAI Virtual Assistants", "Prompt Engineering"] },
  { category: "Data & Visualization", skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "ETL Pipelines"] },
  { category: "Cloud & Tooling", skills: ["AWS S3", "Git", "GitLab", "Streamlit Cloud", "Render"] },
  { category: "Practices", skills: ["Agile", "Scrum"] },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  stats: { label: string; value: string }[];
  contributions: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  docFile?: string;
  githubStats?: {
    stars: number;
    forks: number;
    languages: { name: string; bytes: number }[];
  };
};

export const projects: Project[] = [
  {
    slug: "indian-law-chatbot",
    name: "Indian Law AI Chatbot",
    tagline: "Streamlit-based legal Q&A assistant with a self-refreshing case-law dataset and multi-key LLM failover",
    summary:
      "A production Streamlit chatbot that answers questions on Indian law — the Bharatiya Nyaya Sanhita, Bharatiya " +
      "Nagarik Suraksha Sanhita, Bharatiya Sakshya Adhiniyam, the Constitution of India, and case law from the Supreme " +
      "Court and all 24 High Courts — grounded in a 20,700+ entry curated Q&A dataset built by parsing raw legislative " +
      "text and court judgments. Streams Gemini responses with automatic multi-key failover, renders LLM-generated " +
      "charts inline, and keeps its dataset current via a fully automated daily GitHub Actions pipeline.",
    stats: [
      { label: "Q&A Dataset Entries", value: "20.7K" },
      { label: "Courts / Tribunals Tracked", value: "24+" },
      { label: "Scraper Sources", value: "3" },
      { label: "Lines of Python", value: "3.3K" },
    ],
    contributions: [
      "Streaming chat engine with multi-key API failover — round-robin Gemini API key rotator with quota-aware failover, exponential backoff, and auto-continue logic that transparently resumes responses cut off by output-token limits.",
      "Self-refreshing legal dataset via GitHub Actions — a daily cron workflow pulls new Supreme Court, High Court, and tribunal judgments from Indian Kanoon's official RSS feeds and auto-commits new entries with no manual upkeep.",
      "Offline regex-based Q&A extraction pipeline — parses raw statutory text directly into 20,000+ structured Q&A pairs with no LLM calls, plus a secondary LLM-assisted extraction path for judgment text.",
      "Multi-source legal web scraping across three independent sources, each normalized into one unified Q&A schema.",
      "LLM-driven data visualization — the model emits structured chart JSON (bar, pie, line, timeline) alongside prose, parsed and rendered as themed Plotly figures inline in the chat.",
      "Persistent multi-conversation history via a SQLite-backed (WAL mode) chat/message store with auto-generated titles and regenerate/continue actions.",
      "Custom dark-themed UI with a GSAP/Three.js/Anime.js animation layer and a hand-built SVG icon set.",
      "Dual deployment targets — Streamlit Cloud and Render — with automatic environment-based API key sourcing.",
    ],
    techStack: ["Python", "Streamlit", "Google Gemini API", "SQLite", "Plotly", "GitHub Actions", "GSAP", "Three.js"],
    github: "https://github.com/yugeshb26/indian-law-chatbot",
    docFile: "/docs/indian-law-chatbot-overview.pdf",
    githubStats: {
      stars: 0,
      forks: 0,
      languages: [
        { name: "Python", bytes: 143117 },
        { name: "CSS", bytes: 60628 },
      ],
    },
  },
  {
    slug: "automated-document-intelligence-pipeline",
    name: "Automated Document Intelligence Pipeline",
    tagline: "Multi-engine web scraping & dual-database data pipeline for financial/regulatory disclosure documents",
    summary:
      "A production data-collection system that scrapes portfolio holdings, factsheets, insurer newsletters, and " +
      "regulatory (RBI/SEBI) filings from 229 site-specific configurations spanning mutual funds, banks, insurers, and " +
      "regulators — normalizing, deduplicating, and loading results into a dual-database (MySQL + ClickHouse) pipeline " +
      "with automated S3 archival. Built and maintained end-to-end across ~29,000 lines of Python.",
    stats: [
      { label: "Site Configs", value: "229" },
      { label: "Scraping Engines", value: "3" },
      { label: "Databases", value: "2" },
      { label: "Lines of Python", value: "~29K" },
    ],
    contributions: [
      "Config-driven scraping framework processing 229 distinct site sources from a single unified codebase, eliminating per-site custom scripts via declarative YAML configuration.",
      "Multi-engine fallback scraping chain (Selenium → Playwright → static HTTP) that escalates to heavier browser automation only when a lighter engine fails.",
      "Dual-database persistence layer (MySQL + ClickHouse) with automated staging tables, cross-database sync, and a date-validation quarantine system for ambiguous or invalid dates.",
      "LLM-based fallback date-resolution mechanism (via Ollama) as a last-resort recovery step before any record is quarantined.",
      "2,300+ line date/fiscal-quarter extraction engine handling Indian fiscal-year conventions and dozens of site-specific edge cases, backed by a 40+ case regression suite.",
      "Authentication abstraction layer supporting form-based login, SSO/redirect flows, and manual/OTP-gated sites.",
      "Parallel execution runner using multiprocessing across all 229 configs with per-source retry and resilience.",
      "Anti-bot-detection handling (Selenium-stealth, undetected-chromedriver, CDP fingerprint masking) for Akamai/Cloudflare-style bot mitigation.",
      "Automated S3 upload pipeline with rate limiting and retry handling for archiving collected documents at scale.",
    ],
    techStack: ["Python", "Selenium", "Playwright", "undetected-chromedriver", "MySQL", "ClickHouse", "AWS S3", "Ollama", "BeautifulSoup"],
    docFile: "/docs/gen-link-scheduler-overview.pdf",
  },
];
