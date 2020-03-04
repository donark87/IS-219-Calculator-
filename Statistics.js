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
    Median(numbers) {

        var median = 0, numsLen = numbers.length;
        numbers.sort();

        if (
            numsLen % 2 === 0 // is even
        ) {
            // average of two middle numbers
            median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        } else { // is odd
            // middle number only
            median = numbers[(numsLen - 1) / 2];
        }

        return median;
    }

}
module.exports = Statistics;