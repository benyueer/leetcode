/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head

  let pre = new ListNode()
  pre.next = head
  let p = pre
  let t = 1
  while (t < left) {
    p = p.next
    t++
  }
  let c = p.next
  let i = left
  while (i < right) {
    const next = c.next
    c.next = next.next
    next.next = p.next
    p.next = next
    i++
  }
  return pre.next
}
// @lc code=end

