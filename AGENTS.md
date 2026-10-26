<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Personal OS — Agent Master Index & Single Source of Truth

> **Token-Efficient Operating Model**: This document is the single root entry point. All specialized guidance is decoupled across [.agents/](.agents/) and [docs/](docs/). **Do not preload all documents**; load only the specific reference required for your current task.

---

## 🚨 MANDATORY PROTOCOL: Versioning & Documentation Sync

Whenever **ANY** code, style, copy, or structural change is made to this codebase, the agent **MUST** execute this synchronization protocol:

1. **Update [CHANGELOG.md](CHANGELOG.md) (Always)**:
   - Add a concise entry under the appropriate version header using [Keep a Changelog](https://keepachangelog.com/) standards (`Added`, `Changed`, `Fixed`, `Removed`).
   - Bump version using Semantic Versioning (`patch` for fixes, `minor` for new features/sections, `major` for breaking paradigm shifts).
2. **Synchronize [package.json](package.json) (Always)**:
   - Ensure the `"version"` string in `package.json` **strictly matches** the version in `CHANGELOG.md`.
3. **Synchronize [README.md](README.md) (When Out of Sync)**:
   - If a change introduces new commands/scripts, alters the directory structure, adds dependencies, or changes environment variables, update `README.md` immediately.

_Full rule details:_ [.agents/rules/versioning-and-docs.md](.agents/rules/versioning-and-docs.md)

---

## 🧭 On-Demand Routing Index

Load only the file corresponding to your immediate sub-task:

### 1. Project Rules (`.agents/rules/`)

| Rule                  | File                                                                         | When to Load                                                                                                                 |
| :-------------------- | :--------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **Project Standards** | [.agents/rules/project-standards.md](.agents/rules/project-standards.md)     | Component hierarchy (`ui/`, `sections/`, `features/`), JSON locales, semantic theming tokens, SonarJS linting rules.         |
| **Data Integrity**    | [.agents/rules/data-integrity.md](.agents/rules/data-integrity.md)           | Updating bio, roles, experience, projects, or contact info. Enforces zero assumed/hallucinated data and public sanitization. |
| **Versioning & Docs** | [.agents/rules/versioning-and-docs.md](.agents/rules/versioning-and-docs.md) | Bumping versions, editing `CHANGELOG.md`, `package.json`, or keeping `README.md` synchronized.                               |

### 2. Specialized Skills (`.agents/skills/`)

| Skill                            | SKILL.md Path                                                                                                | When to Load                                                                                       |
| :------------------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **portfolio-manager**            | [.agents/skills/portfolio-manager/SKILL.md](.agents/skills/portfolio-manager/SKILL.md)                       | Updating portfolio data, regenerating ATS PDF resume, regenerating multi-resolution favicon.       |
| **nextjs-react-best-practices**  | [.agents/skills/nextjs-react-best-practices/SKILL.md](.agents/skills/nextjs-react-best-practices/SKILL.md)   | Next.js 16 App Router, React 19 compiler compatibility, Server vs. Client component boundaries.    |
| **tailwindcss-best-practices**   | [.agents/skills/tailwindcss-best-practices/SKILL.md](.agents/skills/tailwindcss-best-practices/SKILL.md)     | Tailwind v4 design tokens, PostCSS setup, responsive breakpoint styling, and micro-interactions.   |
| **lucide-react-best-practices**  | [.agents/skills/lucide-react-best-practices/SKILL.md](.agents/skills/lucide-react-best-practices/SKILL.md)   | Adding or modifying UI icons, sizing scale (`12px`, `14px`, `16px`, `24px`), accessibility labels. |
| **motion**                       | [.agents/skills/motion/SKILL.md](.agents/skills/motion/SKILL.md)                                             | Animation best practices, CSS spring/linear transitions, and 60fps GPU performance audits.         |
| **nextjs-rendering-performance** | [.agents/skills/nextjs-rendering-performance/SKILL.md](.agents/skills/nextjs-rendering-performance/SKILL.md) | Optimizing Core Web Vitals (LCP, INP, CLS), first-paint speed, bundle budgets, and animation jank. |
| **typescript-best-practices**    | [.agents/skills/typescript-best-practices/SKILL.md](.agents/skills/typescript-best-practices/SKILL.md)       | Writing TypeScript interfaces, generics, type assertions, or JSON module typing.                   |

### 3. Technical Architecture & Schemas (`docs/`)

| Topic             | Document Path                                  | Content Summary                                                                              |
| :---------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------- |
| **Architecture**  | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)   | Component tree breakdown, layout chrome, feature module isolation, and security headers.     |
| **Data Schema**   | [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md)     | Strict TypeScript schemas for `personalInfo`, `projects`, `experience`, `skills`, `contact`. |
| **Styling Guide** | [docs/STYLING_GUIDE.md](docs/STYLING_GUIDE.md) | Semantic theme custom properties, color-scheme flicker prevention, and typography scale.     |
| **Deployment**    | [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)       | Production build commands, environment variables checklist, and static generation targets.   |

---

## ⚡ Golden Architectural Constraints

1. **Hierarchy**:
   - `src/components/ui/`: Atomic primitives only (e.g. `Button`, `Badge`, `Logo`, `ThemeSelector`).
   - `src/components/sections/`: Layout chrome only (`Navbar`, `Footer`).
   - `src/features/<domain>/components/`: Domain business features (`HeroSection`, `ProjectsSection`, etc.).
2. **Theming**:
   - Never use raw color classes (e.g. `bg-zinc-950`). Use semantic tokens: `bg-background`, `bg-surface`, `bg-card`, `text-foreground`, `text-muted`, `border-border`, `accent`.
   - Default is `system`, supporting `light` and `dark` without scrollbar flickering.
3. **Locales**:
   - Zero hardcoded magic strings in JSX. Store all copy in [src/locales/en.json](src/locales/en.json) and import via `{ t }` from `@/locales`.
4. **Verification**:
   - Run `npm run format:check && npm run lint && npx tsc --noEmit && npm run build` before completing tasks.
