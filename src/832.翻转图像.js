/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  for (let i = 0; i < image.length; i++) {
    let l = 0, r = image[i].length - 1
    while(l < r) {
      let t = image[i][l]
      image[i][l] = image[i][r]
      image[i][r] = t
      l++
      r--
    }
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === 0) {
        image[i][j] = 1
      } else {
        image[i][j] = 0
      }
    }
  }
  return image
};
// @lc code=end

