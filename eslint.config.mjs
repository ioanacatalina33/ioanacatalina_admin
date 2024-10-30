import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    {
        extends: ['eslint:recommended', 'plugin:prettier/recommended'],
        env: {
            browser: true,
            commonjs: true,
            es2021: true
        },
        parserOptions: {
            ecmaVersion: 12
        },
        rules: {
            'no-var': 0
        }
    }
];
