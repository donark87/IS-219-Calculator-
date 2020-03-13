/**
 * @return {number}
 */
function Mode(a){
    var mode = 0;
    var max = 0;
    var modeDict = {};
    for(let i =0; i<a.length; i+=1){
        if(!(a[i] in modeDict)){
            modeDict[i] = 1;
        }
        else{
            modeDict[i] +=1;
        }
        console.log(modeDict[i]);
    }
    for(let i=0; i<modeDict.length; i+=1){
        if(max < modeDict[i]){
            max = modeDict[i];
            mode = i;
        }
    }
    return max;
}
module.exports = Mode;