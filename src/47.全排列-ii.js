/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = []
  nums.sort((a, b) => a - b)
  const visited = new Array(nums.length).fill(false)
  dfs([])
  function dfs(temp) {
    if (temp.length === nums.length) {
      res.push([...temp])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i-1]) continue
      visited[i] = true
      temp.push(nums[i])
      dfs(temp)
      temp.pop()
      visited[i] = false
    }
  }
  return res
};
// @lc code=end

