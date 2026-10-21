import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import sonarjs from 'eslint-plugin-sonarjs';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  sonarjs.configs.recommended,
  prettierConfig,
  {
    rules: {
      'sonarjs/no-duplicate-string': 'off', // Handled by locales / design tokens
      'sonarjs/cognitive-complexity': ['warn', 25],
      'sonarjs/no-nested-template-literals': 'warn',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'public/resume.pdf']),
]);

export default eslintConfig;
