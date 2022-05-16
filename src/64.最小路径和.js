/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  for (let i = 1 ; i < grid[0].length; i++) {
    grid[0][i] = grid[0][i] + grid[0][i-1]
  }
  for (let i = 1 ; i < grid.length; i++) {
    grid[i][0] = grid[i][0] + grid[i-1][0]
  }

  for (let i = 1 ; i < grid.length; i++) {
    for (let j = 1 ; j < grid[0].length; j++) {
      grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]
    }
  }
  console.log(grid)
  return grid[grid.length - 1][grid[0].length - 1]
};
// @lc code=end
/**
 * 1 3 1
 * 1 5 1
 * 4 2 1
 * 
 * 1 4 5
 * 2 7 6
 * 6 8 7
 */
