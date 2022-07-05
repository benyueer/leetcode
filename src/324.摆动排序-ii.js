/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const clone = nums.slice()
  clone.sort((a, b) => a-b)
  let left = Math.floor((nums.length-1) / 2), right = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = clone[left--]
    } else {
      nums[i] = clone[right--]
    }
  }
};
// @lc code=end

