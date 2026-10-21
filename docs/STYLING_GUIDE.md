# Styling & Design System Guide

## Dynamic Theming Architecture

The system supports fluid, instantaneous switching between light and dark themes using semantic design tokens.

### Configuration (`src/app/globals.css`)

```css
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-elevated: var(--surface-elevated);
  --color-surface-hover: var(--surface-hover);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-accent: var(--accent);
}
```

### Semantic Token Mapping

| Token                | Light Mode (`:root`)   | Dark Mode (`.dark`)    | Usage                               |
| -------------------- | ---------------------- | ---------------------- | ----------------------------------- |
| `--background`       | `#f8fafc` (Slate 50)   | `#09090b` (Zinc 950)   | Page / section base background      |
| `--surface`          | `#ffffff` (White)      | `#121215` (Obsidian)   | Floating bars, dropdowns, panels    |
| `--surface-elevated` | `#f1f5f9` (Slate 100)  | `#18181b` (Zinc 900)   | Form inputs, pills, chips, chips    |
| `--card`             | `#ffffff` (White)      | `#121215` (Obsidian)   | Feature and bento grid cards        |
| `--foreground`       | `#0f172a` (Slate 900)  | `#f1f5f9` (Slate 100)  | Primary typography, headers         |
| `--muted`            | `#64748b` (Slate 500)  | `#94a3b8` (Slate 400)  | Secondary text, captions, subtitles |
| `--border`           | `#e2e8f0` (Slate 200)  | `#27272a` (Zinc 800)   | Borders, dividers, outlines         |
| `--accent`           | `#6366f1` (Indigo 500) | `#6366f1` (Indigo 500) | Primary brand interactive color     |

### Strict Rule

**Never use hardcoded palette classes** like `bg-zinc-950` or `text-zinc-100`. Always write `bg-background`, `bg-card`, `text-foreground`, `text-muted`, and `border-border`.
