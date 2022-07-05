/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132 模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  if (nums.length < 3) return false
  const stack = []
  let ind = -1
  for (let i = nums.length - 1; i >= 0; i--) {
    // console.log(ind, i, stack, stack[stack.length-1], nums[i])
    if (ind > -1 && nums[ind] > nums[i]) return true
    while(stack.length && nums[stack[stack.length-1]] < nums[i]) {
      ind = stack.pop()
    }
    stack.push(i)
  }

  return false
};
// @lc code=end
// find132pattern([1,-4,2,-1,3,-3,-4,0,-3,-1])
