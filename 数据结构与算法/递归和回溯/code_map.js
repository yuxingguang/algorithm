let code = '356232356162533461212';
code = [...code].map(char => Number(char));
let count = 0;
function computeMap(code){
    // 完整性检查
    if(code[0] === 0){
        return;
    }
    // 递归结束
    if(code.length <=1){
        return count++;
    }
    // 拆分问题规模
    if(code[0]>2){
        computeMap(code.slice(1));
    }else{
        computeMap(code.slice(1));
        computeMap(code.slice(2));
    }
}

computeMap(code);
console.log(count);