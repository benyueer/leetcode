/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0, j = 0, sl = s.length, tl = t.length

  while(i < sl && j < tl) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === sl
};
// @lc code=end

