/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function getSum(num) {
    let ans = 0
    while(num) {
      let c = num % 10
      num = Math.floor(num / 10)
      ans += c * c
    }
    return ans
  }

  let slow = n, fast = n

  do {
    slow = getSum(slow)
    fast = getSum(fast)
    fast = getSum(fast)
  } while(slow !== fast)

  return slow === 1
};
// @lc code=end

