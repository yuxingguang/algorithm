// LeetCode 53. 连续子数组的最大和
function maxSubArray(nums) {
    if(nums.length <= 1){
        return Math.max(nums);
    }
    const dp = nums.slice(0,1);
    for(let i=1; i<nums.length; i++){
        const sum = [];
        dp.forEach((value, index) => {
            const gap = nums.slice(index+1, i+1);
            const gapSum = gap.reduce((former, current)=> former+current);
            sum.push(value + gapSum);
        })
        dp.push(Math.max(...sum));
    }
    console.log(dp)
    return Math.max(...dp)
};
const arr =  [-2,1,-3,4];
console.log(maxSubArray(arr));