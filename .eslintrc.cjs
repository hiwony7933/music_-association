module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      },
    ],
  },
};
