/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  const h = new ListNode()
  h.next = head
  let p = h
  while(p.next !== null && p.next.next !== null) {
    let s = p.next
    let e = s.next
    let d = e.next
    p.next = e
    e.next = s
    s.next = d
    p = s
  }
  return h.next
};
// @lc code=end

