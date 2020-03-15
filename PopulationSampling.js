const rand = require('./RandomGenerator');
const stat = require('./Statistics');

class PopulationSampling{
    SimpleRandomSampling(aList, N){
        return rand.GetNItems(aList,N);
    }
    SystematicSampling(aList, N){
        var newList = [];
        var x = Math.trunc(aList.length/N);
        for(var i=0; i<x; i++){
            newList[i] = aList[i*N];
        }
        return newList;

    }
    ConfidenceInterval(aList){
        var maxMin = [];
        var n = aList.length;
        var x = stat.Mean(aList);
        var s = stat.StandardDeviation(aList);
        var z = 1.96;
        maxMin[0] = x-z*(s/Math.sqrt(n));
        maxMin[1] = x+z*(s/Math.sqrt(n));
        return maxMin;

    }

}