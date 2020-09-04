// 一个无重复升序数组经过旋转后的数组中，搜索是否存在target
// 例如[-1,0,2,3,4,7,9] => [4,7,9,-1,0,2,3],target=0,输出：4
function rotaetSearch(nums, target){
    let low=0, high=nums.length-1;
    let midIndex, midValue;
    while(high-low>=0){
        midIndex = low + Math.floor((high-low)/2);
        midValue = nums[midIndex];
        if(midValue === target){
            return midIndex;
        }else if(nums[high] >= nums[midIndex]){
            // 判断右边是完整升序
            if(midValue < target && target <= nums[high]){
                low = midIndex+1;
            }else{
                high = midIndex-1;
            }
        }else{
            // 左边是完整升序
            if(nums[low]<= target && target<midValue){
                high = midIndex-1;
            }else{
                low = midIndex+1;
            }
        }
    }
    return -1;
}
console.log(rotaetSearch([3,1],3))