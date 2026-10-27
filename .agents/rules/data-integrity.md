# Data Integrity & Public Safety Guidelines

## Strict Rule: Zero Hallucinated / Assumed Personal Data

- All personal facts, work history, education, skills, and metrics MUST originate from verified user documents (e.g. user-provided resume).
- Do NOT fabricate companies, metrics, client names, blog posts, or testimonials.
- If a section (e.g., Blog or Testimonials) lacks user-verified content:
  - Keep the data array empty in `src/data/portfolio.ts`.
  - Component must conditionally return `null` when array is empty.
  - Do NOT display empty placeholder containers or broken UI elements.

## Public Repository Safety Rules

- This repository is intended for **public GitHub release**.
- **Never commit private residential street addresses** or sensitive personal physical locations into static data files. Use general regional locations (e.g. `Surat, India • Open to Global Remote`).
- **Never commit private API keys**, secrets, or auth tokens. Use `.env.example` as a template and ensure real credentials reside only in git-ignored `.env.local`.

## Profile Reference

- **Owner**: Ronit Kadwane
- **Current Role**: Staff Engineer & Full-Stack Architect at Nagarro Software Pvt. Ltd (Surat)
- **Target Audience**: High-scale enterprise tech leaders, US & European startups and recruiters seeking staff engineering / architecture leadership.
- **Experience**: 11+ years across JavaScript, React, React-Native, Node.js, Android, MongoDB, AI Agent Orchestration
- **Education**: B.E. Computer Engineering from Sarvajanik College of Engineering & Technology
