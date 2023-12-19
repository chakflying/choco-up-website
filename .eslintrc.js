module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:jsdoc/recommended-error",
  ],
  rules: {
    quotes: ["error", "double"],
    eqeqeq: ["warn", "smart"],
    semi: "error",
    indent: [
      "error",
      2,
      {
        ignoredNodes: ["TemplateLiteral"],
        SwitchCase: 1,
      },
    ],
    curly: "error",
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": "off",
    "jsdoc/require-returns": [
      "warn",
      {
        "exemptedBy": ["JSX.Element"],
      }
    ],
    "jsdoc/require-returns-description": "off",
    "jsdoc/require-param": "off",
  }
};
