/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    let p = head, q = p.next
    while(p && q) {
        if (p.val === q.val) {
            p.next = q.next
            q = q.next
        }
        else {
            p = p.next
            q = p.next
        }
    }
    return head
};
// @lc code=end

