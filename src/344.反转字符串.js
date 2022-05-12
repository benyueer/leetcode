/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const l = s.length
  let b = 0, e = l - 1
  while (b < e) {
    let t = s[b]
    s[b] = s[e]
    s[e] = t
    b++
    e--
  }
};
// @lc code=end

