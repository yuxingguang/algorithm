const {nums, swap} = require('./data.js');

function merge_sort(nums){
    if(nums.length<=1){
        return nums;
    }
    const midIndex = Math.floor((nums.length-1)/2);
    return merge(merge_sort(nums.slice(0,midIndex+1)), merge_sort(nums.slice(midIndex+1)));
}
function merge(arr1, arr2){
    const result = new Array(arr1.length + arr2.length);
    for(let i=j=k=0; k<result.length; k++){
        if(i >= arr1.length){
            result[k] = arr2[j];
            j++;
        }else if(j >= arr2.length){
            result[k] = arr1[i];
            i++;
        }else{
            if(arr1[i] < arr2[j]){
                result[k] = arr1[i];
                i++;
            }else{
                result[k] = arr2[j];
                j++;
            }
        }
    }
    return result;
}
console.log(merge_sort(nums));