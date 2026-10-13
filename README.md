# 🚀 Personal OS — Digital Portfolio

> A world-class, production-ready personal portfolio and interactive resume web application.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-pink)](https://framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

---

## ✨ Features

| Section | What's included |
|---|---|
| **Hero** | Dynamic role ticker, availability badge, dual CTA, social links, key metrics |
| **Projects** | Bento grid with gradient cards, GitHub stars, impact metrics, tech stack pills |
| **Experience** | Filterable timeline with expandable accordions, type badges, resume download |
| **Skills** | Categorized matrix with animated proficiency bars and extra tech cloud |
| **Testimonials** | Dual infinite-scroll marquee with star ratings and gradient avatars |
| **Blog** | Featured + regular posts grid with reading time, tags, and Substack link |
| **Contact** | Zod-validated form with budget selector, project type picker, Calendly CTA |

### 🎨 Design
- **Dark mode default** with smooth light/light mode toggle
- **Indigo/Violet** primary accent + **Cyan** secondary accent
- Glassmorphic floating navbar with scroll-aware behavior
- Background glows, dot-grid overlays, gradient text
- Micro-animations and scroll-reveal via **Framer Motion**
- WCAG AA accessible (ARIA labels, focus rings, high contrast)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Theme | next-themes |
| Utilities | clsx + tailwind-merge |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API with Zod validation
│   ├── globals.css            # Design tokens, CSS custom properties
│   ├── layout.tsx             # Root layout with fonts, metadata, SEO
│   └── page.tsx               # Main page assembling all sections
├── components/
│   ├── providers/
│   │   └── ThemeProvider.tsx  # next-themes wrapper
│   ├── sections/
│   │   ├── Navbar.tsx         # Glassmorphic floating navbar
│   │   ├── Hero.tsx           # Hero with role ticker
│   │   ├── Projects.tsx       # Bento grid projects
│   │   ├── Experience.tsx     # Filterable timeline
│   │   ├── Skills.tsx         # Skills matrix
│   │   ├── Testimonials.tsx   # Infinite marquee
│   │   ├── Blog.tsx           # Blog posts grid
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer
│   └── ui/
│       ├── Button.tsx         # Button primitive
│       ├── Badge.tsx          # Badge primitive
│       └── Card.tsx           # Card primitive
├── data/
│   └── portfolio.ts           # ALL content — edit this file!
└── lib/
    └── utils.ts               # cn(), formatDate(), truncate()
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.9+
- npm 10+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## ✏️ Customizing Your Portfolio

**All content lives in one file:** [`src/data/portfolio.ts`](./src/data/portfolio.ts)

1. **Personal Info** — Edit `personalInfo` object with your name, bio, links, and social URLs
2. **Projects** — Edit the `projects` array (add/remove/update project cards)
3. **Experience** — Edit the `experience` array (jobs, freelance, education)
4. **Skills** — Edit the `skills` array categories and proficiency levels
5. **Testimonials** — Edit the `testimonials` array with real client quotes
6. **Blog Posts** — Edit the `blogPosts` array with your articles

---

## 📧 Contact Form Setup

The form validates with Zod on both client and server. To activate email sending:

1. Install an email provider: `npm install resend` (recommended)
2. Add your API key to `.env.local`: `RESEND_API_KEY=re_...`
3. Uncomment and configure the email send block in [`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts)

---

## 🔐 Security

The following headers are pre-configured in `next.config.ts`:
- `Content-Security-Policy` (CSP)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security` (HSTS)
- `Referrer-Policy`
- `Permissions-Policy`

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next/out directory
```

---

## 📋 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

---

## 📄 License

MIT License — free to use and adapt for your own portfolio.

---

<p align="center">Built with ❤️ by Ronit Kadwane</p>
