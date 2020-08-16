module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: './',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'react-hooks'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: ['src'],
      },
      typescript: {},
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/**/*.test.js',
          'src/**/*.test.ts',
          'src/**/*.stories.tsx',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/require-default-props': 'off', // optional props without defaults
    'react/forbid-prop-types': 'warn',
    'quote-props': ['warn', 'as-needed', { numbers: true }],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    indent: 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-wrap-multilines': 'off',
    // TODO: Fix rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
  },
};
