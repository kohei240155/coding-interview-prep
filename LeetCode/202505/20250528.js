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
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }

    return maxProfit;
};

// 📘 模範解答
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        let profit = prices[i] - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- Math.maxで値をmaxProfitを取得する方法があることを覚えておく
- forEachではなく普通のFor文を使用するべき
- For文ではbreak(繰り返し終了)、continue(繰り返しスキップ)を使用することができ、
  アルゴリズム問題を解く場合は柔軟に対応できるため
--------------------------------------------------------------------------------
*/
