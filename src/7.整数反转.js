/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x > 0 ? 1 : -1
    let str = Math.abs(x).toString()
    let arr = []
    for (let i = 0 ; i < str.length; i++) {
        arr.unshift(str.charAt(i))
    }
    let res = Number(arr.join('')) * sign
    if (res > Math.pow(2, 31)-1 || res<-Math.pow(2,31)) return 0
    return res
};
// @lc code=end

// res  0       0       0       0       0   0   9
// x    -900000 -90000  -9000   -900    -90 -9 