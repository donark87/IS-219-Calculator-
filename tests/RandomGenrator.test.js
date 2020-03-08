const expect = require("expect");
const RandomGenerator = require('../RandomGenerator');

test('generate random number', () => {
    let min = 1;
    let max = 10;
    let rand = new RandomGenerator(min,max);
    let randomNumber = rand.GetRandomInt(min,max);

    expect(randomNumber).toBeGreaterThan(1);
    expect(randomNumber).toBeLessThan(10);
});
test('generate random number with seed', () => {
    let min = 1;
    let max = 10;
    let seed = 6;
    let rand = new RandomGenerator(min,max);
    let randomNumber = rand.GetRandomIntWithSeed(min,max, seed);

    expect(randomNumber).toBeGreaterThan(1);
    expect(randomNumber).toBeLessThan(10);
});

