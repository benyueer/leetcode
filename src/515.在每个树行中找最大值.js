/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return []
  const res = [], queue = []
  queue.push(root)
  while(queue.length) {
    const len = queue.length
    let max = -Infinity
    for (let i = 0; i < len ; i++) {
      let cur = queue.shift()
      if (cur.val > max) {
        max = cur.val
      }
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push(max)
  }
  return res
};
// @lc code=end

