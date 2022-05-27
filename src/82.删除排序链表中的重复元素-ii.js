/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  let pre = new ListNode()
  pre.next = head
  let p = pre, q = p.next, flag = false, c = null
  while (q && q.next) {
    while (q.next && q.val === q.next.val) {
      q = q.next
      flag = true
      c = q.val
    }

    if (flag) {
      if (q.val === c)  {
        q = q.next
        c = null
      }
      p.next = q
      flag = false
    } else {
      p = p.next
      q = q.next
    }
  }
  return pre.next
}
// @lc code=end

