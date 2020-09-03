const {nums, swap} = require('./data');

// 快速排序：选取基准值，将数组分成比基准值大和小的两个子数组中，直至子数组长度为0/1，最后按顺序连接起来
function quick_sort(nums){
    if(nums.length<=1){
        return nums;
    }
    const midIndex = Math.floor(nums.length/2);
    const midValue = nums[midIndex];
    const arrLeft = [], arrRight = [];
    for(let i=0; i<nums.length; i++){
        if(i === midIndex){
            continue;
        }
        nums[i]>midValue ? (arrRight.push(nums[i])) : (arrLeft.push(nums[i]));
    }
    return quick_sort(arrLeft).concat(midValue, quick_sort(arrRight));
}
console.log(quick_sort(nums));