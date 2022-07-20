/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let res = 0
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  let raw = grid.length, column = grid[0].length

  function dfs(r, c) {
    grid[r][c] = '0'
    for (let [x, y] of dirs) {
      let nc = c + x, nr = r + y
      if (nc >=0 && nc < column && nr >=0 && nr < raw && grid[nr][nc] === '1') {
        dfs(nr, nc)
      }
    }
  }

  for (let i = 0; i < raw; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === '1') {
        res++
        dfs(i, j)
      }
    }
  }

  return res
};
// @lc code=end

