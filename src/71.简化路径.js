/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = path.split('/').filter(k => !!k)
  console.log(stack)
  const res = []
  for (let i = 0; i < stack.length; i++) {
    const c = stack[i]
    if (c === '.') {

    } else if (c === '..') {
      res.pop()
    } else {
      res.push(c)
    }
  }
  console.log(res)
  return '/' + res.join('/')
};
// @lc code=end
// simplifyPath('/home//foo/')
