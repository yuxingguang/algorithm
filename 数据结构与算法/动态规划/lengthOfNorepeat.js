// 输入: "abcabcbb"，输出: 3(abc,cab)
// 输入: "bbbbb" ，输出: 1(b)
// 输入: "pwwkew"，输出: 3(wke)
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1){
        return s.length;
    }
    const dp = [1];
    for(let index=1; index<s.length; index++){
        const formerStr = s.slice(index-dp[index-1], index);
        const repeatIndex = formerStr.indexOf(s[index]);
        dp.push(dp[index-1] - repeatIndex);
    }
    return(Math.max(...dp))
};

console.log