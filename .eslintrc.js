module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser

  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json'
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'airbnb-typescript/base', // AirBnB config
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "indent": ["error", 2],
    "space-before-function-paren": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "linebreak-style": "off",
    "global-require": "off",
    "semi": "off",
    "@typescript-eslint/semi": "off",
    "arrow-body-style": "off",
    "no-multiple-empty-lines": ["warn", { "max": 1 }],
    "no-unused-expressions": [
      "error",
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-underscore-dangle": "off",
    "import/no-unresolved": "off",
    "import/no-mutable-exports": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "@typescript-eslint/comma-dangle": "off",
    "class-methods-use-this": "off",
    "no-console": "off"
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  },
};