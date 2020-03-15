const expect = require("expect");
const RandomGenerator = require('../RandomGenerator');

test('generate random number', () => {
    let min = 1;
    let max = 10;
    let rand = new RandomGenerator(min,max);
    let randomNumber = rand.GetRandomInt(min,max);

    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
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

test('generate random number list with seed', () => {
    let min = 1;
    let max = 10;
    let seed = 6;
    let N = 5;
    let rand = new RandomGenerator(min,max);
    let randomList = rand.GetRandomList(min,max,seed,N);
    for(i=0; i<N; i++){
        expect( randomList[i]).toBeGreaterThan(1);
        expect(randomList[i]).toBeLessThan(10);
    }
});
test('generate random item from list', ()=>{
    let aList = [1,2,3];
    let rand = new RandomGenerator(0,3);
    let randomItem = rand.GetRandomItem(aList);
    expect(randomItem).toBeGreaterThan(0);
    expect(randomItem).toBeLessThan(4);
});
test('generate N items from list', ()=>{
    let aList = [1,2,3,4,5];
    let N = 3;
    let rand = new RandomGenerator(0,3);
    let randomItems = rand.GetNItems(aList, N);
    expect(randomItems).toHaveLength(3);
    expect(randomItems[0]).toBeLessThanOrEqual(5);
    expect(randomItems[1]).toBeLessThanOrEqual(5);
    expect(randomItems[2]).toBeLessThanOrEqual(5);
    expect(randomItems[0]).toBeGreaterThanOrEqual(1);
    expect(randomItems[1]).toBeGreaterThanOrEqual(1);
    expect(randomItems[2]).toBeGreaterThanOrEqual(1);
});
test('generate N items from list with seed', ()=>{
    let aList = [1,2,3,4,5];
    let N = 3;
    let seed = 6;
    let rand = new RandomGenerator(0,3);
    let randomItems = rand.GetNItemsWithSeed(aList, N,seed);
    expect(randomItems).toHaveLength(3);
    expect(randomItems[0]).toBeLessThanOrEqual(5);
    expect(randomItems[1]).toBeLessThanOrEqual(5);
    expect(randomItems[2]).toBeLessThanOrEqual(5);
    expect(randomItems[0]).toBeGreaterThanOrEqual(1);
    expect(randomItems[1]).toBeGreaterThanOrEqual(1);
    expect(randomItems[2]).toBeGreaterThanOrEqual(1);
});