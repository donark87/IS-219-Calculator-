const Statistics = require('../Statistics');
const expect = require("expect");

test('calculating mean', () => {
    let a = [1,2];
    let Stat = new Statistics();
    let mean = Stat.Mean(a);

    expect(mean).toBe(1.5);
});
test('calculating median', () => {
    let a = [3,5,4,4,1,1,2,3];
    let Stat = new Statistics();
    let median = Stat.Median(a);

    expect(median).toBe(3);
});
test('calculating variance', () => {
    let a = 1;
    let b = 2;
    let Stat = new Statistics();
    let variance = Stat.Variance(a,b);

    expect(variance).toBe(-1);
});
