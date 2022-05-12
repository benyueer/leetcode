/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

  /**
   * DFS
   */
  if (root == null) return false
  if (root.val === targetSum && root.left == null && root.right == null) return true
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)


  /**
   * BFS
   */
  if (!root) return false
  const queue = []
  queue.push([root, root.val])
  while (queue.length) {
    const [p, count] = queue.shift()
    if (p.left === null && p.right === null && count === targetSum) {
      return true
    }
    if (p.left) queue.push([p.left, p.left.val + count])
    if (p.right) queue.push([p.right, p.right.val + count])
  }
  return false
}
// @lc code=end

