module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'no-unused-vars': ['error'],
    'no-spaced-func': ['off'],
    'react-native/no-inline-styles': ['off'],
  },
};
