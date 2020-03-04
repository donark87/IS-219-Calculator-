const median = numbers =>
{

    var median = 0, numsLen = numbers.length;
    numbers.sort();

    if (numsLen % 2 === 0)
    {
        // average of two middle numbers
        median = ((numbers[numsLen / 2 - 1]) + (numbers[numsLen / 2]) / 2);
    } else { // is odd
        // middle number only
        median = numbers[((numsLen - 1) / 2)];
    }

    return median;
}
module.exports = median;