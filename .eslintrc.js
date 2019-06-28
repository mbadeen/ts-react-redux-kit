module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/react'
  ],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  plugins: ['react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
