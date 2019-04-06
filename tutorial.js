const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const PI = 3.14;

// Two ways of exporting properties
// First way
module.exports.sum = sum;
module.exports.minus = minus;
module.exports.PI = PI;

// Another way
module.exports = {sum: sum, minus: minus, PI: PI};