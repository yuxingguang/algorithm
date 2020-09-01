const nums = [2,1,7,9,5,8];

function swap(nums, i , j){
    const item = nums[i];
    nums[i] = nums[j];
    nums[j] = item;
}


module.exports= {
    nums,
    swap,
}