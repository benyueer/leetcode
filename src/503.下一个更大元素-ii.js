/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const stack = [], map = new Map(), res = new Array(nums.length).fill(-1), n = nums.length
  for (let i = 0; i < n*2-1; i++) {

    while(stack.length && nums[stack[stack.length - 1]] < nums[i % nums.length]) {
      res[stack[stack.length - 1]] = nums[i%n]
      stack.pop()
    }
    stack.push(i % nums.length)
  }


  return res
};
// @lc code=end

