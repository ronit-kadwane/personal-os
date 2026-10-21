---
name: tailwindcss-best-practices
description: 'Official best practices for Tailwind CSS. Load this skill BEFORE writing or modifying Tailwind classes, design system tokens, global CSS utilities, or responsive layout components.'
license: MIT
metadata:
  author: Tailwind Labs
  version: '1.0.0'
---

# Tailwind CSS Best Practices

Guidelines for maintaining visual excellence, design token consistency, and clean utility styling with Tailwind CSS.

## 1. Design System Tokens & Color Harmony

- Use semantic design tokens and curated color palettes (e.g. HSL tailored themes, dark modes) rather than default generic colors.
- Centralize custom theme extensions and color tokens in `globals.css` or `tailwind.config`.

## 2. Micro-Animations & Responsive Design

- Mobile-First: Start with mobile base styles and scale up using breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`).
- Hover & Motion: Add smooth transition utilities (`transition-all duration-200 ease-in-out`, `hover:scale-[1.02]`, `active:scale-[0.98]`) for enhanced user experience.

## 3. Avoid Inline Class Bloat

- Extract complex multi-part component styles into dedicated utility classes or CSS modules when components require extensive styling rules.
- Maintain readable class ordering (Layout -> Flex/Grid -> Spacing -> Typography -> Visual -> Motion).
