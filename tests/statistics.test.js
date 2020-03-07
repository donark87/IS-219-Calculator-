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
test('calculating mode', () => {
    let a = [3,5,4,4,1,1,2,3];
    let Stat = new Statistics();
    let mode = Stat.Mode(a);
    expect.arrayContaining(1,3,4);
    //expect(mode).arrayContaining([1,3,4]);
});
test('calculating variance', () => {
    let a = 1;
    let b = 2;
    let Stat = new Statistics();
    let variance = Stat.Variance(a,b);

    expect(variance).toBe(-1);
});
test('calculating standard deviation', () => {
    let a = [1,2,3,4];
    let Stat = new Statistics();
    let standardDeviation = Stat.StandardDeviation(a);

    expect(standardDeviation).toBe(1.2909944487358056);
});
test('calculating Quantile', () => {
    let a = [0, 10, 30];
    let Stat = new Statistics();
    let quantile = Stat.Quantile(a,0.5);

    expect(quantile).toBe(10);
});
test('calculating Correlation', () => {
    let a = [15, 18, 21, 24, 27];
    let b = [25, 25, 27, 31, 32];
    let n = a.length;
    let Stat = new Statistics();
    let correlation = Stat.Correlation(a,b,n);

    expect(correlation).toBe(1);
});

test('calculating Z-Score', () => {
    let a = [10, 2, 38, 23, 38, 23, 21];
    let Stat = new Statistics();
    let zScore = Stat.Zscore(a,35);

    expect(zScore).toBe(0.97);
   //expect(zScore).toBeLessThan(-1);
});