/*
 * @lc app=leetcode.cn id=2239 lang=javascript
 *
 * [2239] 找到最接近 0 的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let t = Infinity
  let ind = 0
  nums.forEach((item, index) => {
    if (Math.abs(item) < t) {
      ind = index
      t = Math.abs(item)
    } else if (Math.abs(item) === t && item >= 0) {
      ind = index
    }
  })
  return nums[ind]
};
// @lc code=end

