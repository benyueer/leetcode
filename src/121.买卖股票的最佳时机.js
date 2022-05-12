/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1) return 0
    let min = prices[0]
    let res = -Infinity
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        res = Math.max(res, prices[i] - min)
    }
    return res
};
// @lc code=end

