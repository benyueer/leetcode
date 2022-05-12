/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0
    let last = ''

    for (let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case 'I':
                res += 1
                break
            case 'V':
                last === 'I' ? res+=3 : res += 5
                break
            case 'X':
                last === 'I' ? res+=8 : res += 10
                break
            case 'L':
                last === 'X' ? res+=30 : res += 50
                break
            case 'C':
                last === 'X' ? res+=80 : res += 100
                break
            case 'D':
                last === 'C' ? res+=300 : res += 500
                break
            case 'M':
                last === 'C' ? res+=800 : res += 1000
                break
        }
        last = s.charAt(i)
    }
    return res
};
// @lc code=end

