/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0
  let l = 0, r = 0, m = 1
  while(l <= r && r < s.length-1) {
    r++
    for (let i = l; i < r; i++) {
      if (s.charAt(i) === s.charAt(r)) {
        l = i+1
      }
    }
    console.log(l, r)
    m = Math.max(m, r-l+1)
  }
  return m
};
// @lc code=end

// lengthOfLongestSubstring('bbbbb')

