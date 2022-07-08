/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const dic = new Set()
  for (let i = 0 ; i < dictionary.length; i++) {
    dic.add(dictionary[i])
  }

  sentence = sentence.split(' ')
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 1; j < sentence[i].length; j++) {
      if (dic.has(sentence[i].slice(0, j))) {
        sentence[i] = sentence[i].slice(0, j)
        break
      }
    }
  }

  return sentence.join(' ')
};
// @lc code=end

