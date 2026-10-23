---
trigger: always_on
---

# Project Standards & Conventions

## 1. Directory & Component Hierarchy (Strict)

- **Atomic UI Components** (`src/components/ui/`):
  - Pure, domain-agnostic UI primitives (`Button`, `Badge`, `Card`, `Logo`, `BrandIcons`).
  - No business logic, no feature-specific schemas.
- **Layout Sections** (`src/components/sections/`):
  - Common layout chrome only (`Navbar.tsx`, `Footer.tsx`).
- **Feature Modules** (`src/features/<feature_name>/`):
  - Every business or domain feature resides in its own isolated feature module.
  - Structure: `src/features/<feature_name>/components/<FeatureComponent>.tsx` and barrel export `src/features/<feature_name>/index.ts`.
  - Master feature exports reside in `src/features/index.ts`.

## 2. Dynamic Theming & Zero Hardcoded Colors (Strict)

- **Never hardcode hex values or raw palette classes** (`bg-zinc-950`, `bg-zinc-900`, `text-zinc-100`, `border-zinc-800`, etc.).
- **Always use semantic design tokens** defined in `src/app/globals.css`:
  - `bg-background`: Main page and section backgrounds
  - `bg-surface`: Elevated headers, bars, and panels
  - `bg-card` & `text-card-foreground`: Cards and feature containers
  - `bg-surface-elevated`: Inputs, chips, pills, and nested card elements
  - `text-foreground`: Primary headings and body content
  - `text-muted` & `text-muted-foreground`: Secondary text, metadata, and subtitles
  - `border-border` & `hover:border-border-hover`: Structural and interactive borders
  - `text-accent`, `bg-accent`, `ring-accent`: Brand interactive elements
- **Theme Modes**: Supports 3 options (`system` [default], `light`, `dark`).
- **Scrollbar Stability**: Always declare `color-scheme` under `:root` and `.dark` with `scrollbar-gutter: stable` and transition suppression during theme change.

## 3. Zero Magic Strings / Industry-Standard JSON Locales (Strict)

- **Never hardcode UI text strings in components.**
- All user-facing strings, headings, buttons, ARIA labels, metrics, and messages **MUST** be defined in standard JSON locale files (`src/locales/en.json`) and consumed via `import { t } from '@/locales'`.
- Using `.json` allows seamless integration with standard localization pipelines (Crowdin, Lokalise, POEditor) while TypeScript automatically infers strict types via `resolveJsonModule`.

## 4. Code Quality, Security & SonarJS

- ESLint is configured with `eslint-plugin-sonarjs` and standard security recommendations.
- Avoid nested ternaries; extract into readable helper functions or switch statements.
- Prettier formatting is enforced (`npm run format` / `npm run format:check`).
- Strict TypeScript verification (`npx tsc --noEmit`) must pass with zero errors.

## 5. Local Port Cleanliness & Process Hygiene

- **Zero Lingering Ports**: Never leave background dev servers or port 3000 listeners running upon turn completion.
- **Mandatory Cleanup**: Terminate all test servers (`manage_task kill`) and verify port 3000 is clean (`lsof -i :3000`) before returning.
- **Terminal Priority**: Developer terminal retains exclusive rights to `npm run dev` / `npm start`.
