/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let c = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > c) return false
    c = Math.max(c, i + nums[i])
    if (c >= nums.length) return true
  }
  return true
};
// @lc code=end

