module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'max-len': ['error', { code: 150 }],
    'no-unused-vars': 'warn',
    'prefer-destructuring': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
