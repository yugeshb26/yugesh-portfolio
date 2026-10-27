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
  { value: "35+", label: "Technologies" },
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
  { category: "Databases", skills: ["MySQL", "MongoDB", "SQLite", "ClickHouse", "Milvus"] },
  { category: "AI / GenAI", skills: ["LLM Integration (Gemini, Ollama, Groq)", "Vision-Language Models (VLM)", "RAG Pipelines", "Semantic Search", "VoyageAI Embeddings", "Vector Databases", "Prompt Engineering"] },
  { category: "Data & Visualization", skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "ETL Pipelines", "PyMuPDF", "openpyxl"] },
  { category: "Cloud & Tooling", skills: ["AWS S3", "AWS EC2", "Docker", "NSSM", "n8n", "Zyte", "Git", "GitLab", "GitHub Actions", "CI/CD", "pytest", "Streamlit Cloud", "Render"] },
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
    tagline: "Streamlit-based legal Q&A assistant with semantic search, a self-refreshing case-law dataset, and multi-provider LLM failover",
    summary:
      "A production Streamlit chatbot answering questions on Indian law and case law from the Supreme Court and all " +
      "24 High Courts, grounded in a 40,000-entry curated Q&A dataset. Streams Gemini responses with multi-key, " +
      "multi-provider failover, retrieves grounding via real per-question vector search, and refreshes its dataset " +
      "daily via GitHub Actions.",
    stats: [
      { label: "Q&A Dataset Entries", value: "40K" },
      { label: "Courts / Tribunals Tracked", value: "24+" },
      { label: "Tokens Cut Per Message", value: "~35K" },
      { label: "Lines of Python", value: "4K" },
    ],
    contributions: [
      "Multi-key Gemini failover — round-robin key rotation with quota-aware fallback and auto-continue for cut-off responses.",
      "Real semantic search — replaced a static 35K-token context dump with per-question vector retrieval, cutting tokens ~30K/message.",
      "TF-IDF fallback search — fixed a bug where naive keyword counting buried relevant entries under thousands of false positives.",
      "Zero-LLM case-status router — detects live-status questions and returns an honest, deterministic answer instead of a guess.",
      "Multi-provider resilience — an automatic Groq fallback activates only during a full Gemini-side outage.",
      "Self-refreshing dataset — a daily GitHub Actions pipeline pulls new judgments with no manual upkeep.",
      "Offline Q&A extraction — 20,000+ structured pairs parsed from raw statutory text with zero LLM calls.",
      "LLM-driven charts — the model emits chart JSON, rendered inline as themed Plotly figures.",
      "Custom dark-themed UI — a GSAP/Three.js/Anime.js animation layer with a hand-built SVG icon set.",
    ],
    techStack: ["Python", "Streamlit", "Google Gemini API", "Groq", "NumPy", "SQLite", "Plotly", "GitHub Actions", "GSAP", "Three.js"],
    github: "https://github.com/yugeshb26/indian-law-chatbot",
    docFile: "/docs/indian-law-chatbot-overview.pdf",
    githubStats: {
      stars: 0,
      forks: 0,
      languages: [
        { name: "Python", bytes: 172176 },
        { name: "CSS", bytes: 60628 },
      ],
    },
  },
  {
    slug: "automated-document-intelligence-pipeline",
    name: "Automated Document Intelligence Pipeline",
    tagline: "Multi-engine scraping, PDF extraction & RAG pipeline for regulatory documents across India and the US",
    summary:
      "A production data-collection system scraping 277 financial/regulatory site configurations into a dual-database " +
      "(MySQL + ClickHouse) pipeline with automated S3 archival. Grown past scraping into a document-to-vector RAG " +
      "pipeline, active CAPTCHA defeat, and direct US (SEC EDGAR) filings ingestion. ~40,500 lines of Python.",
    stats: [
      { label: "Site Configs", value: "277" },
      { label: "Scraping Engines", value: "3" },
      { label: "Data Stores", value: "5" },
      { label: "Lines of Python", value: "~40.5K" },
    ],
    contributions: [
      "Config-driven scraping across 277 sources — one unified codebase, zero per-site custom scripts.",
      "Multi-engine fallback chain — Selenium → Playwright → static HTTP, escalating only on failure.",
      "Dual-database pipeline — MySQL + ClickHouse with automated staging and a date-validation quarantine system.",
      "Document-to-vector RAG pipeline — hybrid PDF extraction, VoyageAI embeddings, and a hand-rolled Milvus client for semantic search.",
      "Vision-LLM CAPTCHA defeat — a local → cloud Ollama cascade that solves CAPTCHAs instead of transcribing them.",
      "Expanded to US filings — direct SEC EDGAR ingestion, cutting per-filing fetch time ~10x.",
      "Entity resolution — matches scraped company names to NSE symbols via a BSE company-master table.",
      "2,548-line fiscal-date engine — handles Indian fiscal-year conventions, backed by a 40+ case regression suite.",
      "Anti-bot defense — Selenium-stealth, undetected-chromedriver, and CDP fingerprint masking.",
      "Automated S3 archival — rate-limited, retry-safe uploads at scale.",
    ],
    techStack: ["Python", "Selenium", "Playwright", "undetected-chromedriver", "MySQL", "ClickHouse", "Milvus", "VoyageAI", "PyMuPDF", "pypdfium2", "n8n", "AWS S3", "Ollama", "BeautifulSoup"],
    docFile: "/docs/gen-link-scheduler-overview.pdf",
  },
  {
    slug: "distributed-scraper-execution-platform",
    name: "Distributed Scraper Execution Platform",
    tagline: "Broker-free job orchestration platform for a ~1,500-script scraping fleet — 221 scripts live across a multi-server AWS EC2 deployment",
    summary:
      "A ~1,500-script scraping fleet ran on ad-hoc, per-machine cron schedules with no central visibility into what " +
      "ran, what failed, or how to add capacity. Designed and built a control plane from an architecture document to " +
      "a live deployment: a central code server, FastAPI control plane, and a pull-based worker fleet using row-level " +
      "locking instead of a message broker. Scaled live usage from 20 to 221 scripts, with a full operational tooling " +
      "suite layered on top: log streaming, remote cancellation, lint checks, failure diagnosis, and two-tier CI/CD.",
    stats: [
      { label: "Target Fleet Size", value: "~1,500" },
      { label: "Scripts Live Now", value: "221" },
      { label: "CI Test Suite", value: "91 tests" },
      { label: "Code Duplication", value: "Zero" },
    ],
    contributions: [
      "Broker-free job queue — row-level locking (SELECT FOR UPDATE SKIP LOCKED), no message broker, no race conditions.",
      "FastAPI + APScheduler control plane — the database is the single source of truth for job scheduling.",
      "Zero code duplication — one SMB-shared code server; new capacity needs only a bare Python venv.",
      "Live operational CLI — start, stream, and remotely cancel any job; kills the full process tree in ~2s.",
      "Two-tier CI/CD — a 91-test suite plus auto-deploy, an AST-based lint tool, and guided failure diagnosis.",
      "Automatic crash recovery — detects stuck jobs, retries with exponential backoff.",
      "Per-job concurrency policies — single-instance, max-parallel, or server-pinned routing enforced centrally.",
      "Scaled from 20 to 221 live scripts — fixed 5 real production incidents along the way.",
      "Deployed to live AWS EC2 — auto-restarting Windows Services (NSSM), survives a reboot unattended.",
    ],
    techStack: ["Python", "FastAPI", "SQLAlchemy 2.0", "APScheduler", "MySQL", "AWS EC2", "Windows Services (NSSM)", "GitHub Actions", "pytest", "psutil", "Selenium", "Playwright"],
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
      "Config-driven core — every source table declared once in YAML; adding a source is a config entry, not new code.",
      "Document classification engine — a cascading regex classifier spanning 149 disclosure categories with confidence-tiered scoring.",
      "Real OCR extraction — scanned pages rendered at 300 DPI and recovered via pytesseract, not just flagged.",
      "Aggregation layer rolling up 28+ per-source chunk tables into 7 shared collection tables.",
      "Replaced a broken n8n trigger with a standalone HTTP service — semaphore-bounded concurrency and a live health-check endpoint.",
      "Redesigned serialized chunking into a concurrent, per-table-parallel architecture without double-processing any table.",
      "Root-caused a native heap-corruption crash — landed on a subprocess-isolated, timeout-bounded extraction layer immune to crashes and hangs.",
      "Fixed a MySQL connection-leak cascade via a singleton engine with automatic retry/backoff.",
      "Hardened error logging with retry, disk-spool fallback, and replay recovery.",
    ],
    techStack: ["Python", "MySQL", "ClickHouse", "AWS S3", "Docker", "VoyageAI", "pypdfium2", "PyMuPDF", "pytesseract", "n8n"],
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
