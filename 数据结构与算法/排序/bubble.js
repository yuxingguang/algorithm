const {nums,swap} = require('./data.js')

// 冒泡排序
function bubble_sort(nums){
    let hasChange = true;
    for(let order=0; order<nums.length-1 && hasChange; order++){
        hasChange = false;
        for(let index=0; index<nums.length-order-1; index++){
            if(nums[index] > nums[index+1]){
                swap(nums, index, index+1);
                hasChange = true;
            }
        }
    }
    console.log(nums)
}

bubble_sort(nums)