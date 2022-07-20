/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const res = []
  let raw = matrix.length, column = matrix[0].length
  const vis = new Array(matrix.length).fill(1).map(() => new Array(matrix[0].length).fill(0))

  let cx = -1, cy = 0

  while(res.length < raw * column) {
    for (let [x, y] of dirs) {
      cx+=x
      cy+=y
      while(cx>=0 && cx<column && cy>=0 && cy<raw && !vis[cy][cx]) {
        res.push(matrix[cy][cx])
        vis[cy][cx] = 1
        cx+=x
        cy+=y
      }
      cx-=x
      cy-=y
    }
  }
  return res
};
// @lc code=end

