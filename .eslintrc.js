module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-param-reassign": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-nested-ternary": "off",
    "no-await-in-loop": "off",
    "no-plusplus": "off",
    "react/require-default-props": "off",
  },
};
