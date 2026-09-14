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
  { value: "6", label: "Flagship Projects" },
  { value: "30+", label: "Technologies" },
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
          "Designed and built a distributed job-execution platform (FastAPI + MySQL + APScheduler) that centrally schedules, dispatches, and tracks ~1,500 production web-scraping scripts across a multi-server AWS EC2 fleet, replacing a fragmented per-machine cron setup with zero code duplication.",
          "Architected a broker-free, database-polling job queue using row-level locking (SELECT ... FOR UPDATE SKIP LOCKED) with automatic crash detection and retry-with-backoff, deployed end-to-end on AWS EC2 Windows servers as auto-restarting native services (NSSM).",
          "Built and hardened a config-driven RAG ingestion pipeline processing 28+ financial/regulatory sources into a ClickHouse-backed vector corpus, including diagnosing a native heap-corruption crash and a cross-host n8n execution bug in production.",
          "Reverse-engineered a captcha-gated government vehicle-registration portal into a 5–10x faster automated data pipeline, uncovering and fixing a data-classification bug responsible for ~1.7M misclassified vehicle registrations.",
          "Built an LLM+VLM-powered extraction pipeline turning 40+ regulatory PDF disclosure forms across 30+ Indian insurance companies into structured financial data, using a two-pass text-then-vision verification flow.",
        ],
      },
    ],
    techStack: ["Python", "FastAPI", "SQLAlchemy", "APScheduler", "MySQL", "ClickHouse", "AWS EC2", "Docker", "Playwright", "Ollama", "Google Gemini API"],
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
  { category: "Backend & APIs", skills: ["FastAPI", "APScheduler", "REST APIs", "SQLAlchemy 2.0"] },
  { category: "Web Scraping & Automation", skills: ["Selenium", "Playwright", "Scrapy", "BeautifulSoup", "requests", "urllib"] },
  { category: "Databases", skills: ["MySQL", "MongoDB", "SQLite", "ClickHouse"] },
  { category: "AI / GenAI", skills: ["LLM Integration (Gemini, Ollama)", "Vision-Language Models (VLM)", "RAG Pipelines", "VoyageAI Embeddings", "Vector Databases", "Prompt Engineering"] },
  { category: "Data & Visualization", skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "ETL Pipelines", "PyMuPDF", "openpyxl"] },
  { category: "Cloud & Tooling", skills: ["AWS S3", "AWS EC2", "Docker", "NSSM", "n8n", "Zyte", "Git", "GitLab", "Streamlit Cloud", "Render"] },
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
  {
    slug: "distributed-scraper-execution-platform",
    name: "Distributed Scraper Execution Platform",
    tagline: "Broker-free, database-polling job orchestration platform coordinating ~1,500 production scraping scripts across a multi-server AWS EC2 fleet",
    summary:
      "Thurro ran roughly 1,500 Python scraping scripts (Selenium, Playwright, requests) across multiple Windows/Linux EC2 " +
      "servers on ad-hoc, per-machine cron schedules — with no central visibility into what ran, what failed, or how to add " +
      "capacity without copying scripts to every new box. Designed and built a control plane from an architecture document " +
      "down to a live production deployment: a central code server all workers reach over a live SMB share (zero code " +
      "duplication), a FastAPI control plane, a database-driven scheduler, and a pull-based worker fleet that claims work " +
      "with row-level locking instead of a message broker.",
    stats: [
      { label: "Scripts Orchestrated", value: "~1,500" },
      { label: "Core DB Tables", value: "4" },
      { label: "Validated Live", value: "20 scripts" },
      { label: "Code Duplication", value: "Zero" },
    ],
    contributions: [
      "Broker-free distributed job queue in MySQL using row-level locking (SELECT ... FOR UPDATE SKIP LOCKED) so concurrent workers atomically claim eligible work with no message broker and no race conditions.",
      "FastAPI control plane plus an APScheduler-based central scheduler reading cron/interval schedules from the database as the single source of truth for 'is this job due.'",
      "Zero-code-duplication architecture — one central code server exposes all ~1,500 scripts over a live SMB network share (via Windows symbolic links, not junctions, since junctions don't support network paths); new worker capacity needs only a bare Python venv.",
      "Full observability: every execution attempt is recorded with status, timing, and — on failure — the complete traceback plus a classified error type (dependency, timeout, network, HTTP 403/429, browser-automation).",
      "Automatic crash recovery — a background sweep detects jobs stuck 'running' past 2x their expected timeout, marks them failed, and retries with exponential backoff, so a dead worker never silently loses a job.",
      "Per-job concurrency policies (single-instance, max-parallel, capability-pool or server-pinned routing) enforced centrally so slow jobs can't pile up overlapping runs.",
      "Diagnosed and fixed a real SQLAlchemy 1.x→2.0 breaking-change bug in shared production logging code used across the entire scraper codebase.",
      "Validated against 20 real production scripts (Selenium/Playwright/requests) end-to-end, then deployed to live AWS EC2 Windows servers — Security Groups, Windows Firewall, SMB shares, and all three long-running processes (API, scheduler, worker) converted into auto-restarting native Windows Services (NSSM) so the platform survives a reboot unattended.",
    ],
    techStack: ["Python", "FastAPI", "SQLAlchemy 2.0", "APScheduler", "MySQL", "AWS EC2", "Windows Services (NSSM)", "Selenium", "Playwright"],
  },
  {
    slug: "adqvest-document-chunking-embedding-pipeline",
    name: "AdQvest Document Chunking & Embedding Pipeline",
    tagline: "Config-driven RAG ingestion pipeline turning 28+ financial/regulatory sources into an embedded, searchable vector corpus",
    summary:
      "A production RAG ingestion pipeline that scrapes, extracts, classifies, chunks, embeds, and indexes financial and " +
      "regulatory documents (NSE/BSE announcements, SEBI circulars, RBI bulletins, PIB releases, and more) from 28+ " +
      "heterogeneous sources landing in S3. A single generic, YAML-configured engine handles all 28 source tables through " +
      "declarative config rather than one bespoke script per source, writing embedded chunks into ClickHouse for downstream " +
      "RAG applications to query.",
    stats: [
      { label: "Source Tables", value: "28+" },
      { label: "Aggregate Collections", value: "7" },
      { label: "ClickHouse Instances", value: "3" },
      { label: "Embeddings", value: "VoyageAI" },
    ],
    contributions: [
      "Config-driven core (table_registry.yaml) declaring every one of 28 source tables once — its S3 landing path, target ClickHouse table, field overrides, and schedule — so adding a new source is a config entry, not new code.",
      "Generic chunking engine: downloads from S3, extracts text (pypdfium2 + PyMuPDF with scanned-page/OCR detection), classifies document type, chunks and embeds via VoyageAI, and writes to ClickHouse with safeguards so a partial failure never marks a truncated document 'done.'",
      "Aggregation layer rolling up 28 per-source chunk tables into 7 shared collection tables that downstream retrieval actually queries against.",
      "Diagnosed a silent production failure where 'chunked' rows never processed further — traced through the full trigger chain to a broken n8n integration executing commands on the n8n host instead of inside the application container, affecting every scheduled table.",
      "Redesigned single-threaded, serialized chunking into a concurrent, per-table-parallel architecture (semaphore-bounded worker pools) so independently-scheduled tables never block each other, without double-processing any table.",
      "Root-caused a native heap-corruption crash (malloc(): unaligned fastbin chunk detected) that the concurrency work exposed — pypdfium2/PyMuPDF aren't thread-safe — and landed on a subprocess-isolated, timeout-bounded extraction layer that survives both crashes and hangs.",
      "Fixed a connection-leak-driven MySQL lock-timeout cascade by replacing a per-call engine with a process-wide singleton SQLAlchemy engine with automatic retry/backoff.",
      "Hardened the error-logging path itself with connect timeouts, retry logic, and a local disk-spool fallback so failures are never silently lost even during downstream outages.",
    ],
    techStack: ["Python", "MySQL", "ClickHouse", "AWS S3", "Docker", "VoyageAI", "pypdfium2", "PyMuPDF", "n8n"],
  },
  {
    slug: "vahan-vehicle-registration-data-pipeline",
    name: "VAHAN Vehicle Registration Data Pipeline",
    tagline: "Reverse-engineered a captcha-gated government portal into a 5–10x faster pipeline, uncovering a bug behind 1.7M misclassified vehicle registrations",
    summary:
      "VAHAN, India's government vehicle-registration analytics portal, has no official API, gates every query behind a " +
      "captcha, and silently fails on queries that are too broad for its backend. Reverse-engineered the portal's real JSON " +
      "endpoint and built a resilient, self-healing pipeline collecting Maker × Vehicle-Category × Fuel-Type × State × Month " +
      "registration data at national scale — replacing a fragile browser-automation scraper, while independently " +
      "discovering and fixing data-integrity bugs worth millions of misclassified vehicle registrations.",
    stats: [
      { label: "Report Configs", value: "20+" },
      { label: "Misclassified Records Found", value: "~1.7M" },
      { label: "Historical Backfill", value: "2013–2026" },
      { label: "Speed vs. Browser Engine", value: "5–10x" },
    ],
    contributions: [
      "Reverse-engineered the portal's undocumented JSON API (maker-report-page), identifying the exact request shape required and confirming the endpoint is captcha-exempt within a session's trust window — bypassing the need to click through the UI for every query.",
      "Built two parallel scraping engines: a Playwright browser-automation engine as ground truth, and a pure-requests engine talking to the JSON API directly — 5–10x faster and verified via live A/B testing to mirror the browser engine exactly.",
      "Automated captcha solving via local (Ollama) and cloud vision-language models, with magic-byte image validation and a 3-attempt retry loop so a single OCR misread doesn't silently drop a data combination.",
      "Resilience layer: proxy fallback (Zyte) triggered only on genuine blocking codes (403/429/503, distinguished from real portal downtime), 3-way concurrent state scraping, per-combination failure tracking with automatic end-of-run retry, and per-state resumability after a killed run.",
      "Solved the portal's pagination-collapse bug through systematic category/fuel-type query narrowing — looping ~13 vehicle categories individually plus a smart fuel-bucketing strategy that avoids 28 extra slow queries while guaranteeing complete coverage.",
      "Found and fixed 3 serious data-integrity bugs through independent investigation: a varchar-truncation duplicate bug (1,100+ duplicate rows), a category-overlap double-counting issue, and a 'still-open month' date-labeling bug (corrected 25,000+ rows across 7 tables).",
      "Discovered and fixed the 'Pure EV' misclassification bug — two distinct EV fuel-type filters were being treated as one, so an entire fast-growing segment was never collected anywhere. Quantified the impact at ~1.7M missing registrations over 8 months, proved the fix via exact month-by-month reconciliation, then backfilled the historical data.",
      "Built a rigorous 4-way reconciliation framework (grand-total vs. category-only vs. fuel-only vs. combined breakdowns), cross-validated with live spot-checks against the portal's own Excel exports, and delivered findings as a published interactive data-visualization report.",
      "Extended the pipeline with config-driven, per-category collection rules and backfilled 14 years of historical data (2013–2026) at national and state level, while keeping a parallel production codebase in sync throughout.",
    ],
    techStack: ["Python", "requests", "BeautifulSoup", "Playwright", "MySQL", "SQLAlchemy", "pandas", "Ollama", "Zyte", "concurrent.futures"],
  },
  {
    slug: "irdai-insurance-disclosure-extraction-pipeline",
    name: "IRDAI Insurance Disclosure Data Extraction Pipeline",
    tagline: "Two-pass LLM+VLM extraction pipeline turning 40+ regulatory PDF forms across 30+ insurers into structured financial data",
    summary:
      "An end-to-end system that automates extraction of quarterly IRDAI 'NL' form disclosures (premium, claims, commission, " +
      "operating expense, balance sheet, and channel-wise schedules) for 30+ Indian general and health insurers across " +
      "FY24–FY26 — replacing a fully manual quarterly data-entry process with a pipeline feeding a ClickHouse analytics " +
      "warehouse.",
    stats: [
      { label: "PDF Form Types", value: "40+" },
      { label: "Insurers Covered", value: "30+" },
      { label: "Fiscal Quarters", value: "10+" },
      { label: "Extraction Passes", value: "Text + Vision" },
    ],
    contributions: [
      "Pipeline: S3-sourced PDFs → PyMuPDF-based page/table classification (regex + keyword heuristics) → coordinate-based (bounding-box) table reconstruction → two-pass LLM+VLM extraction → cleaning/normalization → ClickHouse/MySQL storage → automated validation → Excel reporting.",
      "Deterministic coordinate-based table parsing — for complex multi-segment tables (e.g. Fire/Marine/Motor/Health columns × quarter/YTD sub-columns), clusters raw word bounding boxes into rows/columns from geometry alone, before ever calling an LLM.",
      "Two-pass multimodal extraction: an LLM text pass drafts values from parsed PDF text, then a VLM vision pass (Gemini / Ollama-hosted Gemma, page rendered as a 300–600 DPI image) visually cross-checks row/column alignment and figures against the source layout — catching misalignments pure text extraction misses.",
      "Engineered a custom compact output format (TOON — Table-Oriented Output Notation) and parser to cut LLM/VLM token usage and simplify downstream parsing versus verbose JSON/CSV.",
      "Data cleaning/normalization: accounting-style negative parsing, segment-name fuzzy matching, unit normalization (Lakhs/Crores/Ratio/%), and quarter/FY period mapping.",
      "Idempotent, deduplicated ingestion — DB pre-checks skip already-collected pages/forms, with per-page dedup against existing (Company, Form, Period, Segment, Metric) keys before insert.",
      "Concurrent processing of company×quarter jobs via a configurable ThreadPoolExecutor for throughput across hundreds of PDFs.",
      "Automated accuracy validation — an offline checker cross-reconciles extracted subtotals (e.g. Total Marine = Marine Cargo + Marine Hull) to catch extraction errors before reporting.",
    ],
    techStack: ["Python", "PyMuPDF", "Google Gemini API", "Ollama", "ClickHouse", "MySQL", "AWS S3", "pandas", "openpyxl"],
  },
];
