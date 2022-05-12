/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = []

  nums.sort((a, b) => a - b)

  if (nums.length < 4) return res
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i+1; j < nums.length - 2; j++) {
      let l = j + 1, r = nums.length - 1
      while (l < r) {
        const count = nums[i] + nums[j] + nums[l] + nums[r]
        if (count === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while(nums[l] === nums[l+1]) l++
          while(nums[r] === nums[r-1]) r--
          l++
          r--
        } else if (count - target < 0) {
          while(nums[l] === nums[l+1]) l++
          l++
        } else {
          while(nums[r] === nums[r-1]) r--
          r--
        }
      }
      while(nums[j] === nums[j+1]) j++
    }
    while(nums[i] === nums[i+1]) i++
  }

  return res
};
// @lc code=end
// -2 -1 0 0 1 2

