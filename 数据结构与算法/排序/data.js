const nums = [0,3,1,5,9,4,6,7,8,2];

function swap(nums, i , j){
    const item = nums[i];
    nums[i] = nums[j];
    nums[j] = item;
}


module.exports= {
    nums,
    swap,
}