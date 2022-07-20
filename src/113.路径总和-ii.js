/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  res = []
  if (!root) return res
  function find(head, count, ans) {
    if (head && head.val + count === targetSum && !head.left && !head.right) {
      res.push([...ans, head.val])
      return
    }

    if (!head) return

    if (head.left) {
      find(head.left, count + head.val, [...ans, head.val])
    }

    if (head.right) {
      find(head.right, count + head.val, [...ans, head.val])
    }
  }

  find(root, 0, [])
  return res
};
// @lc code=end

