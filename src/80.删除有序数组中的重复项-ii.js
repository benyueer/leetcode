/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let mlen = 0, s = 1
  for (let i = 1; i < nums.length; i++) {
    if (i >= nums.length - mlen) break
    if (nums[i] === nums[i - 1]) {
      s++
    } else {
      if (s > 2) {
        let c = s - 2, c1 = c
        mlen += c
        while (c--) {
          let t = nums[i - 1]
          for (let j = i - (c1-c); j < nums.length; j++) {
            nums[j - 1] = nums[j]
          }
          nums[nums.length - 1] = t
        }
        i = i - c1
      }
      s = 1
    }
  }
  if (s > 2) {
    mlen += (s - 2)
  }
  return nums.length - mlen
};
// @lc code=end

