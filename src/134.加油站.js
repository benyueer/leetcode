/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let curSum = 0, sum = 0, pos = 0
  for (let i = 0; i < gas.length; i++) {
    curSum += gas[i] - cost[i]
    sum += gas[i] - cost[i]
    if (curSum < 0) {
      curSum = 0
      pos = i+1
    }
  }
  if (sum < 0) return -1
  return pos
};
// @lc code=end

