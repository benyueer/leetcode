/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
  let carry = 0
  digits[digits.length - 1]++
  if (digits[digits.length - 1] < 10) {
    return digits
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]+=carry
    carry = Math.floor(digits[i] / 10)
    digits[i] = digits[i] % 10
  }
  if (carry > 0) {
    digits.unshift(carry)
  }
  return digits
};
// @lc code=end

