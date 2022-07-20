/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let res = []
  for (let i = 0; i < asteroids.length; i++) {
    if (!res.length || asteroids[i] > 0) {
      res.push(asteroids[i])
      continue
    }
    if (asteroids[i] < 0) {
      let s = false
      while(true) {
        if (!res.length) {
          break
        }
        if (-asteroids[i] === res[res.length-1]) {
          res.pop()
          s = false
          break
        } else if (-asteroids[i] > res[res.length-1] && res[res.length-1] > 0) {
          res.pop()
          s = true
        } else if (-asteroids[i] < res[res.length-1] && res[res.length-1] > 0) {
          s = false
          break
        } else {
          s = true
          break
        }
      }
      if (s) {
        res.push(asteroids[i])
      }
    }
  }
  return res
};
// @lc code=end

