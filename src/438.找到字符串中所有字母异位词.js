/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (s.length < p.length) return []
  const pl = p.length, res = []
  const hashTable = new Array(26).fill(0)
  for (let i = 0; i < p.length; i++) {
    hashTable[p[i].charCodeAt() - 'a'.charCodeAt()]++
  }

  for (let l =0, r = 0; r < s.length; r++) {
    --hashTable[s[r].charCodeAt() - 'a'.charCodeAt()]
    while(hashTable[s[r].charCodeAt() - 'a'.charCodeAt()] < 0) {
      hashTable[s[l].charCodeAt() - 'a'.charCodeAt()]++
      l++
    }
    if (r - l + 1 === pl) res.push(l)
  }
  return res
  
};
// @lc code=end

