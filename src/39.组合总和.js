/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  const result = []
  const visited = new Array(candidates.length).fill(false)
  function dfs(path, ans) {
    if (ans > target) return
    if (ans === target) {
      result.push(path)
      return
    }
    for (let i = 0 ; i < candidates.length; i++) {
      if (visited.lastIndexOf(true) > i) continue
      visited[i] = true
      dfs([...path, candidates[i]], ans + candidates[i])
      visited[i] = false
    }
  }

  for (let i = 0 ; i < candidates.length; i++) {
    visited[i] = true
    dfs([candidates[i]], candidates[i])
    visited[i] = false
  }

  return result
};
// @lc code=end
