/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  strs.sort((a, b) => b.length - a.length)
  for (let i = 0; i< strs.length; i++) {
    let falg = true
    for (let j = 0; j < strs.length; j++) {
      if (i != j && isSub(strs[j], strs[i])) {
        falg = false
        break
      }
    }
    if (falg) {
      return strs[i].length
    }
  }

  function isSub(a, b) {
    let index = 0 
    for (let i = 0 ; i < a.length; i++) {
      if (a[i] === b[index]) index++
    }
    return index === b.length
  }
  return -1
};
// @lc code=end

