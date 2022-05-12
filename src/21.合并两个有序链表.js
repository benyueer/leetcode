/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let res = []
    let p = l1, q = l2

    while (p && q) {
        if (p.val >= q.val) {
            res.push(q.val)
            q = q.next
        }
        else {
            res.push(p.val)
            p = p.next
        }
    }
    if (!p) {
        while (q) {
            res.push(q.val)
            q = q.next
        }
        // res.push(q.value)
    }
    if (!q) {
        while (p) {
            res.push(p.val)
            p = p.next
        }
        // res.push(p.val)
    }

    return to(res)
};
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function to(a) {
    let res = new ListNode()
    let r = res
    for (let i = 0 ; i < a.length; i++) {
        r.next = new ListNode(a[i])
        r = r.next
    }
    return res.next
}
// @lc code=end

