const Calculator = require('./MathOperations');
const banana = require('./mean');
a = 1;
b = 2;

sum = Calculator.sum(a,b);
product = Calculator.product(a,b);
quotient = Calculator.quotient(a,b);
mean = banana([1,2,3,4,5]);

console.log("The sum is: " + sum);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);
console.log("The mean is: " + mean);