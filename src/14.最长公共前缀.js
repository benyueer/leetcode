/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }
    let res = 0
    while(true) {
        let last = undefined
        for (let i = 0 ; i < strs.length; i++) {
            if (strs[i] === '') return ''
            if (i === 0 && strs[i].charAt(res)!=='') {
                last = strs[i].charAt(res)
            }
            if (strs[i].charAt(res) !== last) {
                return strs[i].slice(0, res)
            }
        }
        res++
    }
};
// @lc code=end

