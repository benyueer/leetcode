/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = new Map(), stack = []
  for (let i = nums2.length-1; i >=0 ; i--) {
    while(stack.length && nums2[i] > stack[stack.length - 1]) {
      stack.pop()
    }
    map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1)
    stack.push(nums2[i])
  }
  console.log(map)
  return nums1.map(_ => map.get(_))
};
// @lc code=end

