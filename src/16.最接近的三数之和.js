/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let m = Infinity
  nums.sort((a, b) => a-b)
  let res = 0

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1
    let r = nums.length - 1
    while(l < r) {
      const count = nums[i] + nums[l] + nums[r]
      if (Math.abs(count - target) < m) {
        m = Math.abs(count - target)
        res = count
      }
      if (count - target < 0) {
        l++
      } else if (count - target > 0) {
        r--
      } else {
        return target
      }
    }
  }
  return res
};
// @lc code=end

