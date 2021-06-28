module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jasmine: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jasmine/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "jasmine"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
  },
};
