
class RandomGenerator  {

    constructor (min, max) {
        this.max = max;
        this.min = min;
    }


    GetRandomInt(min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    GetRandomIntWithSeed(min, max, seed) {
        Math.seed = seed;

        Math.seed = (Math.seed * 9301 + 49297) % 233280;
        var rnd = Math.seed / 233280.0;

        return this.min + rnd * (this.max - this.min);
    }
    GetRandomList(min, max, seed, N){
        var numList = [];
        Math.seed = seed;
        for (var i=0; i< N; i++){

            Math.seed = (Math.seed * 9301 + 49297) %233280;
            var rnd = Math.seed/ 233280.0;
            numList[i] = this.min + rnd*(this.max -this.min)
        }
        return numList;
    }
    GetRandomItem(aList){
        var numList = aList;
        var x= Math.ceil(0);
        var y = Math.floor(numList.length);
        var z =  Math.floor(Math.random() * (y - x + 1)) + x;
        return numList[z];



    }
    GetNItems(aList, N){
        var numList = aList;
        var n = N;
        var newList = [];
        for (var i=0; i<n; i++) {
            var x = Math.ceil(0);
            var y = Math.floor(numList.length);
            var z = Math.floor(Math.random() * (y - x + 1)) + x;
            newList[i] = aList[z];
        }
        return newList;
    }
    GetNItemsWithSeed(aList, N, seed){
        
    }
}

module.exports = RandomGenerator;