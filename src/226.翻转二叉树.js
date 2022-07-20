/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null

  function dfs(head) {
    let t = head.left
    head.left = head.right
    head.right = t
    
    if (head.left) {
      dfs(head.left)
    }
    if (head.right) {
      dfs(head.right)
    }
  }

  dfs(root)
  return root
};
// @lc code=end

