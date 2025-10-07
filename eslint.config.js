// ESLint flat config for Node.js + Prettier
import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  {
    // Ignore files and folders from linting
    ignores: [
      'node_modules/',
      'coverage/',
      '.git/',
      '.env',
      'dist/',
      'build/',
      'eslint.config.js',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  // Jest test files
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  // Disable rules that conflict with Prettier formatting
  prettier,
];
