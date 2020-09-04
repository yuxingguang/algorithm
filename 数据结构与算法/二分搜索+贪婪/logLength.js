// 寻找日志表中存有日志记录的长度
// 例如['2020-3-5', '2020-3-6', '2020-3-7','2020-3-8', null, null, null]的长度就是4
function logLength(logs){
    let low=0, high=logs.length;
    let midIndex, midValue;
    while(high-low>=0){
        midIndex = low + Math.floor((high-low)/2);
        midValue = logs[midIndex];
        // 寻找最后一个非null项
        if(midValue && (midIndex==logs.length-1 || !logs[midIndex+1])){
            return midIndex+1;
        }else if(midValue){
            low = midIndex +1;
        }else{
            high = midIndex-1;
        }
    }
    return 0;
}
const logs = new Array(6).fill('2020-15-13').concat(new Array(3).fill(null));
console.log(logLength(logs));