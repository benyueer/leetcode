/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  /**
   * dfs效率低
   */
  // let res = 0
  // function dfs(x, y) {
  //   if (x === n - 1 && y === m - 1) {
  //     res++
  //     return
  //   }
  //   for (let d of [[0, 1], [1, 0]]) {
  //     if (x + d[0] >=0 && x + d[0] < n && y + d[1] >= 0 && y + d[1] < m) {
  //       dfs(x + d[0], y + d[1])
  //     }
  //   }
  // }
  // dfs(0, 0)
  // return res

  // DP
  let res = new Array(m+1).fill([]).map(() => new Array(n+1).fill(0))
  res[1].fill(1)
  for (let i = 0 ; i <= m ; i++) {
    res[i][1] = 1
  }
  if (m < 2 || n < 2) {
    return res[m][n]
  }
  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      res[i][j] = res[i-1][j] + res[i][j-1]
    }
  }
  console.log(res)
  return res[m][n]
};
// @lc code=end

console.log(uniquePaths(3, 7))
/**
 *   0 1 2 3 4 5 6 7
 * 0 0 1 0 0 0 0 0 0
 * 1 1 1 1 1 1 1 1 1
 * 2 0 1 2 3 4 5 6 7
 * 3 0 1 3 6 10 15 21 28
 * 4 0 1
 * 5 0 1
 * 6 0 1
 */