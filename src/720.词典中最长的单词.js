/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    } else {
      return -a.localeCompare(b)
    }
  })

  let res = '', s = new Set()
  s.add('')
  for (let i = 0; i < words.length; i++) {
    let cur = words[i]
    if (s.has(cur.slice(0, cur.length - 1))) {
      s.add(cur)
      res = cur
    }
  }
  return res
};
// @lc code=end

