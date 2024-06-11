/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/prettier',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/consistent-type-assertions': 'warn',
    indent: 'off', // indentation done in prettier
    'eol-last': ['error', 'always'],
    'max-len': [
      'error',
      120,
      {
        ignorePattern: 'd="([\\s\\S]*?)"', // ignore path of svg
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': ['error', 200],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
  },
}
