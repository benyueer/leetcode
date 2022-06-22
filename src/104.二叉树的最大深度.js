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
    // return read(root, 0)
    if (!root) return 0
    const queue = []
    let res = 0
    queue.push(root)
    while(queue.length) {
        res++
        let len = queue.length
        for (let i = 0; i< len; i++) {
            let cur = queue.shift()
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
    }
    return res
};
function read(root, deep) {
    if (!root) return deep
    
    let l = read(root.left, deep+1)
    let r = read(root.right, deep+1)
    return l > r ? l : r
    // yueer 12345
}
// @lc code=end

