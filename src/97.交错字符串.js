/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false
  const dp = new Array(s1.length+1).fill(false).map(() => new Array(s2.length+1).fill(false))
  dp[0][0] = true

  for (let i = 1; i<=s1.length; i++) {
    if (s1[i-1]===s3[i-1] && dp[i-1][0]) {
      dp[i][0] = true
    }
  }
  for (let i = 1; i<=s2.length; i++) {
    if (s2[i-1]===s3[i-1]&&dp[0][i-1]) {
      dp[0][i] = true
    }
  }
  for (let i = 1; i<=s1.length; i++) {
    for (let j = 1; j<=s2.length; j++)  {
      if ((s1[i-1] === s3[i+j-1] && dp[i-1][j]) || (s2[j-1] === s3[i+j-1] && dp[i][j-1])) {
        dp[i][j] = true
      }
    }
  }
  console.log(dp)
  return dp[s1.length][s2.length]
};
// @lc code=end

