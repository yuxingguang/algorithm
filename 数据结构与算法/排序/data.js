const nums = [2,1,7,9,5,8,6,8,9,1,0,2,7,5,12,5,6,12,4,56,98,79];

function swap(nums, i , j){
    const item = nums[i];
    nums[i] = nums[j];
    nums[j] = item;
}


module.exports= {
    nums,
    swap,
}