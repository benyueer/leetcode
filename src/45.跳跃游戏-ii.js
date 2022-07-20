/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let start = 0, end = 1, p = 0, ans = 0
  while(end < nums.length) {
    for (let i = start; i < end; i++) {
      p = Math.max(p, i + nums[i])
    }
    start = end
    end = p + 1
    ans++
  }
  return ans
};
// @lc code=end

