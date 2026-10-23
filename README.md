<div align="center">
  <img src="./public/logo.svg" width="80" height="80" alt="Ronit Kadwane Logo" />
  <h1>Ronit Kadwane — Personal OS</h1>
  <p>Production-Grade Digital Portfolio &amp; Interactive Resume Platform</p>

  <div>
    <img src="https://img.shields.io/badge/Architecture-Next.js_16-18181b" alt="Next.js" />
    <img src="https://img.shields.io/badge/Language-TypeScript_5-3178c6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38bdf8" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Animation-Framer_Motion-ec4899" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-10b981" alt="MIT License" />
  </div>
</div>

---

## ⚡ Overview

**Personal OS** is an interactive, high-performance portfolio engineered for **Ronit Kadwane** (Associate Staff Engineer & Principal Full-Stack Architect). Designed to showcase production-scale engineering capabilities to global tech leaders, US/European clients, and tier-one recruiters.

### Key Capabilities

- **Hero & Typewriter**: Real-time role ticker, live availability badge, direct ATS resume download, and quick contact triggers.
- **Production Projects Catalog**: Real-world systems including **DigiQC** (geo-fenced inspection system), **Chromecast Arcade Game Controllers**, **Enterprise Video Streaming Apps**, and **Financial Profile Evaluation Module**.
- **Interactive & Printable Resume**: Built-in `/resume` route formatted for on-screen review and `@media print` PDF generation, complemented by pre-compiled `public/resume.pdf`.
- **Verified Experience Timeline**: Filterable trajectory detailing roles at Nagarro, Maven Agency, Refrens, Logicwind, and Narola Infotech.
- **Categorized Technical Arsenal**: Proficiency metrics across frontend, backend microservices, distributed cloud architectures, and offline-sync systems.
- **Enterprise SEO & JSON-LD**: Rich structured data (`schema.org/Person`), native XML sitemap (`/sitemap.xml`), robots policy (`/robots.txt`), and web app manifest (`/manifest.webmanifest`).
- **Public-Safe Architecture**: Fully sanitized for open-source publication — zero hardcoded residential street addresses, zero leaked API secrets, and isolated environment variables.

---

## 🛠️ Tech Stack & Tooling

| Component              | Choice                                             | Rationale                                                         |
| ---------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| **Framework**          | Next.js 16 (App Router, Turbopack, React 19)       | Sub-second builds, static rendering, and streaming                |
| **Styling**            | Tailwind CSS v4 + PostCSS (`@tailwindcss/postcss`) | Next-gen CSS engine, `@theme inline`, and semantic tokens         |
| **Theming**            | `next-themes`                                      | 3-way toggle (System default, Light, Dark), flicker-free          |
| **Locales**            | Standard JSON (`src/locales/en.json`)              | Industry-standard i18n structure with strict TypeScript inference |
| **Motion**             | Framer Motion                                      | Smooth, GPU-accelerated micro-interactions                        |
| **Forms & Validation** | React Hook Form + Zod                              | Type-safe form validation and state management                    |
| **Code Quality**       | ESLint + SonarJS + Prettier                        | Static code analysis, security heuristics, unified formatting     |
| **Icons & Branding**   | Custom SVG Monogram (`Logo.tsx`) + Lucide React    | Copyright-free, crisp vector visuals                              |

---

## 📁 Repository Structure

```
personal-os/
├── AGENTS.md                   # Unified agent entry point & reference index
├── .agents/                    # Agent rules, workflows & maintenance skills
│   ├── rules/                  # project-standards, data-integrity, versioning-and-docs
│   └── skills/                 # portfolio-manager, nextjs, tailwind, lucide, typescript
├── docs/                       # High-density technical documentation
│   ├── ARCHITECTURE.md         # Component tree, data flow & security headers
│   ├── DATA_SCHEMA.md          # TypeScript schemas for all portfolio datasets
│   ├── STYLING_GUIDE.md        # Tailwind v4 tokens & color-scheme guide
│   └── DEPLOYMENT.md           # Production builds & cloud deployment
├── public/                     # Static assets (logo.svg, favicon.svg, favicon.ico, resume.pdf)
├── scripts/                    # Automation utilities (generate_resume.py, generate_favicon.py)
├── src/
│   ├── app/                    # Next.js App Router (layout, globals.css, resume, api, sitemap)
│   ├── components/
│   │   ├── ui/                 # Atomic UI primitives (ThemeSelector, Logo, Badge, Card, Button)
│   │   └── sections/           # Layout chrome (Navbar, Footer)
│   ├── features/               # Modular business features (hero, projects, experience, skills, contact)
│   ├── locales/                # Type-safe JSON localization (en.json, index.ts)
│   ├── data/                   # Single source of truth (portfolio.ts)
│   └── lib/                    # Helpers and utility functions (utils.ts)
├── .env.example                # Safe environment variables template
└── postcss.config.mjs          # PostCSS configuration for Tailwind CSS v4
```

---

## 🚀 Quick Start

### 1. Installation

```bash
git clone https://github.com/ronitkadwane/personal-os.git
cd personal-os
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Configure your optional variables (e.g., `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`).

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live portfolio.

### 4. Build & Verification

```bash
npm run format:check # Verify code formatting with Prettier
npm run format       # Auto-format all code
npm run lint         # Validate TypeScript & ESLint SonarJS rules
npm run build        # Compile production build & generate static pages
```

### 5. Automation Utilities

To recompile `public/resume.pdf` from source text:

```bash
python3 scripts/generate_resume.py
```

To regenerate multi-resolution `favicon.ico` from `public/favicon.svg`:

```bash
python3 scripts/generate_favicon.py
```

---

## 🛡️ Security & Privacy

- **Content Security Policy (CSP)** & HSTS enabled in `next.config.ts`.
- **Zero Sensitive Data**: All personal residential addresses are abstracted; sensitive keys should only be supplied via `.env.local` (which is git-ignored).
- **Zod Sanitization**: All contact submissions are validated against strict Zod schemas before processing.

---

## 📄 License

Released under the [MIT License](./LICENSE). Copyright © Ronit Kadwane.
