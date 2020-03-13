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
var randomNumber = rand.GetRandomList(min,max, seed, 5);
for( var i=0; i<5; i++){
    console.log(randomNumber[i]);
}
var randItem = rand.getRandomItem