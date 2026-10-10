const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh').default;
const jsxA11y = require('eslint-plugin-jsx-a11y');
const importX = require('eslint-plugin-import-x');
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
            react: { version: 'detect' },
            'import-x/internal-regex':
                '^@(app|components|constants|code|form-validation|hooks|services|store|interfaces|utils)(/|$)'
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'import-x': importX
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
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'import-x/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
                    pathGroups: [
                        { pattern: 'react', group: 'external', position: 'before' },
                        { pattern: '@hooks', group: 'internal', position: 'before' },
                        { pattern: '@app/**', group: 'internal', position: 'before' },
                        { pattern: '@interfaces/**', group: 'internal', position: 'before' },
                        { pattern: '@store/**', group: 'internal', position: 'before' },
                        { pattern: '@services/**', group: 'internal', position: 'before' },
                        { pattern: '@form-validation/**', group: 'internal', position: 'before' },
                        { pattern: '@components/organisms', group: 'internal', position: 'before' },
                        { pattern: '@components/organisms/**', group: 'internal', position: 'before' },
                        { pattern: '@components/molecules', group: 'internal', position: 'before' },
                        { pattern: '@components/molecules/**', group: 'internal', position: 'before' },
                        { pattern: '@components/atoms', group: 'internal', position: 'before' },
                        { pattern: '@components/atoms/**', group: 'internal', position: 'before' },
                        { pattern: '@constants', group: 'internal', position: 'before' },
                        { pattern: '@code', group: 'internal', position: 'before' },
                        { pattern: '@utils', group: 'internal', position: 'before' },
                        { pattern: 'lucide-react', group: 'index', position: 'after' },
                        { pattern: 'classnames', group: 'index', position: 'after' }
                    ],
                    pathGroupsExcludedImportTypes: [],
                    'newlines-between': 'never'
                }
            ]
        }
    },
    {
        files: ['craco.config.ts', 'eslint.config.js'],
        languageOptions: {
            globals: globals.node
        }
    },
    {
        files: ['eslint.config.js'],
        rules: { '@typescript-eslint/no-require-imports': 'off' }
    },
    {
        files: ['src/components/atoms/Label/Label.tsx'],
        rules: { 'jsx-a11y/label-has-associated-control': 'off' }
    },
    {
        files: ['src/components/atoms/Dropdown/DropdownSubMenu.tsx'],
        rules: {
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off'
        }
    },
    {
        files: ['src/components/atoms/Tooltip/TooltipWrapper.tsx'],
        rules: { 'jsx-a11y/no-static-element-interactions': 'off' }
    },
    {
        files: ['src/components/molecules/Header/HeaderSearch/HeaderSearch.tsx'],
        rules: { 'jsx-a11y/no-autofocus': 'off' }
    },
    {
        files: ['src/app/routes/router.tsx'],
        rules: { 'import-x/order': 'off' }
    }
);
