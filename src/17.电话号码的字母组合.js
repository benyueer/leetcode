/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = [
    [],
    [],
    ['a','b', 'c'],
    ['d','e', 'f'],
    ['g','h', 'i'],
    ['j','k', 'l'],
    ['m','n', 'o'],
    ['p','q', 'r', 's'],
    ['t','u', 'v'],
    ['w','x', 'y', 'z'],
  ]
  const res = []
  if (!digits) return res


  /**
   * 回溯
   */
  // iterStr(digits, 0, '')
  // function iterStr(digits, index, str) {
  //   if (index === digits.length) {
  //     res.push(str)
  //     return
  //   }
  //   for (let i = 0; i < map[digits[index]].length; i++) {
  //     iterStr(digits, index + 1, str + map[digits[index]][i])
  //   }
  // }
  
  /**
   * 队列
   */

  res.push('')
  for (let i = 0; i < digits.length; i++) {
    const letter = map[digits[i]]

    const size = res.length
    for (let j = 0; j < size; j++) {
      const p = res.shift()

      for (let k = 0; k < letter.length; k++) {
        res.push(p + letter[k])
      }
    }
  }
  
  return res
};
// @lc code=end

