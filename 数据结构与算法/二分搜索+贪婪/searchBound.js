// 搜索下边界
function searchLowerBound(nums, target){
    let low = 0, high = nums.length-1;
    let midIndex, midValue;
    while(high-low >=0){
        midIndex = low + Math.floor((high-low)/2);
        midValue = nums[midIndex];
        if(target===midValue && (midIndex==0 || nums[midIndex-1]<target)){
            return midIndex;
        }else if(target > midValue){
            low = midIndex+1;
        }else{
            high = midIndex-1;
        }
    }
    return -1;
}
// 搜索上边界
function searchUpperBound(nums, target){
    let low = 0, high = nums.length-1;
    let midIndex, midValue;
    while(high-low >=0){
        midIndex = low + Math.floor((high-low)/2);
        midValue = nums[midIndex];
        if(target===midValue && (midIndex+1==nums.length ||nums[midIndex+1]>target)){
            return midIndex;
        }else if(target >= midValue){
            low = midIndex+1;
        }else{
            high = midIndex-1;
        }
    }
    return -1;
}

console.log(searchLowerBound([5,7,7,8,8,10], 10));
console.log(searchUpperBound([5,7,7,8,8,10], 10));