/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text2[j - 1] === text1[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  console.log(dp)
  return dp[text1.length][text2.length] 
};
// @lc code=end
/**
 * a s d f g h
 * w e a s f g
 * 
 * 
 * dp[i][j] -> s1[0 : i] s2[0 : j]
 * 
 * dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])  ||  dp[i][j-1] + 1
 * 
 *   0 1 2 3 4 5 6
 * 0 0 0 0 0 0 0 0
 * 1 0 0 0 1 1 1 1
 * 2 0 0 0 1 2 2 2
 * 3 0 0 0 1 2 2 2
 * 4 0 0 0 1 2 3 3
 * 5 0 0 0 1 2 3 4
 * 6 0 0 0 1 2 3 4
 */

console.log(longestCommonSubsequence('bmvcnwrmxcfcxabkxcvgbozmpspsbenazglyxkpibgzq', 'bmpmlstotylonkvmhqjyxmnqzctonqtobahcrcbibgzgx'))

/**
 * 
 *   0 1 2 3 4 5 6 7
 * 0 0 0 0 0 0 0 0 0
 * 1 0 1 1 1 1 1 1 1
 * 2 0 1 2 2 2 2 2 2
 * 3 0 1 2 3 3 3 3 3
 * 4 0 1 2 3 4 4 4 4
 * 5 0 1 2 3 4 4 4 5
 */
