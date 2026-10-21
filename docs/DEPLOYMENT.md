# Deployment & Operations Guide

## Prerequisites

- Node.js >= 20.x
- npm >= 10.x

## Available Scripts

```bash
npm run dev      # Start Next.js development server with Turbopack
npm run build    # Compile production build & static generation
npm run start    # Start production server
npm run lint     # Run ESLint validation
```

## Production Build & Static Export

The application builds cleanly with Next.js Turbopack:

```bash
npm run build
```

Routes generated:

- `/` (Static prerendered)
- `/_not-found` (Static prerendered)
- `/api/contact` (Dynamic server route)

## Deployment Platforms

- **Vercel**: Zero-config deployment with native Next.js 16 support.
- **Node Server / Docker**: Run `npm run build && npm run start` on port 3000.
- **Security Check**: Pre-configured security headers (CSP, HSTS, X-Frame-Options) apply automatically to all routes.
