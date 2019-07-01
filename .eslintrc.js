module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'prettier/@typescript-eslint', 'prettier', 'prettier/react'],
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
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
