/*
*
* */

let priceArr = [2, 1, 2, 0, 1];
let maxProfit = function (prices) {
    if(prices.length<2){
        return 0;
    }
    let temp=0;
    let i,j;
    for(i=0,j=0;i<prices.length;){
        if(prices[i+1]<prices[i]){
            i++
        }else if(i<=j) {
            temp=prices[i];
        }
    }
};
console.log(maxProfit(priceArr))
