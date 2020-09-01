const {nums, swap} = require('./data.js')

// 插入排序
function insert_sort(nums){
    for(let ini=1; ini<nums.length; ini++){
        const current = nums[ini];
        for(let j=ini-1; j>=0 && nums[j]>current ; j--){
            swap(nums, j, j+1)
        }
    }
    console.log(nums)
}

insert_sort(nums);