// eslint-plugin-no-unary-plus.js

const rule = require("./enforce-no-unary-plus");
const plugin = { rules: { "enforce-no-unary-plus": rule } };
module.exports = plugin;
