/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const width = matrix.length
  const height = matrix[0].length

  const res = new Array(height).fill(0).map(() => new Array(width).fill(0))

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      res[j][width - i - 1] = matrix[i][j]
    }
  }
  return res
};
// @lc code=end

