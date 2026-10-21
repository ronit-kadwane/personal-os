# Architecture & Technical Overview

## System Overview

The application is a high-performance personal portfolio built on Next.js 16 (App Router), React 19, and Tailwind CSS v4.

```
personal-os/
├── src/
│   ├── app/                    # Next.js App Router (layout, page, sitemap, robots, manifest)
│   │   ├── api/contact/        # Contact form submission endpoint (Zod validation)
│   │   ├── resume/             # Interactive & printable ATS resume route
│   │   ├── globals.css         # Semantic theme tokens, @theme inline, @custom-variant dark
│   │   └── layout.tsx          # Root layout, Google Fonts, SEO metadata, JSON-LD Schema
│   ├── components/             # Reusable & layout components
│   │   ├── providers/          # ThemeProvider (next-themes)
│   │   ├── sections/           # Layout chrome only (Navbar, Footer)
│   │   └── ui/                 # Atomic UI primitives (Button, Badge, Card, Logo, BrandIcons)
│   ├── features/               # Modular domain feature architecture
│   │   ├── hero/               # Hero section, typewriter ticker, CTA actions
│   │   ├── projects/           # Projects bento grid, category filters, metrics
│   │   ├── experience/         # Experience timeline, filters, ATS resume download
│   │   ├── skills/             # Skills matrix, proficiency bars, legend
│   │   └── contact/            # Zod contact form, direct channels, socials
│   ├── locales/                # Internationalization & zero-magic-string dictionaries
│   │   ├── en.ts               # Complete typed English UI dictionary
│   │   └── index.ts            # Master locale export `t`
│   ├── data/
│   │   └── portfolio.ts        # Single source of truth for verified career data
│   └── lib/
│       └── utils.ts            # Class merging (cn) and formatting helpers
├── public/                     # Static assets (logo.svg, favicon.svg, resume.pdf)
├── scripts/                    # Automation utilities (generate_resume.py)
├── docs/                       # High-density technical documentation
├── .agents/                    # Agent rules, workflows & maintenance skills
├── eslint.config.mjs           # ESLint flat config with SonarJS & security rules
├── .prettierrc                 # Prettier code formatting rules
└── postcss.config.mjs          # PostCSS configuration with @tailwindcss/postcss
```

## Architectural Principles

1. **Atomic Components (`src/components/ui/`)**: Reusable UI elements independent of application domain.
2. **Layout Sections (`src/components/sections/`)**: Shared site chrome (header/navbar, footer).
3. **Feature Modules (`src/features/<feature>/components/`)**: Self-contained domain modules containing presentation, logic, and state for that feature.
4. **Dynamic Semantic Theming**: Zero hardcoded palette classes. All components use CSS custom properties via Tailwind `@theme`.
5. **Typed Locales (`src/locales/`)**: Zero magic strings in JSX. Every label, heading, button, and error is loaded from the locale dictionary.
6. **Code Health & Security**: Guarded by SonarJS linting rules and Prettier formatting.
