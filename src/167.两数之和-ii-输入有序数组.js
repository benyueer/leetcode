/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let i = 0, j = numbers.length - 1; i<j; ) {
        if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
        if (numbers[i] + numbers[j] < target) i++
        if (numbers[i] + numbers[j] > target) j--
    }

};
// @lc code=end

