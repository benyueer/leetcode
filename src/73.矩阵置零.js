/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const r = new Set(), c = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        r.add(i)
        c.add(j)
      }
    }
  }
  console.log([...r], [...c])
  for (let i = 0; i < [...r].length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[[...r][i]][j] = 0
    }
  }

  for (let i = 0; i < [...c].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][[...c][i]] = 0
    }
  }
}
// @lc code=end

