module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
    mocha: true,
  },
  rules: {
    'react/prop-types': 'off',
    'consistent-return': 'off',
    'import/named': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-prototype-builtins': 'off',
    'react/no-danger': 'off',
    'react/state-in-constructor': 'off',
    'no-unused-vars': 'off',
    'react/no-unused-state': 'off',
    'react/display-name': [
      1,
      {
        ignoreTranspilerName: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-multi-comp': [
      2,
      {
        ignoreStateless: true,
      },
    ],
    'react/jsx-fragments': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/prefer-stateless-function': 0,
    'react/no-array-index-key': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
};
