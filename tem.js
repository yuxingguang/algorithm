var combinationSum2 = function(candidates, target) {
    let answer=[];
    const traceback = (solution, answer, target, start)=>{
        if(target<0){
            return ;
        }
        if(target ==0){
            const sortedSolution = [...solution].sort((a,b) => a-b);
            if(answer.some(savedSolution => {
                return savedSolution.every((value, index)=>value === sortedSolution[index])
            })){
                return ;
            }
            answer.push(sortedSolution);
            return;
        }
        for(let i=start; i<candidates.length;i++){
            solution.push(candidates[i]);
            traceback(solution, answer, target-candidates[i], i+1);
            solution.pop()
        }
    }
    traceback([], answer, target, 0);
    return answer;
};

combinationSum2( [2,5,2,1,2], 5)