/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const m = ransomNote.split('')
  const r = magazine.split('')
  for (let i of m) {
    const index = r.indexOf(i)
    if (index > -1) {
      r.splice(index, 1)
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

