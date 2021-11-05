/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0
    // for (let i = 0; i < haystack.length; i++) {
    //     if (haystack.charAt(i) === needle.charAt(0)) {
    //         for (let j = 0; j < needle.length; j++) {
    //             if (haystack.charAt(i + j) === needle.charAt(j) && j === needle.length - 1) {
    //                 return i
    //             }
    //             else if (haystack.charAt(i + j) !== needle.charAt(j)) {
    //                 break
    //             }
    //         }
    //     }
    // }
    // return -1
    return haystack.indexOf(needle)
};
// @lc code=end

