ESLint plugin to disallow unary + operators.

# The Problem with the Unary Plus

The unary + operator can be used on any type and converts it to a number.
As a result, a plus before any value is valid javascript code and unintentional + operators can be hard to find.
This is especially troublesome with string concatenation over several lines:

```javascript
const str = "Concatenating several strings " + 
    + "can be dangerous " + "because having more than one " +
    "+ " + + "between the strings " + "leads to conversions to " +
    + "numbers.";

console.log(str);
```
Results in:
```
Concatenating several strings NaNbecause having more than one + NaNleads to conversions to NaN
```



# Usage

Install plugin npm:

```bash
$ npm install eslint-plugin-no-unary-plus --save-dev
```

Add plugin and rule in `.eslintrc`:

```json
{
  "plugins": [
    ...
    "no-unary-plus",
    ...
  ],
  ...
  "rules": {
    ...
    "no-unary-plus/no-unary-plus": "error",
    ...
  }
}
```
