/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return false
    return same(root.left, root.right)
};
function same(l, r) {
    if (l == null && r == null) return true
    if (l && r) {
        return l.val === r.val && same(l.left, r.right) && same(l.right, r.left)
    }
    return false
}
// @lc code=end

