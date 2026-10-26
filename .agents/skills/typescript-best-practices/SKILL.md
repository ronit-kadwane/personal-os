---
name: typescript-best-practices
description: 'Official best practices for TypeScript. Load this skill BEFORE writing or modifying TypeScript types, interfaces, generics, type guards, or strict compiler settings.'
license: MIT
metadata:
  author: TypeScript Team
  version: '1.0.0'
---

# TypeScript Best Practices

Guidelines for writing type-safe, maintainable, and robust TypeScript code.

## 1. Strict Typing Standards

- Never use `any`. Use `unknown` with explicit type guards or narrowing assertions when handling dynamic inputs.
- Enable `strict: true` and `noImplicitAny: true` in `tsconfig.json`.

## 2. Types vs Interfaces

- Use `type` for type aliases, union types, primitives, tuples, and component props.
- Use `interface` for extendable object shapes and public contract definitions.

## 3. Discriminated Unions & Exhaustiveness Checking

- Use discriminated unions for API states or domain status models (e.g. `{ status: "success"; data: T } | { status: "error"; error: string }`).
- Implement exhaustive `switch` / `if` handling to ensure new union members are caught at compile time.

## 4. Centralized Type Definitions

- Keep domain entities in shared type locations (`src/data/portfolio.ts` or `docs/DATA_SCHEMA.md`).
- Avoid inline duplication of complex prop or response types across components.
