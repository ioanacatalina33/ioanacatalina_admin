import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            'unused-imports': unusedImports
        },
        rules: {
            'no-empty': 1,
            '@/no-var': 2,
            '@typescript-eslint/no-unused-vars': 1,
            '@typescript-eslint/no-explicit-any': 0,
            'react/react-in-jsx-scope': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        }
    },
    {
        files: ['tests/**'],
        languageOptions: {
            globals: {
                ...globals.mocha
            }
        }
    }
];
