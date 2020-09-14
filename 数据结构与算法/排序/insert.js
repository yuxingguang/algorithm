const {nums, swap} = require('./data.js')

// 插入排序
function insert_sort(nums){
    for(let i=1,j; i<nums.length; i++){
        const current = nums[i];
        for(j=i-1; j>=0 && nums[j]>current ; j--){
            nums[j+1] = nums[j];
        }
        nums[j+1] = current;
    }
    console.log(nums)
}

insert_sort(nums);