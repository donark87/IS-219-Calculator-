const Calculator = require('./Calculator');
class Statistics extends Calculator {

    Variance(a,b) {
        return this.Difference(a,b);
    }
    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum,numValues);
    }
    Median (arr) {
        const mid = Math.floor(this.arr.length / 2),
            nums = [...arr].sort((a, b) => a - b);
        return this.arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    }

}
module.exports = Statistics;