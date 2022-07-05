/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let u = false, d = false
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i-1] > 0) u = true
    if (nums[i] - nums[i-1] < 0) d = true
  }
  return !(u && d)
};
// @lc code=end
// console.log(isMonotonic([4,1,4,1]))
