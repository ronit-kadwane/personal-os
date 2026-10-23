# Versioning & Documentation Synchronization Rule

## Mandatory Protocol for Every Change

Whenever any change, feature, bug fix, or refactor is made to the codebase, the agent **MUST** follow this synchronization checklist:

### 1. Update `CHANGELOG.md` (Always)

- Every user-facing or architectural change must be documented under the appropriate semantic version header following the Keep a Changelog standard:
  ```markdown
  ## [X.Y.Z] — YYYY-MM-DD

  ### Added / Changed / Fixed / Deprecated / Removed / Security

  - Clear bulleted descriptions of what changed
  ```
- Increment the version according to Semantic Versioning:
  - **Patch** (`1.4.x`): Bug fixes, style tweaks, minor copy edits.
  - **Minor** (`1.x.0`): New features, new sections, new architectural capabilities.
  - **Major** (`x.0.0`): Breaking changes, major redesigns or paradigm shifts.

### 2. Synchronize `package.json` Version (Always)

- The `"version"` field in `package.json` **MUST** strictly match the latest released version in `CHANGELOG.md`.
- Example: If `CHANGELOG.md` records `## [1.4.0] — 2026-10-21`, then `package.json` must be `"version": "1.4.0"`.

### 3. Check and Synchronize `README.md` (When Out of Sync)

- Review `README.md` whenever:
  - New commands, scripts, or tooling are introduced (e.g. `npm run format`, `scripts/generate_favicon.py`).
  - Directory structure or architecture changes (e.g. `src/features/`, `src/locales/`).
  - Feature capabilities, tech stack libraries, or environment variables are added or modified.
- If `README.md` is out of sync, update it in the same turn so project documentation remains accurate.
