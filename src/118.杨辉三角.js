/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = []
    for (let i = 0; i < numRows; i++) {
        let a = []
        a[0] = 1
        a[i] = 1
        res.push(a)
    }
    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i-1][j-1] + res[i-1][j]
        }
    }
    return res.slice(0, numRows)
};
// @lc code=end

