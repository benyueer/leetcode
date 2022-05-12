/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 1) return 1
    let l = 0, h = x
    while(h - l > 1) {
        let m = Math.floor((l + h) / 2)
        if (x/m < m) {
            h = m
        }
        else {
            l = m
        }
    }
    return l
};
// @lc code=end

