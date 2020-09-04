var uniquePaths = function(m, n) {
    if(m==1 || n==1){
        return 1;
    }
    const dp =new Array(m).fill(1).map(item => new Array(n).fill(1));
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    console.log(dp)
    return dp[m-1][n-1];
};

uniquePaths(2,2)