// no-unary-plus.test.js
const { RuleTester } = require("eslint");
const rule = require("./no-unary-plus");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  parserOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "no-unary-plus", // rule name
  rule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: "const str = 'foo';",
      },
      {
        code: "const str = 'foo' + 'bar';",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "const str = +'foo';",
        errors: 1,
      },
      {
        code: "const str = 'foo' + + 'bar';",
        errors: 1,
      },
      {
        code: "const str = 'foo' + + + 'bar';",
        errors: 2,
      },
    ],
  }
);

console.log("All tests passed!");
