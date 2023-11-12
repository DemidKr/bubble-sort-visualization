module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react'],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/indent': [2,4],
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'indent': [2, 4],
    "no-console": "warn",
    'no-unused-vars': "warn",
    '@typescript-eslint/no-unused-vars': 'warn',
    // 'max-len': ["error", { code: 100, ignoreUrls: true }],
    'quotes': [1, 'double'],
    "react/jsx-max-props-per-line": [1, { "maximum": { "single": 2, "multi": 1 }}],
    "react/jsx-first-prop-new-line": [1, "multiline"],
    "react/jsx-closing-bracket-location": [1, 'tag-aligned'],
    "react/destructuring-assignment": [2, 'always'],
    "react/hook-use-state": 2,
    "react/jsx-boolean-value": [1, 'never'],
    "react/jsx-closing-tag-location": 1,
    "react/jsx-one-expression-per-line": [1, { "allow": "single-child" }],
    "react/jsx-pascal-case": 1,
    "react/jsx-props-no-multi-spaces": 1,
    "react/jsx-sort-props": [1, {
      "callbacksLast": true,
      "shorthandFirst": true,
      "multiline": "last",
      "noSortAlphabetically": true,
      "reservedFirst": ["key"],
    }],
    "react/jsx-wrap-multilines": [1, {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line" ,
      "condition": "ignore",
      "logical": "ignore",
      "prop": "ignore"
    }],
    "react/no-access-state-in-setstate": 2,
    "react/no-multi-comp": 2,
    "react/no-unused-prop-types": 1,
    "react/no-unused-state": 1,
    },
}
