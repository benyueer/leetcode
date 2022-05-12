/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let dp = []
  let m = 0
  let start = 0
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
    for (let j = 0 ; j < s.length; j++) {
      dp[i][j] = false
    }
    dp[i][i] = true
  }
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i ; j < s.length; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        if (j-i <= 1) {
          console.log(i, j)
          dp[i][j] = true
        } else if (!!dp[i+1][j-1]) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }
        if (dp[i][j]) {
          if (j-i+1 > m) {
            m = j-i+1
            start = i
          }
        }
      } else {
        dp[i][j] = false
      }
    }
  }
  // console.log(dp)
  return s.slice(start, start + m)
};
// @lc code=end
// longestPalindrome('aacabdkacaa')

