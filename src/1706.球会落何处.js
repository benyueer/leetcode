/*
 * @lc app=leetcode.cn id=1706 lang=javascript
 *
 * [1706] 球会落何处
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
  let bollCount = grid[0].length, res = []
  for (let i = 0; i < bollCount; i++) {
    let cur = i
    for (let j = 0; j <= grid.length; j++) {
      if (j === grid.length) {
        res[i] = cur
        break
      }
      if (grid[j][cur] === 1 && (cur === bollCount-1 || grid[j][cur+1] === -1)) {
        res[i] = -1
        break
      }
      if (grid[j][cur] === -1 && (cur === 0 || grid[j][cur-1] === 1)) {
        res[i] = -1
        break
      }
      cur+=grid[j][cur]
    }
  }
  return res
};
// @lc code=end

// [
//   [-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,1,1,-1,-1,-1,1,1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,1,1,1,1,1,-1,1,1,1,-1,1,1,1,-1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,1,-1,1,1,1,-1,-1,-1,-1]]
