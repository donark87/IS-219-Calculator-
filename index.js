const Calculator = require('./MathOperations');
const banana = require('./RandomGenerator');
a = 1;
b = 2;

sum = Calculator.sum(a,b);
product = Calculator.product(a,b);
quotient = Calculator.quotient(a,b);

console.log("The sum is: " + sum);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);
var min = 1;
var max = 10;
var seed = 6;
var rand = new banana(min,max);
var aList = [1,2,3,4,5];
var N = 3;
console.log(Math.trunc(5/2));
var randItem = rand.GetNItemsWithSeed(aList, N, seed);
for( var i=0; i<3; i++){
    console.log(randItem[i]);
}