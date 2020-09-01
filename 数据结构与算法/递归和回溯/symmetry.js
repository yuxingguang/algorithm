/**
 * 例如，输入n=1，输出[0, 1, 8]
 *      输入n=2， 输出[11,69,88,96], 注意偶数长度中可以插00
 */
const arr1 = ['11','69','96','88'];
const arr2 = ['11','69','96','88','00'];
function symmetry(n,length){
    if(n === 0){
        return [''];
    }else if (n === 1){
        return  ['0','1','8'];
    }
    const res = [];
    if(n === length){
        arr1.map(str => res.push(...symmetry(n-2,length).map(item => str[0]+item+str[1])));
    }else{
        arr2.map(str => res.push(...symmetry(n-2,length).map(item => str[0]+item+str[1])));
    }
    return res;
}
console.log(symmetry(0,0));