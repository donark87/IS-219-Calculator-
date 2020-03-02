const median = require('../median');

test('Median of 1, 2, 3 to equal 3', () => {
    expect(median([1, 2, 3])).toBe(2);
});