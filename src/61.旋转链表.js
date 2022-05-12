/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !k) return head
  let pre = new ListNode()
  pre.next = head
  let h = head
  let p = head
  let len = 0
  while(p) {
    len++
    p = p.next
  }
  console.log(len)
  if (len === 1) return head

  k = k % len

  console.log(k)
  if (k === 0) return head

  p = pre
  let i = k
  while(k--) {
    p = p.next
  }
  while(p.next) {
    pre = pre.next
    p = p.next
  }
  pre = pre.next
  let q = head
  while(q.next !== pre) {
    q = q.next
  }
  q.next = null
  p.next = head
  return pre
};
// @lc code=end

