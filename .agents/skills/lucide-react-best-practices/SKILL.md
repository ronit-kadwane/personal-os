---
name: lucide-react-best-practices
description: 'Official best practices for lucide-react icon library usage. Load this skill BEFORE adding or modifying UI icons, touch targets, accessibility labels, or icon sizing.'
license: MIT
metadata:
  author: Lucide
  version: '1.0.0'
---

# Lucide React Best Practices

Guidelines for incorporating clean, accessible, and performant SVG icons using `lucide-react`.

## 1. Import Optimization

- Import icons directly from `lucide-react` (e.g. `import { Home, Phone, Briefcase } from "lucide-react";`).
- Tree-shaking is automatically handled by Next.js and modern bundlers.

## 2. Icon Sizing & Visual Consistency

- Standard icon size scale:
  - Micro / Inline text badges: `12px` - `14px` (e.g. `<Home size={14} />`)
  - Standard buttons & metadata pills: `16px` - `18px` (e.g. `<Phone size={16} />`)
  - Dialog / Hero headers: `20px` - `24px`

## 3. Accessibility & Semantics

- Decorative icons alongside text: Use `aria-hidden="true"` or rely on wrapping element text.
- Standalone icon buttons: Always provide `aria-label` on the parent `<button>` element.
