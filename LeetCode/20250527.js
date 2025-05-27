/*
================================================================================
問題: 121. Best Time to Buy and Sell Stock
出典: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
結果: 正解
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;
    let maxProfit = 0;

    prices.forEach((price) => {
        if (minPrice > price) {
            minPrice = price;
        }

        profit = price - minPrice;
        if (maxProfit < profit) {
            maxProfit = profit;
        }
    });

    return maxProfit;
};

// 📘 模範解答
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    prices.forEach((price) => {
        if (price < minPrice) {
            minPrice = price;
        }
        maxProfit = Math.max(maxProfit, price - minPrice);
    });

    return maxProfit;
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- profitは毎回使い捨てとなる値だから変数化しなくてよかった
- Math.maxを活用することで最大値を簡単に取得できた
- 解法のアプローチとして一時的に値を保管するという考え方はよかった
--------------------------------------------------------------------------------
*/
