/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
  const col = new Array(n).fill(0)
  const raw = new Array(m).fill(0)

  for (let [x, y] of indices) {
    raw[x]++
    col[y]++
  }

  let res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((raw[i] + col[j]) & 1 !== 0) {
        res++
      }
    }
  }

  return res
};
// @lc code=end

