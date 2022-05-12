/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  /**
   * dp
   */
  // const dp = []
  // dp[0] = ['']
  // dp[1] = ['()']
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = []
  // }

  // for (let i = 2; i < n+1; i++) {
  //   for (let p = 0; p < i; p++) {
  //     const l1 = dp[p]
  //     const l2 = dp[i - 1 -p]
  //     for (let k1 of l1) {
  //       for (let k2 of l2) {
  //         dp[i].push(`(${k1})${k2}`)
  //       }
  //     }
  //   }
  // }
  // return dp[n]

  // dfs
  const res = []
  function dfs(path, left, right) {
    if (left > n || right > left) return
    if (path.length === (2 * n)) {
      res.push(path)
      return
    }
    dfs(path + '(', left + 1, right)
    dfs(path + ')', left, right + 1)
  }
  dfs('', 0, 0)
  return res
};
// @lc code=end
// ''
// ()
// (()) ()()
// ((())) (()()) (())() ()(()) ()()()

