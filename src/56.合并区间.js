/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = []
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      if (intervals[i - 1][1] < intervals[i][1]) {
        intervals[i][0] = intervals[i - 1][0]
      } else {
        intervals[i][0] = intervals[i - 1][0]
        intervals[i][1] = intervals[i - 1][1]
      }
    } else {
      result.push(intervals[i - 1])
    }
  }
  result.push(intervals[intervals.length - 1])
  return result
};
// @lc code=end

