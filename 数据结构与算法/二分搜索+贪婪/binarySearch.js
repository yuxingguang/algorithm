// 递归版本的二分搜索
function binarySearch_recursion(nums, low, high, target){
    const midIndex =low + Math.floor((high-low)/2);
    const midValue = nums[midIndex];
    if(high - low < 0){
        return -1;
    }
    if(target === midValue){
        return midIndex;
    }else if(target > midValue){
        return binarySearch_recursion(nums, midIndex+1, high, target);
    }else{
        return binarySearch_recursion(nums, low, midIndex-1, target);
    }
}

// 非递归版本的二分搜索
function binarySearch_nonrecursion(nums, target){
    let low = 0, high = nums.length-1;
    let midIndex, midValue;
    while(high-low >=0){
        midIndex = low + Math.floor((high-low)/2);
        midValue = nums[midIndex];
        if(midValue === target){
            return midIndex;
        }else if(target > midValue){
            low = midIndex+1;
        }else{
            high = midIndex-1;
        }
    }
    return -1;
}

// console.log(binarySearch_recursion([1,2,3,4,5,6], 0, 5, 7));

console.log(binarySearch_nonrecursion([1,2,3,4,5,6], 1));