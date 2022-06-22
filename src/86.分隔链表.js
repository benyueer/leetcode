/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let sh = new ListNode(), lh = new ListNode()
  let s = sh, l = lh

  while(head) {
    if (head.val < x) {
      s.next = head
      s = s.next
    } else {
      l.next = head
      l = l.next
    }
    head = head.next
  }
  l.next = null
  s.next = lh.next
  return sh.next
};
// @lc code=end

