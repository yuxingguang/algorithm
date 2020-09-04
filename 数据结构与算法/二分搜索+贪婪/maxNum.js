// 在升序的数组中，找出第一个大于target的数
function firstMaxNum(nums, target){
    let low = 0, high = nums.length-1;
    let midIndex, midValue;
    while(high-low >=0){
        midIndex = low + Math.floor((high-low)/2);
        midValue = nums[midIndex];
        if(midValue>target && (midIndex==0 || nums[midIndex-1] <= target)){
            return midIndex;
        }else if(midValue <= target){
            low = midIndex+1;
        }else{
            high = midIndex-1;
        }
    }
    return -1;
}

// 找出最后一个小于target的数
function lastMinNum(nums, target){
    let low=0, high=nums.length-1;
    let midIndex, midValue;
    while(high-low>=0){
        midIndex = Math.floor((high-low)/2) + low;
        midValue = nums[midIndex];
        if(midValue<target &&(midIndex==nums.length-1 || nums[midIndex+1]>=target)){
            return midIndex;
        }else if(midValue >= target){
            high = midIndex -1;
        }else{
            low = midIndex + 1;
        }
    }
    return -1;
}
const nums = [3,4,6,6,6,7,8];
// console.log(firstMaxNum(nums, 5))
console.log(lastMinNum(nums, 9))
