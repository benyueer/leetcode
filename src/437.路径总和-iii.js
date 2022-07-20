/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let res = 0
  if (!root) return 0
  function find(head, ans) {
    if (!head) return
    let count = head.val
    let len = ans.length - 1
    while(len >=0) {
      if (count === targetSum) {
        console.log([...ans, head.val])
        res++
        break
      }
      // if (count > targetSum) break
      count+=ans[len]
      len--
    }

    if (head.left) {
      find(head.left, [...ans, head.val])
    }
    if (head.right) {
      find(head.right, [...ans, head.val])
    }
  }

  find(root, [])

  return res
};
// @lc code=end

