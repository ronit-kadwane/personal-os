// ============================================================
// PORTFOLIO DATA — Edit this file to customize all content
// ============================================================

export const personalInfo = {
  name: "Ronit Kadwane",
  title: "Full-Stack Engineer & AI Integrator",
  email: "ronit@example.com",
  location: "Mumbai, India 🇮🇳",
  phone: "+91 98765 43210",
  website: "https://ronitkadwane.dev",
  availability: true,
  availabilityText: "Open to Full-Time & Freelance",
  bio: "I architect and ship production-grade full-stack products and AI-powered systems. 5+ years turning complex requirements into clean, performant software that scales.",
  roles: [
    "Full-Stack Engineer",
    "AI Integrator",
    "Freelance Architect",
    "React / Next.js Expert",
    "LLM Systems Builder",
  ],
  socials: {
    github: "https://github.com/ronitkadwane",
    linkedin: "https://linkedin.com/in/ronitkadwane",
    twitter: "https://x.com/ronitkadwane",
    substack: "https://ronitkadwane.substack.com",
    calendly: "https://cal.com/ronitkadwane",
  },
  resumeUrl: "/resume.pdf",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "ai" | "fullstack" | "saas" | "open-source";
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubStars?: number;
  featured: boolean;
  size: "large" | "medium" | "small";
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "ai-pipeline",
    title: "AIPipeline Pro",
    description: "Multi-agent LLM orchestration platform with RAG pipelines",
    longDescription:
      "A production-grade orchestration layer for multi-agent LLM workflows. Supports RAG, tool-calling, streaming responses, and a visual pipeline builder. Reduced inference costs by 60% via smart caching.",
    techStack: ["Next.js", "Python", "LangChain", "Pinecone", "OpenAI", "Redis"],
    category: "ai",
    metrics: ["-60% inference cost", "100K+ API calls/day", "$80K ARR"],
    liveUrl: "https://aipipeline.pro",
    githubUrl: "https://github.com/ronitkadwane/ai-pipeline",
    githubStars: 1240,
    featured: true,
    size: "large",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
  },
  {
    id: "nextsaas",
    title: "NextSaaS Starter",
    description: "Production-ready Next.js SaaS boilerplate with auth, billing, and teams",
    longDescription:
      "Open-source SaaS starter kit: Auth.js authentication, Stripe billing, Postgres with Drizzle ORM, team workspaces, and a polished component library. Launched 12 production apps.",
    techStack: ["Next.js", "TypeScript", "Drizzle", "Stripe", "Auth.js"],
    category: "open-source",
    metrics: ["2.1K ⭐ GitHub", "12 apps shipped", "-70% setup time"],
    liveUrl: "https://nextsaas.dev",
    githubUrl: "https://github.com/ronitkadwane/nextsaas",
    githubStars: 2100,
    featured: true,
    size: "medium",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "ecommerce-engine",
    title: "FluxCommerce",
    description: "High-performance headless e-commerce with AI recommendations",
    longDescription:
      "Headless commerce engine with AI-powered product recommendations, real-time inventory, and a composable storefront. Handles 50K daily active users with sub-100ms API responses.",
    techStack: ["Next.js", "Node.js", "Postgres", "Redis", "TensorFlow.js"],
    category: "fullstack",
    metrics: ["50K DAU", "<100ms API", "+35% conversion"],
    liveUrl: "https://fluxcommerce.io",
    featured: true,
    size: "medium",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "devops-dashboard",
    title: "OpsVault",
    description: "Unified DevOps observability dashboard with anomaly detection",
    longDescription:
      "Real-time observability platform aggregating metrics from Kubernetes, GitHub Actions, AWS CloudWatch, and PagerDuty. ML-based anomaly detection cuts MTTR by 40%.",
    techStack: ["React", "Go", "Prometheus", "Grafana", "AWS", "K8s"],
    category: "saas",
    metrics: ["-40% MTTR", "15 integrations", "99.99% uptime"],
    liveUrl: "https://opsvault.io",
    featured: false,
    size: "small",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    id: "vector-search",
    title: "SemanticSearch SDK",
    description: "Zero-config semantic search SDK for any Node.js application",
    longDescription:
      "Drop-in semantic search powered by vector embeddings. Works with any Postgres database via pgvector. Includes a React component library for instant search UI.",
    techStack: ["TypeScript", "pgvector", "OpenAI Embeddings", "React"],
    category: "open-source",
    metrics: ["800+ npm weekly downloads", "4.9★ rating", "MIT License"],
    githubUrl: "https://github.com/ronitkadwane/semantic-search-sdk",
    githubStars: 430,
    featured: false,
    size: "small",
    gradient: "from-pink-500 to-violet-600",
  },
  {
    id: "fintech-api",
    title: "PayLedger API",
    description: "SOC2-compliant payment reconciliation & ledger API",
    longDescription:
      "Financial-grade double-entry ledger API with multi-currency support, reconciliation automation, and real-time webhooks. Processes $2M+ monthly.",
    techStack: ["Node.js", "Postgres", "Stripe", "AWS Lambda", "TypeScript"],
    category: "fullstack",
    metrics: ["$2M+ processed/mo", "SOC2 compliant", "99.9% accuracy"],
    featured: false,
    size: "small",
    gradient: "from-yellow-500 to-orange-600",
  },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  startDate: string;
  endDate?: string;
  location: string;
  type: "fulltime" | "freelance" | "contract" | "education";
  description: string;
  highlights: string[];
  techStack: string[];
};

export const experience: Experience[] = [
  {
    id: "freelance-2024",
    role: "Independent Software Architect",
    company: "Self-employed / Freelance",
    period: "2024 – Present",
    startDate: "2024-01",
    location: "Remote",
    type: "freelance",
    description:
      "Designing and shipping production-grade AI systems, SaaS platforms, and API infrastructure for funded startups and enterprise clients worldwide.",
    highlights: [
      "Built AI-powered analytics SaaS from 0 → $80K ARR in 10 months",
      "Led architecture review and migration of 500K-user platform to App Router",
      "Delivered 8 client projects with 5-star reviews on Toptal & direct referrals",
    ],
    techStack: ["Next.js", "Python", "LangChain", "AWS", "Postgres"],
  },
  {
    id: "senior-eng-2022",
    role: "Senior Full-Stack Engineer",
    company: "TechVentures Inc.",
    companyUrl: "https://techventures.example.com",
    period: "2022 – 2024",
    startDate: "2022-06",
    endDate: "2024-01",
    location: "Bangalore, India",
    type: "fulltime",
    description:
      "Led a team of 6 engineers building a B2B SaaS platform serving 200+ enterprise clients. Owned the entire product surface from API design to frontend delivery.",
    highlights: [
      "Reduced P99 API latency by 65% through query optimization and caching strategies",
      "Architected real-time collaboration features used by 50K daily active users",
      "Mentored 3 junior engineers, 2 of whom were promoted within 12 months",
    ],
    techStack: ["React", "Node.js", "Postgres", "Redis", "Kubernetes"],
  },
  {
    id: "mid-eng-2021",
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2021 – 2022",
    startDate: "2021-03",
    endDate: "2022-06",
    location: "Mumbai, India",
    type: "fulltime",
    description:
      "Built and shipped three revenue-generating product lines as an early full-stack engineer at a Series A startup.",
    highlights: [
      "Shipped payments integration (Razorpay + Stripe) that enabled first $500K in revenue",
      "Rewrote legacy PHP monolith to Node.js microservices — 10x throughput improvement",
      "Built admin dashboard & analytics suite adopted by entire customer success team",
    ],
    techStack: ["React", "Node.js", "MySQL", "Docker", "Stripe"],
  },
  {
    id: "education",
    role: "B.Tech Computer Science",
    company: "IIT Bombay",
    companyUrl: "https://iitb.ac.in",
    period: "2017 – 2021",
    startDate: "2017-08",
    endDate: "2021-05",
    location: "Mumbai, India",
    type: "education",
    description:
      "Graduated with First Class Honors. Specialized in Distributed Systems and Machine Learning. Active competitive programmer and open-source contributor.",
    highlights: [
      "CGPA: 9.1/10 — Graduated with First Class Honors",
      "Published paper on distributed caching at IEEE COMSNETS 2021",
      "Core team member, Open Source Society — organized 3 national hackathons",
    ],
    techStack: ["C++", "Python", "Java", "Linux", "Research"],
  },
];

export type Skill = {
  category: string;
  icon: string;
  items: Array<{ name: string; level: "expert" | "advanced" | "proficient" }>;
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React / Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "WebSockets / SSE", level: "advanced" },
      { name: "React Native", level: "proficient" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    items: [
      { name: "Node.js / Express", level: "expert" },
      { name: "Python / FastAPI", level: "expert" },
      { name: "Go", level: "advanced" },
      { name: "GraphQL", level: "advanced" },
      { name: "REST API Design", level: "expert" },
      { name: "gRPC", level: "proficient" },
    ],
  },
  {
    category: "AI & ML",
    icon: "🤖",
    items: [
      { name: "LangChain / LlamaIndex", level: "expert" },
      { name: "OpenAI / Anthropic APIs", level: "expert" },
      { name: "Vector DBs (Pinecone, pgvector)", level: "advanced" },
      { name: "RAG Pipelines", level: "expert" },
      { name: "Fine-tuning (LoRA)", level: "advanced" },
      { name: "TensorFlow / PyTorch", level: "proficient" },
    ],
  },
  {
    category: "Data & Infrastructure",
    icon: "🛢️",
    items: [
      { name: "PostgreSQL", level: "expert" },
      { name: "Redis", level: "expert" },
      { name: "MongoDB", level: "advanced" },
      { name: "AWS (EC2, RDS, Lambda, S3)", level: "expert" },
      { name: "Docker / Kubernetes", level: "advanced" },
      { name: "Terraform", level: "proficient" },
    ],
  },
];

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    title: "CTO",
    company: "Luminary AI",
    avatar: "SC",
    quote:
      "Ronit delivered an enterprise-grade AI platform in 8 weeks. His ability to translate ambiguous requirements into clean, scalable architecture is exceptional. We're still using the system 18 months later without a single major issue.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Webb",
    title: "VP Engineering",
    company: "TechVentures Inc.",
    avatar: "MW",
    quote:
      "The best engineer I've worked with in 12 years of building teams. Ronit doesn't just write code — he thinks in systems. He completely transformed our API performance and left behind clear documentation and patterns the whole team benefited from.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Sharma",
    title: "Founder & CEO",
    company: "FlowStack",
    avatar: "PS",
    quote:
      "We needed a full SaaS product in 3 months with limited budget. Ronit not only delivered but gave us a maintainable codebase with room to grow. Month 4, we closed our seed round partly on the strength of the technical demo he built.",
    rating: 5,
  },
  {
    id: "t4",
    name: "David Okonkwo",
    title: "Head of Product",
    company: "Veritas Finance",
    avatar: "DO",
    quote:
      "Exceptional problem solver with a strong product sense. Ronit always considers the user experience and business impact alongside the technical solution. Rare combination in a senior engineer.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Lena Fischer",
    title: "Engineering Manager",
    company: "CloudNative GmbH",
    avatar: "LF",
    quote:
      "We brought Ronit in as a contractor to rescue a failing microservices migration. In 6 weeks he diagnosed the root cause, refactored the critical paths, and documented everything. Outstanding communicator and technologist.",
    rating: 5,
  },
  {
    id: "t6",
    name: "James Thornton",
    title: "Co-Founder",
    company: "BuildFast Labs",
    avatar: "JT",
    quote:
      "Ronit is in the top 1% of engineers I've hired through Toptal. Fast, reliable, and genuinely invested in the outcome. He proactively flagged scope risks and delivered ahead of schedule every sprint.",
    rating: 5,
  },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  coverGradient: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "rag-at-production-scale",
    title: "RAG at Production Scale: Lessons from 100M Vector Queries",
    excerpt:
      "What actually breaks when you take a RAG prototype to production — chunking strategies, embedding model selection, hybrid search, and re-ranking.",
    publishedAt: "2026-09-15",
    readingTime: "12 min read",
    tags: ["AI", "RAG", "Vector DBs", "Production"],
    featured: true,
    coverGradient: "from-indigo-600 to-violet-600",
  },
  {
    id: "b2",
    slug: "nextjs-app-router-patterns",
    title: "5 Next.js App Router Patterns That Eliminate Boilerplate",
    excerpt:
      "Advanced RSC composition patterns, parallel data loading, optimistic UI, and streaming that I apply on every project to stay ahead of the deadline.",
    publishedAt: "2026-08-22",
    readingTime: "9 min read",
    tags: ["Next.js", "React", "Performance", "Patterns"],
    featured: true,
    coverGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "b3",
    slug: "building-agentic-systems",
    title: "Building Reliable Agentic AI Systems in 2026",
    excerpt:
      "Beyond demos: how to design tool-calling agents that are deterministic, auditable, and safe for production deployment.",
    publishedAt: "2026-07-10",
    readingTime: "15 min read",
    tags: ["AI Agents", "LLMs", "Architecture", "Safety"],
    featured: true,
    coverGradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "b4",
    slug: "postgres-at-scale",
    title: "Postgres at Scale: Partitioning, Indexing, and Query Planner Secrets",
    excerpt:
      "Deep dive into the query planner, partial indexes, table partitioning, and EXPLAIN ANALYZE tricks that turned our 10-second queries into 50ms ones.",
    publishedAt: "2026-06-05",
    readingTime: "10 min read",
    tags: ["PostgreSQL", "Performance", "Database", "Backend"],
    featured: false,
    coverGradient: "from-orange-500 to-rose-500",
  },
  {
    id: "b5",
    slug: "freelance-pricing-guide",
    title: "How to Price Your Freelance Engineering Work (and Get It)",
    excerpt:
      "The pricing strategy that took me from $50/hr to $200/hr — positioning, proposals, rate anchoring, and when to walk away from bad deals.",
    publishedAt: "2026-05-18",
    readingTime: "7 min read",
    tags: ["Freelance", "Business", "Career"],
    featured: false,
    coverGradient: "from-pink-500 to-violet-600",
  },
  {
    id: "b6",
    slug: "typescript-advanced-patterns",
    title: "TypeScript Wizardry: Conditional Types, Inference & Branded Types",
    excerpt:
      "Advanced type patterns that eliminate entire classes of runtime errors — conditional types, template literals, infer, and domain modeling with branded types.",
    publishedAt: "2026-04-30",
    readingTime: "11 min read",
    tags: ["TypeScript", "Type Safety", "Advanced", "Patterns"],
    featured: false,
    coverGradient: "from-yellow-500 to-orange-600",
  },
];
