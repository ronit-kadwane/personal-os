---
name: nextjs-rendering-performance
description: Optimize Next.js rendering, first-load performance, Core Web Vitals (LCP, INP, CLS), bundle size, and Framer Motion animation efficiency.
---

# Next.js Rendering Performance & Core Web Vitals

Optimized guidelines for delivering sub-second first-paint, zero layout shifts, and 95+ Real Experience Scores (RES).

---

## 1. Rendering & Component Architecture

- **Server Components (RSC) by Default**: Keep pages, static sections, and chrome server-rendered.
- **Leaf-Node Client Components**: Confine `'use client'` strictly to isolated, interactive leaf elements (event handlers, state, browser APIs). Never mark top-level layouts or whole pages as Client Components.
- **Content Visibility**: Apply `content-visibility: auto; contain-intrinsic-size: auto 700px;` to below-the-fold sections to skip layout and paint during initial render.
- **Streaming & Suspense**: Wrap asynchronous or slow data-dependent sections in `<Suspense>` with stable fallbacks to prevent blocking initial document delivery.

---

## 2. First Contentful Paint (FCP) & Largest Contentful Paint (LCP)

- **Unblocked Initial Paint**: Never hide above-the-fold content (`h1`, Hero badge, bio, primary CTA) behind client-side animations (`initial={{ opacity: 0 }}`). Deliver meaningful HTML immediately.
- **Identify the LCP Element**: Ensure the LCP element (typically the Hero heading or hero image) paints on the first frame without waiting for JavaScript download or hydration.
- **Critical Resource Order**: Avoid sequential request waterfalls; load critical assets in parallel.
- **Preload Critical Assets**: Use `next/font` for self-hosted Google variable fonts (`display: swap`) and preload hero images with `priority` props when applicable.

---

## 3. Layout Stability (CLS ≤ 0.1, Target: 0.00)

- **Reserve Content Dimensions**: Explicitly specify aspect ratios, `width`, `height`, or `min-h-[...]` on dynamic containers, SVG logos, and embeds.
- **SSR Text Defaults**: Always initialize dynamic tickers or typewriter widgets with a valid default string (e.g. `personalInfo.roles[0]`) instead of empty state to eliminate layout reflow upon hydration.
- **Static In-Place Chrome**: Do not translate fixed headers/navbars from offscreen (`y: -80`) on mount. Render navigation in place.
- **Font Metric Fallback**: Rely on Next.js automatic font fallback matching to prevent FOUT layout jumps.

---

## 4. Interaction to Next Paint (INP ≤ 150ms)

- **Micro-Handlers**: Keep click and input handlers lightweight; never run expensive calculations synchronously during interactions.
- **Isolated Re-renders**: Avoid top-level `watch()` calls in forms that re-render entire sections on every keystroke. Use granular component state or `useWatch`.
- **Non-Urgent Transitions**: Wrap secondary or non-urgent state updates in `startTransition`.
- **Main Thread Cleanliness**: Defer third-party scripts (analytics, widgets) and keep long tasks under 50ms.

---

## 5. Animation Efficiency (Motion & CSS)

- **CSS First**: Use native CSS transitions and keyframes for decorative and entry effects.
- **Composite Transforms Only**: Restrict animations to GPU-composited properties (`transform`, `opacity`). Never animate layout dimensions (`width`, `height`, `top`, `left`, `margin`, `padding`).
- **Avoid Heavy Filters**: Do not animate dynamic blur, backdrop-filter, or deep box-shadows on large viewports without profiling.
- **Reduced Motion**: Always respect user accessibility preferences via `@media (prefers-reduced-motion: reduce)` or `useReducedMotion()`.

---

## 6. JavaScript & Bundle Hygiene

- **Budget**: Target initial route-attributable JS below **100 KB gzip** (flag any route exceeding 150 KB).
- **Dynamic Imports**: Use `next/dynamic` to lazy-load heavy, non-critical components (modals, calendars, code editors) until user interaction.
- **Unified Font Bundles**: Load Google variable fonts without discrete weight slices (`weight: ['400', '500', ...]`) to avoid redundant `@font-face` downloads.
- **Tree-Shaking**: Use direct module imports for icon packages (`lucide-react`) and utility libraries.

---

## 7. Performance Budgets & Core Web Vitals Targets

| Metric                              |   Target    | Acceptable Threshold | Description                                   |
| :---------------------------------- | :---------: | :------------------: | :-------------------------------------------- |
| **Lighthouse Performance**          | **95–100**  |         ≥ 95         | Synthetic lab score (desktop & mobile)        |
| **LCP (Largest Contentful Paint)**  | **≤ 2.0s**  |        ≤ 2.5s        | Core Web Vital: time to largest content paint |
| **FCP (First Contentful Paint)**    | **≤ 1.2s**  |        ≤ 1.8s        | Time to first visible DOM content             |
| **INP (Interaction to Next Paint)** | **≤ 150ms** |       ≤ 200ms        | Core Web Vital: interaction responsiveness    |
| **CLS (Cumulative Layout Shift)**   |  **0.00**   |        ≤ 0.10        | Core Web Vital: unexpected visual shifts      |
| **TTFB (Time to First Byte)**       | **≤ 500ms** |       ≤ 800ms        | Server response and network latency           |
| **TBT (Total Blocking Time)**       | **≤ 100ms** |       ≤ 200ms        | Lab diagnostic for main thread blocking       |

---

## 8. Profiling & Verification Workflow

1. **Production Build**: Always test on a production build (`npm run build && npm start`), never in development mode.
2. **DevTools Profiling**: Use Chrome DevTools Performance panel (CPU 4x slowdown) and Network panel (Fast 3G) to audit real-world mobile behavior.
3. **Core Web Vitals Verification**: Validate real metrics via Vercel Speed Insights dashboard or Lighthouse before declaring optimization complete.
