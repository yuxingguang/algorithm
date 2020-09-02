let code = '356232356162533461212';
var numDecodings = function(s) {
    let count = 0;
    if(s.length<=0){
        return 1;
    }
    if(s[0]==='0'){
        return 0;
    }else if((s[0] =='1' && s[1]) || (s[0]=='2'&& s[1]<'7')){
        count += numDecodings(s.slice(2));
    }
    count += numDecodings(s.slice(1));
    return count;
};
console.log(numDecodings(code))