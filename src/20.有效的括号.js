/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ])
    let queue = []
    for (let i = 0 ; i < s.length; i++) {
        if (queue.length && queue[queue.length-1] === map.get(s.charAt(i))) {
            queue.pop()
        }
        else {
            queue.push(s.charAt(i))
        }
    }
    return queue.length === 0
};
// @lc code=end

