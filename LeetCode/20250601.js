/*
================================================================================
問題: 121. Best Time to Buy and Sell Stock
出典: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let price of prices) {
        if (minPrice > price) {
            minPrice = price
        }

        if ((price - minPrice) > maxProfit) {
            maxProfit = price - minPrice;
        }

    }

    return maxProfit;
};