module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname
  },
  root: true,
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expression': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-throw-literal': 'off'
  },
  globals: {
    __IS_DEV__: true
  }
}
