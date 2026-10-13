# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

- Calendly/Cal.com embed modal
- OG image generation via Next.js metadata API
- Blog post dynamic routes with MDX

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
