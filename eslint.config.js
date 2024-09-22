import globals from "globals";
import auto from "eslint-config-canonical/configurations/auto.js";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...auto,
  ...tseslint.config({
    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.json',
          './tsconfig.node.json',
          './tsconfig.app.json'
        ]
      },
    },
  }),
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'import/no-absolute-path': 'off',
      'import/extensions': [
        'error',
        'never',
        {
          'webp': 'always',
          'svg': 'always',
          'png': 'always',
          'jpg': 'always',
          'jpeg': 'always',
          'gif': 'always',
          'json': 'always',
          'css': 'always',
        }
      ],
      'import/no-unassigned-import': [
        'error',
        {
          allow: [
            '**/*.css',
          ]
        }
      ],
      '@typescript-eslint/consistent-type-definitions': [
        'warn',
        'interface',
      ],
    }
  },
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage', '**/*.json', '**/*.config.js'],
  }
];