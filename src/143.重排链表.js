/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let sp = head, fp = head
  while(fp && fp.next && fp.next.next) {
    sp = sp.next
    fp = fp.next.next
  }
  let mid = sp, cur = mid.next, next = null, pre = null

  console.log(mid.val)
  while(cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  mid.next = pre

  console.log(head)


  let p = head, q = mid
  while(q.next && p !== q) {
    let pn = p.next, qn = q.next.next
    p.next = q.next
    q.next.next = pn
    p = pn
    q.next = qn
  }

  return head
  
};
// @lc code=end

