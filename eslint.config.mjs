import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  globalIgnores(['.astro/**', 'dist/**', 'node_modules/**']),
]);

export default eslintConfig;
