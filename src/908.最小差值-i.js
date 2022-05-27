/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  let max = nums[0], min = nums[0]
  for (let t of nums) {
    max = Math.max(max, t)
    min = Math.min(min, t)
  }
  return Math.max(0, max - min - 2 * k)
};
// @lc code=end

