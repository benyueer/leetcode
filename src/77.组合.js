/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []

  const arr = new Array(n).fill(1).map((v, i) => i + 1)
  const visited = new Array(k).fill(false)
  function dfs(path, index) {
    if (path.length === k) {
      res.push([...path])
      return
    }

    for (let i = index + 1; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true
        path.push(arr[i])
        dfs(path, i)
        path.pop()
        visited[i] = false
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    visited[i] = true
    dfs([arr[i]], i)
    visited[i] = false
  }

  return res
};
// @lc code=end

