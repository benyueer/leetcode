/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let e = 0, o = 0
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      o++
    } else {
      e++
    }
  }
  return Math.min(e, o)
};
// @lc code=end

