module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    // Reglas que se deben respetar en mi proyecto
    semi: ['error', 'always'],
    // 'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'prettier/prettier': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
  },
};
