// 求最长上升子序列的长度
// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4 
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
function lengthOfLIS(nums){
    if(nums.length <=1){
        return nums.length;
    }
    const dp = new Array(nums.length).fill(1);
    for(let index=1; index<nums.length; index++){
        const son = [];
        for(let j=0; j<index; j++){
            if(nums[j] < nums[index]){
                son.push(dp[j]);
            }
        }
        son.length && (dp[index] = Math.max(...son) + 1);
    }
    return Math.max(...dp)
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))