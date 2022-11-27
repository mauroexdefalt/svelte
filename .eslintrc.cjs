module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:jsdoc/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    "plugin:@typescript-eslint/strict",
    'plugin:eslint-comments/recommended',
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/eslint-recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:import/typescript',
    'airbnb-base',
    'airbnb-typescript/base',
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  plugins: ['svelte3', '@typescript-eslint', 'sonarjs', 'jsdoc'],
  ignorePatterns: ['node_modules', '.eslintrc.cjs', 'src/vite-env.d.ts', 'svelte.config.js', 'vite.config.ts'],
  rules: {
    "react/jsx-filename-extension": [0],
  }
}
