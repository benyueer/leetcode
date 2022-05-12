/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  console.log(candidates)
  const visited = new Array(candidates.length).fill(false)
  const result = []
  function dfs(path, ans) {
    if (ans > target) return 
    if (ans === target) {
      result.push(path)
    }
    for (let i = 0 ; i < candidates.length; i++) {
      if (visited.lastIndexOf(true) >= i || (candidates[i-1] === candidates[i] && !visited[i-1])) continue
      visited[i] = true
      dfs([...path, candidates[i]], ans + candidates[i])
      visited[i] = false
    }
  }

  for (let i = 0 ; i < candidates.length; i++) {
    if (candidates[i-1] === candidates[i] && !visited[i-1]) continue
    visited[i] = true
    dfs([candidates[i]], candidates[i])
    visited[i] = false
  }

  return result
};
// @lc code=end

