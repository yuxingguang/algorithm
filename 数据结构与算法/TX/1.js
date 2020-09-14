// 时间 45-60 分钟
// 1. 直接在页面上写代码
// 2. 请勿对外分享，如后续再面经或者其他地方看到，取消所有成绩


// 输入一个嵌套的列表。请设计一个迭代器，使其能够遍历这个列表中的所有数字。
// 列表中的每一项可以是数字，也可以是另一个列表。

class CInteractor {
    constructor(array) {
        function flat(arr){
            const result = [];
            for(let i of arr){
                if(typeof i == 'number'){
                    result.push(i);
                }else{
                    result.push(...flat(i));
                }
            }
            return result;
        }
        this.array = flat(array);
        this.index = 0;
    }
    next() {
        return this.hasNext()? this.array[index++] : null;
    }
    hasNext() {
        if(this.index < this.array.length){
            return true;
        }else{
            return true;
        }
    }
}
// 输入 [[1,1],2,[1,[1,2]]]
// 调用 next() 返回一个数字，多次调用，依次输出 1,1,2,1,1,2,null
// 用 hasNext() 判断是否还可以 next()


