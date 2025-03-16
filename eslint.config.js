import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // Apply to all files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.storybook/**',
      '**/public/**',
      '**/coverage/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/storybook-static/**',
      '**/stories/**',
      '**/vitest.*.ts',
      '**/vite-env.d.ts',
    ],
  },
  // Set global environment
  { languageOptions: { globals: globals.browser } },

  // Base recommended configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // React specific configurations
  pluginReact.configs.flat.recommended,
  {
    // Configure React settings
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // React Hooks configuration
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Not needed when using TypeScript
      'react/display-name': 'off', // Not needed in most cases
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  // Import plugin configuration
  {
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error',
    },
  },

  // Accessibility rules
  {
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-autofocus': 'off',
    },
  },

  // Prettier integration (must come last to override other formatting rules)
  eslintPluginPrettier,

  // Custom rules override
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-unused-vars': 'off', // Handled by TypeScript
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      'no-empty': 'off',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
