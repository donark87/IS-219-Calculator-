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
        if (numsLen % 2 === 0 ) {
            // average of two middle numbers
            median = (((numbers[numsLen / 2 - 1]) + (numbers[numsLen / 2])) / 2);
        } else { // is odd
            // middle number only
            median = numbers[((numsLen - 1) / 2)];
        }
        return median;
    }
    Mode(numbers) {
        var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }

        return modes;
    }

}
module.exports = Statistics;