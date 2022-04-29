/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    return read(root, 0)
};
function read(root, deep) {
    if (!root) return deep
    
    let l = read(root.left, deep+1)
    let r = read(root.right, deep+1)
    return l > r ? l : r
    // yueer
}
// @lc code=end

