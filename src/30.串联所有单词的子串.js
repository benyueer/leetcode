/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const wordsLen = words.length * words[0].length, wordLen = words[0].length
  let hashTable = {}, res = []
  
  for (let k = 0; k<wordLen; k++) {
    hashTable = {}
    for (let i = 0; i < words.length; i++) {
      hashTable[words[i]] = (Number(hashTable[words[i]]) || 0) + 1
    }
    console.log(hashTable)

    for (let l = k, r = k; r < s.length; r+=wordLen) {
      if (hashTable[s.substring(r, r+wordLen)] !== undefined) {
        hashTable[s.substring(r, r+wordLen)]--
      } else {
        hashTable[s.substring(r, r+wordLen)] = -1
      }
      console.log(s.substring(r, r+wordLen))
      while(hashTable[s.substring(r, r+wordLen)] < 0) {
        if (hashTable[s.substring(l, l+wordLen)] === undefined) {
          hashTable[s.substring(l, l+wordLen)] = 0
        }
        hashTable[s.substring(l, l+wordLen)]++
        l+=wordLen
      }
      if (r-l+wordLen === wordsLen) res.push(l)
    }
  }

  console.log(res)
  return res
};
// @lc code=end
// findSubstring("abababab", ["ab","ba"])
