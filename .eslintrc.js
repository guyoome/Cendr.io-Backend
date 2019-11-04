module.exports = {
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "jest/globals": true
  },
  "plugins": ["jest"],
  "rules": {
    "max-len": ["error", 1000], // Error for ligns containing too much char
    "no-console": 0,
    "padded-blocks": 0, // Allow jump a lign after function () {
    "indent": ["error", 4], // Indent 2 spaces
    "no-tabs": 0, // Authorize tab
    "no-trailing-spaces": 0, // To allow double jump lign
    "object-curly-newline": 0, // To do const { group, easiness } = cond; on same lign
    "curly": ["error", 'all'], // force to use {}  - source : https://eslint.org/docs/rules/curly
    "camelcase": 0, // disable because I can use some db required_value_object
    "no-underscore-dangle": 0, // allow dangle to use ._id
    "arrow-body-style": 0, // Ask for {} for function with 1 statement () => { toto }
    "func-names": 0, // Anonymous function for promises then(()=>{})
    // "object-shorthand": 0,
    "no-plusplus": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "class-methods-use-this": 0,
    //"nonblock-statement-body-position":0 //Jump lign after if without {},
    "linebreak-style": 0,
    "import/no-dynamic-require": 0,
    "comma-dangle": 0,
    "quote-props": 0,
    "newline-per-chained-call": 0,
    "import/no-unresolved": 0, // to allow module-alias
  }
};