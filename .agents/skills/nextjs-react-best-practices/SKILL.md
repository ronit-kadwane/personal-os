---
name: nextjs-react-best-practices
description: 'Official best practices for Next.js 16, React 19, and react-dom. Load this skill BEFORE creating or modifying Next.js pages, API routes, layout components, server/client component boundaries, state hooks, metadata, or hydration handling.'
license: MIT
metadata:
  author: Vercel / React Team
  version: '1.0.0'
---

# Next.js 16 & React 19 Best Practices

Comprehensive guidelines for building fast, maintainable, and type-safe applications with Next.js App Router, React 19, and `react-dom`.

## 1. Server vs Client Component Boundaries

- **Server Components (Default)**: Use for data fetching, rendering static/server content, and accessing backend resources without sending extra JS to the client.
- **Client Components (`"use client"`)**: Keep at the leaf nodes of your component tree for interactive UI (event listeners, state hooks like `useState`/`useEffect`, browser APIs).
- **Rule**: Never mark a top-level layout or page `"use client"` unless strictly necessary. Pass Server Components as `children` to Client Component wrappers.

## 2. Data Fetching & Caching

- **API Route Caching**: Use explicit revalidation (`export const revalidate = 3600`) or client-side polling intervals appropriately (e.g. 1 hour = 3,600,000 ms) to avoid unnecessary server traffic.
- **Fetch Caching**: Utilize Next.js fetch caching strategies (`{ next: { revalidate: 3600 } }` or `{ cache: 'no-store' }` for dynamic administrative actions).

## 3. Hydration & Metadata Safety

- Avoid mismatched rendering between server and client (e.g. `Date.now()`, `Math.random()`, or accessing `window` directly during render).
- Access `window` or `document` only inside `useEffect` or event handlers.
- Export static/dynamic metadata via `generateMetadata` or static `export const metadata`.

## 4. Performance & Font Optimization

- Use `next/image` for image rendering with explicit `width`, `height`, and `priority` props for above-the-fold content.
- Use `next/font` for local/Google font optimization to prevent Layout Shift (CLS).
