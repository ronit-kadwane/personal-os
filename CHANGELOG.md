# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

- Calendly/Cal.com embed modal
- Blog post dynamic routes with MDX

## [1.9.1] — 2026-10-27

### Changed

- **Promotion to Staff Engineer**: Updated professional title to **Staff Engineer & Full-Stack Architect** across all modules and metadata following promotion at Nagarro in April 2026.
- **Career Trajectory & 11+ Years Experience**: Synchronized total industry experience metric to 11+ years across hero metrics, SEO metadata, manifest, and resume documents.
- **Crisp Executive Bio**: Refined executive bio to sharply highlight distributed systems architecture, React/React-Native leadership, and autonomous AI agent/vibe coding execution.
- **ATS Resume Regeneration**: Updated professional experience and summary in [scripts/generate_resume.py](scripts/generate_resume.py) and re-compiled [public/resume.pdf](public/resume.pdf).

## [1.9.0] — 2026-10-27

### Added

- **Comprehensive Docstring Coverage Standard**: Added rule section 6 to [.agents/rules/project-standards.md](.agents/rules/project-standards.md) mandating >= 80% docstring coverage for all exported functions, components, API route handlers, and utility scripts.
- **Project-Wide JSDoc & Python Docstrings**: Documented all functions, route handlers, and components across the codebase (`src/app/`, `src/components/`, `src/features/`, and `scripts/`), achieving 100% docstring coverage on PR diffs.

### Fixed

- **Accurate Documentation Accuracy**: Refined `ContactSection` JSDoc to specify contact form submission rather than telemetry dispatch, removed unsupported theme-toggling claim from `ResumePage` JSDoc, and added JSDoc documentation to the exported `GET` route handler in `src/app/api/contact/route.ts`.
- **Resume Generator Modularization**: Refactored `build_pdf` in `scripts/generate_resume.py` into focused helper functions (`build_page_one_stream`, `build_page_two_stream`, `assemble_pdf`), reducing cyclomatic complexity and satisfying statement count limits (Ruff PLR0915).

## [1.8.0] — 2026-10-26

### Added

- **Karm Bungalows Project Showcase**: Integrated live residential society platform ([karm-bungalows.vercel.app](https://karm-bungalows.vercel.app/)) as a flagship featured project in [src/data/portfolio.ts](src/data/portfolio.ts), highlighting 100% autonomous AI agent orchestration, vibe coding workflows, interactive 147-plot SVG vector map, search directory, and 4-language i18n.
- **AI & Autonomous Development Skillset**: Added dedicated AI Agent Orchestration, Agent Skills & Prompts, Vibe Engineering, and Multi-Agent Architectures category to `skills` in [src/data/portfolio.ts](src/data/portfolio.ts).
- **ATS Resume Regeneration**: Updated [scripts/generate_resume.py](scripts/generate_resume.py) with independent AI agent projects and autonomous technical arsenal; regenerated [public/resume.pdf](public/resume.pdf).
- **Interactive Resume Live Link**: Enhanced [src/app/resume/page.tsx](src/app/resume/page.tsx) with direct live project navigation and synchronized locale keys in [src/locales/en.json](src/locales/en.json).

## [1.7.4] — 2026-10-26

### Fixed

- **Public Repository Path Portability**: Converted all machine-local `file:///Users/ronitkadwane/...` absolute URLs in [AGENTS.md](AGENTS.md) to repository-relative markdown paths (`.agents/...`, `docs/...`). All references now navigate correctly across GitHub, external clones, and any agent environment.

## [1.7.3] — 2026-10-26

### Added

- **Showcase Ambient Animations**: Implemented GPU-composited ambient float keyframes (`animate-float-slow`, `animate-float-reverse`) in `src/app/globals.css` applied to Hero background orbs, adding dynamic visual depth with zero layout shift and zero impact on LCP/FCP.
- **Accessibility Motion Query**: Added `@media (prefers-reduced-motion: reduce)` in `src/app/globals.css` ensuring complete compliance with motion accessibility standards.

### Changed

- **Agent Routing & Token Optimization**: Consolidated master routing index in [AGENTS.md](AGENTS.md) to link `motion` and all specialized skills on-demand, and cleaned central schema references in [.agents/skills/typescript-best-practices/SKILL.md](.agents/skills/typescript-best-practices/SKILL.md) and [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
- **SEO & Canonical URL Integrity**: Aligned `metadataBase`, OpenGraph URLs, canonical alternates, and JSON-LD schema in `src/app/layout.tsx` with canonical site domain.

## [1.7.2] — 2026-10-26

### Added

- **Next.js Rendering Performance Skill**: Created token-optimized specialized skill [.agents/skills/nextjs-rendering-performance/SKILL.md](.agents/skills/nextjs-rendering-performance/SKILL.md) covering Server/Client component boundaries, sub-second LCP/FCP critical paths, zero-CLS layout stability, responsive INP handling, Framer Motion optimization, and Core Web Vitals thresholds. Linked by reference in [AGENTS.md](AGENTS.md).

## [1.7.1] — 2026-10-24

### Fixed

- **Core Web Vitals & Real Experience Score (RES) Optimization**:
  - **LCP & FCP Accelerated**: Removed client-side initial `opacity: 0` delay animations on critical above-the-fold Hero elements (`h1`, availability status, bio, and CTAs) in `src/features/hero/components/HeroSection.tsx`, allowing instant browser first-paint rendering.
  - **Zero Layout Shift (CLS)**: Initialized Hero role ticker with verified default role (`personalInfo.roles[0]`) and reserved minimum line height to eliminate font wrapping reflows upon hydration.
  - **Navbar Layout Stability**: Removed offscreen initial translation (`y: -80`) in `src/components/sections/Navbar.tsx` for immediate in-place rendering.
  - **Font Payload Reduction**: Switched Google Fonts (`Inter`, `JetBrains_Mono`) to unified variable font bundles without multi-weight slicing.
  - **Offscreen Section Rendering**: Added CSS `content-visibility: auto` with intrinsic sizing across below-the-fold sections (`projects`, `experience`, `skills`, `contact`) to drastically reduce initial DOM layout time on mobile devices.
  - **Client JS Reduction**: Converted `Footer.tsx` from Client Component to React Server Component (RSC).
  - **Telemetry CSP Alignment**: Allowed Vercel Analytics and Speed Insights script domains and ingestion beacons in `Content-Security-Policy` (`next.config.ts`).

## [1.7.0] — 2026-10-23

### Added

- **Vercel Analytics & Speed Insights**: Integrated `@vercel/analytics/next` and `@vercel/speed-insights/next` in RootLayout (`src/app/layout.tsx`) for real-time visitor telemetry and Core Web Vitals performance observability.

## [1.6.1] — 2026-10-23

### Changed

- **Dependency Maintenance**: Upgraded core packages to latest compatible semver releases (`react@19.3.1`, `react-dom@19.3.1`, `framer-motion@14.6.0`, `lucide-react@1.61.0`, `@hookform/resolvers@5.9.2`). Preserved stable peer dependencies for Next.js 16 (`eslint@^9`, `typescript@^5`).

### Fixed

- **Release Workflow Hardening**: Removed fork PR closed trigger from `.github/workflows/release.yml` to prevent permission failures, and added strict verification ensuring pushed `v*` tags match `package.json` version and an existing `CHANGELOG.md` release header.
- **Accessible Release Notes Links**: Replaced local developer `file://` URLs in `CHANGELOG.md` with repository relative links for GitHub Release compatibility.

## [1.6.0] — 2026-10-23

### Added

- **Dynamic OpenGraph & Twitter Social Cards**: Implemented high-resolution (1200x630) social share card generator via Next.js `ImageResponse` ([opengraph-image.tsx](src/app/opengraph-image.tsx) and [twitter-image.tsx](src/app/twitter-image.tsx)) featuring custom brand emblem, live availability indicator, and verified metrics.
- **Automated GitHub Release Workflow**: Added [.github/workflows/release.yml](.github/workflows/release.yml) with Node.js 24 environment for automated semantic release packaging.

## [1.5.1] — 2026-10-23

### Security

- **Next.js Security Upgrade**: Upgraded Next.js from `16.4.0` to `16.4.2` and `eslint-config-next` to `16.4.2` to resolve published security vulnerability advisory.
- **Agent Upgrade Configuration**: Enabled `experimental.agentUpgrade = 'security'` in [next.config.ts](next.config.ts).

## [1.5.0] — 2026-10-22

### Added

- **Unified Agent Single Source of Truth**: Connected [AGENTS.md](AGENTS.md) as the root entry point linking by reference to `.agents/rules/`, `.agents/skills/`, and `docs/` for token-efficient on-demand loading.
- **Mandatory Versioning & Docs Protocol**: Codified rule requiring every change to update `CHANGELOG.md`, synchronize `"version"` in `package.json`, and keep `README.md` synchronized whenever out of sync.
- **Synchronized README & Package Config**: Updated `package.json` version to `1.5.0` and updated `README.md` with complete directory structure, scripts, and theming features.

## [1.4.0] — 2026-10-21

### Changed

- **Industry-Standard JSON Locales**: Migrated from `.ts` locale to canonical JSON structure (`src/locales/en.json`) with strict TypeScript type inference (`typeof en`). Translators and automated i18n pipelines (Crowdin, Lokalise, POEditor) can now seamlessly add new languages (e.g. `de.json`, `es.json`) without touching application code.

### Fixed

- **Custom Brand Favicon (.ico)**: Converted and replaced default Next.js `src/app/favicon.ico` and `public/favicon.ico` with the copyright-free "RK" brand emblem containing multi-resolution PNG layers (16x16, 32x32, 48x48, 64x64) via `scripts/generate_favicon.py`.
- **Theme Scrollbar Flickering**: Eliminated scrollbar jitter during theme transitions by configuring `color-scheme: light / dark`, adding `scrollbar-gutter: stable`, disabling transitions on scrollbars, and enabling `disableTransitionOnChange` in `next-themes`.

### Added

- **3-Way Theme Switcher (System, Light, Dark)**: Added `ThemeSelector` with System theme as default, plus Light and Dark modes. Includes responsive desktop dropdown and mobile drawer segmented control.

## [1.3.0] — 2026-10-21

### Fixed

- **Light & Dark Theming Fixed**: Resolved broken theme toggle by introducing complete semantic tokens in `globals.css` (`:root` and `.dark`) and purging all hardcoded palette classes (`bg-zinc-950`, `text-zinc-100`).

### Added

- **Component & Feature Hierarchy**: Cleanly separated atomic UI (`src/components/ui/`), layout chrome (`src/components/sections/`), and isolated feature modules (`src/features/hero/`, `src/features/projects/`, `src/features/experience/`, `src/features/skills/`, `src/features/contact/`).
- **Zero Magic Strings / Locale Architecture**: Built type-safe English locale dictionary (`src/locales/en.ts`) and unified helper `t`, mapping 100% of UI strings.
- **Vibe Coding Footer**: Replaced generic Next.js branding with authentic vibe coding tagline in [Footer.tsx](src/components/sections/Footer.tsx).
- **SonarJS & Security Rules**: Integrated `eslint-plugin-sonarjs`, `prettier`, and `eslint-config-prettier` with automated formatting scripts (`npm run format`).

---

## [1.2.0] — 2026-10-21

### Fixed

- **Header & Hero Overlap**: Eliminated visual collision between fixed floating navbar and Hero green availability badge by introducing responsive top padding (`pt-32 sm:pt-40`) and persistent glassmorphism background.
- **Resume Download Failure**: Fixed empty HTML download bug by compiling a valid 2-page ATS PDF resume (`public/resume.pdf`) via `scripts/generate_resume.py`.
- **Download Attributes**: Added explicit `download="Ronit_Kadwane_Resume.pdf"` attributes across Hero and Experience download triggers.

### Added

- **Interactive Printable Resume**: Created dedicated `/resume` route featuring print-optimized styling (`@media print`) and in-browser review.
- **Copyright-Free Monogram Branding**: Generated original geometric "RK" SVG branding ([Logo.tsx](src/components/ui/Logo.tsx), `public/logo.svg`, `public/favicon.svg`); removed default framework graphics (`next.svg`, `vercel.svg`).
- **Comprehensive Enterprise SEO**: Injected structured JSON-LD Schema (`schema.org/Person`), native dynamic sitemap (`src/app/sitemap.ts`), robots policy (`src/app/robots.ts`), and web app manifest (`src/app/manifest.ts`).
- **Public Repository Hardening**: Abstracted sensitive residential street addresses into general regional availability; created `.env.example` template for zero-leak public releases.
- **High-Value Client Positioning**: Refined copywriting and keywords targeting high-scale enterprise engineering and US/European clients.

---

## [1.1.0] — 2026-10-21

### Changed

- **Resume Information Sync**: Integrated actual professional resume of Ronit Kadwane (Nagarro Associate Staff Engineer, Maven Agency, Refrens, Logicwind, Narola Infotech, Sarvajanik College of Engineering & Technology).
- **Purged Assumed Information**: Removed all fabricated companies, mock projects, placeholder blogs, and fake testimonials.
- **Real Projects Catalog**: Replaced mock projects with real products (DigiQC, Chromecast Game Controllers, Video Streaming Apps, Financial Profile Evaluation Module, Contactbook, Los Alisos, Refrens Workflow Engine, Android Native Libraries).
- **Socials & Contacts**: Added StackOverflow profile icon and verified contact details; updated Hero, Contact, and Footer.

### Fixed

- **CSS Distortion Fix**: Installed `@tailwindcss/postcss` and added `postcss.config.mjs` ensuring Tailwind CSS v4 compiles utilities properly in Next.js Turbopack.
- **Tailwind v4 Dark Mode**: Added `@custom-variant dark (&:where(.dark, .dark *));` to `globals.css` ensuring seamless dark theme rendering.

### Added

- **.agents/ Directory**: Added token-optimized project rules (`project-standards.md`, `data-integrity.md`) and maintenance skill (`portfolio-manager/SKILL.md`).
- **docs/ Directory**: Created token-optimized documentation: `ARCHITECTURE.md`, `DATA_SCHEMA.md`, `STYLING_GUIDE.md`, and `DEPLOYMENT.md`.

---

## [1.0.0] — 2026-10-13

### Added

- **Glassmorphic floating Navbar** with scroll-aware styling, mobile drawer, and dark/light toggle
- **Hero section** with animated role ticker (typewriter), availability badge, dual CTAs, social links, and key metrics
- **Projects Bento Grid** with gradient cards, GitHub stars, impact metrics, tech stack pills, and live/GitHub links
- **Experience Timeline** with filter tabs (All / Full-time / Freelance / Education) and expandable accordions
- **Skills Matrix** with categorized cards, animated proficiency bars, level legend, and technology badges cloud
- **Testimonials** dual infinite-scroll marquee with star ratings, gradient avatars, and edge fade masks
- **Blog section** with featured + regular posts grid, reading time, tags, and Substack CTA
- **Contact Form** with Zod validation, budget selector, project type picker, Calendly CTA, and success/error states
- **Footer** with logo, social links, and copyright
- **Contact API route** (`/api/contact`) with Zod server-side validation and email provider placeholder
- **Security headers**: CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy in `next.config.ts`
- **Dark mode default** with smooth toggle via `next-themes`
- **SEO metadata**: title templates, meta descriptions, OpenGraph, Twitter cards, robots
- **Accessibility**: ARIA labels, heading hierarchy H1→H2→H3, focus rings, WCAG AA contrast ratios
- **Design system**: Inter + JetBrains Mono fonts, Tailwind v4 @theme tokens, CSS custom properties
- **Framer Motion** scroll-reveal animations across all sections
- Portfolio data file (`src/data/portfolio.ts`) — single source of truth for all content
- `src/lib/utils.ts` — `cn()`, `formatDate()`, `truncate()`, `formatNumber()` helpers
- Atomic UI primitives: `Button`, `Badge`, `Card`
- Full `README.md` with setup, customization, and deployment guide

[Unreleased]: https://github.com/ronitkadwane/personal-os/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ronitkadwane/personal-os/releases/tag/v1.0.0
