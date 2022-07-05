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
  let cost = prices[0], res = 0
  for (let i = 1; i< prices.length; i++) {
    res = Math.max(prices[i] - cost, res)
    cost = Math.min(cost, prices[i])
  }
  console.log(res)
  return res
};
// @lc code=end

maxProfit([7,1,5,3,6,4])