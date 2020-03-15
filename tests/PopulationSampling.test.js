const expect = require("expect");
const sampling = require('../PopulationSampling');

test('Get a simple randomg sampling', () => {
    let aList = [1,2,3,4,5];
    let N = 3;
    let samp = new sampling();
    let randomItems = samp.SimpleRandomSampling(aList,N);
    expect(randomItems).toHaveLength(3);
    expect(randomItems[0]).toBeLessThanOrEqual(5);
    expect(randomItems[1]).toBeLessThanOrEqual(5);
    expect(randomItems[2]).toBeLessThanOrEqual(5);
    expect(randomItems[0]).toBeGreaterThanOrEqual(1);
    expect(randomItems[1]).toBeGreaterThanOrEqual(1);
    expect(randomItems[2]).toBeGreaterThanOrEqual(1);
});
test('Get a systematic sample', () =>{
    let aList = [1,2,3,4,5,6,7,8,9,10];
    let N = 3;
    let samp = new sampling();
    let randomItems = samp.SystematicSampling(aList, N)
    expect(randomItems).toHaveLength(3);
    expect(randomItems[0]).toBe(4);
    expect(randomItems[0]).toBe(7);
    expect(randomItems[0]).toBe(10);
});