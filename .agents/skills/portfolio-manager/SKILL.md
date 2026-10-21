---
name: portfolio-manager
description: Manage and update personal portfolio content, projects, experience, styling, locales, and verification workflows.
---

# Portfolio Manager Skill

## Architecture Guidelines

- **Atomic UI**: Place shared primitives in `src/components/ui/`.
- **Layout Chrome**: Place global layout wrappers in `src/components/sections/` (`Navbar`, `Footer`).
- **Feature Modules**: Place all domain/business features in `src/features/<feature>/components/`.
- **Theming**: Use semantic CSS tokens (`bg-background`, `bg-surface`, `bg-card`, `text-foreground`, `text-muted`, `border-border`). Do not hardcode dark palette classes.
- **Locales**: Use `src/locales/en.ts` via `import { t } from '@/locales'`. Zero magic strings in JSX.

## Workflows

### 1. Update Portfolio Data & Locales

- Verified data: `src/data/portfolio.ts`
- UI text and labels: `src/locales/en.ts`
- Resume source generation: `python3 scripts/generate_resume.py`

### 2. Code Quality & Format

- Format code: `npm run format`
- Check formatting: `npm run format:check`
- Lint with SonarJS: `npm run lint`
- Type check: `npx tsc --noEmit`
- Production build: `npm run build`
