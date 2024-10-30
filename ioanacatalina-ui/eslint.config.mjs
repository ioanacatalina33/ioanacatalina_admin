import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
        env: {
            browser: true,
            es2021: true,
            jest: true
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': 'error'
        }
    }
];
