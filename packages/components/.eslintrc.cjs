/* eslint-disable */
const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: ".cjs",
    ecmaVersion: "latest",
    sourceType: "module",
    project: [path.resolve(__dirname, "./tsconfig.json")]
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "react/prop-types": 0,
    "no-debugger": 1
  },
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off"
      }
    }
  ]
};
