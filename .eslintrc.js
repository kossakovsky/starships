module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'no-mixed-operators': 'off',
    'no-return-assign': 'off',
    'space-before-function-paren': ['error', 'always'],
    'no-unused-vars' : 'off',
    'camelcase': 'off'
  },
  overrides: [{
    'files': ['*.vue'],
    'rules': { 'indent': 'off' }
  }]
}
