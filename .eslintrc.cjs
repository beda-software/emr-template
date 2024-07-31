module.exports = {
    env: {
        browser: true,
        es2020: true,
        serviceworker: true,
    },
    globals: {
        HTMLButtonElement: 'readonly',
        JSX: true,
    },
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
        'eslint-config-prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.cjs'],
    plugins: ['react', '@typescript-eslint', 'react-refresh', 'prettier', 'import', 'string-to-lingui'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                project: 'src',

                project: 'tsconfig.json',
            },
        },
    },
    rules: {
        'react-refresh/only-export-components': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'string-to-lingui/t-call-in-function': 2,
        'import/default': 'off',
        'import/named': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': [
            2,
            {
                ignore: ['fhir/r4b'], // Fixes error: Unable to resolve path to module 'fhir/r4b'.
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['**/contrib/aidbox-types'],
                        message: 'Please use @beda.software/aidbox-types',
                    },
                    {
                        group: ['**/contrib/fhir-emr'],
                        message: 'Please use @beda.software/emr',
                    },
                    {
                        group: ['**/contrib/emr-config'],
                        message: 'Please use @beda.software/emr-config',
                    },
                ],
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent']],
                'newlines-between': 'always',
                pathGroupsExcludedImportTypes: ['builtin'],
                pathGroups: [
                    {
                        pattern: 'aidbox-react/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@beda.software/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: 'src/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
    }
};
