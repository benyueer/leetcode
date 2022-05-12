/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const visited = new Array(nums.length).fill(false)

  function dfs(temp) {
    if (temp.length === nums.length) {
      res.push([...temp])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue
      visited[i] = true
      temp.push(nums[i])
      dfs(temp)
      temp.pop()
      visited[i] = false
    }
  }
  dfs([])
  return res
};
// @lc code=end

