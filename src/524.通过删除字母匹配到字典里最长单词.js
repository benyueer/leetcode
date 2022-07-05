/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  dictionary.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    } else {
      return b.length - a.length
    }
  })

  for (let t of dictionary) {
    let i = 0, j = 0
    for (; i<s.length; i++) {
      if (s[i] === t[j]) j++
    }
    if (j === t.length) {
      return t
    }
  }
  return ''
};
// @lc code=end
// console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea"]))
