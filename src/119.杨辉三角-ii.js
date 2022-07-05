/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const tr = [
    [1],
    [1, 1],
    [1, 2, 1]
  ]

  for (let i = 3; i<=rowIndex; i++) {
    tr[i] = []
    tr[i][0] = 1
    tr[i][i] = 1
    for (let j = 1; j < i; j++) {
      tr[i][j] = tr[i-1][j-1] + tr[i-1][j]
    }
  }
  console.log(tr)

  return tr[rowIndex]
};
// @lc code=end

