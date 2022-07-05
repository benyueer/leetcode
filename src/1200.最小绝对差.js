/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a-b)

  let aq = Infinity

  let res = []

  for (let i = 0; i < arr.length - 1; i++) {
    let t = arr[i+1] - arr[i]
    if (t<aq) {
      aq = t
      res = []
    }
    if (t === aq) {
      res.push([arr[i], arr[i+1]])
    }
  }
  return res
};
// @lc code=end

