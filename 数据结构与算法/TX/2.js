// 股民小 A 有一天穿越回到了 n 天前，他能记住某只股票连续 n 天的价格；他手上有足够多的启动资金，他可以在这 n 天内多次交易，但是有个限制
// 如果已经购买了一个股票，在卖出它之前就不能再继续购买股票了。
// 到 n 天之后，小 A 不能再持有股票。
// 求问 这 n 天内，小 A 能够获得的利润的最大值

// 如果不需要手续费的话，求最大的利润
// 输入: prices = [3, 1, 2, 8, 5, 9], fee = 0
// 输出: 11
// 解释: 能够达到的最大利润:
// 在此处买入 prices[1] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 5
// 在此处卖出 prices[5] = 9
function maxProfit(prices) {
    if(prices.length <= 1){
        return 0;
    }
    let profit = 0;
    for(let index=1; index<prices.length; index++){
        const gap = prices[index+1] - prices[index];
        profit += gap>0? gap : 0;
    }
    return profit;
}

// 证券交易是需要付手续费的，买和卖都需要，求最大的利润。
// function(prices: number[], fee: number) {
// return number
// }
// 输入: prices = [3, 1, 2, 8, 5, 9], fee = 2
// 输出: 4
// 输入: prices = [3, 1, 2, 8, 3, 6], fee = 2
// 输出: 3
function maxProfitWithFee(prices, fee){
    if(prices.length <=1){
        return 0;
    }
    // 找出所有递增子区间
    const profit = [];
    let start=0, end=0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] >prices[i-1]){
            if(end==start){
                start = i,end = i-1;
            }else{
                end = i;
            }
        }else if(end > start){
            profit.push([prices[start], prices[end]]);
            start = end = i;
        }
    }
    console.log(profit);
    // 合并子区间
    // if(profit.length == 1){
    //     const money = profit[0][1] - profit[0][1] - fee*2;
    //     return money>0 ? money : 0; 
    // }
    // for(let j=1; j<profit.length; j++){
    //     const money1 = profit[j-1][1] - profit[j-1][0];
    //     const money2 = profit[j][1] - profit[j][0];
    //     const mergeMoney = profit[j][1] - profit[j-1][0];
    //     if(mergeMoney >money1+money2-fee*2){
    //         profit[j][0] = profit[j-1][0];
    //         profit.splice(j-1, 1);
    //         j--;
    //     }
    // }
    // let maxProfit = 0;
    // profit.forEach(disc => maxProfit += disc[1]-disc[0]);
    // return maxProfit;
}
maxProfitWithFee([3, 1, 2, 8, 5, 9], 2);
maxProfitWithFee([3, 1, 2, 8, 3, 6], 2);