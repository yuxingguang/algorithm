/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 攻击判定：对角线或同列/行存在冲突皇后
 */

// 1.在外面检测回溯是否失败
function totalNQueens(n) {
    let count = 0;
    const backTrack = (chessboard, currRow)=>{
        // 回溯成功
        if(currRow === n){
            count++;
            return ;
        }
        for(let x=currRow; x<n; x++){
            for(let y=0; y<n; y++){
                chessboard[x][y] = 1;
                if(!conflictCheck(chessboard, x, y)){
                    backTrack(chessboard, x+1);
                }
                chessboard[x][y] = 0;
                if(y === n-1){
                    return ;
                }
            }
        }
    }
    const arr = new Array(n).fill(0).map(item => new Array(n).fill(0));
    backTrack(arr, 0);
    console.log(count);
};

// 2.在循环里面检测回溯是否失败
// ...待写

function conflictCheck(chessboard, row, column){
    for(let i=0; i<row; i++){
        if(chessboard[i][column]){
            return true;
        }
    }
    for(let a=row-1,b=column+1; a>=0&&b<chessboard.length; a--,b++){
        if(chessboard[a][b]){
            return true;
        }
    }
    for(let a=row-1,b=column-1; a>=0&&a>=0; a--,b--){
        if(chessboard[a][b]){
            return true;
        }
    }
    return false;
}

totalNQueens(5)