module.exports = {
    root: true,
    ignorePatterns: ['/dist/', '/coverage/'],
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'prettier',
    ],
    rules: {
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'eslint-comments/require-description': ['error'],
        'eslint-comments/no-unused-disable': ['error'],
        curly: ['error'],
        'no-irregular-whitespace': [
            'error',
            {
                skipComments: true,
                skipTemplates: true,
            },
        ],
    },
    overrides: [
        {
            files: ['webpack.config.js', 'jest.config.js', 'typedoc.js'],
            env: {
                node: true,
            },
        },
        {
            files: ['*.ts'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:import/typescript',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: './',
                project: ['./tsconfig.json'],
            },
            plugins: ['unused-imports', '@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': [
                    'warn',
                    {
                        vars: 'all',
                        varsIgnorePattern: '^_',
                        args: 'after-used',
                        argsIgnorePattern: '^_',
                    },
                ],
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            },
        },
        {
            files: ['*.test.ts'],
            extends: ['plugin:jest/recommended', 'plugin:jest/style'],
            plugins: ['jest'],
            rules: {
                'jest/expect-expect': [
                    'error',
                    {
                        assertFunctionNames: ['expect', 'verify'],
                    },
                ],
            },
        },
    ],
    noInlineConfig: false,
    reportUnusedDisableDirectives: true,
}
