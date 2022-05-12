/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

















// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let visited
  function dfs(i, j, k) {
    if (board[i][j] !== word[k]) return false
    if (k === word.length - 1) return true
    visited[i][j] = true
    for (let [x, y] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
      if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || visited[x][y]) continue
      let res = dfs(x, y, k + 1)
      if (res) {
        return true
      }
    }
    visited[i][j] = false
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visited = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false))

      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
// @lc code=end

// [["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]]


