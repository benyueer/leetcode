/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const tArr = t.split('')
  const sArr = s.split('')
  for (let i = 0 ; i < tArr.length; i++) {
    if (sArr.indexOf(tArr[i]) === -1) {
      return tArr[i]
    } else {
      sArr.splice(sArr.indexOf(tArr[i]), 1)
    }
  }
};
// @lc code=end

