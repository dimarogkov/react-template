const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh').default;
const jsxA11y = require('eslint-plugin-jsx-a11y');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
    { ignores: ['build/**', 'node_modules/**', 'coverage/**'] },
    js.configs.recommended,
    tseslint.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    jsxA11y.flatConfigs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        },
        settings: {
            react: { version: 'detect' }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/prop-types': 'off',
            'react/display-name': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
            'no-console': ['warn', { allow: ['warn', 'error'] }]
        }
    },
    {
        files: ['craco.config.ts'],
        languageOptions: {
            globals: globals.node
        }
    },
    {
        // generic wrapper: children are opaque (`...props`), so this rule can never see a nested
        // control from this file alone — every real call site does nest one (Input, Checkbox, Radio, ...)
        files: ['src/components/atoms/Label/Label.tsx'],
        rules: { 'jsx-a11y/label-has-associated-control': 'off' }
    },
    {
        // stops click propagation only; the actual interactive controls are the children
        files: ['src/components/atoms/Dropdown/DropdownSubMenu.tsx'],
        rules: {
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off'
        }
    },
    {
        // focus moves into the search dialog on open, not on page load; matches the WAI-ARIA dialog pattern
        files: ['src/components/molecules/Header/HeaderSearch/HeaderSearch.tsx'],
        rules: { 'jsx-a11y/no-autofocus': 'off' }
    }
);
