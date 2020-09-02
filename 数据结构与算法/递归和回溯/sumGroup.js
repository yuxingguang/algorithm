/** 
 * 给定一个无重复元素的数组candidates,和一个目标数target，给出candidates中所有可以使数字和为target的组合，其中candidates中的数字可以重复选取
 * 示例： cadidates = [1,2,3], target = 5, solutions = [[]]
*/

var combinationSum = function(candidates, target) {
    // 回溯写法
    const backTrack =(candidates, target, start, solution, result)=>{
        // 1.试探失败
        if(target<0){
            return ;
        }
        // 2.试探成功
        if(target === 0){
            result.push([...solution]);
            return ;
        }
        // 3.回溯循环
        for(let i=start; i<candidates.length; i++){
            solution.push(candidates[i]);
            backTrack(candidates, target-candidates[i], i, solution, result);
            solution.pop();   // 回溯的关键在于，每一次尝试后都可以返回原来的状态
        }
    }
    const result = [];
    backTrack(candidates, target, 0, [], result);
    return result;
};
console.log(combinationSum([1,2,3], 5))