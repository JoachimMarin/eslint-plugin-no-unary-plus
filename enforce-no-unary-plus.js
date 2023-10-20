// enforce-no-unary-plus.js

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallows using unary + operators.",
    },
  },
  create(context) {
    return {
      // Performs action in the function on every variable declarator
      UnaryExpression(node) {
        if (node.operator === "+") {
          context.report({
            node,
            message: "Do not use unary + operator.",
          });
        }
      },
    };
  },
};
